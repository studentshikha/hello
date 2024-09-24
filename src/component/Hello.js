import { useEffect, useRef, useState } from "react";

const Hello =()=>{

const [count, setCount] = useState(0) 

// const [intervalId , setIntervalId] = useState("")
const  intervalId = useRef("");
const [isRunning , setIsRunning] = useState("")
useEffect(()=>{

    if(isRunning== "start"){
                                                                  
    intervalId.current =  setInterval(()=>{
            setCount(count => count+1)
        },1000) 
    }
   if(isRunning == "pause"){
    clearInterval(intervalId.current);
   }
    if(isRunning == "reset"){
    setCount(0);
    clearInterval(intervalId.current);
   }
},[isRunning])


    return(
    <div className="">
        count  : {count}
        <button onClick={()=>setIsRunning("start")}>start</button>
        <button onClick={()=>setIsRunning("pause")}>pause</button>
        <button onClick={()=>setIsRunning("reset")}>reset</button>
      
</div>
    )
}

export default Hello;