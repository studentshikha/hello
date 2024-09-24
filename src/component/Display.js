import { useState } from "react";

const Display = ()=>{


 const [list,setList] = useState([]);
 const[input , setInput] = useState("");
 const [edit , setEdit] = useState("")

    const handleAdd=()=>{
setList([...list, input] )
setInput("")
    }

    const handleChange=(event,)=>{
        setInput(event.target.value);
        console.log(input);
    }
    const handleDelete = (index)=>{
        const del  = list.filter((item , i)=> i!==index);
        setList(del);
    }
    const handleEdit = (index)=>{
   setEdit(index);
    }

    
   return (
        <div>
               <input value={input} type="text" onChange={handleChange}/>
               <button onClick={handleAdd}>add item</button>

               {
list.map((item, index)=>
<ul>
    <li>
            {edit==index ? <input type="text"/> : {item} }
    <button onClick={() =>handleDelete(index)}>delete item</button>
    <button onClick={() =>handleEdit(index)}>edit</button>
    </li>
</ul>)
               }
        </div>
    )
}
export default Display;