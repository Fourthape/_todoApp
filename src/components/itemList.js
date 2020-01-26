import React from 'react';
import Item from './item';

class ItemList extends React.Component {
	displayItem = (todoItems, onItemDelete) => ( todoItems.map((value, index) => ( <Item key={`item_${index}`} itemName={value} onItemDelete={onItemDelete} _itemIndex={index} /> )) );

	render() {
		const { todoItems, onItemDelete } = this.props;

		return (
				<div className="listitem">
					{todoItems && this.displayItem(todoItems, onItemDelete)}
				</div>
			);
	}
}

export default ItemList;