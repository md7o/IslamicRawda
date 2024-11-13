import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useTheme } from "../../hooks/theme_contenxt";

const ArticlesContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, index, source } = location.state || {};
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const files = ["/data/tall.txt", "/data/a5_general4.txt"];
        const fileDataPromises = files.map((file) =>
          fetch(file).then((response) => response.text())
        );
        const fileData = await Promise.all(fileDataPromises);

        const firstFileArticles = fileData[0]
          .split("[s1]")
          .slice(1)
          .map((section) => {
            const lines = section.trim().split("\n");
            const title = lines[0];
            const content = lines.slice(1).join("\n");
            return { title, content };
          });

        const secondFileArticles = fileData[1]
          .split("[s1]")
          .slice(1)
          .map((section) => {
            const lines = section.trim().split("\n");
            const title = lines[0];
            const content = lines.slice(1).join("\n");
            return { title, content };
          });

        // Set articles based on the source passed
        setArticles(source === "tall" ? firstFileArticles : secondFileArticles);
      } catch (error) {
        console.error("Error fetching the text files:", error);
      }
    };

    fetchArticles();
  }, [source]);

  const handleNext = () => {
    if (currentIndex < articles.length - 1) {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);

      navigate(`/article/${nextIndex + 1}`, {
        state: {
          title: articles[nextIndex].title,
          content: articles[nextIndex].content,
          index: nextIndex + 1,
          source: source,
        },
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderStyledContent = (text) => {
    const parts = text.split(/\[img\](.*?)\[\/img\]/);

    return parts.map((part, index) => {
      if (index % 2 !== 0) {
        return (
          <img key={index} src={`/${part}`} className="py-10" alt="pictur" />
        );
      }

      return part
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
          return subPart;
        });
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 1) {
      const prevIndex = currentIndex - 1;

      setCurrentIndex(prevIndex);

      navigate(`/article/${prevIndex + 1}`, {
        state: {
          title: articles[prevIndex].title,
          content: articles[prevIndex].content,
          index: prevIndex + 1,
          source: source,
        },
      });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDetailedContentNavigation = () => {
    navigate("/");
  };

  return (
    <main>
      <div
        className={`${
          theme === "dark" ? "bg-dark" : "bg-secondlyColor"
        } text-center  h-full w-full md:w-4/6 mx-auto rounded-SmallRounded lg:px-20 my-16 p-4 `}
      >
        <div className="flex justify-between items-center py-10 lg:mx-0 mx-5">
          <div className="flex justify-center items-center">
            <button
              onClick={handleNext}
              disabled={currentIndex === articles.length - 1}
              className={`${
                currentIndex === articles.length - 1
                  ? "bg-gray-500"
                  : "bg-primaryColor"
              } flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 text-white font-bold rounded-SmallRounded`}
              aria-label="Next"
            >
              <IconChevronLeft className="w-8 h-8" />
            </button>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl ml-4`}
            >
              التالي
            </p>
          </div>
          <button
            onClick={handleDetailedContentNavigation}
            className={`${
              theme === "dark"
                ? "bg-white text-primaryColor"
                : "bg-primaryColor text-white"
            } rounded-SmallRounded hover:rounded-MediumRounded duration-300  p-2 font-bold text-lg`}
          >
            الفهرس
          </button>
          <div className="flex justify-center items-center">
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl mr-4`}
            >
              السابق
            </p>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 1}
              className={`${
                currentIndex === 1 ? "bg-gray-500" : "bg-primaryColor"
              } flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 text-white font-bold rounded-SmallRounded`}
              aria-label="Previous"
            >
              <IconChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="bg-primaryColor lg:text-3xl text-2xl rounded-full text-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
            {currentIndex + 1}
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
              {title}
            </h1>
          </div>
        </div>

        <div
          className={`${
            theme === "dark" ? "text-white" : "text-black font-semibold"
          } md:text-xl text-lg pb-10 text-right md:leading-[2.2] leading-[2]`}
        >
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
            {renderStyledContent(content)}
          </pre>
        </div>

        <div className="flex justify-between items-center py-10 lg:mx-0 mx-5">
          <div className="flex justify-center items-center">
            <button
              onClick={handleNext}
              disabled={currentIndex === articles.length - 1}
              className={`${
                currentIndex === articles.length - 1
                  ? "bg-gray-500"
                  : "bg-primaryColor"
              } flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 text-white font-bold rounded-SmallRounded`}
              aria-label="Next"
            >
              <IconChevronLeft className="w-8 h-8" />
            </button>
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl ml-4`}
            >
              التالي
            </p>
          </div>
          <button
            onClick={handleDetailedContentNavigation}
            className={`${
              theme === "dark"
                ? "bg-white text-primaryColor"
                : "bg-primaryColor text-white"
            } rounded-SmallRounded hover:rounded-MediumRounded duration-300  p-2 font-bold text-lg`}
          >
            الفهرس
          </button>
          <div className="flex justify-center items-center">
            <p
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-xl mr-4`}
            >
              السابق
            </p>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 1}
              className={`${
                currentIndex === 1 ? "bg-gray-500" : "bg-primaryColor"
              } flex justify-center items-center hover:rounded-MediumRounded duration-300 lg:w-10 lg:h-10 text-white font-bold rounded-SmallRounded`}
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

export default ArticlesContent;
