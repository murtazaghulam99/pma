import React from "react";
import Banner from "./Banner";
import CardOptions from "./CardOptions";
import ShopByShape from "./ShopByShape";
import CTAOne from "./CTAOne";
import BestSellingDesigns from "./BestSellingDesigns";
import ShopBySpecialFinish from "./ShopBySpecialFinish";
import ShopPapersAndTextures from "./ShopPapersAndTextures";
import ShopByBusinessUse from "./ShopByBusinessUse";
import ShopCardholders from "./ShopCardholders";
import CardsForAnyType from "./CardsForAnyType";
import CTATwo from "./CTATwo";
import WhatOthersMaking from "./WhatOthersMaking";
import FAQs from "./FAQs";
import FooterBusinesscards from "./FooterBusinesscards";
import Announcement from "../Announcement";

const BusinessCards = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <CardOptions />
      <ShopByShape />
      <CTAOne />
      <BestSellingDesigns />
      <ShopBySpecialFinish />
      <ShopPapersAndTextures />
      <ShopByBusinessUse />
      <ShopCardholders />
      <CardsForAnyType />
      <CTATwo />
      <WhatOthersMaking />
      <FAQs />
      <FooterBusinesscards />
    </>
  );
};

export default BusinessCards;
