import React from "react";
import { FaCloudArrowDown } from "react-icons/fa6";

export default function Apply() {
  return (
    <div className="bg-gray-100">
      <div className=" flex justify-center items-center py-10  ">
        <div className=" flex flex-col md:w-10/12  gap-5 bg-white shadow-md rounded-md px-9 py-5">
          <div className=" flex justify-center items-center flex-col">
            <h1 className=" text-2xl flex  justify-center items-center">
              HOLY VISION TECHNICAL CAMPUS
            </h1>
            <p>Thapagaun, New Baneshwor, Kathmandu</p>
            <p>01-5244745 | hvtcampus@gmail.com</p>
          </div>
          <div className=" flex justify-end items-end text-white">
            <button className="bg-green-600 px-3 py-2 rounded-md flex gap-4 hover:bg-primary-350 justify-center items-center">
              {" "}
              Download
              <p className=" flex justify-center items-center">
                <FaCloudArrowDown />
              </p>
            </button>
          </div>

          <div className=" text-xl flex gap-2">
            personal information <p className="text-red-700">*</p>
          </div>

          <div>
            <form>
              <div className=" grid md:grid-cols-2  gap-4 px-6">
                <div className=" flex flex-col">
                  <label>Name *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your name "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Father's Name *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your Fathers name "
                  />
                </div>

                <div className=" flex flex-col">
                  <label> Mothers's Name *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your Mothers name "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Email *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="email"
                    placeholder="Enter your email "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Phone *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="number"
                    placeholder="Enter your phone number "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Municipality *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your Municipality "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Province *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your province "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Religion *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your religion "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Nationality *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your Nationality "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Date of birth *</label>
                  <input className=" border px-2 py-3  " type="date" />
                </div>

                <div className=" flex flex-col">
                  <label>Gender *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your Gender "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>Grade Applied for *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your name "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>SEE Appeared school *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter SEE Appeared school "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>SEE Appeared year *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter SEE Appeared year "
                  />
                </div>

                <div className=" flex flex-col">
                  <label>GPA *</label>
                  <input
                    className=" border px-2 py-3  "
                    type="text"
                    placeholder="Enter your GPA "
                  />
                </div>
              </div>
              <div className=" flex justify-center items-center py-5">
                <button className=" bg-primary-400 px-4 py-2 rounded-md hover:bg-primary-300 text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
