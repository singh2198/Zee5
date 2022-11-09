import { useState } from "react"
import axios  from "axios"
import { useEffect } from "react"

export const GetSliderimg=()=>{

    return axios.get("http://www.omdbapi.com/?apikey=bc5b4794&s=race")
}

const Home=()=>{
    const [slider,setslide]=useState("")

    useEffect(()=>{
        GetSliderimg().then((el)=> {console.log(el.data)})
        setslide(slider)
        
    },[slider])

    return(
        <h2></h2>
    )
}
export default Home