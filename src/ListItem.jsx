import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const ListItem = ({name, removeItem, ...props}) => {


  function handleClick(){
    removeItem(name);
  }


  return (
    <li id="item">
      <div id="name">{name}</div>
      <AiFillDelete id="delete" onClick={handleClick}>
         delete
      </AiFillDelete>
      </li>

  )
}

export default ListItem

