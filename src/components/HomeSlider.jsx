import React from "react";
import image from "../assets/image1.jpg";
import SectionHeading from "./SectionHeading";
import { FaHome } from "react-icons/fa";
export default function HomeSlider() {
  return (
    <div className=" flex justify-center  items-center  ">
      <div className=" w-10/12  md:flex justify-between ">
        <div className="  flex  flex-col gap-10 md:w-5/12 ">
          <SectionHeading title={"Heading"} />
          <SectionHeading ico={<FaHome />} />
          <SectionHeading
            descripstion={
              "Lorem  dolor sit amet consectetur adipisicing elit. Doloremque voluptatem officia aut officiis quidem accusantium cum, omnis architecto. Delectus sit harum debitis modi blanditiis nemo,corporis absimilique vero."
            }
          />
          <p className=" flex  gap-10">
            <p className=" bg-primary-300 text-white px-4 py-2 rounded-md">
              call:- 9863337433
            </p>
            <p className=" bg-primary-300 text-white px-4 py-2 rounded-md">
              {" "}
              Call:-9863336433
            </p>
          </p>
        </div>
        <div className=" md:w-5/12">
          <SectionHeading imgSrc={image} />
        </div>
      </div>
    </div>
  );
}
