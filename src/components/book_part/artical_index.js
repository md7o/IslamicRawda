import { useLocation, useNavigate } from "react-router-dom";

const ArticalIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, index } = location.state || {};

  const handleBookContentNavigation = (idx) => {
    navigate(`/book/${idx}`, { state: { title, content, index } });
  };

  if (!title || !Array.isArray(title)) {
    return <p>No book data found!</p>;
  }

  return (
    <main>
      <div className="text-center bg-secondlyColor h-full w-full md:w-3/4 mx-auto rounded-3xl xl:px-44 sm:px-12 px-0 mt-12 pb-14">
        <h1 className="md:text-3xl text-2xl font-extrabold text-darkColor py-10">
          فهرس الموضوعات
        </h1>
        <div className="text-right bg-primaryColor text-white max-w-4xl rounded-SmallRounded p-8 mx-auto ">
          {title.map((title, index) => (
            <button
              key={index}
              onClick={() => handleBookContentNavigation(index)}
              className="w-full text-right"
            >
              <p
                className="text-white text-xl font-bold truncate hover:scale-95 hover:opacity-70 duration-200"
                style={{ direction: "rtl" }}
              >
                {index + 1} - {title}
              </p>
            </button>
          ))}
        </div>
      </div>
      <p className="text-xl text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </main>
  );
};

export default ArticalIndex;
