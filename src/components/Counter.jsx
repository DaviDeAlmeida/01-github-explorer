import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0);
    function increment(){
        console.log("Entrou");
        setCount(count + 1);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={increment}>IncrementD</button>
        </div>
    );
}