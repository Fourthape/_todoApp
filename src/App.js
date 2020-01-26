import React from 'react';
import AddList from './components/addList';
import ItemList from './components/itemList';
import SearchTodo from './components/searchTodo';

class App extends React.Component {
  state = { todoItems: [], addItemInput: '', searchValue: '', dispItems: [] };

  onInputChange = (e) => {
    const { todoItems, searchValue } = this.state;
    this.setState({ [e.target.name]: e.target.value });

    if(e.target.name === 'searchValue') {
      this.setState({
        dispItems: [ ...todoItems.filter(todoItem => {
          return todoItem.indexOf(searchValue) !== -1
        }) ]
      });
    }
  }

  onItemAdd = (e) => {
    e.preventDefault();
    const { addItemInput } = this.state;
    this.setState({ todoItems: [ ...this.state.todoItems, addItemInput ], addItemInput: '', searchValue: '', dispItems: [] });
  }

  onItemDelete = (e, _delvalueIndex) => {
    e.preventDefault();
    this.setState({ todoItems: [ ...this.state.todoItems.filter((todoItem, index) => {
      return index !== _delvalueIndex
    }) ], addItemInput: '', searchValue: '', dispItems: [] });
  }

  render() {
    const { addItemInput, todoItems, searchValue, dispItems } = this.state;

    return (
      <div className="App">
        <div className="container">
          <AddList onInputChange={this.onInputChange} addItemInput={addItemInput} onItemAdd={this.onItemAdd} />
          <SearchTodo onInputChange={this.onInputChange} searchValue={searchValue} />
          <ItemList todoItems={(searchValue.length > 0) ? dispItems : todoItems} onItemDelete={this.onItemDelete} />
        </div>
      </div>
    );
  }
}

export default App;
