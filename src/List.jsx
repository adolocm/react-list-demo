import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'


const List = ({items, removeItem, clearList, ...props}) => {

    /**
     * 
     * @param {* - array of strings } items - array of strings to render as ListItems
     * @returns 
     */
    function renderListItems(items){
        return items.map(item =><ListItem removeItem={removeItem} key={item} name={item}/>);
    }

    function handleClear(){
      clearList();
    }


  return (
    <ul id='list'>
    {renderListItems(items)}
    <div id="clear" onClick={handleClear}>Clear List</div>
    </ul>
  )
}

export default List