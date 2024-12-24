import React from 'react';
import profileImage from './assets/image.jpg';

function Header() {
  return (
    <header className="hero">
      <img src={profileImage} alt="Adonis" className="profile-image" />
      <h1>Adonis</h1>
      <p>Web Developer & Designer</p>
    </header>
  );
}

export default Header;
