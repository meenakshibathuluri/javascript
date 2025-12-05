import { React, useState } from "react";
import GoodMorning from "./goodmorning";
import "./App.css";

export function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count -1);
    };

    const decrement = () => {
     setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };
    return (
        <div className="container">
            <h1>Counter App</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment} className="increment">
              Increment
            </button>
            <button onClick={decrement} className="decrement">
              Decrement
            </button>
            <button onClick={() => {
                setCount(0);
            }}
            className="reset"
            >
             Reset
            </button>
        </div>
    );
}