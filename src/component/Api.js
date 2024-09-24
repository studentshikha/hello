

import useFetch from "./useFetch";


const Api =()=>{
// const API_URL = "https://www.swiggy.com/dapi//list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
const {api , error, loading} =  useFetch( );


    return(
    <div>
        {
            loading && <p>loading......</p>
        }
        {
            Array.isArray(api) && api?.map((user)=>(
                <p>{user.name}</p>
            ))
        }
        {
            error && <p>{error.message}</p>
        }
   
        
        </div>
    )
}

export default Api;