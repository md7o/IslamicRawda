import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/theme_contenxt";
const CatagoriesBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookData, slicedData } = location.state || {};
  const { theme } = useTheme();

  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  if (!bookData || !slicedData) {
    return <p>No category data found!</p>;
  }

  return (
    <main>
      <div
        className={`${
          theme === "dark" ? "bg-dark" : "bg-secondlyColor"
        } h-full w-full md:w-3/4 mx-auto rounded-SmallRounded pb-14 md:px-10`}
      >
        {/* category data */}

        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-center md:text-3xl text-2xl font-extrabold text-darkColor py-10`}
        >
          فهرس الموضوعات
        </h1>
        <div className="text-right bg-primaryColor text-white max-w-4xl rounded-SmallRounded p-8 mx-auto ">
          <h1 className="lg:text-2xl text-xl text-white font-extrabold px-6">
            {bookData.title}
          </h1>
          <div className="flex-1 space-y-4 px-6 mt-8">
            {slicedData.map((content, index) => (
              <button
                key={index}
                onClick={() => handleBookNavigation(content)}
                className="w-full text-right"
              >
                <p
                  className="text-white text-xl font-bold truncate hover:scale-95 hover:opacity-70 duration-200 "
                  style={{ direction: "rtl" }}
                >
                  {index + 1} - {content.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xl text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </main>
  );
};

export default CatagoriesBody;
