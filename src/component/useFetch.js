import { useEffect, useState } from "react";


const useFetch = () =>{


 const [api , setApi] = useState([]);
 const [loading , setLoading] = useState(false);
 const [error , setError] = useState("")

 
 useEffect(()=>{
  fetchs()
   },[])


   const fetchs = async()=>{
    try
    {
        setLoading(true);
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await data.json()
       setApi(json);
      
    }
    catch(error)
    {
           setError(error);
    } 
    finally
    {
        setLoading(false);
    }
  
  }


 
return {api ,error ,loading };
}
export default useFetch;
