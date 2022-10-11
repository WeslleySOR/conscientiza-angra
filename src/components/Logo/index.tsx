import logoImage from "/assets/logo.svg";

export function Logo() {
  return (
    <div className="select-none flex gap-8">
      <img className="w-16 h-16" src={logoImage} alt="Conscientiza Angra Logo" />
      <span className="flex my-auto text-xl">Conscientiza Angra</span>
    </div>
  );
}
