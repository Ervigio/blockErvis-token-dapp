import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";

export const config = createConfig(
  getDefaultConfig({
    alchemyId: import.meta.env.VITE_ALCHEMY_ID,
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,

    appName: "Blockmaker Token App",

    chains: [sepolia],

    // Optional: De momento lo comentamos para informarlo después si lo estimamos oportuno
    //appDescription: "Your App Description",
    //appUrl: "https://family.co", // your app's url
    //appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

export default config;
