// useCallback returns a memoized function

import React, { useEffect, useState, useCallback } from 'react'

const UseCallbackPractise = () => {
    const [input, setInput] = useState('');

    const [result, setResult] = useState(0);

    const [num1] = useState(4);
    const [num2] = useState(6);
    // let num1 = 6,
    // num2 = 4;

    const sum = useCallback(() => {
       return num1 + num2
    },[num1, num2]);


    // const bindArr = () => [num1, num2];
    const bindArr = useCallback(() => {
        return [num1, num2];
    },[num1, num2]);

    useEffect(()=>{
        console.log(`new Sum Value : ${sum()}`);

        //it doesn't created endless loop cause , return value of sum() is a premitive data type. useState doesnt updating it, and component not renedering again 
        // setResult(sum());

        //if we use any non primitive data types , such as array or objects, it will create an endless loop. see the below useEffect example.

    }, [sum]);

    //endless loop, cause it creates a non-primitive value on every render, which isn't same with previous one
    useEffect(()=>{
        setResult(bindArr());
        console.log(result);
    }, [bindArr])



  return (
    <div>
        <input type="text" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />

        <h3>OutPut : {input || '--'} </h3>

    </div>
  )
}

export default UseCallbackPractise