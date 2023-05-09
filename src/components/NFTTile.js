import axie from "../tile.jpeg";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import { GetIpfsUrlFromPinata } from "../utils";

function NFTTile (data) {
    const newTo = {
        pathname:"/nftPage/"+data.data.tokenId
    }

    const IPFSUrl = GetIpfsUrlFromPinata(data.data.image);

    return (
        <Link to={newTo}>
        <div className="border-2 ml-12 mt-5 mb-12 flex flex-col rounded-lg w-48 md:w-72 drop-shadow-xl">
            <div className="absolute flex items-center text-white">
                <p className="ml-2 text-xs">
                    <img src="https://gateway.pinata.cloud/ipfs/QmPX87i8aQ9yEhXGfSKzrjeviyE1n7GErAXv7miMhU6DgT" className="w-8 opacity-70 ml-4"/>
                    {data?.data.price} MATIC</p>
                <p className="ml-[160px] mr-4">ID: {data?.data.tokenId}</p>
            </div>
            <img src={IPFSUrl} alt="" className="w-72 h-80 rounded-lg object-cover" crossOrigin="anonymous" />
            <div className= "text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
                <p className="text-lg">{data?.data.name}</p>
                <p className="display-inline">
                    {data?.data.description}
                </p>
            </div>
        </div>
        </Link>
    )
}

export default NFTTile;
