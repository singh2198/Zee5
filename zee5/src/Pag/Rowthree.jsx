import React from 'react'
import axios from 'axios';
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
      
      {/* <h1 style={{color:"white",border:"1px solid red" ,height:"70px",position:"-webkit-sticky",top:"-700px",textAlign:"start"}}>Trending</h1> */}
      <div style={{position:"relative",textAlign:"center",margin:""}}>
      
        
        <MdChevronLeft
          onClick={slideLeft}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.5",cursor:"pointer",top:"-23"}}
          size={60}
            />

      
        <div
          id={'slider' + rowId}
          style={{border:"1px solid red",
          marginTop:"-220px",
          height:"280px",
          display:"flex",
          flexFlow:"wrap",
          flexDirection:"column",
          // overflowX:"scroll",
          overflowY:"hidden",
      
          
          marginBottom:"250px",
          // msOverflowY:""
          
          
          
          
          // flexDirection:"column",
          
          }}>

          
     
          {movie.map((item, id) => (
            <div style={{margin:"10px"}}>
                  <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} width="90%"  height="200px" key={id?.id}></img>
                  <p style={{color:"white",fontFamily:"inherit",color:"grey"}}>{item.title}</p>
            </div>
            
          ))}

          
        
        </div>


        <MdChevronRight
          onClick={slideRight}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.5",cursor:"pointer",top:"-23",left:"1200"}}
          size={60}/>

      </div>
        
    </>
    
  )
}
export default Rowthree
