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
    </div>
  );
};

export default HomeBody;
