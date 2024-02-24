export default function Header() {
  return (
    <header className="border-b shadow py-2 px-3 flex justify-between items-center">
      {/*Añadimos logo para versión mobile */}
      <img
        src="/blockmaker-small-logo.png"
        alt="Logo Blockmaker Academy versión móvil"
        className="sm:hidden" width={48}
      />
      {/*Añadimos logo para versión desktop */}
      <img
        src="/blockmaker-logo.png"
        alt="Logo de Blockmaker academy con el texto Blockmaker"
        className="hidden sm:block" width={300}
      />
      <button className="bg-gray-100 rounded-xl px-2 text-sm h-fit py-2 ">Connect Wallet</button>
    </header>
  );
}
