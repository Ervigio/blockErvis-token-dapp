import { Tittle, TextInput, Button } from "./ui";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { blockmakerTokenABI } from "../contracts/ABIs";
import { useState, useEffect } from "react";
import { parseEther } from "viem/utils";
import { toast } from "react-hot-toast";

export default function TokenTransferForm() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: blockmakerTokenABI,
    functionName: "transfer",
    enabled: Boolean(to && amount),
    args: [to, parseEther(amount)],
  });

  const { data, write } = useContractWrite(config);

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSucces,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleToImputChange = (event) => {
    console.log("to", event.target.value);
    setTo(event.target.value);
  };

  const handleAmountInputChange = (event) => {
    console.log("amount", event.target.value);
    setAmount(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSucces) {
      toast.success("La transacción se ha completado con éxito");
      setTo("");
      setAmount("");
    }
    if (isTransactionError) {
      toast.error("La transacción ha fallado. Por favor, inténtalo de nuevo");
    }
  }, [isTransactionSucces, isTransactionError]);

  console.log(parseEther(amount));

  return (
    <section className="bg-white p-4 border shadow rounded-lg text-sm space-y-4">
      <Tittle>Token Transfer Form</Tittle>
      <form className="grid gap-2">
        <TextInput
          label="To"
          placeholder="to"
          onChange={handleToImputChange}
          value={to}
        />
        <TextInput
          label="amount"
          placeholder="amount"
          type="number"
          onChange={handleAmountInputChange}
          value={amount}
        />

        <Button
          onClick={() => write?.()}
          disabled={!to || !amount || isTransactionLoading}
          isLoading={isTransactionLoading}
        >
          {isTransactionLoading
            ? "Transfiriendo BM Tokens"
            : "Transferir BM Tokens"}
        </Button>
      </form>
    </section>
  );
}
