import React from "react";
import AllProducts from "../components/AllProducts";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>E-Store | Home</title>
        </Helmet>
      </div>
      <div className="h-auto md:max-h-screen my-10">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
