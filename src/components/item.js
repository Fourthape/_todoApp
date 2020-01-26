import React from 'react';

class Item extends React.Component {
	render() {
		const { itemName, onItemDelete, _itemIndex } = this.props;

		return (
				<div className="item">
					<span>{itemName}</span>
					<span><button className="btn btn-red" onClick={(e) => onItemDelete(e, _itemIndex)}>Delete</button></span>
				</div>
			);
	}
}

export default Item;