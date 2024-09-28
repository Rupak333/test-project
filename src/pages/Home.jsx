import React from "react";
import HomeSlider from "../components/HomeSlider";
import Welcome from "../components/Welcome";
import Choose from "../components/Choose";
import Array from "../components/Array";
import Countup from "../components/Countup";
import Marquee from "../components/Marque";
import Additem from "../components/ ItemList";
import ItemList from "../components/ ItemList";
import Backgroundimage from "../components/Backgroundimage";

export default function Home() {
  return (
    <div className=" flex flex-col md:gap-24 gap-16">
      <HomeSlider />
      <Welcome />
      <Marquee />
      <Choose />
      <Backgroundimage />
      <Array />
      <Countup />
      <ItemList />
    </div>
  );
}
