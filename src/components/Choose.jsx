import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.webp";

export default function Choose() {
  return (
    <div className="  bg-primary-350 flex justify-center items-center  ">
      <div className="   md:flex md:w-10/12 w-full   md:px-0   justify-between content-center py-32">
        <iframe
          width="480"
          height="225"
          src="https://www.youtube.com/watch?v=g_SDWndw5kE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-5/12 h-auto"
        />
        <div className=" md:w-5/12   justify-center items-center">
          <p className="  my-10 flex items-center justify-center text-2xl text-blue-600">
            WHY CHOOSE US ?
          </p>
          <p className=" md:flex items-center justify-center text-2xl  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            nesciunt, asperiores ipsum, deleniti illum impedit esse veritatis
            reprehenderit quas non vitae enim sapiente accusantium! Tempore
            mollitia fugit voluptatem iure aut!
          </p>
          <p className=" grid grid-cols-2 py-10 ">
            <p className=" flex my-5 gap-5 ">
              <img
                className=" rounded-full   h-5 md:h-10 w-5 md:w-10 object-cover"
                src={image2}
                alt=""
              />
              <p> this is first image </p>
            </p>
            <p className="flex  my-5 gap-5 ">
              <img
                className="   rounded-full  h-5 md:h-10 w-5 md:w-10  object-cover"
                src={image2}
                alt=""
              />
              <p>jnjkn</p>
            </p>
            <p className=" flex my-5 gap-5 ">
              <img
                className="   rounded-full  h-5 md:h-10 w-5 md:w-10  object-cover"
                src={image2}
                alt=""
              />
              <p> vgbhjhhbvg</p>
            </p>
            <p className=" flex my-5  gap-5">
              <img
                className="  rounded-full h-5 w-5  md:h-10 md:w-10  object-cover"
                src={image1}
                alt=""
              />
              <p> this ihbhbh</p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
