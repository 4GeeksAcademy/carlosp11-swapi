import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import Stormtrooper from "../../img/Stormtrooper.png";
import Mustafar from "../../img/mustafar.jpeg";
import Falcon from "../../img/falcon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";


export const SwCard = (props) => {
  const { store, actions } = useContext(Context)
  const [imgName, setImgName] = useState(props.imgType);
  let likedFlag = false;
  const navigate = useNavigate();

  const makeFav = (name) => {
    likedFlag = true;
    console.log(likedFlag);
    if (!store.favorites.includes(props.name)) {
      actions.setFavs(name);
      handleDetails();      
    } else {
      actions.deleteFav(name);
    }
  }

  const handleDetails = () => {
    let type = props.being;
    let typeId = props.uid;
    actions.getDetails(type, typeId);
    flushDetails();
  }

  return (
    <div className="container my-2">
      <div className="card " style={{ width: "15rem" }}>
        <div className="d-flex justify-content-center">
          <img src={imgName == 'Stormtrooper' ? Stormtrooper : imgName == 'Falcon' ? Falcon : Mustafar}
            className="card-img-top " alt="img" style={{ maxHeight: 'auto' }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">A long time ago in a galaxy far, far away.... </p>
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-outline-warning me-2" onClick={() => { makeFav(props.name) }}>
              <FontAwesomeIcon icon={store.favorites.includes(props.name) ? faHeartCircleCheck : faHeart} />
            </button>

            <button type="button" className="btn btn-outline-primary" onClick={handleDetails} > Learn more </button>

          </div>
        </div>
      </div>
    </div>
  )
}

