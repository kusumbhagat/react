import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(100);

    return (
        <>
      <div id="counter">conter = {count}</div>
      <button onClick={()=> setCount(count + 1)}> Click me </button>
        </>
    )
  }
  
export default Counter