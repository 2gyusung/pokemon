import React from 'react'

function List({data :{count , next, previous, results}}) {
  return (
    <div>
      <img src={results.url}/>
      <p>{results.name}</p>
    </div>
  )
}

export default List
