const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peoples: [],
			vehicles: [],
			planets: [],
			details: {},
			charGender: '',
			charHair:'',
			charEyes:'',
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction	
			setFavs: (fav) => {
				const storage = getStore();
				const newFavs = [...storage.favorites, fav];
				newFavs.filter((item)=> item != fav);
				setStore({"favorites": newFavs})
			},
			deleteFav: (fav) => {
				const storage = getStore();
				const newFavs = storage.favorites.filter((item)=> item != fav);
				setStore({"favorites": newFavs})
			},				
			getPeople: async () => {
				const url = 'https://www.swapi.tech/api/people';
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const characters = data.results;
					console.log(data);
					setStore({peoples: characters})
					let obj = getStore()
					console.log(obj.peoples);
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getPlanets: async () => {
				const url = 'https://www.swapi.tech/api/planets';
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const rocks = data.results;
					setStore({planets: rocks })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getVehicles: async () => {
				const url = 'https://www.swapi.tech/api/vehicles';
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					const ships = data.results;
					setStore({vehicles: ships })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getDetails: async (url) => {
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({details: data	});
	
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			setDetails: () => {
				const storage = getStore();
				setStore({"charGender": storage.details, 
					"charHair": storage.details,
					"charEyes": storage.details});
			},
			getColletions: async () => {
				getActions().getPeople();
				getActions().getPlanets();
				getActions().getVehicles();
				console.log("cargamos todos los datos");
				},		
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
