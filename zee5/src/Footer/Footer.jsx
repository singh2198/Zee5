import { Button, HStack } from '@chakra-ui/react'



export function Footer(){


    return(
        <>
            <div>

                <div style={{display:"flex",justifyContent:"space-evenly" ,width:"700px" , fontFamily:"revert" ,border:"1px solid red" }}>
                    <h5 style={{color:"white"}}>About us |</h5>
                    <h5  style={{color:"white"}}>Help Center |</h5>
                    <h5 style={{color:"white"}}>Privacy Policy |</h5>
                    <h5 style={{color:"white"}}> Terms of Use |</h5>
                    {/* <h5  className='text-white'> Preferences |</h5> */}
                    <h5 style={{color:"white"}}> Preferences |</h5>
                </div>

            </div>

            <div style={{display:"flex" ,flexDirection:"row",marginTop:"30px",marginLeft:"10px"}}>
                    <div style={{height:"300px" , width:"15%"}}>
                        <h3 style={{color:"white"}}>Pouplar Tv Shows</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Kumkum Bhagya</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Kundali Bhagya</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Bhagya Lakshmi</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Tujhse Hai Raabta</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Kyun Rishton Mein ka</h5>
                    </div>

                    <div style={{height:"300px" , width:"20%"}}>
                        <h3 style={{color:"white"}}>Preminum Movies</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Kya Meri Sonam Gupta Bewafa hai</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Helmet</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>200 Halla ho</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>14 Phere </h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Dial 100</h5>
                    </div>


                    <div style={{height:"300px" , width:"20%"}}>
                        <h3 style={{color:"white"}}>Pouplar Live Tv Channel</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Aaj Tak</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Zee News</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Zee TV HD</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>&TV HD</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Zee Marathi HD</h5>
                    </div>

                    <div style={{height:"300px" , width:"20%"}}>
                        <h3 style={{color:"white"}}>Pouplar Web Series</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>SunFlower </h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Jeet Ki Zid</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Bicchoo Ka Khel</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>State of Siege:26/11</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Naxalbari</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Tripling</h5>
                    </div>


                    <div style={{height:"300px" , width:"20%"}}>
                        <h3 style={{color:"white"}}>Bollywood Top Celebrities</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Sunny Leone</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Disha Patani</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Deepika Padukone </h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Salman Khan</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Nora Fatehi</h5>
                    </div>

                    <div style={{height:"300px" , width:"20%"}}>
                        <h3 style={{color:"white"}}>Games & News</h3>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Play</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>stories</h5>
                        <h5 style={{color:"grey" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Articles</h5>
                        {/* <h5 style={{color:"white" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Salman Khan</h5> */}
                        {/* <h5 style={{color:"white" ,fontFamily:"revert-layer",marginLeft:"10px", fontSize:"11px"}}>Nora Fatehi</h5> */}
                    </div>

            </div>

            {/* <div style={{textAlign:"center"}}>
                <h4 style={{color:"white"}}>
                    Connect with us
                </h4>
                <HStack>
                    <Button colorScheme='facebook' leftIcon={<Facebook />}>
                        Facebook
                    </Button>
                    <Button colorScheme='twitter' leftIcon={<Twitter />}>
                        Twitter
                    </Button>
                </HStack>
            </div> */}
        </>
    )

}