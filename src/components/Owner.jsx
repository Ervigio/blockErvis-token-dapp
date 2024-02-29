import { useContractRead } from "wagmi";
import { blockmakerTokenABI } from "../contracts/ABIs/blockmakerTokenABI";
import { Tittle } from "./ui";

function OwnerSkeleton() {
  return (
    <div className=" bg-white border shadow px-3.5 py-5 rounded-md gap-2 w-[360px] sm:w-[469px]">
      <div className=" h-4 bg-gray-300 rounded animate-pulse w-20"/>
      <div className=" h-6 bg-gray-300 rounded animate-pulse" />
    </div>
  );
}

export default function Owner() {
  const { data, isError, isLoading } = useContractRead({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: blockmakerTokenABI,

    functionName: "owner",
  });

  if (!isLoading) return <OwnerSkeleton />;

  return (
    <section className="flex flex-col bg-white border shadow p-4 rounded w-[360px] sm:w-[469px]">
      <Tittle>Owner</Tittle>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <p className="text-xs sm:text-sm bg-gray-100 p-2 rounded-md">{data}</p>
      )}
    </section>
  );
}
