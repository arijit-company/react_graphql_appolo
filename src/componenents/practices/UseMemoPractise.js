import React, {useCallback, useEffect, useMemo, useState} from 'react'


const UseMemoPractise = () => {
    const [input, setInput] = useState(0);
    const [randomValue, setRandomVal] = useState('');
    
    const factorial = useCallback((num) => {
        return (num <= 1) ? num : num * factorial(num - 1)
    }, []);
    const result = useMemo(() => factorial(input), [input, factorial]);

    useEffect(()=>{
        console.log('useEffect');
        console.log(result);
    }, [factorial])

  return (
    <div>
        <input type="number" 
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
         <h3>OutPut : {result || '--'} </h3>

         <label htmlFor="randomInput">Random Input</label>
         <input type="text" id='randomInput'
         value={randomValue}
         onChange={(e) => setRandomVal(e.target.value)}
         />
    </div>
  )
}

export default UseMemoPractise