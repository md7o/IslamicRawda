import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/theme_contenxt";

const RestBookList = () => {
  const navigate = useNavigate();
  const [categor, setCategor] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle category data navigation
  const handleCategoryData = (category) => {
    const selectedCategory = categor.find(
      (cat) => cat.categoryTitle === category.categoryTitle
    );
    const slicedData = selectedCategory ? selectedCategory.articles : []; // Get articles or empty array if not found
    navigate("/categories", { state: { bookData: category, slicedData } });
  };

  // Function to navigate to the book detail page
  const handleBookNavigation = (content) => {
    navigate("/book", { state: { bookData: content } });
  };

  const bookLinks = [
    {
      categoryTitle: "رحلات",
      items: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
      ],
    },
    {
      categoryTitle: "عقيدة",
      items: ["eman", "solok", "message007", "message002"],
    },
    {
      categoryTitle: "تربية",
      items: [
        "masjid",
        "jawhara",
        "mas",
        "wikaia",
        "message006",
        "shaikh",
        "Muraqabah",
        "message003",
        "ikhlas",
        "khoshoo",
        "tall2",
        "tazkiah",
      ],
    },
    {
      categoryTitle: "سياسة شرعية",
      items: ["shora", "kafaa", "message001"],
    },
    {
      categoryTitle: "دعوة",
      items: ["hiwarat1", "hiwarat2", "dawa"],
    },
    {
      categoryTitle: "فقه",
      items: ["hodood", "sabab", "hokm", "riddah"],
    },
    {
      categoryTitle: "مقاصد",
      items: ["islamlive"],
    },
    {
      categoryTitle: "تفسير",
      items: ["hood", "alnoor"],
    },
    {
      categoryTitle: "نحو",
      items: ["g1", "g2"],
    },
    {
      categoryTitle: "ثقافة عامة",
      items: ["Iqra"],
    },
  ];

  useEffect(() => {
    const fetchFile = async (fileName) => {
      try {
        const response = await fetch(`/data/${fileName}.txt`);
        if (!response.ok) throw new Error(`Failed to fetch ${fileName}.txt`);
        return await response.text();
      } catch (error) {
        console.error(`Error fetching ${fileName}.txt:`, error);
        return null;
      }
    };

    const parseArticles = (data) => {
      return data
        .split("[z]")
        .slice(1)
        .map((section) => {
          const [introduction] = section.split("[/z]");
          const lines = section.trim().split("\n");
          const title = lines[0]?.trim() || "Untitled";
          const content = lines.slice(2).join("\n").trim();
          const indices = lines
            .map((line, index) =>
              line.includes("[s1]") ? lines[index + 1]?.trim() : null
            )
            .filter(Boolean);
          return title
            ? { title, introduction: introduction.trim(), content, indices }
            : null;
        })
        .filter(Boolean);
    };

    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          bookLinks.map(async (link) => ({
            categoryTitle: link.categoryTitle,
            articles: (
              await Promise.all(link.items.map(fetchFile))
            ).flatMap((data) => (data ? parseArticles(data) : [])),
          }))
        );
        setCategor(results);
      } catch (error) {
        console.error("Error fetching all text files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="w-14 h-14 border-8 border-t-primaryColor border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  mx-auto 2.5xl:max-w-7xl lg:max-w-4xl max-w-sm  gap-3">
      {categor.map((category, index) => (
        <div
          key={index}
          className="flex flex-col text-right bg-primaryColor text-white w-full max-w-lg rounded-SmallRounded py-6"
          style={{ minHeight: "300px" }}
        >
          <h1 className="text-2xl text-white font-extrabold px-6">
            {category.categoryTitle}
          </h1>
          <div className="flex-1 space-y-4 px-6 mt-8">
            {category.articles.slice(0, 4).map((content, i) => (
              <button
                key={i}
                onClick={() => handleBookNavigation(content)}
                className="w-full text-right"
              >
                <p
                  className="text-white text-xl font-bold truncate hover:scale-95 hover:opacity-70 duration-200 "
                  style={{ direction: "rtl" }}
                >
                  {i + 1} - {content.title}
                </p>
              </button>
            ))}
          </div>
          <div className="mt-auto pt-8 px-6">
            <button
              className="w-full text-xl font-extrabold bg-white text-primaryColor rounded-SmallRounded hover:scale-95 duration-300 py-2"
              onClick={() => handleCategoryData(category)}
            >
              إستكشف المزيد
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestBookList;
