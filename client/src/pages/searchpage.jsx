import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function SearchPage() {
  const [formData, setFormData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let validnews=[];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const getsearchedNewsData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:3001/server/news/specificnews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      

      
     data.articles.forEach(element => {
      
       if(element.title!="[Removed]"){
        validnews.push(element);
       }
      
     });

     setNewsData(validnews);
    console.log(data);
      

      
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
     <div>
        <div>
          <form action="">
            <input type="text" name="" id="texted" onChange={handleChange} value={formData.texted} />
            <input type="date" name="" id="date" onChange={handleChange} />
            <button onClick={getsearchedNewsData}>Search</button>
          </form>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <form action="">
          <input
            type="text"
            name=""
            id="texted"
            onChange={handleChange}
            value={formData.texted}
          />
          <input type="date" name="" id="date" onChange={handleChange} />
          <button onClick={getsearchedNewsData}>Search</button>
        </form>
      </div>
      <section className="popular">
        <div className="content">
          {newsData?.map((news, index) => (
            <div key={news.url} className="items w-full">
              <div className="box bg-white flex relative my-4 shadow-md">
                <div className="images relative h-40 w-1/4">
                  <div className="img h-full">
                    <img
                      src={news.urlToImage}
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="category category1 absolute top-0 left-0 p-2">
                    <span>{news.source.name}</span>
                  </div>
                </div>
                <div className="text flex flex-col justify-between p-2 w-3/4">
                  <h1 className="m-0 text-xl">{news.title}...</h1>
                  <div className="date flex items-center">
                    <i className="fas fa-calendar-days mr-1"></i>
                    <label>{news.publishedAt}</label>

                    <button
                      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded"
                      onClick={() => {
                        navigate("spec-news", { state: { data: news } });
                      }}
                    >
                      lol
                    </button>
                  </div>
                  <div className="comment flex items-center border-t border-gray-300 pt-2">
                    <i className="fas fa-comments mr-1"></i>
                    <label>{news.description}</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
