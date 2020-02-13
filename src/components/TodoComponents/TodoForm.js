import React, { Component } from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			todo: ''
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

	submitTodo = (e) => {
		e.preventDefault();
		this.props.addTodo(e, this.state.todo);
	};

	clearCompleted = (e) => {
		e.preventDefault();
		this.setState({
			todos: this.state.todos.filter((item) => !item.completed)
		});
	};

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		console.log('rendering form');
		return (
			<form onSubmit={this.submitTodo}>
				<input type="text" name="todo" onChange={this.handleChanges} />
				<button>Add Task</button>
			</form>
		);
	}
}

export default TodoForm;
