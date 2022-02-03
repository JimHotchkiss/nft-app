import OpenSeaImage from '../components/opensea-logo-blue.png'

const Card = ({id, display, imageUrl, slug, name, description, permalink, onShowSingle}) => {
  return (
      <>
      {console.log(onShowSingle)}
        <div
            slug={slug} 
            onClick={() => onShowSingle(slug)}
            key={id} 
            className={display ? 'max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 cursor-pointer' : 'opacity-0'}>
            <div className="flex justify-center md:justify-end -mt-16">
                <img 
                    className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" 
                    src={imageUrl ? imageUrl : OpenSeaImage} alt={slug}/>
            </div>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-600">{description? description: "This NFT doesn't have any description."}</p>
                </div>
            <div className="flex justify-end mt-4">
                <a target="_blank" rel="noreferrer" href={permalink} className="text-xl font-medium text-indigo-500">OpenSea</a>
            </div>
        </div>
      </>
  );
};

export default Card;
