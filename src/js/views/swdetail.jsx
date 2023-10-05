import React, { useContext } from "react";  // 1. Importar el Hook
import { Context } from "../store/appContext.js";  // 2. Context
import Stormtrooper from "../../img/Stormtrooper.png";
import Mustafar from "../../img/mustafar.jpeg";
import Falcon from "../../img/falcon.jpg";


export const SwDetail = (props) => {
  const { store, actions } = useContext(Context)  // 3. desecturar store, actions del Context

  return (

    <div className="container"> 
      <div className="row d-flex justify-content-between mb-4">
        <div className=" col-5">
          <img src={Stormtrooper}
            className="card-img-top " alt="img" style={{ maxHeight: 'auto' }}
          />
        </div>
        <div className=" col-7">
        <h1> Title </h1>
          <p> Our scout ships have reached Dantooine. They found the remains of a Rebel base, but they estimate that it has been deserted for some time. They are now conducting an extensive search of the surrounding systems. She lied! She lied to us! I told you she would never consciously betray the Rebellion. Terminate her...immediately! Stand by, Chewie, here we go. Cut in the sublight engines. What the...? Aw, we've come out of hyperspace into a meteor shower.

            The ability to destroy a planet is insignificant next to the power of the Force. Don't try to frighten us with your sorcerer's ways, Lord Vader. Your sad devotion to that ancient religion has not helped you conjure up the stolen data tapes, or given you clairvoyance enough to find the Rebel's hidden fort. I find your lack of faith disturbing. Enough of this! Vader, release him! As you wish.

            Lock the door, Artoo. All right, check that side of the street. It's secure. Move on to the next door. I would much rather have gone with Master Luke than stay here with you.

            Remember, a Jedi can feel the Force flowing through him. You mean it controls your actions? Partially. But it also obeys your commands. Hokey religions and ancient weapons are no match for a good blaster at your side, kid. You don't believe in the Force, do you? Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful force controlling everything.
          </p>
        </div>
      </div>
      
      <div className="row border-top border-danger">
        <div className="mt-1 col-2">
          <h4>Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
          </p>
        </div>
        <div className="mt-1 col-2">
          <h4> Birth date </h4>
        </div>
        <div className="mt-1 col-2">
          <h4> Gender </h4>
        </div>
        <div className="mt-1 col-2">
        <h4> Height </h4>
        </div>
        <div className="mt-1 col-2">
        <h4> Skin color </h4>
        </div>
        <div className="mt-1 col-2">
        <h4> Eye color </h4>
        </div>
      </div>

    </div>

  )
};