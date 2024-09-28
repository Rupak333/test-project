import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpeg";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
export default function Welcome() {
  return (
    <div className=" flex justify-center  items-center  py-15 ">
      <div className="  md:w-10/12 md:px-0 px-4 md:flex justify-between">
        <div className=" md:w-5/12 ">
          <SectionHeading title={"Welcome To The Dental Home"} />
          <SectionHeading
            descripstion={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. magni. Rerum cupiditate, fugiat facere odit vel animi debitis hic molestias ipsum, rem perferendis distinctio eveniet harum eaqu veniam in autem? "
            }
          />

          <p className=" flex text-sm py-4">
            LLorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias
            corrupti recusandae? Eius voluptatem iure officiis ad aut error
            beatae ex. Similique nobis numquam consectetur, pariatur rerum
            quaerat dolor voluptate non consequuntur maxime ducimus doloremque
            assumenda possimus ipsum neque fugit quam, asperiores quod tenetur
            nihil odio facilis necessitatibus! Voluptates nemo enim, consectetur
            error deleniti pariatur a non dicta debitis natus neque blanditiis
            dolore illum fugiat. Labore, voluptatum doloremque. Quibusdam, optio
            fugit necessitatibus repudiandae sunt provident error, adipisci
            dolorem, debitis expedita aliquid consectetur perspiciatis
            consequatur fuga. Ex explicabo eos nihil alias rem delectus officiis
            aut quod, fugit recusandae? Nihil, fuga ad!
          </p>
          <Link
            to={"/redmore"}
            className="  text-white px-3 rounded-md  py-2  items-center  bg-primary-350 hover:bg-primary-250"
          >
            Redmore
          </Link>
        </div>

        <div className=" md:w-5/12">
          <img
            className="   rounded-md md:h-96  md:w-full  my-5"
            src={image1}
            alt=""
          />
          <div className="flex gap-7   justify-between ">
            <img
              className="  rounded-md md:h-52   w-40 md:w-60"
              src={image2}
              alt=""
            />
            <img
              className=" rounded-md md:h-52  w-40 md:w-60"
              src={image3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
