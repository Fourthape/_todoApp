import React from 'react';

class AddList extends React.Component {
	render() {
		const { onInputChange, addItemInput, onItemAdd } = this.props;

		return (
				<div className="addItem">
					<div className="addItemInputWarp">
						<input type="text" placeholder="Item.." className="addItemInput" onChange={onInputChange} value={addItemInput} name="addItemInput" />
					</div>
					<div className="addItemSubmitWarp">
						<button className="btn btn-blue" onClick={onItemAdd} >Add Item</button>
					</div>
				</div>
			);
	}
}

export default AddList;