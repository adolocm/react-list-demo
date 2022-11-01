import React from 'react'

const ListItem = ({name, ...props}) => {
  return (
    <li id="item">{name}</li>
  )
}

export default ListItem