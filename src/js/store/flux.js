const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: 'https://www.swapi.tech/api',
			readLater: [],
			favorites: [],
			peoples: [],
			vehicles: [],
			planets: [],
			details: {},
		},
		actions: {
			// Use getActions to call a function within a fuction	
			changeReadLater: (reference) => {
				const storage = getStore();
				const readLaterList = storage.readLater;
				console.log(readLaterList);
				console.log("la referencia es " + reference);
				readLaterList.map((item) => { item.name == reference ? setStore({ details: item }) : console.log(item.name + " no coincide con la referencia") })
				console.log(storage.details);
			},
			flushDetails: () => {
				const newObj = {};
				setStore({"details": newObj});
			},
			setFavs: (fav) => {
				const storage = getStore();
				const newFavs = [...storage.favorites, fav];
				newFavs.filter((item) => item != fav);
				setStore({ "favorites": newFavs })
			},
			deleteFav: (fav) => {
				const storage = getStore();
				const newFavs = storage.favorites.filter((item) => item != fav);
				setStore({ "favorites": newFavs })
			},
			getPeople: async () => {
				const storage = getStore();
				const url = storage.baseUrl + '/people';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const characters = data.results;
					console.log(data);
					setStore({ peoples: characters })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getPlanets: async () => {
				const storage = getStore();
				const url = storage.baseUrl + '/planets';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const rocks = data.results;
					setStore({ planets: rocks })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getVehicles: async () => {
				const storage = getStore();
				const url = storage.baseUrl + '/vehicles';
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const ships = data.results;
					setStore({ vehicles: ships })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getDetails: async (type, typeId) => {
				const storage = getStore();
				const url = storage.baseUrl + `/${type}/${typeId}`;
				const options = {
					method: 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const specifications = data.result.properties;
					specifications.swelement = type;
					setStore({ details: specifications });				
					
					//verificamos que el elemento exista en nuestra lista
					let flag = false;
					let obj = [];
					console.log("buscamos coincidencia con " + storage.details.name);
					storage.readLater.map((item)=> { item.name == storage.details.name ? flag = true  : console.log(item.name + ' no produce coincidencia' )} );
					console.log ("el valor de flag es " + flag);
					if (!flag) {
						obj = [...storage.readLater, storage.details];
						setStore({ readLater: obj }) 
					}				
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getColletions: async () => {
				const storage = getStore();
				if (storage.peoples) {
					getActions().getPeople();
					console.log("cargamos peoples");
				}
				if (storage.planets) {
					getActions().getPlanets();
					console.log("cargamos planets");
				}
				if (storage.vehicles) {
					getActions().getVehicles();
					console.log("cargamos vehicles");
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;
