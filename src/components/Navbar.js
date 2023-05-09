import GOD from "../GOD.png"
import {
  Link,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

function Navbar() {

  const location = useLocation();

    return (
      <div className=" overflow-hidden navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center justify-between">
        <nav className="w-screen ">
          <ul className='flex items-end justify-between py-3 bg-transparent text-black pr-5'>
          <li className='flex items-end ml-28'>
            <Link to="/">
            <img src={GOD} alt="" width={150} height={150} className="inline-block mt-2"/>
            </Link>
          </li>
          <li className='w-auto'>
            <ul className='lg:flex justify-evenly ml-28 text-lg -mt-6'>
              {location.pathname === "/marketplace" ? 
              <li className='pt-2'>
                <Link to="/marketplace" className="border-b-2 border-black">Marketplace</Link>
              </li>
              :
              <li className='pt-2'>
                <Link to="/marketplace" className="hover:border-b-2 hover:pb-0 p-2 border-black">Marketplace</Link>
              </li>              
              }
              {location.pathname === "/sellNFT" ? 
              <li className='pl-28 pt-2 '>
                <Link to="/sellNFT" className="border-b-2 border-black">List My NFT</Link>
              </li>
              :
              <li className='pl-28 pt-2 '>
                <Link to="/sellNFT" className="hover:border-b-2 hover:pb-0 p-2 border-black">List My NFT</Link>
              </li>              
              }              
              {location.pathname === "/profile" ? 
              <li className='pl-28 pt-2'>
                <Link to="/profile" className="border-b-2 border-black">Profile</Link>
              </li>
              :
              <li className='pl-28 pt-2'>
                <Link to="/profile" className="hover:border-b-2 hover:pb-0 p-2 border-black">Profile</Link>
              </li>              
              }  
              {/* <li>
                <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
              </li> */}
            </ul>
          </li>
          <ConnectButton />
          </ul>
        </nav>
        {/* <div className='text-black text-bold text-right mr-10 text-sm'>
          {currAddress !== "0x" ? "Connected to":"Not Connected. Please login to view NFTs"} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
        </div> */}
      </div>
    );
  }

  export default Navbar;