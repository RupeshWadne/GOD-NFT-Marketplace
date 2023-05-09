import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage(props) {

    const [data, updateData] = useState({});
    const [dataFetched, updateDataFetched] = useState(false);
    const [message, updateMessage] = useState("");
    const [currAddress, updateCurrAddress] = useState("0x");

    async function getNFTData(tokenId) {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        //Pull the deployed contract instance
        let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
        //create an NFT Token
        var tokenURI = await contract.tokenURI(tokenId);
        const listedToken = await contract.getListedTokenForId(tokenId);
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        console.log(listedToken);

        let item = {
            price: meta.price,
            tokenId: tokenId,
            seller: listedToken.seller,
            owner: listedToken.owner,
            image: meta.image,
            name: meta.name,
            description: meta.description,
        }
        console.log(item);
        updateData(item);
        updateDataFetched(true);
        console.log("address", addr)
        updateCurrAddress(addr);
    }

    async function buyNFT(tokenId) {
        try {
            const ethers = require("ethers");
            //After adding your Hardhat network to your metamask, this code will get providers and signers
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            //Pull the deployed contract instance
            let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
            const salePrice = ethers.utils.parseUnits(data.price, 'ether')
            updateMessage("Buying the NFT... Please Wait (Upto 5 mins)")
            //run the executeSale function
            let transaction = await contract.executeSale(tokenId, { value: salePrice });
            await transaction.wait();

            alert('You successfully bought the NFT!');
            updateMessage("");
        }
        catch (e) {
            alert("Upload Error" + e)
        }
    }

    const params = useParams();
    const tokenId = params.tokenId;
    if (!dataFetched)
        getNFTData(tokenId);
    if (typeof data.image == "string")
        data.image = GetIpfsUrlFromPinata(data.image);

    return (
        <>
            <Navbar></Navbar>
            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32">


                    <div class="flex flex-wrap">
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div class="flex lg:py-12">
                                <img src={data.image} alt="" className="max-w-xl max-h-full rounded-3xl shadow-lg ml-44 z-10" />
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full justify-center items-center flex lg:w-7/12">
                            <div
                                class="bg-yellow-500 h-full w-3/4 rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div class="lg:pl-12">
                                    <div className="text-3xl font-bold mb-6 flex">
                                        <h2 class="underline">Name:  </h2>{data.name}
                                    </div>
                                    <p class="mb-6 pb-2 lg:pb-0">
                                        <h3 className="text-gray-800 text-xl">Description: {data.description}</h3>
                                    </p>

                                    <div class="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20 text-gray-800 ">
                                            Price: <span className="">{data.price + " MATIC"}</span>
                                        </p>
                                    </div>

                                    <div className="flex items-center text-gray-800 mb-3">
                                        <h3 className=" text-xl">Owner:</h3> <span className="text-base">{data.owner}</span>
                                    </div>
                                    <div className="flex items-center text-gray-800 mb-3">
                                        <h3 className=" text-xl">Seller:</h3> <span className="text-base">{data.seller}</span>
                                    </div>

                                    <div>
                                        {currAddress != data.owner && currAddress != data.seller ?
                                            <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={() => buyNFT(tokenId)}>Buy this NFT</button>
                                            : <div className="text-white text-xl">You are the owner of this NFT</div>
                                        }

                                        <div className="text-green text-center mt-3">{message}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}