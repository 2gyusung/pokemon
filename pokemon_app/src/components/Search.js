import React from 'react'

const Search = () => {

  const searchBtnEl = () => {
    console.log('출력');
    
  }
  return (
    <div className='search-input'>
      <input type='search'/>
      <button onClick={searchBtnEl}>검색</button>
    </div>
  )
}

export default Search
