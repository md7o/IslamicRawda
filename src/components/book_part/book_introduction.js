import React from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

const Bookintroduction = () => {
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
    <div>
      <div className="text-center bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl ">
        <h1 className="text-2xl md:text-4xl font-bold text-white py-16">
          {bookData.title}
        </h1>
        <p className="md:text-2xl text-xl text-white pb-10">
          {bookData.introduction}
        </p>
        <div className="text-center py-10">
          <button
            onClick={handleBookIndexNavigation}
            className="text-primaryColor rounded-SmallRounded hover:rounded-MediumRounded duration-300 bg-white p-2 font-bold text-lg"
          >
            الفهرس
          </button>
        </div>

        <div className="lg:flex justify-center items-center  gap-5 pt-10 pb-5 ">
          <p className="text-xl text-white font-bold lg:my-0 mb-5">
            عداد الصفحات اليومي: 2839
          </p>
          <p className="text-xl text-white font-bold">
            عداد الصفحات العام: 15909393
          </p>
        </div>
      </div>
      <p className="text-lg text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </div>
  );
};

export default Bookintroduction;
