import React from "react";

const SatelliteCard = ({ satellite }) => {
  console.log("asdsd", satellite.rocket.first_stage.cores.length);
  return (
    <div className="col-3 card">
      <img
        width="150"
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
      <div>
        <p>
          <strong> Successful Landing: </strong>

          {satellite.rocket.first_stage.cores.length > 1 ? (
            <ul>
              {satellite.rocket.first_stage.cores.map((core) => (
                <li key={core.core_serial}>
                  {" "}
                  Core {core.core_serial} : {core.land_success + ""}
                </li>
              ))}
            </ul>
          ) : satellite.rocket.first_stage.cores[0].land_success === null ? (
            <span>No Data</span>
          ) : (
            satellite.rocket.first_stage.cores[0].land_success + ""
          )}
        </p>
      </div>
    </div>
  );
};

export default SatelliteCard;
