import Header from "../components/widget/Header";
import Telegram from "../assets/images/telegram.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 mb-5">
        <img src={Telegram} alt={Telegram} className="w-8 mx-2" />
        <p className="text-center text-2xl">
          اضغط هنا لمتابعة الرسائل والحلقات على تلجرام
        </p>
      </div>
      <div className="bg-darkColor h-screen w-3/4 mx-auto rounded-3xl">
        afasdf
      </div>
    </div>
  );
};

export default Home;
