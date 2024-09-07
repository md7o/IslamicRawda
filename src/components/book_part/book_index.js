import Header from "../../components/widget/Header";
import { useLocation, useNavigate, Link } from "react-router-dom";

const BookIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookData } = location.state || {};

  const handleBookContentNavigation = () => {
    navigate("/book_content", { state: { bookData } });
  };

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  return (
    <div>
      <Header />

      <div className="text-center bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl xl:px-44 mt-16">
        <h1 className="md:text-3xl text-2xl font-bold text-white py-16">
          فهرس الموضوعات
        </h1>
        <div className="text-right bg-primaryColor text-white max-w-xl rounded-SmallRounded p-8 mx-auto ">
          {bookData.index.map((item, index) => (
            <Link key={index} to={`/book/${index}`} state={{ bookData }}>
              <p className="xl:text-2xl md:text-lg text-white hover:text-darkColor duration-100 xl:py-2 py-1">
                {item.title} -
              </p>
            </Link>
          ))}
        </div>
        <div className="lg:flex justify-center items-center text-center gap-5 pt-20 pb-5 ">
          <p className="text-xl text-white font-bold lg:my-0 mb-5">
            عداد الصفحات اليومي: 2839
          </p>
          <p className="text-xl text-white font-bold">
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

export default BookIndex;
