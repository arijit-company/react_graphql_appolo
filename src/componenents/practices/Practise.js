import React, { useCallback, useEffect, useState } from 'react'

const Practise = () => {
    const [input, setValue] = useState('');

    const [r, setR] = useState(1);

    // const nameFunc = () => input;

    const nameFunc = useCallback(() => input,[input]);

  return (
    <div>
        <input type="text"
        value={input}
        onChange={(e) => setValue(e.target.value)}
         />

         <div onClick={()=> setR(prev => prev + 1)}>Increament</div>
         <span>{r}</span>
         <DisplayName nameFunc={nameFunc}/>
    </div>
  )
}

export default Practise;

const DisplayName = ({nameFunc}) => {
    const [name, setName] = useState('')
    useEffect(()=>{
        setName(nameFunc());
        console.log('rendered');
    }, [nameFunc])
    return <h3>name: {name}</h3>
};


// useCallback returns a memoize function and useMemo returns a memoize value.