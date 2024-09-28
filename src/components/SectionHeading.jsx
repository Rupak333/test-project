import React from "react";

export default function SectionHeading({
  title,
  descripstion,
  imgSrc,
  ico,
  pp,
}) {
  return (
    <div className=" flex flex-col gap-4">
      <div>
        {imgSrc && (
          <div className=" mb-4">
            <img
              src={imgSrc}
              alt=" heading"
              className=" w-[100vw]   h-96 object-cover "
            />
          </div>
        )}
      </div>
      <div className=" flex ">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="15000"
          className="text-2xl text-primary-350 font-serif"
        >
          {title}
        </div>

        <div>{ico}</div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" text-xl  font-serif italic"
      >
        {" "}
        {descripstion}
      </div>
    </div>
  );
}
