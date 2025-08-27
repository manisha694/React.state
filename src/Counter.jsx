import {useState} from 'react';

export default function Counter() {
    let [count , setCount] = useState(0);
    
let increment = () => {
        setCount(count + 1);

    };
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
    }
        