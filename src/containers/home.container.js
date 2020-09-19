import React, { useEffect, useState } from "react";
import Filter from "../components/filter.component";
import SatelliteList from "../components/satellite-list.component";

const Home = () => {
  const [satellites, setSatellites] = useState([]);
  const [filters, setFilters] = useState({
    launch_year: null,
    launch_success: true,
    land_success: null,
  });
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
      <Filter onChangeFilters={setFilters} />
      <SatelliteList satellites={satellites} />
    </>
  );
};

export default Home;
