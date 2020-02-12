import React, { Component } from 'react';

const todos = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	}
];

class App extends Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos
		};
	}

	render() {
		return (
			<div className="App">
				<h2>ToDo List!</h2>
			</div>
		);
	}
}

export default App;
