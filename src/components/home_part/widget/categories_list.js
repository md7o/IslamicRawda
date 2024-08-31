import { useNavigate } from "react-router-dom";
import { categoriesItems } from "../../../utils/cate_data";
const CategoriesList = () => {
  const navigate = useNavigate();

  const handleCategoryData = (category) => {
    navigate("/categories", { state: { category } });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2.5xl:grid-cols-4 2.5xl:max-w-7xl lg:max-w-2xl max-w-xs mx-auto gap-10">
      {categoriesItems.map((items, index) => (
        <div
          key={index}
          className="flex flex-col text-right bg-primaryColor text-white w-full max-w-xs rounded-SmallRounded p-6 "
          style={{ minHeight: "300px" }}
        >
          <h1 className="text-2xl text-white font-bold mb-4">
            {items.categoryTitle}
          </h1>
          <div className="w-full h-0.5 bg-white my-4 rounded-full" />
          <div className="flex-1 space-y-2">
            {items.categoryContent.slice(0, 7).map((content, i) => (
              <p
                key={i}
                className="text-lg overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {content.title}
              </p>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <button
              className="w-full bg-white text-primaryColor rounded-SmallRounded hover:rounded-2xl hover:bg-gray-300 duration-300 py-2"
              onClick={() => handleCategoryData(items)}
            >
              &lt; إستكشف المزيد
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
