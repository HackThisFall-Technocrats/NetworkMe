import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="tailwind_check">
        <h1 className="text-3xl font-bold underline">
          Alok is testing tailwind
        </h1>
        <h1 className="bg-orange-900">hello</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className='text-3xl font-bold underline'>Alok is testing tailwind</h1>
    </>
  );
}

export default App;
