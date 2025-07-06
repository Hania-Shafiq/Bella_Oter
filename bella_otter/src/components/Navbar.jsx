import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full py-1 px-1 bg-[#abc79899] shadow-sm">
      <div className="flex items-center justify-center space-x-4 p-1 bg-[#fceefa]">
        <img src={logo} alt="Bella Otér" className="h-16 w-auto drop-shadow-md bg-white rounded-full p-1" />
        <h1 className="text-3xl font-bold text-[#722f37]" style={{ fontFamily: 'Playfair Display, serif' }}>
          Bella Otér
        </h1>
      </div>
    </nav>
  );
}