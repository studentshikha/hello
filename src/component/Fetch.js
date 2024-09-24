import { useEffect, useState } from "react";

const Fetch= ()=>{

const [ dis, setDis] = useState(null);
const [country ,  setCountry] = useState("");

    useEffect(()=>{
           getData();  
    }, []);

    const getData= async()=>{
        try{
        const data = await fetch("http://disease.sh/v3/covid-19/countries/india");
        const json = await data?.json();
             console.log(json);
             setDis(json);
        }
        catch(error){
            console.log(error);
        }
    }
 

// useEffect(()=>{
// input();
// },[country]);

// const input=async()=>{
//     const data=await fetch(`http://disease.sh/v3/covid-19/countries/${country}`);
//  const json = await data.json();
// setDis(json);
// }


    return(
        <div>
            <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
            <button onClick={handleClick}>search</button>
{
    dis && (
        <div>{dis?.cases} {dis?.country}</div>
    )
    
}
       
        </div>
    )


}
export default Fetch;