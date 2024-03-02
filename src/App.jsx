import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { AppLayout } from "./components/ui/layouts";
import { config } from "./components/config/wagmi";
import { Home } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <WagmiConfig config={config}>
      <Toaster position="bottom-right"/>
      <ConnectKitProvider mode="light">
        <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
