import { useNavigate } from "react-router-dom";

const GeneralArtical = () => {
  const navigate = useNavigate();

  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  const generalArticalsData = [
    {
      articalsTitle: "أخر المقالات العامة",
      articalsContent: [
        {
          title: "أخر المقالات العامة",
          introduction: "introduction",
          index: [
            {
              title:
                "السبب الأول: أن يقتدي الأستاذ برسول الله صلى الله عليه وسلم، ",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "السبب الثاني: حرص الأستاذ على التعارف بينه وبين طلابه:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "السبب الثالث: الحرص على التناصح فيما بينهم:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "السبب الرابع: حل المشكلات التي تعترض الأستاذ وطلبته:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "السبب الخامس: محافظة كل منهم على المواعيد:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-center text-white md:text-4xl text-lg">
        {generalArticalsData[0].articalsTitle}
      </h2>
      <div className="w-1/3 h-0.5 mx-auto rounded-full bg-white mt-10" />
      {generalArticalsData[0].articalsContent.map((items, index) => (
        <div key={index} className="my-10">
          <div className="flex flex-col gap-7 mx-auto my-10">
            {items.index.map((content, i) => (
              <button
                key={i}
                className="text-center md:text-2xl text-xl hover:opacity-50 duration-200"
                onClick={() => handleBookNavigation(items)}
              >
                <p className="text-white font-medium underline-offset-8 underline">
                  {content.title}
                </p>
              </button>
            ))}
            {/* {item.articles.map((article, i) => (
              <button
                key={index}
                onClick={() => handleBookNavigation(article)}
                className="text-center md:text-2xl text-xl hover:opacity-50 duration-200"
              >
                <p className="text-white font-medium underline-offset-8 underline">
                  {article}
                </p>
              </button>
            ))} */}
          </div>
          {/* {index < generalArticalsData.length - 1 && (
            <div className="w-3/4 h-0.5 mx-auto rounded-full bg-white my-16" />
          )} */}
        </div>
      ))}
    </div>
  );
};

export default GeneralArtical;
