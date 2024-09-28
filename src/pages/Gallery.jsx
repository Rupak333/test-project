import React from "react";
import img from "../assets/image.png";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image5.jpeg";
import image5 from "../assets/image6.webp";
import SectionHeading from "../components/SectionHeading";

const images = [img, img1, img2, img3];
export default function Gallery() {
  return (
    <div className=" flex justify-center items-center flex-col">
      <SectionHeading imgSrc={img} />
      <div className="w-10/12 ">
        <div data-aos="zoom-in" className=" grid grid-cols-3 ">
          {image.map((abc, index) => (
            <div className=" ">
              <img className=" h-96 w-96 object-cover" src={abc.im} alt="" />
              <p className=" text-center">{abc.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const image = [
  {
    im: img,
    name: "first",
  },
  {
    im: img1,
    name: "second",
  },
  {
    im: img2,
    name: "third",
  },
  {
    im: img3,
    name: "fourth",
  },
  {
    im: img4,
    name: "fifth",
  },
  {
    im: image5,
    name: "six",
  },
];
