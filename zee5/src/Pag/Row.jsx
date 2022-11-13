import React from 'react'
import axios from 'axios';
import { FaHeart,  } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import  {useEffect ,useState} from 'react';
const key="2487038adcb585d8971a01ba877c89b1"

const GetTreding=()=>{

  
  
  return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`)
  
}

const Row=({title,rowId})=> {

  const [movie, setmovies] = useState([]);
  const [heart,setheart]=useState(false)
  const [hover ,sethover]=useState(false)
  // const [scrol , setscrol] =useState(false)


  

  const handlemouse=(el)=>{
      // console.log(el)
      // setscrol(true)
  }
  
  
 

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

  const handleHeart=()=>{
    setheart(true)
    sethover(true)
  }
  const handleHeartout=()=>{
    setheart(false)
    sethover(false)
  }
  

  return (

    <>
      
      <h1 style={{color:"white",height:"95px",top:"-130px",textAlign:"start",position:"relative",left:"16",fontSize:"19"}}>Trending</h1>
      <div style={{position:"relative",textAlign:"center",margin:"" ,width:"100%"}}>
      
        
        <MdChevronLeft
          onClick={slideLeft}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.7",cursor:"pointer",top:"55"}}
          size={60}
            />

      
        <div
          id={'slider' + rowId}
          style={{
          marginTop:"-180px",
          height:"200px",
          display:"flex",
          flexFlow:"wrap",
          flexDirection:"column",
          // color:scrol ? "pink":"",
          // overflowY:"hidden",      
          marginBottom:"250px",
          overflow:"hidden",
          
          
          
          
          }}
          onMouseEnter={handlemouse()}
          >

          
     
          {movie.map((item, id) => (
            <div style={{margin:"10px",width:"20%" ,height:"200px" ,cursor:hover? "pointer":""}}>

                  { heart ? <FaHeart style={{color:"red",position:"relative",top:"60px",margin:"auto"}} />:""} 
                  <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title}  style={{opacity:hover? 0.5:1}} width="100%"  height="200px" key={id?.id} onMouseOver={handleHeart} onMouseOut={handleHeartout} onClick={()=>{alert("Add to favourite ")}}></img>
                  <p style={{color:"white",fontFamily:"inherit",color:"grey"}}>{item.title}</p>
            </div>
            
          ))}

          
        
        </div>


        <MdChevronRight
          onClick={slideRight}
          style={{color:"white",position:"absolute",left:"0",opacity:"0.7",cursor:"pointer",top:"55",left:"950"}}
          size={60}/>

      </div>
        
    </>
    
  )
}
export default Row
