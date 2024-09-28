import React from "react";
import { toast } from "react-hot-toast";
import cc from "../assets/pp.png";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission
    toast.success("Thank you ");

    // Reset form fields if needed
    event.target.reset();
  };

  return (
    <div className="font-sans text-base text-gray-900 flex gap-16 justify-center items-center flex-col">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 text-center md:mx-auto md:w-4/3 md:pb-12">
            <h1 className="mb-4 text-2xl font-serif text-primary-300 sm:text-3xl xl:text-4xl">
              Contact us
            </h1>

            <div className="md:text-lg">
              <div className="text-gray-900">
                <p className="mb-4">
                  KATHMANDU ACUPUNCTURE & PHYSIOTHERAPY CLINIC PVT. LTD.
                  काठमाडौँ अकुपन्चर एण्ड फिजियोथेरापी क्लिनिक प्रा. लि. बल्खु,
                  कुलेश्वर मार्ग, काठमाडौं
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-10/12 flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form
          className="mx-auto w-full max-w-xl border-gray-200 px-4 py-8 md:px-8"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="name">
              Your Name:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="name"
              type="text"
              required
            />
          </div>
          {/* Location Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="location">
              Your Location:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="location"
              type="text"
              required
            />
          </div>
          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="phone">
              Your Phone Number:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="email">
              Your e-mail:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="email"
              type="email"
              required
            />
          </div>
          {/* Subject Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="subject">
              Subject:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="subject"
              type="text"
              required
            />
          </div>
          {/* Message Field */}
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="message">
              Message:
            </label>
            <textarea
              className="h-20 w-full rounded border border-gray-300 px-3 py-2 outline-primary-150"
              id="message"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-8 items-center">
            <button
              className="rounded-md bg-primary-450 px-4 py-3 text-center font-bold text-white hover:bg-primary-400 duration-500"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
        <div className="mt-10 md:w-5/12 bg-primary-450 md:px-10 px-4 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div>
            <p className="mb-4 font-medium border-b pb-2">OFFICE HOURS</p>
            <p className="mb-4">Sunday – Friday: 10:00 AM - 6.00 PM</p>
            <p className="mb-4">Saturday: Closed</p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:kathmanduacupuncture1@gmail.com"
                className="font-semibold"
              >
                kathmanduacupuncture1@gmail.com
              </a>
            </p>
            <p className="mb-4">
              Tel:
              <a href="tel:9763205520" className="font-semibold px-2">
                01-5922799, 9763205520, 9707742988
              </a>
            </p>

            <hr className="my-2 h-0 border-t border-gray-300" />
          </div>
          <div>
            <img className="object-cover cursor-pointer" src={cc} alt="" />
          </div>
        </div>
      </div>
      <div>
        <iframe
          src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7064.048035569899!2d85.34410354421219!3d27.716544704709143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197a92b7ed4d%3A0x43ecbdc8bd77029b!2sCharumati%20Stupa!5e0!3m2!1sen!2snp!4v1727250958239!5m2!1sen!2snp  "
          className=" md:w-[1350px] md:h-[500px] h-96 w-full"
        >
          <title> IFRAME CONTENT</title>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
