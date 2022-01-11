import React, { useState } from 'react';



const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [counterPlus, setCounterPlus] = useState(0)
    const [counterMinus, setCounterMinus] = useState(0)

  
   
    function increment(){
        setCounter((prevState) => prevState+1)
        setCounterPlus(counterPlus + 1)
    }
    function decrement(){
        setCounter(counter-1)
        setCounterMinus(counterMinus + 1)
    }

 


    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>+</button>
            <button onClick={decrement} className='btn btn-danger'>-</button>
            <p>Вы нажали + {counterPlus} раз(а)</p>
            <p>Вы нажали - {counterMinus} раз(а)</p>
            
        </div>
    );
};

export default Counter;