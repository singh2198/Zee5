import { useState } from "react"
import axios  from "axios"
import { useEffect } from "react"

export const GetSliderimg=()=>{

    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2487038adcb585d8971a01ba877c89b1')
    
}

const Home=()=>{
    const [movie,setmovie]=useState([])
    const movi = movie[Math.floor(Math.random() * movie.length)];

    useEffect(()=>{
        GetSliderimg().then((el)=> {
            console.log(el.data.results)
            setmovie(el.data.results)
        })
        
        
    },[])

    return(
        <div style={{display: "grid",
        gridTemplateColumns: '3fr 3fr' ,
        gap:"10"
        }}>
            {movie.map((el)=>{
                return (

                    <div style={{height:"350px", width:"40px"}}>
                        
                        <img src={`https://image.tmdb.org/t/p/original/backdrop_path}`}width="153px"></img>
                        {/* <p>{el.Title}</p>
                        <p>{el.Year}</p> */}
                    </div>
                )
            })}
        </div>
    )

    
}
export default Home