import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
//import Dropdown from 'react-bootstrap/Dropdown';
import SWlogo from "../../img/SWlogo.png";
//import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context)
	const deleteItem = (name) => {
		console.log("el nombre del item a borrar es " + name);
		actions.deleteFav(name);
		console.log(store.favorites);
	}
	const goToDetails = (reference) => {
		actions.changeReadLater(reference);
		if (store.details != {}) navigate("/swdetail");
	}

	return (
		<div className="row">
			<div className="col bg-dark mb-3 d-flex justify-content-between">
				<div className="ms-2">
					<Link to="/">
						<img src={SWlogo} alt="Starwars logo" style={{ width: '6rem' }} />
					</Link>
				</div>
				<div className="mx-2">
					<div className="btn-group">
						<button className="btn btn-primary dropdown-toggle my-2" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
							Favorites <span className="ps-1 bg-secondary border border-0 rounded"> {store.favorites.length} </span>
						</button>
						<ul className="dropdown-menu">
							<div className="ps-1 mx-5"> {!store.favorites.length ? "(empty)" : ""} </div>
							{store.favorites.map((item) => (
								<div className="container">
									<li className="" >
										<a className="dropdown-item" href="#">
											<div className="d-flex justify-content-between">
												<span className="my-1">
													<button type="button" className="btn"  onClick={()=> {goToDetails(item)}}>
														{item}
													</button>
												</span>
												<span>
													<button type="button" className="btn " onClick={() => { deleteItem(item) }} >
														<FontAwesomeIcon icon={faTrash} />
													</button>
												</span>
											</div>
										</a>
									</li>
								</div>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

