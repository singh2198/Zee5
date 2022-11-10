import { useState } from "react"
import axios  from "axios"
import { useEffect } from "react"

export const GetSliderimg=()=>{

    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2487038adcb585d8971a01ba877c89b1')
    
}

const Home=()=>{
    const [movie,setmovie]=useState([])
    const movi = movie[Math.floor(Math.random() * movie.length)];
    console.log(movi)

    useEffect(()=>{
        GetSliderimg().then((el)=> {
            console.log(el.data.results)
            setmovie(el.data.results)
        })
        
        
    },[])

    return(
        <div>
            {/* {movie.map((el,index)=>{
                return (

                    
                )
            })} */}
            <div>
                        
                        <img src={`https://image.tmdb.org/t/p/original/${movi?.backdrop_path}`} alt={movi?.title} width="100%" height="550px" key={movi?.id}></img>
                        
                    </div>
        </div>
    )

    
}
export default Home