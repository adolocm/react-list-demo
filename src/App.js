import './App.css';
import List from './List';
import { useEffect, useState } from 'react';
import ListInput from './ListInput';


const App = () => {

  //state declaration
  const [items, setItems] = useState([]);

  /**
   * addItem - adds item to the item list state array
   * @param {* - string} itemToAdd - name of the item to add
   * 
   */
  function addItem(itemToAdd){
    //check if the item exists in the list already
    if(!items.includes(itemToAdd)){

      //add the item
      setItems(items => [...items, itemToAdd]);
    }
  }
  
  /**
   * removeItem - removes item from the item list state array
   * @param {* - string} nameToRemove - name of the item to remove
   */
  function removeItem(nameToRemove){
    setItems(items.filter(item=> item !== nameToRemove));
  }

  /**
   * clearList - empties the item list state array
   */
  function clearList(){
    setItems([]);
  }

  //Called on component render
  useEffect(()=>{
    //default item list
    setItems(["A list item", "Another list item", "Yet another item"]);
  },
  [])
  

  
  return (
    <div className="App">
      <div className="title">React List App</div>
      <ListInput addItem={addItem}/>
      <List items={items} removeItem={removeItem} addItem={addItem} clearList={clearList}/>
    </div>
  );
}

export default App;
