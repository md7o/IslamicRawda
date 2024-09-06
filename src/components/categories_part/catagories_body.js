import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../widget/Header";

const CatagoriesBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  if (!category || !category.categoryContent) {
    return <p>No category data found!</p>;
  }

  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  return (
    <div>
      {/* <Header /> */}

      <div className="bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl">
        {/* category data */}

        <div className="flex justify-center items-center py-32">
          <div className="text-right bg-primaryColor text-white w-full max-w-xl rounded-SmallRounded p-8">
            <h1 className="text-3xl text-white font-bold">
              {category.categoryTitle}
            </h1>
            <div className="w-1/2 h-0.5  bg-white my-4 rounded-full ml-auto" />
            <div className="space-y-3 mb-10">
              {category.categoryContent.map((content, index) => (
                <button
                  key={index}
                  className="flex flex-col ml-auto"
                  onClick={() => handleBookNavigation(content)}
                >
                  <p className="text-xl overflow-hidden text-ellipsis whitespace-nowrap hover:text-darkColor duration-100">
                    {content.title} -
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* footer data */}
        <div className="lg:flex justify-center items-center text-center gap-5 pb-5">
          <p className="text-2xl text-white font-bold lg:my-0 mb-5">
            عداد الصفحات اليومي: 2839
          </p>
          <p className="text-2xl text-white font-bold">
            عداد الصفحات العام: 15909393
          </p>
        </div>
      </div>
      <p className="text-xl text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </div>
  );
};

export default CatagoriesBody;
