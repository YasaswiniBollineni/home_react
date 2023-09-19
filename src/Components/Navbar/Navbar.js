import {Routes,Route,Link} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import './Navbar.css';

function Navbar(){
    let isLogin=true
    return(
        <>
        <div class="navbar">
       <img id="okkk" height="55px" width="65px" src="https://png.pngtree.com/png-vector/20200624/ourmid/pngtree-alphabet-letter-y-with-ornaments-and-flowers-hand-lettering-png-image_2265296.jpg" class="fa-solid fa-envelopes-bulk fa-spin"></img>      
        <nav>
        <ul>
          
    
        <li><Link to="/Home"><i class="fa-solid fa-house"></i>Home</Link></li>
        <li><Link to="/About"><i class="fa-solid fa-user"></i>About</Link></li>
        <li><Link to="/Contact"><i class="fa-solid fa-comment-sms"></i>Contact</Link></li>
        <li><Link to="/Login"><i class="fa-solid fa-right-to-bracket"></i>Login</Link></li>

 
    </ul>
    
    
        </nav>
    </div>
        
<Routes>
    <Route exact path='/Home' element={<Home/>}></Route>
    <Route exact path='/About' element={<About/>}></Route>
    <Route exact path='/Login' element={<Login/>}></Route>
    <Route exact path='/Contact' element={<Contact/>}></Route>
</Routes>

        </>
    );
}
export default Navbar;