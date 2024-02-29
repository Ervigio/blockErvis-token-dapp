import { useToken } from "wagmi";
import { Tittle, ErrorInfo } from "./ui";
import PropTypes from "prop-types";


{
  /** Creamos un componente local "TokenInfoItem" única y exclusivamente para usar dentro 
de este componente, con lo cual, no necesitamos exportarlo. Hacemos esto para darle estilo
 a todos los parámetros que queremos usar de los que nos proporciona la variable data */
}
function TokenInfoItem({ label, value }) {
  return (
    <li className="bg-gray-100 p-2 rounded-lg flex items-center gap-1">
      <span className="font-semibold text-gray-700 capitalize">{label}: </span>
      <p className="text-xs sm:text-sm">{value}</p>
    </li>
  );
}

TokenInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default function TokenInfo() {
  const { data, isError, isLoading } = useToken({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
  });

  const { totalSupply, ...restData } = data;

  return (
    <section className=" grid gap-4 bg-white p-4 shadow w-fit rounded-lg border text-sm">
      <Tittle>Token Info (Versión avanzada: con Map)</Tittle>

      {isError ? (
        <ErrorInfo message="Error al intentar cargar la información del Token. Por favor, vuelve a intentarlo." />
      ) : (
        <ul className="grid gap-3
        ">
          {Object.entries(restData).map(([key, value]) => (
            <TokenInfoItem key={key} label={key} value={value} />
          ))}
        </ul>
      )}
    </section>
  );
}
