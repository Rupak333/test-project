import React from "react";
import image from "../assets/image6.webp";

export default function Backgroundimage() {
  const bgimg = image;
  return (
    <div>
      <div
        className=" relative  h-[80vh] bg-fixed bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        {/* //overlay  */}
        <div className=" absolute inset-0 bg-black opacity-60 "></div>
        <div className=" relative md:px-0 px-4  z-10  flex flex-col justify-center items-center h-full gap-10    ">
          <p className=" text-gray-100 max-w-5xl  text-4xl font-serif ">
            {" "}
            Welcome to Our Web{" "}
          </p>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className=" text-gray-200 max-w-5xl  text-xl "
          >
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            voluptatum, praesentium sint enim fugiat ut natus magnam excepturi
            eos? Voluptatum cum possimus nostrum quos maxime? Autem voluptas
            atque fugiat aperiam!
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
