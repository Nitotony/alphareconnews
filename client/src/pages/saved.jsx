import React from 'react'
import Popular from '../components/popular'
import Navbar from '../components/navbar'
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

function Saved() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  

  

  async function getNewsData() {
    try {
      
      const res = await fetch("http://localhost:3001/server/auth/fetch-saved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:currentUser._id}),
      });
      const data = await res.json();

      setNewsData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getNewsData();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="spinner animate-spin rounded-full border-4 border-gray-300 w-32 h-32 text-red-500" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <section className="popular">
          <div className="content">
            {newsData?.map((newss, index) => (
              <div key={newss._id} className="items w-full">
                <div className="box bg-white flex relative my-4 shadow-md">
                  <div className="images relative h-40 w-1/4">
                    <div className="img h-full">
                      <img
                        src={newss.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                  </div>
                  <div className="text flex flex-col justify-between p-2 w-3/4">
                    <h1 className="m-0 text-xl">{newss.title}...</h1>
                    <a href={newss.link}>
                      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded">
                        Read
                      </button>
                    </a>

                    <div className="comment flex items-center border-t border-gray-300 pt-2">
                      <i className="fas fa-comments mr-1"></i>
                      <label>{newss.description}</label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Saved;