import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import SWlogo from "../../img/SWlogo.png";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const slot = 'Empty';
	const deleteItem = (name) => {
		console.log("el nombre del item a borrar es " + name);
		actions.deleteFav(name);
		console.log(store.favorites);
	}

	return (
		<div className="row">
			<div className="col bg-dark mb-3 d-flex justify-content-between">
				<div className="ms-2">
					<Link to="/">
						{/*<span className="navbar-brand mb-0 h1"><img src={SWlogo}> </img></span>*/}

						<img src={SWlogo} alt="Starwars logo" style={{ width: '6rem' }} />

					</Link>
				</div>
				<div className="mx-2">

					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="ps-1 bg-secondary border border-0 rounded"> {store.favorites.length} </span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item) => (
								<div className="container">
									<li className="d-flex justify-content-between" ><a className="dropdown-item" href="#">
										<div>{store.favorites.length ? `${item}` : `hello`}  </div>
										<div>
											<button type="button" className="btn " onClick={() => { deleteItem(item) }} >
												<FontAwesomeIcon icon={faTrash} />
											</button>
										</div>
									</a></li>
								</div>
							))}
						</ul>
					</div>

				</div>
			</div>
		</div>
	);
};

