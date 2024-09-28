import React from "react";
import imag from "../assets/dental.avif";
import imag1 from "../assets/image.png";
import imag2 from "../assets/image1.jpg";
import imag3 from "../assets/image2.webp";
import Marquee from "react-fast-marquee";

const images = [imag, imag1, imag2, imag3];

export default function MarqueeComponent() {
  return (
    <div>
      <Marquee direction="right" speed={100}>
        <div className="grid grid-cols-4 gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center"
            >
              <img
                className="z-20 w-96 h-96 object-cover rounded-md"
                src={image}
                alt={"img"}
              />

              <p className="absolute  text-center   text-3xl z-40 text-red-700">
                hello
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
