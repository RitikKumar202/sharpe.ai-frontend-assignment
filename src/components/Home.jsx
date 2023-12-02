import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.webp";

const Home = () => {
  return (
    <div className="container flex flex-col px-4 items-center justify-center mx-auto mt-28 mb-28">
      <div>
        <div className="border-[8px] rounded-3xl py-20 px-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-pink-600 flex px-4 py-2 rounded-lg">
              <img src={logo} alt="" className="w-[30px]" />
              <span className="ml-1 text-xl text-white">SHARPE.AI</span>
            </div>
          </div>
          <p className="text-lg md:text-xl">
            <span className="text-xl md:text-2xl font-semibold">Name:</span>{" "}
            Ritik Kumar
          </p>
          <p className="text-lg md:text-xl">
            <span className="text-xl md:text-2xl font-semibold">Title:</span>{" "}
            Frontend React.js Developer Assignment
          </p>
          <div>
            <p className="text-xl md:text-2xl font-semibold">Index :</p>
            <div className="flex flex-col md:flex-row">
              <Link to="/" className="text-blue-500 ml-3">
                <span className="text-2xl text-black">&#x2022;</span> Home
              </Link>
              <Link to="/transaction" className="text-blue-500 ml-3">
                <span className="text-2xl text-black">&#x2022;</span>{" "}
                Transaction
              </Link>
              <Link to="/data" className="text-blue-500 ml-3">
                <span className="text-2xl text-black">&#x2022;</span> Data Page
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xl md:text-2xl font-semibold mr-2">Socials:</p>
            <Link
              to="https://github.com/RitikKumar202/sharpe.ai-frontend-assignment"
              className="text-2xl mr-2"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ritikkumar202/"
              className="text-2xl mr-2 text-blue-500"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://ritikkumar-portfolio.vercel.app/"
              className="text-2xl mr-2"
            >
              <FaGlobe />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
