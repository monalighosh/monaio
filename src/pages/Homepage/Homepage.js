import React from 'react';
import './Homepage.scss';
import DirectoryMenu from '../../components/DirectoryMenu/DirectoryMenu';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="homepage">
        <DirectoryMenu />
      </div>
    );
  }
}

export default Homepage;