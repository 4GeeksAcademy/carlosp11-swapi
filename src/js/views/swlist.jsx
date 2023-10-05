// Importar Context
import React, { useContext } from "react";  // 1. Importar el Hook
import { SwCard } from "../component/swcard.jsx";
import { Context } from "../store/appContext.js";  // 2. Context


export const SwList = (props) => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context


  return (
    <div className="container ">
      <div className="container overflow-auto bg-light my-5" >
        <div className="d-flex justify-content-between">
          {store.peoples.map((people) =>
            <div className="">
              <SwCard name={people.name} url={people.url} uid={people.uid} being={'people'} imgType={"Stormtrooper"} />
            </div>
          )}
        </div>
      </div>
      <div className="container overflow-auto bg-light my-5">
        <div className="d-flex justify-content-between">
          {store.planets.map((planet) =>
            <div className="">
              <SwCard name={planet.name} url={planet.url} uid={planet.uid} being={'planets'} imgType={"Mustafar"} />
            </div>
          )}
        </div>
      </div>
      <div className="container overflow-auto bg-light">
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

