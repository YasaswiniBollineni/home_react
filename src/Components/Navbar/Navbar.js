import {Routes,Route,Link} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import './Navbar.css';

function Navbar(){
    return(
        <>
        <div class="navbar">
        <p><i class="fa-sharp fa-solid fa-y"></i>asaswini</p>
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