import type { LinksFunction } from "@remix-run/node";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchInput.css";

export const searchInputlinks: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

const SearchInput = () => {
  return (
    <div className="input-content">
      <FaSearch className="search-icon" size={20} />
      <input type="text" />
    </div>
  );
};

export default SearchInput;
