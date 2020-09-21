import React, { useEffect, useState } from "react";
import Filter from "../components/filter.component";
import SatelliteList from "../components/satellite-list.component";

const Home = () => {
  const [satellites, setSatellites] = useState([]);
  const [filters, setFilters] = useState({
    launch_year: null,
    launch_success: null,
    land_success: null,
  });
  const onChangeFilters = (key, value) => {
    console.log(value, filters[key]);
    if (filters[key] === value) {
      setFilters({ ...filters, [key]: null });
    } else {
      setFilters({ ...filters, [key]: value });
    }
  };
  useEffect(() => {
    const fetchSatellites = async () => {
      let url = "https://api.spaceXdata.com/v3/launches?limit=100";
      for (let key in filters) {
        if (filters[key] !== null) {
          url += `&${key}=${filters[key]}`;
        }
      }
      console.log("url" + url);
      const response = await fetch(url);
      const satelliteJson = await response.json();
      setSatellites(satelliteJson);
    };
    fetchSatellites();
  }, [filters]);
  return (
    <>
      <h2>SpaceX Launch Programs</h2>
      <div className="flex-container">
        <div className="flex-2 mx-4">
          <Filter onChangeFilters={onChangeFilters} filters={filters} />
        </div>
        <div className="flex-9">
          <SatelliteList satellites={satellites} />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>Developed By Arun Jagadish</h2>
      </div>
    </>
  );
};

export default Home;
