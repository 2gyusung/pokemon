import React from 'react'
import List from './List'

function Item({data}) {
  console.log(data);
  
  return (
    <>
        {
          data.map(list=>{
            <List list={list} key={list.name}/>

          })
}
        </>
  )
}

export default Item
