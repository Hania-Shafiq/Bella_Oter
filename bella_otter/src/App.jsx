import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";

export default function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Navbar />
      <main className="bg-[#fff8f5] min-h-screen p-6">
        <Carousel />
        <div className="max-w-md mx-auto mt-6 bg-white rounded-2xl shadow-xl p-6">
          {!selected ? (
            <Question onSelect={setSelected} />
          ) : (
            <Result choice={selected} onReset={() => setSelected("")} />
          )}
        </div>
      </main>
    </>
  );
}