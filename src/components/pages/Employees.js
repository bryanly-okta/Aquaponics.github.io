import React, { Component } from 'react';

import Firebase from './components/auth/Firebase';

class Employees extends Component {
	render() {
		// Why have we created a component called item?
	//	var employees = this.props.employees.map((employee, index) => <Item item={employee} key={index} />);

		return (
			<div>

				<Firebase />
			</div>
		);
	}
}

export default Employees;
