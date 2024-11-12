import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../hooks/theme_contenxt";
import HomeBody from "../components/home_part/home_body";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [searchWeb, setSearchWeb] = useState([]);
  const [loading, setLoading] = useState(false);

  const bookLinks = useMemo(
    () => [
      {
        categoryTitle: "عقيدة",
        items: ["eman", "solok"],
      },
      {
        categoryTitle: "تربية",
        items: [
          "masjid",
          "jawhara",
          "mas",
          "wikaia",
          "shaikh",
          "Muraqabah",
          "ikhlas",
          "khoshoo",
          "tall2",
          "tazkiah",
        ],
      },
      {
        categoryTitle: "سياسة شرعية",
        items: ["shora", "kafaa"],
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
      {
        categoryTitle: "شخصيات",
        items: ["per"],
      },
      // {
      //   categoryTitle: "حوارات",
      //   items: ["hiwarat1", "hiwarat2"],
      // },
      // {
      //   categoryTitle: "مقالات",
      //   items: ["a5_general3", "a5_jihad", "a5_pal"],
      // },
      {
        categoryTitle: "رسائل",
        items: [
          "message001",
          "message002",
          "message003",
          "message004",
          "message005",
          "message006",
          "message007",
        ],
      },
      {
        categoryTitle: "قصائد",
        items: ["poet"],
      },
    ],
    []
  );
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
        });
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
        setSearchWeb(results); // Ensure this data structure is correct for useSearch
      } catch (error) {
        console.error("Error fetching all text files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const {
    query: query1,
    setQuery: setQuery1,
    filteredItems: searchResult,
  } = useSearch(searchWeb, ["title", "content"]);
  console.log("Filtered Items (searchResult):", searchResult);

  const handleViewFilteredList = () => {
    if (query1.trim() === "") {
      setErrorMessage("Please enter a search term.");
    } else {
      setErrorMessage("");
      console.log("query1 List:", query1);
      console.log("Filtered List before navigating:", searchResult);
      navigate("/search-box", {
        state: { filteredList: searchResult, searchQuery: query1 },
      });
    }
  };

  // Handle Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleViewFilteredList();
    }
  };

  return (
    <main>
      <div className={`${theme === "dark" ? "bg-dark" : "bg-light"}`}>
        <p className="textC text-center md:text-4xl text-3xl font-bold ">
          موقع الروضة الإسلامي
        </p>
        <p className="textC text-center md:text-4xl text-3xl font-bold ">
          {searchWeb["title"]}
        </p>

        <div className="flex flex-row-reverse justify-center mt-10 gap-2">
          <input
            type="text"
            placeholder="جملة البحث"
            onKeyDown={handleKeyDown}
            value={query1}
            onChange={(e) => setQuery1(e.target.value)}
            className={`bg-gray-300 rounded-SmallRounded text-right text-2xl font-bold py-1 px-5 md:w-1/4 w-2/3 ${
              errorMessage ? "ring-2 ring-red-600" : "ring-0"
            }`}
          />
          <button
            className="bg-primaryColor text-white text-2xl font-bold md:px-10 px-7 py-1 rounded-SmallRounded"
            onClick={handleViewFilteredList}
          >
            بحث
          </button>
          {errorMessage && (
            <p className="text-red-500 md:relative md:right-0 md:translate-y-10 md:translate-x-0 hidden">
              {errorMessage}
            </p>
          )}
        </div>
        <HomeBody />
      </div>
    </main>
  );
};

export default Home;
