import React, {useState} from 'react';


const Calculator = () =>{
    const[valueA, setValueA] =useState (0);
    const[valueB, setValueB] =useState (0);
    const[Operation, setValueOperation] =useState ('');
    const[Result, setResult] =useState (0);

    const handleClear = () =>{
        setValueA('');
        setValueB('');
        setValueOperation('');
        setResult('');
    }

    const handleSubmit = () => {
        switch (Operation) {
            case '+':
                setResult(parseInt(valueA)+parseInt(valueB));
                break;
            case '-':
                setResult((valueA)-(valueB));
                break;
            case '*':
                setResult((valueA)*(valueB));
                break;
            case '/':
                setResult((valueA)/(valueB));
                break;
        
            default:
                break;
        }

    }

    return(
        <div>
            <h3>Simple Calculator</h3>
            <h5>Result: {Result} </h5>
            <div>
                <input type = 'text' value={valueA} onChange={(e) => setValueA(e.target.value)}/><br/>
                <input type = 'text' value={valueB} onChange={(e) => setValueB(e.target.value)}/><br/>
                <button onClick ={handleSubmit}> Submit</button>
                <button onClick ={handleClear}>Clear</button>
            </div>
            <div>
                <button onClick={()=>setValueOperation('+')}>+</button>
                <button onClick={()=>setValueOperation('-')}>-</button>
                <button onClick={()=>setValueOperation('*')}>*</button>
                <button onClick={()=>setValueOperation('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;

