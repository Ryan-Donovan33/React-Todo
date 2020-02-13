import React from 'react';
import '../TodoComponents/Todo.css';

const Todo = (props) => {
	return (
		<div
			className={`todo${props.item.completed ? 'completed' : ''}`}
			onClick={() => props.toggleTodo(props.item.id)}
		>
			<p>{props.item.task}</p>
		</div>
	);
};

export default Todo;
