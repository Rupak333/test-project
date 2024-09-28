import React from "react";
import Heading from "../components/Heading";
import img from "../assets/image.jpg";
import { Link } from "react-router-dom";
import { WiDirectionLeft } from "react-icons/wi";

export default function Cupping() {
  return (
    <div className=" flex justify-center items-center">
      <div className="flex justify-between items-center w-10/12 gap-10">
        <div className=" flex justify-between gap-10">
          <div className=" w-4/12">
            <div className="  ">
              <Heading title={" OPENING HOURS  "} />
              <p className=" flex-1 ">SUNDAY-FRIDAY 10:00AM-6:00PM</p>
            </div>
          </div>
          <div>
            <div className="">
              <img src={img} alt="" />
              <p>
                <Heading title={"Physiotherapy"} />
              </p>
              <p className=" flex flex-1">
                <Heading
                  description={
                    "Physiotherapy, also known as physical therapy, is a healthcare discipline dedicated to enhancing and restoring functional mobility and quality of life through physical intervention. It involves the assessment, diagnosis, and treatment of various musculoskeletal, neurological, and respiratory conditions. Physiotherapists use a range of techniques including exercises, manual therapy, and modalities like heat and cold therapy to address pain, improve movement, and prevent future injuries. By focusing on personalized treatment plans, physiotherapy aims to empower patients to regain independence, enhance their physical abilities, and achieve optimal health outcomes. It plays a crucial role in rehabilitation after surgery or injury, managing chronic conditions, and improving overall well-being."
                  }
                />
              </p>
              <div className=" flex bg-primary-400 text-white w-max px-5 rounded-md">
                <p className="  flex justify-center items-center">
                  <WiDirectionLeft />
                </p>
                <Link to={"/services"}>Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
