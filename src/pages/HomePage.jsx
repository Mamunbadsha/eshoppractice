import React from "react";
import Banner from "../components/Banner";
import Facility from "../components/Facility";
import FeatureProduct from "../components/FeatureProduct";
import OfferSection from "../components/OfferSection";
import NewProduct from "../components/NewProduct";
import BestSeller from "../components/BestSeller";
import Faq from "../components/faq/Faq";
import SpringSale from "../components/SpringSale";
import TechTalk from "../components/TechTalk";
import BrandName from "../components/BrandName";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Facility />
      <FeatureProduct />
      <OfferSection />
      <NewProduct />
      <SpringSale />
      <BestSeller />
      <Faq />
      <TechTalk />
      <BrandName />
    </div>
  );
};

export default HomePage;
