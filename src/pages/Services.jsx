import React from "react";
import img from "../assets/image.png";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.jpeg";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Services() {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" w-10/12  flex  justify-center items-center">
        <div className=" flex flex-col gap-10">
          <p className=" flex justify-center items-center">
            <SectionHeading title={"All Our Services"} />
          </p>
          <p>
            <SectionHeading
              description={
                "काठमाडौँ अकुपन्चर एण्ड फिजियोथेरापी क्लिनिक प्रा. लि. चिकित्सा प्रणाली रोगहरूको रोकथाम र उपचारको लागि प्रयोग गरिने चिनियाँ औषधि विज्ञानको एउटा धेरै महत्वपूर्ण भाग हो। आजभन्दा करिब ५ हजार वर्ष पहिले चीनमा शुरु भएको यो चिकित्सा प्रणाली आज विश्वका विकसित र विकासोन्मुख सबै मुलुकहरूमा अत्यन्त सफलताका साथ सञ्चालन भइराखेको छ। असल उपचार, शरीरलाई कुनै प्रतिकूल असर (साइड इफेक्ट) नहुनु, धेरै रोगहरूमा प्रयोग गर्न सकिने आदि गुणहरूले गर्दा यो चिकित्सा पद्धति आज विश्वभरि नै लोकप्रिय भइराखेको छ। विश्व स्वास्थ्य संगठन (WHO) द्वारा मान्यता प्राप्त अकुपंचर, अकुप्रेसर तथा मोक्सिबुसन चिकित्सा प्रणालीद्वारा दुइसयभन्दा बढी रोगहरूको सफल उपचार हुन्छ। आधुनिक चिकित्सा विज्ञान अति विकसित भएको वर्तमान अवस्थामा यसबाट समेत उपचार गर्न सम्भव नभएका कैयन रोगहरू अकुपंचर तथा मोक्सिबुसन चिकित्सा प्रणालीद्वारा सफलतापूर्वक उपचार गर्न सकिन्छ।"
              }
            />
          </p>
          <div className=" grid md:grid-cols-3 gap-16 ">
            {names.map((name, index) => (
              <div
                key={index}
                className=" bg-primary-400 hover:bg-primary-350  duration-500 rounded-md"
              >
                <img className="  h-60 w-96" src={name.img} alt="" />
                <div className=" flex flex-col gap-3 px-4 py-5">
                  <p className=" text-2xl text-white font-serif">{name.name}</p>
                  <p className=" text-gray-200 text-xl">{name.dis}</p>
                  <div className=" flex justify-end pt-5">
                    <Link
                      to={"/cuping"}
                      className=" flex justify-end bg-white text-black w-max px-5 py-2 rounded-md hover:text-green-600 duration-500 italic"
                    >
                      {name.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const names = [
  {
    img: img,
    name: "Physiotherapy",
    dis: "Physiotherapy, also known as physical therapy, is a healthcare......",
    btn: " Read more",
    path: "/cuping",
  },
  {
    img: img1,
    name: "Physiotherapy",
    dis: "Physiotherapy, also known as physical therapy, is a healthcare......",
    btn: " Read more",
    path: "/cuping",
  },
  {
    img: img2,
    name: "Physiotherapy",
    dis: "Physiotherapy, also known as physical therapy, is a healthcare......",
    btn: " Read more",
    path: "/cuping",
  },
  {
    img: img3,
    name: "Physiotherapy",
    dis: "Physiotherapy, also known as physical therapy, is a healthcare......",
    btn: " Read more",
    path: "/cuping",
  },
];
