import React, { useEffect, useState } from "react";
import Filter from "../components/filter.component";
import SatelliteList from "../components/satellite-list.component";

const Home = () => {
  const [satellites, setSatellites] = useState([]);
  const [filters, setFilters] = useState({
    year: 0,
    launch_success: null,
    land_success: null,
  });
  useEffect(() => {
    const fetchSatellites = async () => {
      let url = "https://api.spaceXdata.com/v3/launches?limit=100";
      for (let key in filters) {
        console.log(key);
      }
      const response = await fetch(url);
      const satelliteJson = await response.json();
      setSatellites(satelliteJson);
    };
    fetchSatellites();
  }, [filters]);
  console.log("satellites", satellites);
  return (
    <>
      <Filter />
      <SatelliteList satellites={satellites} />
    </>
  );
};

export default Home;
