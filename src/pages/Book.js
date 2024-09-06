import Header from "../components/widget/Header";
import Bookintroduction from "../components/book_part/book_introduction";
import Telegram from "../assets/images/telegram.png";

const Book = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 mb-5">
        <img src={Telegram} alt={Telegram} className="w-8 mx-2" />
        <p className="text-center text-2xl">
          اضغط هنا لمتابعة الرسائل والحلقات على تلجرام
        </p>
      </div>
      <Bookintroduction />
    </div>
  );
};

export default Book;
