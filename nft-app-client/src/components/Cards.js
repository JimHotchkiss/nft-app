import React from 'react';
import Card from './Card'

const Cards = ({ display, nfts, onShowSingle }) => {

  return (
  <div className={display ? 'nfts-show' : 'w-0 h-screen bg-secondary transition-all duration-200 ease-linear'}>

    {nfts.map(nft => (
      <Card 
        onShowSingle={onShowSingle}
        id={nft.id}
        imageUrl={nft.image_preview_url}
        name={nft.collection.name}
        description={nft.collection.description }
        display={display}
        slug={nft.collection.slug}
        permalink={nft.permalink}
      /> 
    ))}
  </div>);
};

export default Cards;
