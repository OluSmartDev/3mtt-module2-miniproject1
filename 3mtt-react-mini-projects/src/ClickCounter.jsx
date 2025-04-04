import { useState } from "react";
import './ClickCounter.css'

function ClickCounter() {
    const [count, setCount] = useState(0)
    const [showIncreaseCount, setShowIncreaseCount] = useState(true)
    const [showDecreaseCount, setShowDecreaseCount] = useState(true)
    const [showCounterButtons, setshowCounterButtons] = useState(true)
    const [showResetButton, setShowResetButton] = useState(false)

    const incrementCounter = () => {
        if(count == 100) {
            setShowIncreaseCount(false)
            setshowCounterButtons(false)
            setShowResetButton(true)
        } 
        setCount(count + 1)
    };

    const decrementCounter = () => { 
        if(count == 0) {    
            setShowDecreaseCount(false)
            setshowCounterButtons(false)
            setShowResetButton(true)
        }
        setCount(count - 1)
    };

    const resetCounter = () => {
        setCount(0);
        setShowIncreaseCount(true)
        setShowDecreaseCount(true)
        setshowCounterButtons(true)
        setShowResetButton(false)
    }
    
    return (
        <>
            <h1>Click Counter</h1> 
            {(showIncreaseCount && showDecreaseCount)  && (
                <div id="display-counter">{count}</div>
            )}

            {!showIncreaseCount && (
                <p className="display-error">You've reached the limit!</p>
            )}

            {!showDecreaseCount && (
                <p className="display-error">Counter value should not be less than zero!</p>
            )}

            {showCounterButtons && (            
                <div className="counter-btns">
                    <button className="green-btn" onClick={incrementCounter}>Increase</button>
                    <button className="red-btn" onClick={decrementCounter}>Decrease</button>
                </div>        
            )}

            {showResetButton && (            
                <div className="reset-btn">
                    <button className="gray-btn" onClick={resetCounter}>Reset</button>
                </div>    
            )}        
        </>
    );
}

export default ClickCounter;