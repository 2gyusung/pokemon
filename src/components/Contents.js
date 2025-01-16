import React from 'react'
import Item from './Item'


const Contents = ({data}) => {
  return (
    <div className='Contents'>
      <Item data={data}/>
    </div>
  )
}

export default Contents
