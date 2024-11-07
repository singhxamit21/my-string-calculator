// ResultDisplay.js
import React from "react";
import "./ResultDisplay.css";

function ResultDisplay({ result, error }) {
    return (
        <div className="result-display">
            {error && <p className="error-message">{error}</p>}
            {result !== null && <p className="result-message">Result: {result}</p>}
        </div>
    );
}

export default ResultDisplay;
