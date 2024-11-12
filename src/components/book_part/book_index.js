import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/theme_contenxt";

const BookIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookData } = location.state || {};
  const { theme } = useTheme();

  const handleBookContentNavigation = (index) => {
    navigate(`/book/${index}`, { state: { bookData } });
  };

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  return (
    <main>
      <div
        className={` ${
          theme === "dark" ? "bg-dark" : "bg-secondlyColor"
        } text-center bg-secondlyColor h-full w-full md:w-3/4 mx-auto rounded-SmallRounded xl:px-44 sm:px-12 px-0 mt-12 pb-14`}
      >
        <h1
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } text-center md:text-3xl text-2xl font-extrabold text-darkColor py-10`}
        >
          فهرس الموضوعات
        </h1>
        <div className="text-right bg-primaryColor text-white max-w-4xl rounded-SmallRounded p-8 mx-auto">
          <div className="flex-1 space-y-4 px-6 mt-8">
            {bookData.indices.map((items, index) => (
              <button
                key={index}
                onClick={() => handleBookContentNavigation(index)}
                className="w-full text-right"
              >
                <p
                  className="text-white text-xl font-bold truncate hover:scale-95 hover:opacity-70 duration-200 "
                  style={{ direction: "rtl" }}
                >
                  {index + 1} - {items}
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

export default BookIndex;
