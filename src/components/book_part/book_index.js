import HeaderApp from "../../components/widget/HeaderApp";
import { useLocation } from "react-router-dom";

const BookIndex = () => {
  const location = useLocation();
  const { bookData } = location.state || {};

  if (!bookData) {
    return <p>No book data found!</p>;
  }

  return (
    <div>
      <HeaderApp />

      <div className="text-center bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl px-44">
        <h1 className="text-4xl font-bold text-white py-16">فهرس الموضوعات</h1>
        <div className="text-right bg-primaryColor text-white w-full max-w-xl rounded-SmallRounded p-8 mx-auto space-y-5">
          {bookData.index.map((item, index) => (
            <p key={index} className="text-2xl text-white ">
              {item} -
            </p>
          ))}
        </div>
        <div className="lg:flex justify-center items-center text-center gap-5 pt-40 pb-5 ">
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

export default BookIndex;
