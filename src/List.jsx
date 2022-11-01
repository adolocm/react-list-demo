import React from 'react'
import ListItem from './ListItem'

const List = ({items, ...props}) => {

    function renderListItems(items){
        return items.map(item =><ListItem key={item} name={item}/>);
    }

  return (
    <ul id='list'>
    {renderListItems(items)}
    </ul>
  )
}

export default List