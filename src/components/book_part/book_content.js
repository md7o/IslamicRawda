import React from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

const BookContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookData } = location.state || {};

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  const handleBookIndexNavigation = () => {
    navigate("/index", { state: { bookData } });
  };

  return (
    <div className="text-center bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl px-44">
      <h1 className="text-4xl font-bold text-white py-16">{bookData.title}</h1>
      <p className="text-2xl text-white pb-10">{bookData.introduction}</p>
      {/* {bookData.introduction.map((item, index) => (
        <p key={index} className="text-2xl text-white pb-10">
          {item}
        </p>
      ))} */}

      <div className="flex justify-between items-center py-10">
        <button className="flex justify-center items-center w-10 h-10 bg-primaryColor text-white font-bold rounded-SmallRounded">
          <IconChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={handleBookIndexNavigation}
          className="text-white font-bold text-lg"
        >
          الفهرس
        </button>
        <button className="flex justify-center items-center w-10 h-10 bg-primaryColor text-white font-bold rounded-SmallRounded">
          <IconChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default BookContent;
