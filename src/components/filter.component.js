import React from "react";
import YEARS from "./../constants/filter.constant";

const Filter = () => {
  return (
    <div>
      {YEARS.map((year) => (
        <button key={year} className="btn">
          {year}
        </button>
      ))}
    </div>
  );
};

export default Filter;
