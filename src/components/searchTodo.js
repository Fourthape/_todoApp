import React from 'react';

class SearchTodo extends React.Component{
	render() {
		const { searchValue, onInputChange } = this.props;

		return (
				<div className="search-item">
					<input type="text" value={searchValue} placeholder="Search.." name="searchValue" className="search-item-input" onChange={onInputChange} />
				</div>
			)
	}
}

export default SearchTodo;