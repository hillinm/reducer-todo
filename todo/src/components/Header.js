import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img src="https://callbsrservices.com/wp-content/uploads/2019/11/honeydolist.jpg" alt="logo"></img>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}


export default Header;