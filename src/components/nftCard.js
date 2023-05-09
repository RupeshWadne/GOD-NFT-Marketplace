export const NFTCard = ({ nft }) => {

    return (
        <>
            <div className="w-1/4 flex flex-col ">
                {/* <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
            <div className="">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p className="text-gray-600" >{`${nft.contract.address.substr(0, 4)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
            </div>
            <div className="flex justify-center mb-1">
                <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer">View on etherscan</a>
            </div>
        </div> */}

                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <a href="#">
                        <img
                            class="rounded-t-lg w-full h-[300px] object-cover"
                            src={nft.media[0].gateway ? nft.media[0].gateway : "https://gateway.pinata.cloud/ipfs/QmPX87i8aQ9yEhXGfSKzrjeviyE1n7GErAXv7miMhU6DgT"}
                            alt="bg.jpg" />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 h-[50px] overflow-hidden"
                            >
                            {nft.title ? nft.title : "NFT Title"}
                        </h5>
                        <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                        <p className="text-gray-600" >{`${nft.contract.address.substr(0, 4)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 h-[100px] overflow-hidden">
                            {nft.description ? nft.description?.substr(0, 150) : "No Description"}
                        </p>
                        <a className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} >View on etherscan</a>
                    </div>
                </div>
            </div>


        </>
    )
}