import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { option, sortBy } from "../../features/filter/filterSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const [filterValues, setFilterValues] = useState({
    sortBy: "",
    option: "All",
  });

  const handleSortBy = (e) => {
    setFilterValues((prevState) => {
      return {
        ...prevState,
        sortBy: e.target.value,
      };
    });

    dispatch(sortBy(e.target.value));
  };

  const handleOption = (e) => {
    setFilterValues((prevState) => {
      return {
        ...prevState,
        option: e.target.value,
      };
    });

    dispatch(option(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            value={filterValues.sortBy}
            onChange={handleSortBy}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>

        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked={filterValues.option === "All" ? true : false}
                className="radio"
                value={"All"}
                onChange={handleOption}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                checked={filterValues.option === "Saved" ? true : false}
                value={"Saved"}
                onChange={handleOption}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
