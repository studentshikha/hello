import { useState } from "react";
import Button from "./Button";

 const arr =["+", "-", "*", "/"];

const Calculator = ()=>{

    const [num1 , setNum1] = useState("");
    const [num2 , setNum2] = useState("");
    const [success , setSuccess] = useState("");
    const [error, setError] = useState(false) 
    console.log(num1, num2);


    const handleAdd=()=>{
        if(!num1 || !num2){
            setError(true);

        }
        const result =  Number(num1) + Number(num2); 
        console.log(result)
        setSuccess(result);
    }
    const handleRemove=()=>{
        const result1 =  Number(num1) - Number(num2); 
        console.log(result1)
        setSuccess(result1);
    }
    const handleMul=()=>{
        const result2 =  Number(num1) *  Number(num2); 
        console.log(result2)
        setSuccess(result2);
    }
    const handleDi=()=>{
        const result3 =  Number(num1) / Number(num2); 
        console.log(result3)
        setSuccess(result3);
    }

    return(
        <div>

        <input type="text" placeholder="num1" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <input type="text" placeholder="num2" value={num2} onChange={(e)=>setNum2(e.target.value)}/>


        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
        <button onClick={handleMul}>*</button>
        <button onClick={handleDi}>/</button>
        <p>{success}</p>
        {error && <p>num1 is not right</p>}
        {/* {
            arr.map((btn) =>(
                <Button btn={btn}/>
            ))
        }
        */}
        </div>
    )
}
export default Calculator;