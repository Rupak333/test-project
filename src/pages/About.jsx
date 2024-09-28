import React from "react";
import img from "../assets/image6.webp";
import SectionHeading from "../components/SectionHeading";
export default function About() {
  return (
    <div className=" flex flex-row-col justify-center items-center">
      <p className="  absolute text-center  font-serif text-primary-350 ">
        About us{" about us  "}
      </p>
      <div className=" w-10/12">
        <div className=" object-cover relative ">
          <SectionHeading imgSrc={img} />
        </div>
        <p className=" text-xl font-serif text-primary-300 text-center py-10">
          {" "}
          About Us{" "}
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit
        corporis, doloribus vitae est et nulla repellendus? Exercitationem
        maxime dolorem natus voluptates ducimus consequatur esse consequuntur
        qui similique. Maiores eligendi, earum quis voluptas deleniti ad? Fugiat
        temporibus magnam officiis? Voluptatem maxime ratione fugiat cumque
        libero aspernatur at quis consequatur nisi!
      </div>
    </div>
  );
}
