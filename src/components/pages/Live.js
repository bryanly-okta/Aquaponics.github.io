import React, { Component } from 'react';
import Wobble from 'react-reveal/Wobble';
import Iframe from 'react-iframe'

class Live extends Component {
	state = {};

	// Life Cycle Method
	componentDidMount() {
		// About the Genius API https://docs.genius.com/#/getting-started-h1
		// Work through the steps inside of the render function
		// If you get finished, try picking another API (maybe your final project choice)
		// And use FETCH to pull data from it.
		//fetch on time interval setInterval function
		setInterval(() => { fetch

		(
			'https://api.kijanigrows.com/v2/device/get/RedVic'
			//'https://hn.algolia.com/api/v1/search?query=sony'
			//onChange method
		)

			.then((response) => {
				//console.log(response); //this won't give us the data we need since it's only a promise
				return response.json();
			})
			.then((data) => {
				data = data;
				this.setState({
					data // this will set the key to the same value as the variable - data array
				});
				console.log(data);
			});
	},
	5000);
}

	// Life Cycle Method
	render() {
		let newData = [];
	//	console.log("this.state.data" + this.state.data);

		for (let item in this.state.data) {

			// 1. Can you get the list of songs associated with this artist to show up?
			// 2. Can you get an image to appear?
			// 3. Can you link out the to the original webpage for each song?
			let { flow_rate_sensor, humidity, humidity_dew_point, nutrientTemp,ph,temperature_0 } = this.state.data[item].pins;
			let { time, uptime, version, wlan0 } = this.state.data[item];


			// let fullTitle = this.state.data[item].result.title;
			// let song_art_image_url = this.state.data[item].result.song_art_image_url;
			// let url = this.state.data[item].result.url;
			//console.log(fullTitle);
			newData.push(
				<ul>
					<table class="table table-bordered table-sm">
							  <thead>
							    <tr>
							      <th scope="col">Legend</th>
							      <th scope="col">Sensors</th>
							      <th scope="col">Values</th>

							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <th scope="row"><img src='./flowrate.jpg' className="img-thumbnail" style={{width: '50px'}} /></th>
							      <td>Flow rate Sensor: </td>
							      <td>{flow_rate_sensor}</td>

							    </tr>
							    <tr>
							      <th scope="row"><img src='./humidity.png' className="img-thumbnail" style={{width: '50px'}} /> </th>
							      <td>Humidity</td>
							      <td>{humidity} </td>

							    </tr>
							    <tr>
							      <th scope="row"><img src='./humiditydew.png' className="img-thumbnail" style={{width: '50px'}} /></th>
							      <td >Humidity Dew Point </td>
							      <td>{humidity_dew_point}</td>
							    </tr>
									<tr>
										<th scope="row"><img src='./nutrienttemp.png' className="img-thumbnail" style={{width: '50px'}} /></th>
										<td >Nutrient Temp </td>
										<td>{nutrientTemp}</td>
									</tr>
									<tr>
										<th scope="row"><img src='./ph.png' className="img-thumbnail" style={{width: '50px'}} /></th>
										<td >PH Level </td>
										<td>{ph}</td>
									</tr>
									<tr>
										<th scope="row"><img src='./temp.jpg' className="img-thumbnail" style={{width: '50px'}} /></th>
										<td >Temperature </td>
										<td>{temperature_0} </td>
									</tr>
									<tr>
										<th scope="row"><img src='./time.png' className="img-thumbnail" style={{width: '50px'}} /></th>
										<td >Time </td>
										<td>{time} </td>
									</tr>
									<tr>
										<th scope="row"><img src='./uptime.png' className="img-thumbnail" style={{width: '50px'}} /></th>
										<td >Up time </td>
										<td>{uptime} </td>
									</tr>
							  </tbody>
							</table>

			</ul>


		);
		}

		return (
			<div className="App">
				<header className="App-header">
					<ul className="list-group m-4">{newData}</ul>

					<Iframe url="https://api.kijanigrows.com:3000/dashboard/db/RedVic?uuid=36710"
								        width="100%"
								        height="3000px"
								        display="initial"
								        position="relative"/>

				</header>
			</div>
		);
	}
}

export default Live;
