import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { headerData } from "../../utils/header_data";
import useSearch from "../../hooks/useSearch";
import searchIcon from "../../assets/images/search.png";
import filterIcon from "../../assets/images/filter.png";
import menuIcon from "../../assets/images/menu.png";
import "../../App.css";

const HeaderApp = () => {
  const location = useLocation();
  const { category } = location.state || {};
  const navigate = useNavigate();

  const [showInput, setShowInput] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobileFilter, setIsMobileFilter] = useState(window.innerWidth < 768);

  // const HeaderCategories = [
  //   { name: "مؤلفات" },
  //   { name: "رحلات" },
  //   { name: "شخصيات" },
  //   { name: "حوارات" },
  //   { name: "مقالات" },
  //   { name: "رسائل" },
  //   { name: "قصائد" },
  //   { name: "المنتدى" },
  // ];

  // const handleCategoryHeader = (categoryData) => {
  //   navigate("/categories", { state: { category: categoryData } });
  // };

  const handleCategoryHeader = (header) => {
    navigate("/header_content", { state: { header } });
  };

  // const { query, setQuery, filteredItems } = useSearch(headerData, "name");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleResizeFilter = () => {
      setIsMobileFilter(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeFilter);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeFilter);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowInput(false);
      setShowFilter(false);
    }
  }, [isMobile]);

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
    setTimeout(() => {
      setIsMenuOpen(false);
    });
  };

  const toggleSearchInput = () => {
    setShowInput((prev) => {
      if (!prev && showFilter) {
        setShowFilter(false);
      }
      return !prev;
    });
  };

  const toggleFilter = () => {
    setShowFilter((prev) => {
      if (!prev && showInput) {
        setShowInput(false);
      }
      return !prev;
    });
  };

  return (
    <div>
      <div className="bg-primaryColor text-white hover: sm:text-lg text-sm font-bold sm:py2 py-5 flex sm:justify-around justify-center items-center ">
        <Link to={"/addsubject"} className="sm:flex hidden">
          إضافة موضوع +
        </Link>
        <div className="flex sm:gap-8 gap-4">
          <Link
            to={"/about_website"}
            className="hover:bg-white hover:text-darkColor hover:rounded-lg hover:px-1 duration-300"
          >
            حول الموقع
          </Link>
          <Link
            to={"/owner_id"}
            className="hover:bg-white hover:text-darkColor hover:rounded-lg hover:px-1 duration-300"
          >
            تعريف بصاحب الموقع
          </Link>
          <Link
            to={"/"}
            className="hover:bg-white hover:text-darkColor hover:rounded-lg hover:px-1 duration-300"
          >
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
      <div className="flex 3xl:justify-center 2.5xl:justify-between sm:justify-around justify-between mx-5 items-center my-5 gap-32">
        <div className="flex justify-center items-center lg:gap-5 gap-2">
          <button
            onClick={toggleFilter}
            className="lg:hidden bg-gray-200 p-2 rounded-SmallRounded"
          >
            <img src={filterIcon} alt="search icon" className="w-5 h-5 " />
          </button>
          <div
            className={`relative ${showFilter ? "block" : "hidden"} lg:block`}
          >
            <select
              name="dateComparison"
              className="bg-gray-300 rounded-SmallRounded text-right py-1 lg:w-80 w-44 lg:relative lg:right-0 lg:translate-y-0 lg:translate-x-0 absolute right-0 translate-y-6 translate-x-32"
            >
              <option>جميع محتويات الكتاب</option>
              <option>Greater_than</option>
              <option>Less_than</option>
            </select>
          </div>

          <button
            onClick={toggleSearchInput}
            className="md:hidden bg-gray-200 p-2 rounded-SmallRounded"
          >
            <img src={searchIcon} alt="search icon" className="w-5 h-5" />
          </button>

          <div
            className={`relative ${showInput ? "block" : "hidden"} md:block`}
          >
            <input
              type="text"
              placeholder="جملة البحث"
              className="bg-gray-300 rounded-SmallRounded text-right py-1 px-5 md:w-80 w-44 md:relative md:right-0 md:translate-y-0 md:translate-x-0 absolute right-0 translate-y-6 translate-x-32"
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
        <button onClick={toggleMenu}>
          <img
            src={menuIcon}
            alt="search icon"
            className="w-6 2.5xl:hidden flex"
          />
        </button>

        <ul className="2.5xl:flex hidden flex-row-reverse justify-center items-center gap-5">
          {headerData.map((content, index) => (
            <li
              key={index}
              onClick={() => handleCategoryHeader(content)}
              className="px-3 text-2xl relative group cursor-pointer"
            >
              {content.headerTitle}
              <div className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-2/3 transform -translate-x-1/2 ease-in-out" />
            </li>
          ))}
        </ul>

        <p className="4xl:text-3xl text-xl ml-10 3.5xl:flex hidden">
          موقع الروضة الإسلامي
        </p>
      </div>
      {(isMenuOpen || isAnimating) && (
        <div
          className={`fixed inset-0 z-50 ${
            isMenuOpen ? "slide-in" : "slide-out"
          }`}
          onAnimationEnd={() => {
            if (!isMenuOpen) setIsAnimating(false);
          }}
        >
          <div className="bg-primaryColor w-full h-full p-5 flex flex-col justify-center items-center">
            <button
              className="self-end text-3xl text-white rounded-full"
              onClick={closeMenu}
            >
              x
            </button>

            <ul className="flex flex-col justify-center items-center h-full">
              {headerData.map((content, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryHeader(content)}
                  className="px-3 py-5 text-center text-3xl text-white"
                >
                  {content.headerTitle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderApp;
