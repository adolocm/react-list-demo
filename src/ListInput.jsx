import React from 'react'
import { useState } from 'react';

const ListInput = ({addItem, ...props}) => {

    const [input, setInput] = useState("");
    
    function handleInputChange(value){
        setInput(value.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(input.length > 0){
        addItem(input);
        }
        else {
          //document.getElementById('input').placeholder="Please enter a value...";
          //setTimeout(()=> document.getElementById('input').placeholder="Click here to type...", 3000);
        }
        setInput("");
    }

  return (
    <div id='listinput'>
    <form onSubmit={event => handleSubmit(event)}>
        <input autoComplete="off" placeholder="Click here to type..." id='input' type='text' value={input} onChange={val => handleInputChange(val)}/>
        <input id='submit' type='submit'  />
    </form>
    </div>
  )
}

export default ListInput