export default function Question({ onSelect }) {
  const options = ["Grounding", "Softness", "Energy", "Freedom"];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">
        What does your body crave today?
      </h1>
      <div className="space-y-3 bg-[#E1DABD">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="w-full py-2 bg-[rgb(255,228,250)] rounded-xl hover:bg-[#FFC4EB] transition font-sa"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
