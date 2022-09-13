import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import homepageImg from "../assets/homepage.svg";
function Home() {
  return (
    <Layout className={``}>
      <div className="bg-black h-screen">
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 mx-2 sm:mx-4 gap-2 pt-32">
          <div className="w-full p-2 h-full flex flex-col">
            <h1 className="text-5xl sm:text-8xl heading">
              Now finding house is easy!
            </h1>
            <br />
            <br />
            <h1 className="text-white sm:text-2xl font-extralight md:text-3xl">
              It offers you a feature to find rentable houses nearby and book
              them with just few easy steps.
            </h1>
            <br />

            <button className="rounded-lg text-white bg-sky-500 p-2 w-1/3 mt-auto mb-10 hover:bg-sky-700">
              <Link to="/signup">Sign up- it's free!</Link>
            </button>
          </div>
          <div className="hidden md:block lg:p-20 max-w-screen-sm">
            <img src={homepageImg} alt="user" className="object-cover" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
