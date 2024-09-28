import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import xyz from "../assets/image.png";
import abc from "../assets/image1.jpg";
import SectionHeading from "./SectionHeading";
export default function Array() {
  return (
    <div className=" flex justify-center">
      <div className=" w-10/12 flex flex-col gap-10 ">
        <SectionHeading title={"Our services"} />
        <SectionHeading
          descripstion={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus eum hic, tenetur praesentium quas deserunt illo libero quod asperiores, eveniet est qui cupiditate molestiae minus at corporis sit natus."
          }
        />
        <div className=" grid md:grid-cols-3 gap-10 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className=" bg-primary-400 flex  justify-between px-10  gap-4 py-7 rounded-md   hover:scale-110 hover:bg-primary-350 duration-1000  hover:rotate-[3deg] group "
            >
              <img src={item.img} className=" h-12 rounded-full w-12" alt="" />
              <div className=" flex flex-col gap-4">
                <p className=" text-white text-xl group-hover:text-2xl">
                  {item.name}
                </p>
                <p className=" text-gray-200 group-hover:text-red-600">
                  {" "}
                  {item.mb}
                </p>
                <div className=" flex justify-between ">
                  <p>{item.address}</p>
                  <p className=" py-1"> {item.icon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    icon: <IoHomeSharp />,
    img: xyz,
    name: "rajan",
    mb: 907889432,
    address: "ktdesfsdfsdksmkdsmkmk f dvm",
  },
  {
    icon: <FaPhoneAlt />,
    img: abc,
    name: "ram",
    mb: 424343,
    address: "pkr",
  },

  {
    name: "rja",
    mb: 9078342,
    address: "dcdsc",
  },

  {
    name: "ean",
    mb: 997889432,
    address: "kmmm",
  },
  {
    name: "raj",
    mb: 321432,
    address: "btm",
  },
  {
    name: "rupak",
    mb: 907889432,
    address: "dvd",
  },
];
