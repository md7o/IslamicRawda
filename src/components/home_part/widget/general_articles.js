import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GeneralArticals = () => {
  const navigate = useNavigate();
  const [tall, setTall] = useState([]);
  const [secondFileArticles, setSecondFileArticles] = useState([]);
  const [thirdFileArticles, setThirdFileArticles] = useState([]);
  const [visibleSection, setVisibleSection] = useState(null); // Tracks which section is expanded

  const handleBookNavigation = (content, index, source) => {
    navigate(`/article/${index + 1}`, {
      state: {
        title: content.title,
        content: content.content,
        index: index + 1,
        source: source,
      },
    });
  };

  const toggleSection = (section) => {
    setVisibleSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const files = [
          "/data/tall.txt",
          "/data/a5_general4.txt",
          "/data/a5_general3.txt",
        ];
        const fileData = await Promise.all(
          files.map((file) => fetch(file).then((res) => res.text()))
        );

        const parseArticles = (data) =>
          data
            .split("[s1]")
            .slice(1)
            .map((section) => {
              const lines = section.trim().split("\n");
              return { title: lines[0], content: lines.slice(1).join("\n") };
            })
            .filter((article) => article.title);

        setTall(parseArticles(fileData[0]));
        setSecondFileArticles(parseArticles(fileData[1]));
        setThirdFileArticles(parseArticles(fileData[2]));
      } catch (error) {
        console.error("Error fetching the text files:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="text-black font-bold py-10 flex 3xl:flex-row flex-col justify-center gap-3">
      {["tall", "secondFile", "thirdFile"].map((section) => {
        const articles =
          section === "tall"
            ? tall
            : section === "secondFile"
            ? secondFileArticles
            : thirdFileArticles;
        const title =
          section === "tall"
            ? "مقالات كتاب طل الربوة - تربية الأستاذ لطلابه"
            : section === "secondFile"
            ? "آخر المقالات العامة 4"
            : "آخر المقالات العامة 3";
        const isExpanded = visibleSection === section;

        // Only render the card if it matches the visibleSection or if all cards should be visible
        if (visibleSection !== null && !isExpanded) return null;

        return (
          <div
            key={section}
            className="bg-secondlyColor rounded-SmallRounded flex flex-col items-end gap-5 py-10 pb-16 px-14"
          >
            <div className="flex justify-center mb-3">
              <button
                onClick={() => toggleSection(section)}
                className="bg-primaryColor text-white md:text-2xl text-xl py-1 px-5 rounded-SmallRounded hover:scale-95 duration-200"
              >
                {isExpanded ? "عرض أقل" : "المزيد من المقالات"}
              </button>
            </div>
            <h2 className="text-right text-2xl font-extrabold mb-5">{title}</h2>
            {articles
              .slice(1, isExpanded ? articles.length : 7)
              .map((article, i) => (
                <button
                  key={i}
                  className="md:text-xl text-lg hover:opacity-65 hover:scale-95 duration-200 text-right "
                  onClick={() => handleBookNavigation(article, i, section)}
                >
                  <p className="font-bold " style={{ direction: "rtl" }}>
                    {i + 1}- {article.title}
                  </p>
                </button>
              ))}
            {/* <div className="flex justify-center mt-10">
              <button
                onClick={() => toggleSection(section)}
                className="bg-primaryColor text-white md:text-2xl text-xl py-3 px-10 rounded-SmallRounded hover:scale-95 duration-200"
              >
                {isExpanded ? "عرض أقل" : "المزيد من المقالات"}
              </button>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default GeneralArticals;
