import Header from "../components/widget/Header";
import Body from "../components/home_part/home_body";
import Telegram from "../assets/images/telegram.png";

const Categories = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 mb-5">
        <img src={Telegram} alt={Telegram} className="w-8 mx-2" />
        <p className="text-center text-2xl">
          اضغط هنا لمتابعة الرسائل والحلقات على تلجرام
        </p>
      </div>
      {/* <Body /> */}
    </div>
  );
};

export default Categories;
