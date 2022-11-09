import Navigation from "../AllRoutes/Nav"





const Navbar=()=>{


    return(
        <>

        <div style={{display:"flex" ,justifyContent:"space-between", backgroundColor:"black", height:"60px"}}>
            <div style={{display:"flex" ,justifyContent:"space-around"}}>

                 
                <img src="https://s3images.zee5.com/wp-content/uploads/sites/7/2021/05/pjimage-2020-03-26T111802.250.jpg" width="90px"></img>
                <Navigation/>
            </div>

            <div style={{border:"2px solid", width:"50%" ,display:"flex" ,justifyContent:"space-evenly"}}>
                <input type="text"  placeholder="Search" style={{height:"22px" ,marginTop :"8px",width:"40%"}} />
                <button style={{height:"26px" ,marginTop :"8px",width:"50px"}}>Login </button>
                <button style={{height:"26px" ,marginTop :"8px",width:"70px"}}>Buy Plan</button>
            </div>

        </div>

           
        </>
    )
}
export default Navbar