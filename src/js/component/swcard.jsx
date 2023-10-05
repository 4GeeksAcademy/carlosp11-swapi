import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stormtrooper from "../../img/Stormtrooper.png";
import Mustafar from "../../img/mustafar.jpeg";
import Falcon from "../../img/falcon.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const SwCard = (props) => {
  const { store, actions } = useContext(Context)
  const [imgName, setImgName] = useState('Stormtrooper');
  const doThis = () =>{
    console.log(imgName);
  }
  const makeFav =(name) => {
    if (!store.favorites.includes(props.name)){
      actions.setFavs(name);
    } else {
      actions.deleteFav(name);
    }
  }

  return (
    <div className= "container my-2" onClick={doThis}>
      <Card style={{ width: '15rem' }}>
        <div className="d-flex justify-content-center">
        <Card.Img variant="top" src={imgName} style={{ width: '5rem'}} />
        </div>
        <Card.Body className="img-thumbnail">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p> A long time ago in a galaxy far, far away.... </p>
          </Card.Text>
          <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-warning me-2" onClick={()=> {makeFav(props.name)}}>  
          <FontAwesomeIcon icon={store.favorites.includes(props.name) ? faHeartCircleCheck : faHeart} />
          </button>
            <Button variant="primary"> Learn more </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

