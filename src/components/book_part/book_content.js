import React from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/widget/Header";

const BookContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { bookData } = location.state || {};

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  const bookDetails = bookData.index[id];

  const currentIndex = parseInt(id, 10);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/book/${currentIndex - 1}`, { state: { bookData } });
    }
  };

  const handleNext = () => {
    if (currentIndex < bookData.index.length - 1) {
      navigate(`/book/${currentIndex + 1}`, { state: { bookData } });
    }
  };

  const handleBookIndexNavigation = () => {
    navigate("/index", { state: { bookData } });
  };

  return (
    <div>
      <Header />
      <div className="text-center bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl lg:px-44 mt-16">
        <div className="flex justify-between items-center mx-20">
          <p className="bg-primaryColor text-3xl rounded-full text-white w-10 h-10 flex justify-center items-center">
            {currentIndex + 1}
          </p>
          <div className="text-right space-y-2 py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white ">
              {bookDetails.title}
            </h1>
            <p className="text-lg md:text-2xl font-light text-white ">
              ( {bookData.title} )
            </p>
          </div>
        </div>
        <p className="text-2xl text-white py-10 max-w-6xl text-right mx-auto">
          {bookDetails.details}
        </p>

        <div className="flex justify-between items-center py-10">
          <div className="flex justify-center items-center">
            <button
              onClick={handleNext}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:ml-5 ml-5  text-white font-bold rounded-SmallRounded ${
                currentIndex === bookData.index.length - 1
                  ? "bg-gray-500 hover:rounded-SmallRounded"
                  : "bg-primaryColor "
              }`}
              disabled={currentIndex === bookData.index.length - 1}
            >
              <IconChevronLeft className="w-8 h-8" />
            </button>
            <p className="text-white lg:text-2xl ml-5">التالي</p>
          </div>
          <button
            onClick={handleBookIndexNavigation}
            className="text-white font-bold text-lg"
          >
            الفهرس
          </button>
          <div className="flex justify-center items-center">
            <p className="text-white lg:text-2xl mr-5">السابق</p>
            <button
              onClick={handlePrevious}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:mr-5 mr-5 text-white font-bold rounded-SmallRounded ${
                currentIndex === 0
                  ? "bg-gray-500 hover:rounded-SmallRounded"
                  : "bg-primaryColor"
              }`}
              disabled={currentIndex === 0}
            >
              <IconChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookContent;
