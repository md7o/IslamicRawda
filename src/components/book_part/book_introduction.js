import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Bookintroduction = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookData } = location.state || {};

  // State to manage loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading (for example, waiting for an API call)
    if (bookData) {
      setLoading(false); // Set loading to false once bookData is available
    }
  }, [bookData]);

  const handleBookIndexNavigation = () => {
    navigate("/index", { state: { bookData } });
  };

  if (loading) {
    // While loading, show a loading spinner or message
    return (
      <main className="text-center bg-secondlyColor h-full w-full md:w-3/4 mx-auto rounded-SmallRounded py-16">
        <p className="text-2xl font-bold">جاري التحميل...</p>
        <div className="mt-4">
          <div className="spinner-border animate-spin inline-block w-16 h-14 border-4 rounded-full border-t-4 border-primaryColor ">
            <div className=""></div>
          </div>
        </div>
      </main>
    );
  }

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  return (
    <main>
      <div className="text-center bg-secondlyColor h-full w-full md:w-3/4 mx-auto rounded-SmallRounded ">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold py-16">
          {bookData.title}
        </h1>
        <div className="border-4 border-black  3xl:w-1/3 xl:w-1/2 sm:w-3/4 w-full mx-auto rounded-SmallRounded">
          <pre
            className="md:text-2xl text-xl font-bold mx-auto px-2 py-10 text-center md:leading-[4] leading-[3]"
            style={{
              direction: "rtl",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              overflow: "hidden",
            }}
          >
            {bookData.introduction}
          </pre>
        </div>
        <div className="text-center py-10">
          <button
            onClick={handleBookIndexNavigation}
            className="text-primaryColor rounded-SmallRounded hover:rounded-MediumRounded duration-300 bg-white p-2 font-bold text-lg"
          >
            الفهرس
          </button>
        </div>
      </div>
      <p className="text-lg text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </main>
  );
};

export default Bookintroduction;
