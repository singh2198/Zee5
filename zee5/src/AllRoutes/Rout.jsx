import { Routes ,Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "../Pag/Home";
import Movies from "../Pag/Movies";
import Show from "../Pag/Show";


const Rout=()=>{

    return(
        <div>
            <Routes>

                <Route path="/" element={<Home/>}></Route>
                <Route path="/Movies" element={<Movies/>}></Route>
                <Route path="/Shows" element={<Show/>}></Route>

            </Routes>
        </div>
    )
}
export default Rout