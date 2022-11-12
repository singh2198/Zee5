import React from 'react'
import axios from 'axios';
import {motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import  {useEffect ,useState} from 'react';
const key="2487038adcb585d8971a01ba877c89b1"

const GetTreding=()=>{

  
  
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`)
  
}

const Rowthree=({title,rowId})=> {

  const [movie, setmovies] = useState([]);
  
  
 

  useEffect(() => {
    GetTreding().then((res)=>{
      console.log(res.data.results)
      setmovies(res.data.results)
    })
   
  }, []);


  // let box=document.getElementsByClassName('scroll')

  const slideLeft = () => {
  
    var slider = document.getElementById('slider'+ rowId);
    // console.log(slider)
    slider.scrollRight =    slider.scrollRight -500;

  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    // console.log(slider)
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  return (

    <>
      
      <h1 style={{color:"white",height:"40px",top:"-240px",textAlign:"start",position:"relative"}}>Horror</h1>
      <div style={{position:"relative",textAlign:"center",margin:""}}>
      

        

      
        
        <MdChevronLeft
          onClick={slideLeft}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.7",cursor:"pointer",top:"71"}}
          size={60}
            />




      

        <div
          id={'slider' + rowId}
          style={{
          marginTop:"-220px",
          // display:"flex",
          height:"160px",
          display:"flex",
          flexFlow:"wrap",
          flexDirection:"column",
          // overflowX:"scroll",
          // overflowY:"hidden",
          overflow:"hidden",
          scrollBehavior:"smooth",
          marginBottom:"54px",
          // backgroundColor:"lightbrown"
          
          }}
          
          >

          
     
          {movie.map((item, id) => (
            <div style={{margin:"10px",
            width:"20%" ,
            height:"200px",
            boxShadow:"rgba(3, 102, 214, 0.3) ",
            }}>
                  <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} width="90%"  height="250px" key={id?.id}></img>
                  <p style={{color:"white",fontFamily:"inherit",color:"grey"}}>{item.title}</p>
            </div>
            
          ))}

          
        
        </div>

      


        <MdChevronRight
          onClick={slideRight}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.7",cursor:"pointer",top:"71",left:"950"}}
          size={60}/>

      </div>
        
    </>
    
  )
}
export default Rowthree
