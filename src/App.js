import './App.css';
import List from './List';
import { useState } from 'react';
import ListInput from './ListInput';

const App = () => {

  const [items, setItems] = useState([]);

  function addItem(itemToAdd){
    setItems(items => [...items, itemToAdd]);
  }
  

  return (
    <div className="App">
      <div className="title">React List-App</div>
      <ListInput addItem={addItem}/>
      <List items={items}/>
    </div>
  );
}

export default App;
