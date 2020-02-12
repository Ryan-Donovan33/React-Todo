// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Todo';
const TodoList = (props) => {
	return (
		<div className="">
			{props.todos.map((item) => <Item key={item.id} item={item} />)}
			{/* need to add class and onClick function  */}
			<button> Clear Completed </button>
		</div>
	);
};

export default TodoList;
