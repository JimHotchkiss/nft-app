import OpenSeaImage from '../components/opensea-logo-blue.png'

const Card = ({id, display, imageUrl, slug, name, description, permalink, onShowSingle}) => {
  return (
      <>
      {console.log(onShowSingle)}
        <div
            slug={slug} 
            onClick={() => onShowSingle(slug)}
            key={id} 
            className={display ? 'sm:m-auto sm:max-w-[90%] lg:max-w-[40%] py-4 sm:px-4 bg-discord_secondary shadow-lg rounded-lg sm:my-20 cursor-pointer' : 'opacity-0'}>
            <div className="flex justify-center sm:justify-end -mt-16">
                <img 
                    className="w-20 h-20 object-cover rounded-full border-2 border-react_blue" 
                    src={imageUrl ? imageUrl : OpenSeaImage} alt={slug}/>
            </div>
            <div>
                <h2 className="text-react_blue sm:text-xl text-3xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-300 sm:text-sm">{description? description: "This NFT doesn't have any description."}</p>
                </div>
            <div className="flex justify-end mt-4">
                <a target="_blank" rel="noreferrer" href={permalink} className="text-xl font-medium text-react_blue">OpenSea</a>
            </div>
        </div>
      </>
  );
};

export default Card;
