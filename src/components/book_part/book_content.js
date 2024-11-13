import React from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../../hooks/theme_contenxt";

const BookContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { bookData, searchQuery = "" } = location.state || {};
  const { theme } = useTheme();

  if (!bookData || !bookData.indices || !bookData.content) {
    return <p>No book data found!</p>;
  }

  const currentIndex = parseInt(id, 10);
  const indexTitle = bookData.indices[currentIndex - 1];
  const contentSections = bookData.content.split(/\[s1\]/);
  const currentContent = contentSections[currentIndex] || "";
  // const currentContent = contentSections[currentIndex + 1] || "";

  const renderStyledContent = (text) => {
    const parts = text.split(/\[img\](.*?)\[\/img\]/);

    return parts.map((part, index) => {
      // If it's an image part (odd index), render it as an image
      if (index % 2 !== 0) {
        return (
          <img key={index} src={`/${part}`} className="py-10" alt="pictur" />
        );
      }

      let contentWithSpecialStyles = part
        .split(/(\{[^}]*\}|\[\[.*?\]\]|\(\(.*?\)\)|\([^)]+\))/)
        .map((subPart, subIndex) => {
          if (subPart.startsWith("{") && subPart.endsWith("}")) {
            return (
              <span
                key={subIndex}
                style={{
                  color: "#3AAA45FF",
                  padding: "0px 10px",
                  fontFamily: "sans-serif",
                }}
              >
                {subPart}
              </span>
            );
          }
          if (subPart.startsWith("[[") && subPart.endsWith("]]")) {
            const scissor = subPart.slice(1, -1);
            return (
              <span
                key={subIndex}
                style={{
                  fontWeight: "bolder",
                  fontSize: "21px",
                  padding: "0px 10px",
                }}
              >
                {scissor}
              </span>
            );
          }
          if (subPart.startsWith("((") && subPart.endsWith("))")) {
            return (
              <span
                key={subIndex}
                style={{
                  color: "#ADBDFCFF",
                  fontSize: "17px",
                  padding: "0px 10px",
                }}
              >
                {subPart}
              </span>
            );
          }
          if (subPart.startsWith("(") && subPart.endsWith(")")) {
            return (
              <span
                key={subIndex}
                style={{
                  color: "#5AA2FFFF",
                  fontSize: "17px",
                  padding: "0px 10px",
                }}
              >
                {subPart}
              </span>
            );
          }
          return subPart; // Default case: no special formatting
        });

      // Only apply the search query highlighting if there is a search query
      if (searchQuery) {
        contentWithSpecialStyles = contentWithSpecialStyles.map(
          (subPart, subIndex) => {
            if (typeof subPart === "string") {
              // Only highlight the string part
              return subPart
                .split(new RegExp(`(${searchQuery})`, "gi"))
                .map((highlightedText, highlightIndex) =>
                  highlightedText.toLowerCase() ===
                  searchQuery.toLowerCase() ? (
                    <span
                      key={`${subIndex}-${highlightIndex}`}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "lightgreen",
                        color: theme === "dark" ? "black" : "white",
                        padding: "0px 3px",
                      }}
                    >
                      {highlightedText}
                    </span>
                  ) : (
                    highlightedText
                  )
                );
            }
            return subPart; // Return non-string parts without modification
          }
        );
      }

      // Return the content with both special formatting and highlighting (if applicable)
      return <span key={index}>{contentWithSpecialStyles}</span>;
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 1) {
      navigate(`/book/${currentIndex - 1}`, { state: { bookData } });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (currentIndex < bookData.indices.length - 1) {
      navigate(`/book/${currentIndex + 1}`, { state: { bookData } });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDetailedContentNavigation = () => {
    navigate("/index", { state: { bookData } });
  };

  return (
    <main>
      <div
        className={`${
          theme === "dark" ? "bg-dark" : "bg-secondlyColor"
        } text-center  h-full w-full md:w-4/6 mx-auto rounded-SmallRounded lg:px-20 my-16 p-4`}
      >
        <div className="flex justify-between items-center py-10 lg:mx-0 mx-5">
          <div className="flex justify-center items-center">
            <button
              onClick={handleNext}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:mr-5 mr-5 text-white font-bold rounded-SmallRounded ${
                currentIndex === bookData.indices.length - 1
                  ? "bg-gray-500"
                  : "bg-primaryColor"
              }`}
              disabled={currentIndex === bookData.indices.length - 1}
              aria-label="Next"
            >
              <IconChevronLeft className="w-8 h-8" />
            </button>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              }  lg:text-2xl mr-5`}
            >
              التالي
            </p>
          </div>
          <button
            onClick={handleDetailedContentNavigation}
            className="text-primaryColor rounded-SmallRounded hover:rounded-MediumRounded duration-300 bg-white p-2 font-bold text-lg"
          >
            الفهرس
          </button>
          <div className="flex justify-center items-center">
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black "
              }  lg:text-2xl ml-5`}
            >
              السابق
            </p>
            <button
              onClick={handlePrevious}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:ml-5 ml-5 text-white font-bold rounded-SmallRounded ${
                currentIndex === 1 ? "bg-gray-500" : "bg-primaryColor"
              }`}
              disabled={currentIndex === 1}
              aria-label="Previous"
            >
              <IconChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="bg-primaryColor lg:text-3xl text-2xl rounded-full text-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
            {currentIndex}
          </p>
          <div className="text-right space-y-2 py-8">
            <h1
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl md:text-3xl font-bold `}
              style={{
                direction: "rtl",
              }}
            >
              {indexTitle}
            </h1>
          </div>
        </div>

        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black font-semibold"
          } md:text-xl text-lg pb-10 text-right md:leading-[2.2] leading-[2]`}
        >
          {currentContent.split(/\[s1\]/).map((paragraph, index) => (
            <pre
              key={index}
              className="mb-4"
              style={{
                direction: "rtl",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                overflow: "hidden",
              }}
            >
              {renderStyledContent(paragraph.trim())}
            </pre>
          ))}
        </div>

        <div className="flex justify-between items-center py-10 lg:mx-0 mx-5">
          <div className="flex justify-center items-center">
            <button
              onClick={handleNext}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:mr-5 mr-5 text-white font-bold rounded-SmallRounded ${
                currentIndex === bookData.indices.length - 1
                  ? "bg-gray-500"
                  : "bg-primaryColor"
              }`}
              disabled={currentIndex === bookData.indices.length - 1}
              aria-label="Next"
            >
              <IconChevronLeft className="w-8 h-8" />
            </button>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              }  lg:text-2xl mr-5`}
            >
              التالي
            </p>
          </div>
          <button
            onClick={handleDetailedContentNavigation}
            className="text-primaryColor rounded-SmallRounded hover:rounded-MediumRounded duration-300 bg-white p-2 font-bold text-lg"
          >
            الفهرس
          </button>
          <div className="flex justify-center items-center">
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black "
              }  lg:text-2xl ml-5`}
            >
              السابق
            </p>
            <button
              onClick={handlePrevious}
              className={`flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 lg:ml-5 ml-5 text-white font-bold rounded-SmallRounded ${
                currentIndex === 1 ? "bg-gray-500" : "bg-primaryColor"
              }`}
              disabled={currentIndex === 1}
              aria-label="Previous"
            >
              <IconChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      <p
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-xl text-darkColor text-center font-bold pb-10`}
      >
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1445هـ - 2024م
      </p>
    </main>
  );
};

export default BookContent;
