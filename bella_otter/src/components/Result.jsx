import Icon from "./Icon";

export default function Result({ choice, onReset }) {
  return (
    <div className="text-center space-y-4">
      <Icon />
      <h2 className="text-lg font-bold">The {choice} One</h2>
      <p className="font-medium">Sample Product Name</p>
      <p className="text-sm text-gray-600">This is a short product description.</p>
      <span className="inline-block bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full">
        TENCEL Soft
      </span>
      <div className="mt-4">
        <img
          src="https://via.placeholder.com/300x200"
          alt={choice}
          className="rounded-lg mx-auto"
        />
      </div>
      <button
        onClick={onReset}
        className="mt-6 px-4 py-2 bg-pink-200 rounded-xl hover:bg-pink-300 text-sm"
      >
        Start Over
      </button>
    </div>
  );
}
