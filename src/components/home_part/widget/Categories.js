const Categories = () => {
  const categoriesItems = [
    {
      categoryTitle: "الرحلات",
      categoryContnet: [
        "عنوان طويلعنوان طويلعنوان طويلعنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
      ],
    },
    {
      categoryTitle: "تربية",
      categoryContnet: [
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
        "عنوان طويل",
      ],
    },
    {
      categoryTitle: "العقيدة",
      categoryContnet: ["عنوان طويل", "عنوان طويل", "عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "فقه",
      categoryContnet: ["عنوان طويل", "عنوان طويل", "عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "سياسة شرعية",
      categoryContnet: ["عنوان طويل", "عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "دعوة",
      categoryContnet: ["عنوان طويل", "عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "تفسير",
      categoryContnet: ["عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "نحو",
      categoryContnet: ["عنوان طويل", "عنوان طويل"],
    },
    {
      categoryTitle: "مقاصد",
      categoryContnet: ["عنوان طويل"],
    },
    {
      categoryTitle: "ثقافة عامة",
      categoryContnet: ["عنوان طويل"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2.5xl:grid-cols-4 2.5xl:max-w-7xl lg:max-w-2xl max-w-xs mx-auto gap-10">
      {categoriesItems.map((items, index) => (
        <div
          key={index}
          className="flex flex-col text-right bg-primaryColor text-white w-full max-w-xs rounded-SmallRounded p-6 shadow-lg "
          style={{ minHeight: "300px" }}
        >
          <h1 className="text-2xl font-bold mb-4">{items.categoryTitle}</h1>
          <div className="w-full h-0.5 bg-white my-4 rounded-full" />
          <div className="flex-1 space-y-2">
            {items.categoryContnet.slice(0, 7).map((content, i) => (
              <p
                key={i}
                className="text-lg overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {content}
              </p>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <button className="w-full bg-white text-primaryColor rounded-SmallRounded py-2">
              &lt; إستكشف المزيد
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
