import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="flex flex-col justify-between w-full h-screen duration-200"
      style={{ backgroundColor: color, transition: "background-color 0.3s ease-in-out" }}
    >
      {/* Header Section */}
      <header className="flex items-center justify-center w-full font-bold text-white bg-gray-800 shadow-md te4xt-3xl p-">
        <h1>Color Changer App</h1>
      </header>

      {/* Main Content Section */}
      <main className="flex items-center justify-center flex-grow">
        <p className="text-2xl font-semibold text-white">
          The current background color is <span className="underline">{color}</span>.
        </p>
      </main>

      {/* Footer Color Picker Section */}
      <footer className="w-full py-6 bg-white shadow-lg rounded-t-3xl">
        <h2 className="mb-6 text-lg font-semibold text-center">Choose a Color</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {[
            { color: "red", label: "Red" },
            { color: "green", label: "Green" },
            { color: "pink", label: "Pink" },
            { color: "yellow", label: "Yellow" },
            { color: "black", label: "Black" },
            { color: "skyblue", label: "Sky Blue" },
            { color: "blue", label: "Blue" },
          ].map(({ color, label }) => (
            <button
              key={color}
              onClick={() => setColor(color)}
              className="px-6 py-3 font-medium text-white transition-transform duration-300 transform rounded-full shadow-md hover:scale-110"
              style={{ backgroundColor: color }}
            >
              {label}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
