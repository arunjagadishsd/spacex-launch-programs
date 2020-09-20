import React from "react";
import YEARS from "./../constants/filter.constant";

const Filter = ({ onChangeFilters, filters }) => {
  const BooleanButtons = ({ filter }) => {
    return (
      <div className="flex-j-sb flex-container-row">
        <button
          className={filters[filter] === true ? "btn active" : "btn"}
          onClick={() => {
            console.log("key", filter);
            onChangeFilters(filter, true);
          }}
        >
          True
        </button>
        <button
          className={filters[filter] === false ? "btn active" : "btn"}
          onClick={() => {
            console.log("key", filter);
            onChangeFilters(filter, false);
          }}
        >
          False
        </button>
      </div>
    );
  };

  return (
    <div className="card pb-4">
      <h2>Filters</h2>
      <div className="text-center">
        <p>Launch Year</p>
        <hr />
      </div>
      <div className="flex-j-sb flex-container-row">
        {YEARS.map((year) => (
          <button
            key={year}
            className={filters.launch_year === year ? "btn active" : "btn"}
            onClick={() => {
              onChangeFilters("launch_year", year);
            }}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="text-center">
        <p>Successful Launch</p>
        <hr />
      </div>
      <BooleanButtons filter="launch_success" />
      <div className="text-center">
        <p>Successful Landing</p>
        <hr />
      </div>
      <BooleanButtons filter="land_success" />
    </div>
  );
};

export default Filter;
