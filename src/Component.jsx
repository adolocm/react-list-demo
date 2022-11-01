import React, { useState } from 'react'

const Component = () => {

    const [usefulState, setUsefulState] = useState([])

    function renderSomething(){
        return (<div>{usefulState}</div>)
    }

  return (
    <div>
    {renderSomething(usefulState)}
    </div>
  )
}

export default Component