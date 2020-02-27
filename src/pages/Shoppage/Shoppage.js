import React from 'react';
import ShopData from './ShopData';
import './Shoppage.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shoppage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: ShopData,
    };
  }

  render () {
    const {collections} = this.state;
    
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => 
          <CollectionPreview key={id} {...otherCollectionProps} />
        )}
      </div>
    );
  }
}

export default Shoppage;