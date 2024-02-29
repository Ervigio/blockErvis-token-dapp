import { useAccount } from "wagmi";
import { Owner, TokenInfo, TokenTransferForm } from "../components";
import {
  ErrorInfo,
  LoadingSpinner,
  Button,
  TextInput,
  Tittle,
} from "../components/ui";
export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return (
    <div className="flex flex-col gap-6">
      <div>Connected Wallet: {address}</div>
      <LoadingSpinner className="h-10 w-10" />
      <div>
        <Button>Comprar Tokens</Button>
      </div>

      <ErrorInfo message="Error: Internal Server Error" />

      <div>
        <TextInput />
      </div>

      <Tittle>Éste es un título de muestra</Tittle>

      <Owner />

      <TokenInfo />
      
      <TokenTransferForm />
    </div>
  );
}
