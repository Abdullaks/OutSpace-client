import { useEffect, useRef, useState } from "react";
import { Return, Search } from "../../svg";
import useClickOutside from "../../helpers/clickOutside";
import { useDispatch } from "react-redux";
// import { search } from "../../features/profile/profileSlice";
import { Link } from "react-router-dom";
import { search } from "../../functions/search";

export default function SearchMenu({ color, setShowSearchMenu, token }) {
  const [iconVisible, setIconVisible] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const menu = useRef(null);
  const input = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  useEffect(() => {
    input.current.focus();
  }, []);
  const searchHandler = async () => {
    if (searchTerm === "") {
      setResults("");
    } else {
      const res = await search(searchTerm, token);
      // dispatch(search(searchTerm));
      setResults(res);
    }
  };
  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => {
              setShowSearchMenu(false);
            }}
          >
            <Return color={color} />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
          {iconVisible && (
            <div>
              <Search color={color} />
            </div>
          )}
          <input
            type="text"
            placeholder="Search...."
            ref={input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={searchHandler}
            onFocus={() => {
              setIconVisible(false);
            }}
            onBlur={() => {
              setIconVisible(true);
            }}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Search Results</span>
        {/* <span>Recent searches</span>
        <a>Edit</a> */}
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar">
        {results &&
          results.map((result) => (
            <Link
              to={`/profile/${result.username}`}
              className="search_user_item hover1"
              key={result._id}
            >
              <img src={result.profilePicture} alt="" />
              <span>{result.username}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
