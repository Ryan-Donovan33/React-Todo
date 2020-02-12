import React from 'react';

const Item = (props) => {
	return (
		<div>
			{/* need to edits props here and add an onClick function and then edit to make css reflect being completed or not */}
			<p>{props.item.task}</p>
		</div>
	);
};

export default Item;
