import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white mt-100px px-0 py-100px">
        <div className="container grid grid-cols-4 gap-30px">
          {/* <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p className="mx-0 my-5">
              Busan is an amazing magazine Blogger theme that is easy to
              customize for your needs
            </p>
            <i className="fa fa-envelope"></i>
            <span> hello@beautiful.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +91 60521488</span>
          </div> */}
          <div className="box">
            <h3 className="font-medium mb-5">SPORT</h3>
            <button >
              <div className="item flex mb-30px">
                <img
                  src="../images/hero/hero1.jpg"
                  alt=""
                  className="w-20 h-20 object-cover"
                />
                <p className="px-5 py-2.5">
                  Google To Boost Android Security In Few Days
                </p>
              </div>
            </button>

            <div className="item flex mb-30px">
              <img
                src="../images/hero/hero2.jpg"
                alt=""
                className="w-20 h-20 object-cover"
              />
              <p className="px-5 py-2.5">
                Cespedes play the winning Baseball Game
              </p>
            </div>
          </div>
          <div className="box">
            <h3 className="font-medium mb-5">CRICKET</h3>
            <div className="item flex mb-30px">
              <img
                src="../images/hero/hero3.jpg"
                alt=""
                className="w-20 h-20 object-cover"
              />
              <p className="px-5 py-2.5">
                US Promises to give Intel aid to locate the soldiers
              </p>
            </div>
            <div className="item flex mb-30px">
              <img
                src="../images/hero/hero1.jpg"
                alt=""
                className="w-20 h-20 object-cover"
              />
              <p className="px-5 py-2.5">
                Renewable energy dead as industry waits for Policy
              </p>
            </div>
          </div>
          <div className="box">
            <h3 className="font-medium mb-5">LABELS</h3>
            <ul>
              <li className="flex justify-between relative mb-5 pb-5px border-b-2 border-b-rgba25525525503 border-solid">
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li className="flex justify-between relative mb-5 pb-5px border-b-2 border-b-rgba25525525503 border-solid">
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li className="flex justify-between relative mb-5 pb-5px border-b-2 border-b-rgba25525525503 border-solid">
                <span>Health</span> <label>(7)</label>
              </li>
              <li className="flex justify-between relative mb-5 pb-5px border-b-2 border-b-rgba25525525503 border-solid">
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal bg-black text-grey p-15px border-t-2 border-t-rgba25525525503 border-solid">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>
            made with <i className="fa fa-heart text-red"></i> by gorkhcoder
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
