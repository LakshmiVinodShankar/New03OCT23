import React, { useState, useMemo } from 'react';

function UseMemoDemo() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

//   Calculate a factorial using useMemo to memoize the result
  const factorial = useMemo (() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]); // Memoize when 'num' changes


// const  factorial=()=>{
//     console.log('Calculating factorial...');
//         let result = 1;
//         for (let i = 1; i <= num; i++) {
//           result *= i;
//         }
//         return result;
// }
  return (
    <div>
        <h1>Counter</h1>
      
       <button type="button" onClick={()=>{setCount(count+1)}}>Increment</button>
      <p>Count: 

  {count}
      </p>
      <hr/>
      <h1>Factorial Calculator</h1>
      <p>Calculate the factorial of:</p>
      <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
      <p>Factorial: 
   {/* { factorial()} */}
   {factorial}
      </p>
    </div>
  );
}

export default UseMemoDemo;
