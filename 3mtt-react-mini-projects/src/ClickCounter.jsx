import { useState } from "react";
import './ClickCounter.css'

function ClickCounter() {
    const [count, setCount] = useState(0);
    const displayCounter = document.getElementById("display-counter")
    const displayError = document.getElementById("display-error")
    const counterBtns = document.querySelector(".counter-btns")
    const resetBtn = document.querySelector(".reset-btn")
    
    const incrementCounter = () => {
        if(count == 100) {
            displayCounter.style.display = "none"
            displayError.style.display = "block";
            displayError.textContent = "You've reached the limit!"
            counterBtns.style.display = "none"
            resetBtn.style.display = "block"
        }        
        setCount(count + 1)
    };

    const decrementCounter = () => {
        if(count == 0) {            
            displayCounter.style.display = "none"
            displayError.style.display = "block";
            displayError.textContent = "Counter value should not be less than zero!"
            counterBtns.style.display = "none"
            resetBtn.style.display = "block"
        }        
        setCount(count - 1)
    };

    const resetCounter = () => {
        setCount(0);
        resetBtn.style.display = "none"        
        displayError.style.display = "none";
        displayCounter.style.display = "block"
        counterBtns.style.display = "block"
    }
    
    return (
        <>
        <h1>Click Counter</h1>
        <div id="display-counter">{count}</div>
        <div id="display-error"></div>
        <div className="counter-btns">
            <button className="green-btn" onClick={incrementCounter}>Increase</button>
            <button className="red-btn" onClick={decrementCounter}>Decrease</button>
        </div>
        <div className="reset-btn">
            <button className="gray-btn" onClick={resetCounter}>Reset</button>
        </div>
        </>
    );
}

export default ClickCounter;