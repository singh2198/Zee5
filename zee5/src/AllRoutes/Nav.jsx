import { Link } from "react-router-dom";


const Navigation =()=>{

    return(
        <>

            <HStack spacing='30px'>
                <Box w='40px' h='40px' bg='' ml="20px">
                <Link to="/" color="white">Home</Link>
                </Box>
                <Box w='40px' h='40px' bg=''>
                <Link to="/Movies" color="white">Movies</Link>
                </Box>
                <Box w='40px' h='40px' bg=''>
                <Link to="/Shows" color="white">Show</Link>
                </Box>
            </HStack>




            {/* <div style={{display:"flex",justifyContent:"space-around"}}>
                
                
                
            </div> */}
            
        </>
    )
}
export default Navigation