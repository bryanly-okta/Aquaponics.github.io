import React, { Component } from 'react';
import logo from './aquaponics.jpg';
import Fade from 'react-reveal/Fade';
import Firebase from './Firebase';

class About extends Component {
	render() {
    return (
    <div>
    <h1>What is Aquaponics?</h1>
		<Fade left>
    	<img src={logo} alt="Aquaponics System" height="300" width="800" />
		</Fade>
    <p> </p>
    <p>Aquaponics is a form of agriculture that combines raising fish in tanks (recirculating aquaculture)
    with soilless plant culture (hydroponics).  In aquaponics, the nutrient-rich water from raising fish
    provides a natural fertilizer for the plants and the plants help to purify the water for the fish.
    Aquaponics can be used to sustainably raise fresh fish and vegetables for a family, to feed a village or
    to generate profit in a commercial farming venture, year ‘round, in any climate.</p>

		<Firebase />
    </div>
    )
	}
}

export default About;
