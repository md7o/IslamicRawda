import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/theme_contenxt";

const SearchBox = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { theme } = useTheme();
  const { filteredList, searchQuery } = state || {
    filteredList: [],
    searchQuery: "",
  };

  const handleBookContentNavigation = (
    categoryIndex,
    articleIndex,
    sectionIndex
  ) => {
    const article = filteredList[categoryIndex].articles[articleIndex];

    navigate(`/book/${sectionIndex + 1}`, {
      state: {
        bookData: {
          indices: article.indices,
          content: article.content,
          title: article.title,
        },
        searchQuery,
      },
    });
  };

  return (
    <main>
      <div
        className={`${
          theme === "dark" ? "bg-dark" : "bg-secondlyColor"
        } h-full w-full md:w-3/4 mx-auto rounded-SmallRounded xl:px-44 sm:px-12 px-0 mt-12 py-14`}
      >
        <p
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          }  lg:text-2xl md:text-lg text-md text-center mb-10 px-5`}
          style={{ direction: "rtl" }}
        >
          نتيجة الإستعلام عن نتيجة
          <span className=" lg:text-3xl md:text-xl text-lg font-bold">
            {" "}
            ( {searchQuery} ){" "}
          </span>{" "}
          في جميع محتويات الموقع
        </p>
        {filteredList.length > 0 ? (
          filteredList.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div>
                {category.articles.length > 0 ? (
                  category.articles.map((article, articleIndex) => {
                    // Split content by [s1] to separate index titles and their content
                    const contentSections = article.content.split(/\[s1\]/);

                    // Filter to only include sections with content matching the search query
                    const matchingSections = article.indices
                      .map((indexTitle, idx) => {
                        const sectionContent = contentSections[idx + 1] || "";
                        const matchingLine = sectionContent
                          .split("\n")
                          .find((line) =>
                            line
                              .toLowerCase()
                              .includes(searchQuery.toLowerCase())
                          );

                        return matchingLine
                          ? {
                              indexTitle,
                              matchingLine: matchingLine.trim(),
                              idx,
                            }
                          : null;
                      })
                      .filter(Boolean); // Remove null entries (non-matching sections)

                    // Skip this article if it has no matching sections
                    if (matchingSections.length === 0) return null;

                    return (
                      <div key={articleIndex} style={{ direction: "rtl" }}>
                        {/* <h3 className="text-red-400 text-xl font-bold mt-5">
                          {article.title}
                        </h3> */}
                        <div>
                          {matchingSections.map((section, index) => (
                            <div
                              className="flex 3.5xl:flex-row flex-col justify-between items-start py-5"
                              key={index}
                            >
                              <button
                                onClick={() =>
                                  handleBookContentNavigation(
                                    categoryIndex,
                                    articleIndex,
                                    section.idx
                                  )
                                }
                              >
                                <p className="lg:text-2xl md:text-lg text-md text-right  text-blue-500 font-bold hover:scale-95 duration-200 py-2 px-3">
                                  {/* [ {section.idx} ] */} -{" "}
                                  {section.indexTitle}
                                </p>
                              </button>
                              <p
                                className={`${
                                  theme === "dark" ? "text-white" : "text-black"
                                }  lg:text-xl sm:text-md text-sm`}
                                style={{ direction: "rtl" }}
                              >
                                <span className="font-extrabold px-3">
                                  كتاب:
                                </span>
                                {article.title}
                              </p>
                              {/* <p
                              className="text-white text-md"
                              style={{ direction: "rtl" }}
                            >
                              {section.matchingLine}
                            </p> */}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } text-center`}
                  >
                    لم يتم العثور على مقالات في هذه الفئة
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-center`}
          >
            لم يتم العثور على نتائج
          </p>
        )}
      </div>
    </main>
  );
};

export default SearchBox;
