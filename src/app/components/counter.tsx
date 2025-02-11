"use client";
import exp from "constants";
import { useState } from "react";

interface CounterProps {
    name: String;
}

export const Counter = ({name}: CounterProps) => {
    console.log("Counter Component");
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>{name} Clicked {count} times</button>
    );
}