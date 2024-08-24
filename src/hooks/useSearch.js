import { useState, useEffect } from "react";

const useSearch = (items, searchField) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const results = items.filter((item) =>
      item[searchField].toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  }, [items, searchField, query]);

  return { query, setQuery, filteredItems };
};

export default useSearch;
