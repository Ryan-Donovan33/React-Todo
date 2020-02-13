import React, { Component } from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			todo: ''
		};
	}

	submitTodo = (e) => {
		e.preventDefault();
		this.props.addTodo(e, this.state.todo);
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
