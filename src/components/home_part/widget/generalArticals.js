const GeneralArtical = () => {
  const generalArticalsData = [
    {
      articalTitle: "آخر المقالات العامة (4)",
      articles: [
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
      ],
    },
    {
      articalTitle: "آخر المقالات العامة (3)",
      articles: [
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
        "عنوان مقال عنوان مقال عنوان مقال",
      ],
    },
  ];

  return (
    <div>
      {/* General Articles by Title */}
      {generalArticalsData.map((item, index) => (
        <div key={index} className="my-10">
          <h2 className="text-right px-16 text-white md:text-4xl text-2xl  mb-14">
            {item.articalTitle}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {item.articles.map((article, i) => (
              <p key={i} className="text-white text-center md:text-3xl text-xl">
                {article}
              </p>
            ))}
          </div>
          {index < generalArticalsData.length - 1 && (
            <div className="w-3/4 h-0.5 mx-auto rounded-full bg-white my-16" />
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneralArtical;
