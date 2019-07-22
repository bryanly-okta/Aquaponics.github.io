import React, { Component } from 'react';
import firebase from 'firebase'; //
//import App from './App';

export default class extends React.Component {
	state = { //setting the default state to data with empty array
		data: []
	};


	componentDidMount() {
		// Initialize Firebase
		var config = {
			   // apiKey: process.env.REACT_APP_SECRET_CODE,
			    // apiKey: 'AIzaSyDKIBKxsDJ6e3XjLzBgRA_OEo3d16o8RRQ',
          // authDomain: "finalproject-cd8aa.firebaseapp.com",
          // databaseURL: "https://finalproject-cd8aa.firebaseio.com",
          // projectId: "finalproject-cd8aa",
          // storageBucket: "",
          // messagingSenderId: "248908905974",
          // appId: "1:248908905974:web:2ec8fb7129c91490"

          apiKey: "AIzaSyDDCXdbYxDH9fiyviLnZHfMZiWXgNUsDMg",
          authDomain: "jsr520-bryly.firebaseapp.com",
          databaseURL: "https://jsr520-bryly.firebaseio.com",
          projectId: "jsr520-bryly",
          storageBucket: "",
          messagingSenderId: "542375191679",
          appId: "1:542375191679:web:a50446c74979e34e"
		};

		// We need to check to make sure a firebase app is not already initialized
		// Then we can initialize it if not!
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}

		let app = firebase.database();
		let data = app.ref('employees');

		this.showList(data);
	}

  showList = (data) => {
    data.on('value', (response) => {
      let listEmployees = response.val();
      console.log(listEmployees);

      let fireBaseData = [];

      for (let item in listEmployees) {
        let newItem = {
          key: item,
          name: listEmployees[item].name
        };

        fireBaseData.push(newItem);
      }

      this.setState({
        data: fireBaseData
      });
    });
  };


	render() {
		return (
			<section className="p-4">
				<h1>Let's show some data from firebase!</h1>
				{this.state.data && // if data exist, if true, && allows me to move forward
					this.state.data.map((element, index) => {
						return <li className="list-group-item text-dark">{element.name} </li>;
					})}
			</section>
		);
	}
}
