import { useState } from "react"
import axios  from "axios"
import { useEffect } from "react"
import Row from "./Row"
// import requests from "../Request/Request"
import Rowtwo from "./Row2"
import Rowthree from "./Rowthree"



export const GetSliderimg=()=>{

    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2487038adcb585d8971a01ba877c89b1')
    
}

const Home=()=>{
    const [movie,setmovie]=useState([])
    // const [ishover,sethover]=useState(false)

    const movi = movie[Math.floor(Math.random() * movie.length)];
    // console.log(movi)

    let i=0
    i++

    // setInterval(GetSliderimg().then((el)=> {
    //         console.log(el.data.results)
    //         if(i==el.data.results.length){

    //             i=0
    //         }
    //         setmovie(el.data.results)
    //         i++
            
    //     }),4000)



    useEffect(()=>{

        GetSliderimg().then((el)=> {
            // console.log(el.data.results.length)
            setmovie(el.data.results)
        })
         
    },[])

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };



    return(
        <div>
            {/* {movie.map((el,index)=>{
                return (

                    
                )
            })} */}
            <div style={{position:"relative",top:"" }}>
                        <p text-3xl>helo</p>
                <img src={`https://image.tmdb.org/t/p/original/${movi?.backdrop_path}`} alt={movi?.title} width="100%"  height="550px" key={movi?.id}></img>
                        
            </div>

            <div style={{border:"1px solid red",top:"-350px",left:"20px",position:"relative",width:"30%"}}>
                <p style={{color:"white",marginTop:""}}>
                    Released: {movi?.release_date}
                </p>
                <p style={{color:"white"}}>
                {truncateString(movi?.overview, 150)}
                </p>
            </div>
                

            <div style={{display:"flex",border:"1px solid red",height:"80px" ,width:"40%",top:"-349px",left:"20px",position:"relative"}}>
                <button style={{color:"white",
                border:"1px solid grey",
                backgroundColor: "black",
                height:"40px",
                width:"90px",
                borderRadius:"4px",
                // marginTop:"-123px",
                fontFamily:"monospace",
                marginLeft:"",
                marginRight:"5px",
                padding:"2px",
                cursor:"pointer",
                
    
  
                }
                }>Watch</button>
                <button 
                 style={{color:"white",
                 border:"1px solid grey",
                 backgroundColor:"black",
                 height:"40px",
                 width:"90px",
                 borderRadius:"4px",
                //  marginTop:"-123px",
                 fontFamily:"monospace",
                 marginLeft:"",
                 marginRight:"5px",
                 padding:"",
                 cursor:"pointer"
 
                 }}
                >Buy Plan</button>
            </div>
            <Row rowId="1" title="Trending"/>
            <Rowtwo rowId="2" title="Popular"/>
            <Rowthree rowId="3" title="Horror"/>
            
            



        </div>
    )

    
}
export default Home