import React from "react";
import Banner from "./Banner";
import SmallBusinessOwner from "./SmallBusinessOwner";
import CTAOne from "./CTAOne";
import EventTradeshow from "./EventTradeshow";
import CTATwo from "./CTATwo";
import FAQs from "./FAQs";
import TurnHeads from "./TurnHeads";
import OfficeWalls from "./OfficeWalls";
import Announcement from "../Announcement";
import Footer from "../Footer";

const SignsBannersAndPosters = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <SmallBusinessOwner />
      <CTAOne />
      <EventTradeshow />
      <CTATwo />
      <TurnHeads />
      <OfficeWalls />
      <FAQs />
      <Footer />
    </>
  );
};

export default SignsBannersAndPosters;
