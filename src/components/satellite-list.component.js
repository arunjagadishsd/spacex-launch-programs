import React from "react";
import SatelliteCard from "../components/satellite-card.component";

const SatelliteList = ({ satellites }) => {
  return (
    <>
      <div className="flex-container">
        {satellites.length === 0
          ? "No Satellite available with selected filters"
          : satellites.map((satellite) => (
              <SatelliteCard
                key={satellite.flight_number}
                satellite={satellite}
              ></SatelliteCard>
            ))}
      </div>
    </>
  );
};

export default SatelliteList;
