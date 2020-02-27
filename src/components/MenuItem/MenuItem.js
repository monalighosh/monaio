import React from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`menu-item  ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subTitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(MenuItem);