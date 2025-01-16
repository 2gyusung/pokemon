import React from 'react'
import exampleLogo from "../images/logo.png"

const Header = () => {
  return (
    <div className='Header'>
      <img src={exampleLogo}></img>
      <h1>포켓몬 도감</h1>
      <input  placeholder='포켓몬을 입력하세요'></input>
    </div>
  )
}

export default Header
