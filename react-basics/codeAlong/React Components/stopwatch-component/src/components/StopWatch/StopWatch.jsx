import { useState, useEffect } from 'react';

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        console.log("Running side effect")
        let id;
        if (isRunning) {
            id = setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1);
                console.log('Tick');
            }, 1000);
        }
        return () => {
            clearInterval(id);
            console.log('clean up');
        }
    }, [isRunning]);

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{elapsedTime}</span>
            <button onClick={() => setIsRunning(prevValue => !prevValue)}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={() => setElapsedTime(0)}>Reset</button>
        </div>
    );
}

export default StopWatch;
