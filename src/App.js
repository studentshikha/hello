import React from "react";
import Hello from "./component/Hello";
// import Body from "./component/Body";
// import { createBrowserRouter } from "react-router-dom";
// import About from "./component/About";
// import Error from "./component/Error";
// import Contact from "./component/Contact"
// import { Outlet } from "react-router-dom"
// import ResturantMenu from "./component/ResturantMenu";



const App = ()=>{

    return (
        <div className="app">
            <Hello/>
           {/* <Body/> */}
        </div>
    )
}

// export const appRouter = createBrowserRouter([
//     {
//            path : "/",
//            element : <App/>,
//     //        children:[
//     // {
//     //         path : "/", 
//     //         element : <Body/>
//      },
//      {
//       path : "/about", 
//       element : <About/>
// },
// {
//     path : "/contact",
//     element : <Contact/>
// },
     
//     // {
//     //     path : "/resturants/:resId",
//     //     element : <ResturantMenu/>
//     // },

// ],
//           //  errorElement : <Error/>
// //     }
   
//  );



export default App;