// Importar Context
import React, { useContext } from "react";  // 1. Importar el Hook
import { SwCard } from "../component/swcard.jsx";
import { Context } from "../store/appContext.js";  // 2. Context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJediOrder } from "@fortawesome/free-brands-svg-icons";
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";

export const SwList = (props) => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context


  return (
    <div className="container mt-5 pt-5">
      <div className="">
        <h2 className="text-danger-emphasis fw-bold font-monospace">
          <FontAwesomeIcon icon={faJediOrder} />
          <span className="mx-2"> Characters </span>
          <FontAwesomeIcon icon={faJediOrder} />
        </h2>
      </div>
      <div className="container overflow-auto bg-dark-subtle mb-5" >
        <div className="d-flex justify-content-between">
          {store.peoples.map((people) =>
            <div className="">
              <SwCard name={people.name} url={people.url} uid={people.uid} being={'people'} imgType={"Stormtrooper"} />
            </div>
          )}
        </div>
      </div>
      <div>
      <h2 className="text-danger-emphasis fw-bold font-monospace">
          <FontAwesomeIcon icon={faGalacticRepublic} />
          <span className="mx-2"> Planets </span>
          <FontAwesomeIcon icon={faGalacticRepublic} />
        </h2>
      </div>
      <div className="container overflow-auto bg-dark-subtle mb-5">
        <div className="d-flex justify-content-between">
          {store.planets.map((planet) =>
            <div className="">
              <SwCard name={planet.name} url={planet.url} uid={planet.uid} being={'planets'} imgType={"Mustafar"} />
            </div>
          )}
        </div>
      </div>
      <div>
      <h2 className="text-danger-emphasis fw-bold font-monospace">
          <FontAwesomeIcon icon={faGalacticSenate} />
          <span className="mx-2"> Vehicles </span>
          <FontAwesomeIcon icon={faGalacticSenate} />
        </h2>
      </div>
      <div className="container overflow-auto bg-dark-subtle mb-5">
        <div className="d-flex justify-content-between">
          {store.vehicles.map((vehicle) =>
            <div className="">
              <SwCard name={vehicle.name} url={vehicle.url} uid={vehicle.uid} being={'vehicles'} imgType={"Falcon"} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

