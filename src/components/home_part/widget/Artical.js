import { Link } from "react-router-dom";

const Artical = () => {
  const articals = [
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
    { essayName: "عنوان طويل" },
  ];

  return (
    <div>
      {/* online member */}
      <div className="flex justify-end items-center p-5">
        <span className="text-white md:text-2xl text-lg ">10</span>
        <p className="text-white md:text-xl text-lg mx-2">
          : عدد المتواجدين في الموقع الآن
        </p>
        <div className="bg-green-400 rounded-full w-4 h-4 animate-pulse" />
      </div>
      {/* the artical */}
      <div>
        <h1 className="text-center text-white md:text-4xl text-lg">
          مقالات كتاب طل الربوة - تربية الأستاذ لطلابه
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 max-w-md mx-auto md:my-16 my-10">
          {articals.map((items, index) => (
            <div key={index} className="text-center md:text-3xl text-xl">
              <a className="text-white">{items.essayName}</a>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to={"/book"}>
            <button className=" bg-primaryColor text-white md:text-3xl text-xl py-3 px-4 rounded-SmallRounded">
              المزيد من المقالات
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artical;
