import React from "react";
import SatelliteCard from "../components/satellite-card.component";

const SatelliteList = ({ satellites }) => {
  return (
    <div className="flex-container">
      {satellites.map((satellite) => (
        <SatelliteCard
          key={satellite.flight_number}
          satellite={satellite}
        ></SatelliteCard>
      ))}
    </div>
  );
};

export default SatelliteList;
