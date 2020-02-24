import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item  ${size}`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subTitle">SHOP NOW</p>
    </div>
  </div>
);

export default MenuItem;