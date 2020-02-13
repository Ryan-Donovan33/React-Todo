import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// import './components/TodoComponents/Todo.css';

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

	toggleTodo = (todoId) => {
		console.log(todoId);

		this.setState({
			todos: this.state.todos.map((item) => {
				if (todoId === item.id) {
					return {
						...item,
						completed: !item.completed
					};
				}
				return item;
			})
		});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h2>ToDo List!</h2>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} clearCompleted={this.clearCompleted} />
			</div>
		);
	}
}

export default App;
