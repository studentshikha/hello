import { useEffect, useState } from "react";

const Todo = ()=>{
 const [todo, setTodo] = useState([]);
 const[search, setSearch] = useState("");
 const[currentPage , setCurrentPage]= useState(1);
 const pageSize = 10;
 

    useEffect(()=>{
      getData();
    }, []);

     const getData=async()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await data.json();
        setTodo(json);
        console.log(todo);
       
     };
     
     const filteredTodos = todo.filter((item)=>
        item?.title.toLowerCase().includes(search.toLowerCase())
     );

     const paginatedTodos = filteredTodos.slice(
        (currentPage - 1) * pageSize,  
        currentPage*pageSize
    );



const totalPages = filteredTodos.length/pageSize;
// 200/10 = 20btn


const handleBtn=(index)=>{
 setCurrentPage(index);
};
/**
 * 
 * 
 *  
 * 0, 1*10 = 10 => (0, 10)e
 * 10 , 2*10 = 20 => (10, 20)
 */

    return(
        <div>

            <input 
             type="text"
value={search}
onChange={(e)=>setSearch(e.target.value)}
placeholder="search by title"/>
      
    <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>  
                <th>Action</th>       
            </tr>
        </thead>
        <tbody>
                    {

                paginatedTodos?.map((item)=>(
                        <tr key={item.id}>
                        <td> {item?.userId} </td>
                        <td>{item?.id}</td>
                        <td>{item?.title}</td>
                       <td> {item?.completed ? "Yes" : "No"}</td>
                       <td><button>Edit</button></td>
                        </tr>
                    ))
                    }
              
            </tbody>
    </table>

    <div>
        {
 Array.from( {length : totalPages}, (_,index)=>(
    <button 
    onClick={() => handleBtn(index+1)}
    key={index}>{index+1}</button>
 ))
        }

    </div>
               </div>
    )
}
export default Todo;
// "https://jsonplaceholder.typicode.com/todos"