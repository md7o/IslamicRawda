import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoriesItems } from "../../../utils/cate_data";
const CategoriesList = () => {
  const navigate = useNavigate();
  const [categor, setCategor] = useState([]);

  const handleCategoryData = (category) => {
    const slicedData = categor; // Slicing the first 7 items
    navigate("/categories", { state: { bookData: category, slicedData } });
  };
  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  const bookLink = [
    {
      tallBooks: Array.from({ length: 21 }, (_, i) => i.toString()), // ["0", "1", "2", ..., "20"]
    },
  ];

  useEffect(() => {
    // Combine tallBooks and agida into allFiles
    const allFiles = [...bookLink[0].tallBooks];

    // Fetch files based on the combined list
    const fetchPromises = allFiles.map((fileName) =>
      fetch(`/data/${fileName}.txt`) // Use fileName directly
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileName}.txt`);
          }
          return response.text();
        })
        .then((data) => {
          const sections = data.split("[z]");
          const extractedArticles = sections
            .slice(1) // Skip the first part before the first [z]
            .map((section) => {
              const [introduction] = section.split("[/z]"); // Split at [/z]
              const lines = section.trim().split("\n");

              // Extract title from the second line
              const title = lines[1]?.trim() || "Untitled";

              // Extract content as all lines after the title
              const content = lines.slice(2).join("\n").trim();

              // Trim the introduction to remove any leading or trailing whitespace
              const cleanedIntroduction = introduction.trim();

              // Extract indices by locating "[s2]" and taking the first line after each
              const indices = lines
                .map((line, index) =>
                  line.includes("[s2]") && index + 1 < lines.length
                    ? lines[index + 1].trim()
                    : null
                )
                .filter(Boolean);

              return {
                title,
                introduction: cleanedIntroduction,
                content,
                indices,
              };
            })
            .filter((article) => article.title); // Keep only articles with a title

          return extractedArticles;
        })
        .catch((error) => {
          console.error(
            `Error fetching the file /data/${fileName}.txt:`,
            error
          );
          return [];
        })
    );

    Promise.all(fetchPromises)
      .then((results) => {
        const allArticles = results.flat();
        setCategor(allArticles); // Store articles with title, introduction, content, and indices
      })
      .catch((error) => {
        console.error("Error fetching all text files:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2.5xl:grid-cols-3 2.5xl:max-w-7xl lg:max-w-2xl max-w-xs mx-auto gap-10">
      {bookLink.map((items, index) => (
        <div
          key={index}
          className="flex flex-col text-right bg-primaryColor text-white w-full max-w-lg rounded-SmallRounded p-6"
          style={{ minHeight: "300px" }}
        >
          <h1 className="text-2xl text-white font-bold mb-4">
            {items.categoryTitle}
          </h1>
          <div className="w-full h-0.5 bg-white my-4 rounded-full" />
          <div className="flex-1 space-y-4">
            {categor.slice(0, 7).map((content, i) => (
              <button
                key={i}
                onClick={() => handleBookNavigation(content)}
                className="w-full text-right "
              >
                <p
                  className="text-white text-lg font-medium truncate hover:scale-95 hover:opacity-70 duration-200"
                  style={{ direction: "rtl" }}
                >
                  {i + 1} - {content.title}
                </p>
              </button>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <button
              className="w-full bg-white text-primaryColor rounded-SmallRounded hover:rounded-2xl hover:bg-gray-300 duration-300 py-2"
              onClick={() => handleCategoryData(items)}
            >
              &lt; إستكشف المزيد
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
