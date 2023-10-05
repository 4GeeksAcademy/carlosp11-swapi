import React, { useContext } from "react";  // 1. Importar el Hook
import { Context } from "../store/appContext.js";  // 2. Context
import Stormtrooper from "../../img/Stormtrooper.png";
import Mustafar from "../../img/mustafar.jpeg";
import Falcon from "../../img/falcon.jpg";


export const SwDetail = (props) => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context

  return (

    <div className="container pb-5">
      <div className="row d-flex justify-content-between mb-4">
        <div className=" col-5">
          <img src={store.details.swelement == 'people' ? Stormtrooper : store.details.swelement == 'vehicles' ? Falcon : Mustafar}
            className="card-img-top " alt="img" style={{ maxHeight: 'auto' }}
          />
        </div>
        <div className=" col-7">
          <h1> {store.details.name} </h1>
          <p> Our scout ships have reached Dantooine. They found the remains of a Rebel base,
            but they estimate that it has been deserted for some time. They are now conducting
            an extensive search of the surrounding systems. She lied! She lied to us! I told
            you she would never consciously betray the Rebellion. Terminate her...immediately!
            Stand by, Chewie, here we go. Cut in the sublight engines. What the...? Aw, we've
            come out of hyperspace into a meteor shower.
            The ability to destroy a planet is insignificant next to the power of the Force.
            Don't try to frighten us with your sorcerer's ways, Lord Vader. Your sad devotion
            to that ancient religion has not helped you conjure up the stolen data tapes, or given
            you clairvoyance enough to find the Rebel's hidden fort. I find your lack of faith
            disturbing. Enough of this! Vader, release him! As you wish.
            Lock the door, Artoo. All right, check that side of the street. It's secure. Move
            on to the next door.
          </p>
        </div>
      </div>

      <div className="row border-top border-danger">
        <div className="mt-1 col-2">
          <h4 className="text-center">Name</h4>
          <p className="text-center"> {store.details.name} </p>
        </div>
        <div className="mt-1 col-2">
          <h4 className="text-center"> {store.details.swelement == 'people' ? "Birth date" : store.details.swelement == 'planets' ? "Climate" : "Model"} </h4>
          <p className="text-center">
            {store.details.swelement == 'people' ? store.details.birth_year :
              store.details.swelement == 'planets' ? store.details.climate : store.details.model}
          </p>
        </div>
        <div className="mt-1 col-2">
          <h4 className="text-center"> {store.details.swelement == 'people' ? "Gender" : store.details.swelement == 'planets' ? "Population" : "Vehicle Class"}  </h4>
          <p className="text-center">
            {store.details.swelement == 'people' ? store.details.gender :
              store.details.swelement == 'planets' ? store.details.population : store.details.vehicle_class}
          </p>
        </div>
        <div className="mt-1 col-2">
          <h4 className="text-center"> {store.details.swelement == 'people' ? "Height" : store.details.swelement == 'planets' ? "Orbital Period" : "Length"}  </h4>
          <p className="text-center">
            {store.details.swelement == 'people' ? store.details.height :
              store.details.swelement == 'planets' ? store.details.orbital_period : store.details.length}
          </p>
        </div>
        <div className="mt-1 col-2">
          <h4 className="text-center"> {store.details.swelement == 'people' ? "Skin Color" : store.details.swelement == 'planets' ? "Rotation Period" : "Crew"}  </h4>
          <p className="text-center">
            {store.details.swelement == 'people' ? store.details.skin_color :
              store.details.swelement == 'planets' ? store.details.rotation_period : store.details.crew}
          </p>
        </div>
        <div className="mt-1 col-2">
          <h4 className="text-center"> {store.details.swelement == 'people' ? "Eye Color" : store.details.swelement == 'planets' ? "Diameter" : "Max Atmosphering Speed"}  </h4>
          <p className="text-center">
            {store.details.swelement == 'people' ? store.details.eye_color :
              store.details.swelement == 'planets' ? store.details.diameter : store.details.max_atmosphering_speed}
          </p>
        </div>
      </div>

    </div>

  )
};