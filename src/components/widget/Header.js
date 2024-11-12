import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { headerData } from "../../utils/header_data";
import dark from "../../assets/images/night-mode.png";
import light from "../../assets/images/brightness.png";
import menuIconWhite from "../../assets/images/burger-bar-white.png";
import menuIconBlack from "../../assets/images/burger-bar-black.png";
import { useTheme } from "../../hooks/theme_contenxt";
import "../../App.css";

const HeaderApp = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [headerList, setHeaderList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle category data navigation
  const handleCategoryData = (category) => {
    const selectedCategory = headerList.find(
      (cat) => cat.categoryTitle === category.categoryTitle
    );
    const slicedData = selectedCategory ? selectedCategory.articles : [];
    navigate("/categories", { state: { bookData: category, slicedData } });
  };

  // Function to navigate to the book detail page
  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  const bookLinks = [
    {
      categoryTitle: "شخصيات",
      items: ["per"],
    },
    {
      categoryTitle: "حوارات",
      items: ["hiwarat1", "hiwarat2"],
    },
    // {
    //   categoryTitle: "مقالات",
    //   items: ["a5_jihad", "a5_general3", "a5_pal"],
    // },
    {
      categoryTitle: "رسائل",
      items: [
        "message001",
        "message002",
        "message003",
        "message004",
        "message005",
        "message006",
        "message007",
      ],
    },
    {
      categoryTitle: "قصائد",
      items: ["poet"],
    },
  ];

  useEffect(() => {
    const fetchFile = async (fileName) => {
      try {
        const response = await fetch(`/data/${fileName}.txt`);
        if (!response.ok) throw new Error(`Failed to fetch ${fileName}.txt`);
        return await response.text();
      } catch (error) {
        console.error(`Error fetching ${fileName}.txt:`, error);
        return null;
      }
    };

    const parseArticles = (data) => {
      return data
        .split("[z]")
        .slice(1)
        .map((section) => {
          const [introduction] = section.split("[/z]");
          const lines = section.trim().split("\n");
          const title = lines[0]?.trim() || "Untitled";
          const content = lines.slice(2).join("\n").trim();
          const indices = lines
            .map((line, index) =>
              line.includes("[s1]") ? lines[index + 1]?.trim() : null
            )
            .filter(Boolean);
          return title
            ? { title, introduction: introduction.trim(), content, indices }
            : null;
        })
        .filter(Boolean);
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          bookLinks.map(async (link) => ({
            categoryTitle: link.categoryTitle,
            articles: (
              await Promise.all(link.items.map(fetchFile))
            ).flatMap((data) => (data ? parseArticles(data) : [])),
          }))
        );
        setHeaderList(results);
      } catch (error) {
        console.error("Error fetching all text files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1800) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsAnimating(true);
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 500);
    }
  };

  const closeMenu = () => {
    setIsAnimating(true);

    setIsMenuOpen(false);
  };

  const toggleDropdown = (categoryTitle) => {
    setOpenDropdown((prev) => (prev === categoryTitle ? null : categoryTitle));
  };

  return (
    <div>
      <div
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-zinc-950 text-white"
        } fixed top-0 left-0  w-full shadow-md text-opacity-75 sm:text-xl text-md font-bold py-5 px-4 sm:px-8 flex flex-row-reverse sm:justify-evenly justify-between items-center z-50 `}
      >
        <div className="flex sm:gap-8 gap-4 ">
          <Link
            to={"/owner-id"}
            className="hover:text-primaryColor 2xl:block hidden"
          >
            تعريف بصاحب الموقع
          </Link>
          <Link
            to={"/about-website"}
            className="hover:text-primaryColor 2xl:block hidden "
          >
            حول الموقع
          </Link>
          <Link to={"/"} className="hover:text-primaryColor font-extrabold">
            الصفحة الرئيسية
          </Link>

          <button onClick={toggleMenu}>
            <img
              src={theme === "dark" ? menuIconWhite : menuIconBlack}
              alt="Menu icon"
              className="w-6 2xl:hidden flex sm:ml-5 ml-0 hover:scale-95 duration-100"
            />
          </button>
        </div>
        <ul className="2xl:flex hidden flex-row-reverse justify-center items-center gap-10">
          {headerList.map((category, index) => (
            <li key={index} className="relative">
              <span
                onClick={() => {
                  if (
                    category.categoryTitle === "شخصيات" ||
                    category.categoryTitle === "قصائد"
                  ) {
                    handleCategoryData(category);
                  } else {
                    toggleDropdown(category.categoryTitle);
                  }
                }}
                className="cursor-pointer hover:text-primaryColor flex items-center "
              >
                {category.categoryTitle}
                {category.categoryTitle !== "شخصيات" &&
                  category.categoryTitle !== "قصائد" && (
                    <svg
                      className={`w-4 h-4 ml-1 transform  ${
                        openDropdown === category.categoryTitle
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
              </span>
              {openDropdown === category.categoryTitle && (
                <ul
                  className={`${
                    theme === "light"
                      ? "bg-gray-100 text-darkColor"
                      : "bg-zinc-800 text-white"
                  } absolute top-full right-0 min-w-72 mt-2 text-base  rounded-md z-20 shadow-2xl`}
                >
                  {category.articles.map((content, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        handleBookNavigation(content);
                        setOpenDropdown(null);
                      }}
                      className={`px-4 py-3 text-right ${
                        theme === "light"
                          ? "hover:bg-gray-300"
                          : "hover:bg-zinc-500"
                      } cursor-pointer duration-200`}
                    >
                      {content.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <a
            href="https://www.al-rawdah.net/vb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryColor font-extrabold"
          >
            منتدى
          </a>
        </ul>

        <div>
          <button className="mr-5" onClick={toggleTheme}>
            {theme === "light" ? (
              <img src={light} alt="Light Mode" className="w-8" />
            ) : (
              <img src={dark} alt="Dark Mode" className="w-8" />
            )}
          </button>
        </div>
      </div>

      {(isMenuOpen || isAnimating) && (
        <div
          className={`fixed -inset-0 z-50  ${
            isMenuOpen ? "slide-in" : "slide-out"
          }`}
          style={{ direction: "rtl" }}
          onAnimationEnd={() => {
            if (!isMenuOpen) setIsAnimating(false);
          }}
        >
          <div className="bg-primaryColor shadow-2xl md:w-1/3 h-full flex flex-col items-end p-5 text-primaryColor font-bold lg:text-2xl text-xl  ">
            <button
              className=" w-11 h-12 text-4xl flex justify-center  bg-secondlyColor rounded-full hover:scale-90 duration-300"
              onClick={closeMenu}
            >
              ×
            </button>

            {/* Mobile menu items */}
            <ul className="flex flex-col justify-start mt-5 lg:items-start items-start h-full space-y-3 w-full ">
              <Link
                to={"/owner-id"}
                className=" hover:scale-95 duration-200 bg-secondlyColor px-5 py-3 w-full rounded-SmallRounded "
                onClick={() => setIsMenuOpen(false)}
              >
                تعريف بصاحب الموقع
              </Link>
              {/* <div className=" bg-white h-0.5 w-full mb-2 " /> */}
              <Link
                className=" hover:scale-95 duration-200 bg-secondlyColor px-5 py-3 w-full rounded-SmallRounded "
                onClick={() => setIsMenuOpen(false)}
                to={"/about-website"}
              >
                حول الموقع
              </Link>
              {/* Dynamically render categories */}
              {headerList.map((category, index) => (
                <li key={index} className="relative w-full ">
                  <span
                    onClick={() => {
                      if (
                        category.categoryTitle === "شخصيات" ||
                        category.categoryTitle === "قصائد"
                      ) {
                        handleCategoryData(category);
                        setIsMenuOpen(false);
                      } else {
                        toggleDropdown(category.categoryTitle);
                      }
                    }}
                    className="cursor-pointer  flex items-center bg-secondlyColor px-5 py-3  rounded-SmallRounded hover:scale-95 duration-200"
                  >
                    {category.categoryTitle}
                    {category.categoryTitle !== "شخصيات" &&
                      category.categoryTitle !== "قصائد" && (
                        <svg
                          className={`w-4 h-4 mr-2 transform ${
                            openDropdown === category.categoryTitle
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                  </span>

                  {/* Dropdown items */}
                  {openDropdown === category.categoryTitle && (
                    <ul className="absolute top-full right-0 w-96 mt-2 text-base bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50">
                      {category.articles.map((content, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            handleBookNavigation(content);
                            setOpenDropdown(null);
                            setIsMenuOpen(false);
                          }}
                          className="px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer"
                        >
                          {content.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <a
                href="https://www.al-rawdah.net/vb/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="hover:scale-95 duration-200 bg-secondlyColor px-5 py-3 w-full rounded-SmallRounded "
              >
                منتدى
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderApp;
