import { useState, useEffect } from "react";

const useSearch = (items, searchFields) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredItems(items); // If query is empty, show all items
      return;
    }

    const results = items
      .map((item) => {
        // Filter articles within each category
        const matchingArticles = item.articles.filter((article) =>
          searchFields.some((field) =>
            article[field]?.toLowerCase().includes(query.toLowerCase())
          )
        );

        // Only return category if there are matching articles
        if (matchingArticles.length > 0) {
          return { ...item, articles: matchingArticles };
        }
        return null; // If no articles match, don't include this category
      })
      .filter(Boolean); // Remove any null categories

    setFilteredItems(results);
  }, [items, query, searchFields]);

  return { query, setQuery, filteredItems };
};

export default useSearch;
