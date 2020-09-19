import React from "react";

const SatelliteCard = ({ satellite }) => {
  return (
    <div className="card">
      <img
        width="200"
        className="center"
        src={satellite.links.mission_patch_small}
        alt=""
      />
      <h3>
        {satellite.mission_name} #{satellite.flight_number}
      </h3>
      <p>
        <strong> Mission Ids: </strong>
      </p>
      <ul>
        {satellite.mission_id.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
      <p>
        <strong> Launch Year: </strong> {satellite.launch_year}
      </p>
      <p>
        <strong> Successful Launch: </strong> {satellite.launch_success + ""}
      </p>
    </div>
  );
};

export default SatelliteCard;
