import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

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

	addTodo = (e, todo) => {
		e.preventDefault();

		const newTodo = {
			task: todo,
			id: Date.now(),
			completed: false
		};

		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>ToDo List!</h2>
				</div>
				<TodoList />
			</div>
		);
	}
}

export default App;
