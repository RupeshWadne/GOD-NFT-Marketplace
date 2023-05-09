import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { polygon, polygonMumbai, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Chain } from "@rainbow-me/rainbowkit";


export const { chains, provider } = configureChains(
  [polygonMumbai, polygon],
  [
    alchemyProvider({ apiKey: "H-mBrJVCHnER5nnt8LBLZtyhNaQZwmxx" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "nft_alchemy_shardeum",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default wagmiClient;