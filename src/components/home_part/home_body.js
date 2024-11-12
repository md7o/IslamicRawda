import GeneralArticals from "./widget/general_articles";
import CategoriesList from "./widget/categories_list";
import RestBookList from "./widget/rest_book_list";

const HomeBody = () => {
  return (
    <div>
      <div className="my-20 md:w-3/4 mx-auto rounded-3xl">
        <GeneralArticals />

        <div className="w-3/4 h-0.5 mx-auto rounded-full bg-white my-10" />

        <RestBookList />
      </div>
      <p className="text-xl text-darkColor text-center font-bold my-2">
        جميع الحقوق محفوظة لموقع الروضة الإسلامي 1444هـ - 2023م
      </p>
    </div>
  );
};

export default HomeBody;
