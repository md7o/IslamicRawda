import Artical from "./widget/Artical";
import GeneralArticals from "./widget/generalArticals";
import CategoriesList from "./widget/categories_list";

const HomeBody = () => {
  return (
    <div>
      <div className="bg-darkColor h-full w-full md:w-3/4 mx-auto rounded-3xl">
        <Artical />
        <div className="w-3/4 h-0.5 mx-auto rounded-full bg-white my-16" />
        <GeneralArticals />
        <div className="w-3/4 h-0.5 mx-auto rounded-full bg-white my-36" />
        <CategoriesList />
        <div className="lg:flex justify-center items-center text-center gap-5 pt-40 pb-5">
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

export default HomeBody;
