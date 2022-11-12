import React from 'react'
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import  {useEffect ,useState} from 'react';
const key="2487038adcb585d8971a01ba877c89b1"

const GetTreding=()=>{

  
  
  return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
  
}

const Rowtwo=({title,rowId})=> {

  const [movie, setmovies] = useState([]);
  
  
 

  useEffect(() => {
    GetTreding().then((res)=>{
      console.log(res.data.results)
      setmovies(res.data.results)
    })
   
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById('slider '+rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  

  return (

    <>
      
      <h1 style={{color:"white",height:"40px",top:"-240px",textAlign:"start",position:"relative"}}>Upcoming</h1>
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
          height:"230px",
          display:"flex",
          flexFlow:"wrap",
          flexDirection:"column",
          // overflowX:"scroll",
          // overflowY:"hidden",
          overflow:"hidden",
      
          
          marginBottom:"250px",
          // msOverflowY:""
          
          
          
          
          // flexDirection:"column",
          
          }}>

          
     
          {movie.map((item, id) => (
            <div style={{margin:"10px",width:"20%" ,height:"200px"}}>
                  <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} width="90%"  height="200px" key={id?.id}></img>
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
export default Rowtwo
