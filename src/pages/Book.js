import Header from "../components/widget/HeaderApp";
import BookContent from "../components/book_part/book_content";
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
      <BookContent />
    </div>
  );
};

export default Book;
