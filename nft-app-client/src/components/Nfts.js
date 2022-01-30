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
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Tailwind is working</button>
        </div>
      ))}
    </div>
  );
};
