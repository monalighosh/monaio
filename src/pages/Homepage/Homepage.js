import React from 'react';
import './Homepage.scss';
import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="homepage">
        <DirectoryMenu />
      </div>
    );
  }
}

export default Homepage;