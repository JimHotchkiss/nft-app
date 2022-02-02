import React from 'react';

const Cards = ({ display, nfts }) => {

  return (
  <div className={display ? 'nfts-show' : 'w-0 h-screen bg-secondary transition-all duration-200 ease-linear'}>
    {nfts.map(nft => (
      
      <div key={nft.id} className={display ? 'max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 cursor-pointer' : 'hidden'}>
        <div className="flex justify-center md:justify-end -mt-16">
          <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={nft.image_preview_url} alt={nft}/>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{nft.collection.name}</h2>
          <p className="mt-2 text-gray-600">{nft.collection.description ? nft.collection.description : "This NFT doesn't have any description."}</p>
        </div>
        <div className="flex justify-end mt-4">
          <a target="_blank" rel="noreferrer" href={nft.permalink} className="text-xl font-medium text-indigo-500">OpenSea</a>
        </div>
      </div>
    ))}
  </div>);
};

export default Cards;
