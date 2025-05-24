import React from "react";
import Banner from "../components/Banner";
import Facility from "../components/Facility";
import FeatureProduct from "../components/FeatureProduct";
import OfferSection from "../components/OfferSection";
import NewProduct from "../components/NewProduct";
import BestSeller from "../components/BestSeller";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Facility />
      <FeatureProduct />
      <OfferSection />
      <NewProduct />
      <BestSeller />
    </div>
  );
};

export default HomePage;
