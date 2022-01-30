import React from 'react';

export const Nfts = ({ nfts, loaded}) => {
 
  return (
    <div>
      {nfts.map(nft => (
        <div key={nft.id}>
           {console.log(nft)}
          <h1>{nft.name}</h1>
          <p>{nft.owner}</p>
          <p>{nft.traits}</p>
        </div>
      ))}
    </div>
  );
};
