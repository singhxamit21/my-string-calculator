import React from "react";
import "./InputField.css";

function InputField({ value, onChange, onCalculate }) {
    return (
        <div className="input-field">
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter numbers (e.g., 1,2,3)"
            />
            <button onClick={onCalculate}>Calculate</button>
        </div>
    );
}

export default InputField;
