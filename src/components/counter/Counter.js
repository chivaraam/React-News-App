import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)
    
    const increment = () =>{
        setCount(count + 1)
        console.log("increment")
        
    }
    const reset = () =>{
        setCount(0)
        console.log("Reset")
    }
    const decrement = () =>{
        setCount(count - 1)
        console.log("Decrement")
    }
  return (
    <div>
        <h2>{`Count is ${count}`}</h2>
        <button onClick={increment}>+</button>
        <button onClick={reset}>=</button>
        <button onClick={decrement}>-</button>
        
    </div>
  )
}

export default Counter