// Calculator.js
import React, { useEffect, useState } from "react";
import { add } from "../calculatorLogic";

import ResultDisplay from "./ResultDisplay";
import "./Calculator.css";
import InputField from "./InputField";

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setResult(null);
        setError(null);
    }, [input])

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (err) {
            setResult(null);
            setError(err.message);
        }
    };

    return (
        <div className="calculator-container">
            <h2>String Calculator</h2>
            <InputField value={input} onChange={setInput} onCalculate={handleCalculate} />
            <ResultDisplay result={result} error={error} />
        </div>
    );
}

export default Calculator;
