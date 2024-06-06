import Heading from "../components/heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

const Technology = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleClick = (news) => {
    dispatch(SelectedNews(news));
  };

  async function getNewsData() {
    try {
      let country = "in";
      const res = await fetch("http://localhost:3001/server/news/technology", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: `${country}` }),
      });
      const data = await res.json();

      setNewsData(data.articles);
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
      <div className="flex justify-center items-center h-screen">
        <div className="spinner animate-spin rounded-full border-4 border-gray-300 w-32 h-32 text-red-500" />
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <Heading />

      <div className="container mx-auto px-4">
        <section className="popular">
          <div className="content">
            {newsData?.map((newss, index) => (
              <div key={newss.url} className="items w-full">
                <div className="box bg-white flex relative my-4 shadow-md">
                  <div className="images relative h-40 w-1/4">
                    <div className="img h-full">
                      <img
                        src={newss.urlToImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="category category1 absolute top-0 left-0 p-2">
                      <span>{newss.source.name}</span>
                    </div>
                  </div>
                  <div className="text flex flex-col justify-between p-2 w-3/4">
                    <h1 className="m-0 text-xl">{newss.title}...</h1>
                    <div className="date flex items-center">
                      <i className="fas fa-calendar-days mr-1"></i>
                      <label>{newss.publishedAt}</label>

                      <button
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-8 rounded"
                        onClick={() => {
                          navigate("spec-news", { state: { data: newss } });
                        }}
                      >
                        Read
                      </button>
                    </div>
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
};

export default Technology;
