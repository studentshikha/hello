import { useEffect, useState } from "react"
import "./style.css"

const light =
{
    green: "green",
    yellow: "yellow",
    red:" red"
};

const Traffic =()=>{
    const [active , setActive] = useState(light.green);


   useEffect(()=>{
        
      if(active == light.green){
        setTimeout(()=>{
       setActive(light.yellow)
        }, 2000)
      }else if(active== light.yellow){
        setTimeout(()=>{
            setActive(light.red)
             }, 2000)
      }
      else if(active== light.red){
        setTimeout(()=>{
            setActive(light.green)
             }, 1000)
      }
   }, [active])


    return (
        <div className="wrapper">
            <div 
            className=" light green"
            style={active == light.green ? null : {opacity:.2}}
            >A</div>
            <div 
            style={active == light.yellow ? null : {opacity:.2}}
            className=" light yellow">B</div>
            <div 
            style={active == light.red ? null : {opacity:.2}}
            className=" light red">C</div>
        </div>
    )
}
export default Traffic;