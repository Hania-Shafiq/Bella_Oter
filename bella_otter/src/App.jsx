import { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";

export default function App() {
  const [selected, setSelected] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-[#F1DEDC]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {!selected ? (
          <Question onSelect={setSelected} />
        ) : (
          <Result choice={selected} onReset={() => setSelected("")} />
        )}
      </div>
    </main>
  );
}
