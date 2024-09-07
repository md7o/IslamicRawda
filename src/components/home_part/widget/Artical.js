import { useNavigate, Link } from "react-router-dom";

const Artical = () => {
  const navigate = useNavigate();

  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  const articals = [
    {
      articalsTitle: "مقالات كتاب طل الربوة - تربية الأستاذ لطلابه",
      articalsContent: [
        {
          title: "مقالات كتاب طل الربوة - تربية الأستاذ لطلابه",
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
            {
              title: "السبب السادس: حفظ بعضهم سر بعض:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: " وأرى أن يتبع الأستاذ الخطوات التالية:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "من عوامل تقدم الطلاب في دراستهم، ما يأتي:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "ويَستعين الأستاذ على ذلك بما يأتي:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "رحلات مشاعر العبادة:",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "المراجع",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
            {
              title: "آثار المؤلف",
              details: "Notes on cultural aspects of the UK and Ireland.",
            },
          ],
        },
      ],
    },
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
      {/* artical */}
      <div>
        <h1 className="text-center text-white md:text-4xl text-lg">
          {articals[0].articalsTitle}
        </h1>
        <div className="w-1/3 h-0.5 mx-auto rounded-full bg-white mt-10" />
        <div>
          {articals[0].articalsContent.map((items, index) => (
            <div key={index} className="flex flex-col gap-7 mx-auto my-10 ">
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
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center">
          <Link to={"/book"}>
            <button className=" bg-primaryColor text-white md:text-3xl text-xl py-3 px-4 rounded-SmallRounded hover:rounded-MediumRounded duration-200">
              المزيد من المقالات
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Artical;
