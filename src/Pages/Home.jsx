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
      <Banner />
      <AllProducts />
    </div>
  );
};

export default Home;
