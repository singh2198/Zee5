import { Link } from "react-router-dom";
import {  HStack,Box} from '@chakra-ui/react'


const Navigation =()=>{

    return(
        <>

            <HStack spacing='30px' >
                <Box w='40px' h='40px' bg='' ml="20px">
                <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
                </Box>
                <Box w='40px' h='40px' bg=''>
                <Link to="/Movies" style={{color:"white",textDecoration:"none"}}>Movies</Link>
                </Box>
                <Box w='40px' h='40px' bg=''>
                <Link to="/Shows" style={{color:"white",textDecoration:"none"}}>Show</Link>
                </Box>
            </HStack>




            {/* <div style={{display:"flex",justifyContent:"space-around"}}>
                
                
                
            </div> */}
            
        </>
    )
}
export default Navigation