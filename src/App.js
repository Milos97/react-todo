import React from 'react';
import './App.css';
import ListItems from './ListItems.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faCircle, faCheckCircle);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:'',
        isdone: false,
        name:''
      }    
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleToggleDoneClick = this.handleToggleDoneClick.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== "") {
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'',
          isdone: false
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  handleToggleDoneClick(key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key) {
        item.isdone = !item.isdone
      }
      return item;
    })
    this.setState({items: items});
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key) {
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1 className="main-header">My todo list:</h1>
          <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="I need to do..."
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
              <button type="submit">Add</button>
          </form>
        </header>
        <div className="borderDiv"></div>
        <ListItems items = {this.state.items} 
        deleteItem = {this.deleteItem} 
        checkItem = {this.checkItem}
        setUpdate = {this.setUpdate}
        handleToggleDoneClick={this.handleToggleDoneClick}
        ></ListItems>
        <div className="hidden-div"></div>
      </div>
    );
  }
}

export default App;
