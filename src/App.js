import './App.css';
import List from './List';
import { useEffect, useState } from 'react';
import ListInput from './ListInput';

const App = () => {

  const [items, setItems] = useState([]);

  function addItem(itemToAdd){
    if(!items.includes(itemToAdd)){
      setItems(items => [...items, itemToAdd]);
    }
  }
  
  function removeItem(nameToRemove){
    setItems(items.filter(item=> item !== nameToRemove));
  }

  function clearList(){
    setItems([]);
  }

  useEffect(()=>{
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
