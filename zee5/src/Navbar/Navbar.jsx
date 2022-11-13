// import { border } from "@chakra-ui/react"
import Navigation from "../AllRoutes/Nav"
import { useAuth0 } from "@auth0/auth0-react";





const Navbar=()=>{
    const { loginWithRedirect,user  } = useAuth0();
    const {isAuthenticated} =useAuth0();
    
    const {logout } = useAuth0();
    console.log(isAuthenticated)


    return(
        <>

        <div style={{display:"flex"
         ,justifyContent:"space-between", 
          height:"55px",
          position:"fixed",
          overflow:"hidden",
          zIndex:"799",
          width:"100%",
          backgroundColor:"black"
        //   top:"20px",
        //   opacity:"1"
          
          
          }}>
            <div style={{display:"flex" ,justifyContent:"space-evenly",position:"relative"}}>

                 
                <img src="https://s3images.zee5.com/wp-content/uploads/sites/7/2021/05/pjimage-2020-03-26T111802.250.jpg" width="90px"></img>
                <Navigation/>
            </div>
            
            
            <div style={{ width:"50%" ,display:"flex" ,justifyContent:"end" }}> 
                {/* <input type="text"  placeholder="Search" style={{height:"22px" ,marginTop :"8px",width:"40%"}} /> */}

                {isAuthenticated ? <p style={{color:"white",textAlign:"center",paddingTop:"11px",marginRight:"5px",width:"90px",fontSize:"12px"}}>{user.name}</p>:<p style={{color:"white",textAlign:"center",paddingTop:"11px",marginRight:"5px",width:"90px",fontSize:"12px"}}>Profile</p>}

                { isAuthenticated ?
                 (<button style={{height:"26px"
                 ,marginTop :"8px",
                 width:"70px",
                 color:"white",
                 backgroundColor:"blueviolet",
                 borderRadius:"5px",
                 padding:"2px",
                 fontFamily:"fantasy",
                 fontSize:"15px"
                 
                //  border:"1px solid blue"
                 }}
                 onClick={() => logout({ returnTo: window.location.origin })}
                 >Log Out</button>) :

                 <button style={{height:"26px" 
                 ,marginTop :"8px",
                 width:"70px",
                 color:"white",
                 border:"1px solid grey",
                 fontFamily:"fantasy",
                 fontSize:"15px",
                 borderRadius:"4px",
                 backgroundColor:"blue",
                 color:"lightblue"
                 
                 }}
                 onClick={() => loginWithRedirect()}
                 >Login </button>
                

                }

                
                
                
                



                
            </div>

        </div>

           
        </>
    )
}
export default Navbar