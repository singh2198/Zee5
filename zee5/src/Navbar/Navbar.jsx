import Navigation from "../AllRoutes/Nav"





const Navbar=()=>{


    return(
        <>

        <div style={{display:"flex"
         ,justifyContent:"space-between", 
          height:"60px",border:"1px solid red",
          position:"static",
          top:"50px",
          opacity:"1"
          
          
          }}>
            <div style={{display:"flex" ,justifyContent:"space-around",position:"relative"}}>

                 
                <img src="https://s3images.zee5.com/wp-content/uploads/sites/7/2021/05/pjimage-2020-03-26T111802.250.jpg" width="90px"></img>
                <Navigation/>
            </div>

            <div style={{border:"2px solid", width:"50%" ,display:"flex" }}> 
                {/* <input type="text"  placeholder="Search" style={{height:"22px" ,marginTop :"8px",width:"40%"}} /> */}
                <button style={{height:"26px" ,marginTop :"8px",width:"50px"}}>Login </button>
                <button style={{height:"26px" ,marginTop :"8px",width:"70px"}}>Sign UP</button>
            </div>

        </div>

           
        </>
    )
}
export default Navbar