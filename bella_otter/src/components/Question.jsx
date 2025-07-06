export default function Question({ onSelect }) {
  const options = ["Grounding", "Softness", "Energy", "Freedom"];

  return (
    <div>
      <h1 className="text-2xl text-[#722f37] font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
        What does your body crave today?
      </h1>
      <div className="space-y-3 ">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="w-full py-2 bg-[#fef0ef] rounded-xl hover:bg-[#fcd6df] transition text-[#722f37] font-medium  border border-1-[#722f37]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}