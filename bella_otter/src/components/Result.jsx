import Icon from "./Icon"; 
export default function Result({ choice, onReset }) {
  return (
    <div className="text-center space-y-4 ">
      <Icon />
      <h2 className="text-xl font-bold text-[#722f37]" style={{ fontFamily: 'Playfair Display, serif' }}>
        The {choice} One
      </h2>
      <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Sample Product Name</p>
      <p className="text-sm text-gray-600">This is a short product description.</p>
      <span className="inline-block bg-[#fcd6df] text-[#722f37] text-xs px-3 py-1 rounded-full">
        TENCEL Soft
      </span>
      <div className="mt-4">
        <p className="text-[#c2185b]">Coming Soon</p>
      </div>
      <button
        onClick={onReset}
        className="mt-6 px-4 py-2 bg-[#d45d79] rounded-xl hover:bg-[#b44c66] text-white text-sm"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Start Over
      </button>
    </div>
  );
}