import {Routes,Route,Link} from "react-router-dom";
import './Footer.css';
function Footer(){
    return(
        <>
<footer>
  <img src="https://www.w3schools.com/whatis/img_react.jpg" class="fa-solid fa-envelopes-bulk fa-spin"></img>
  <p class="quote">Knowedge depends on calmness of mind</p>
  <div class="icons">
  <a href="https://www.facebook.com/nrtenggcollege/"><i class="fa-brands fa-facebook fa-spin"></i></a>&nbsp;&nbsp;
  <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube fa-spin"></i></a>&nbsp;&nbsp;
  <a href="https://www.google.com/"><i class="fa-brands fa-google fa-spin"></i></a>&nbsp;&nbsp;
  <a href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter fa-spin"></i></a>&nbsp;&nbsp;
  <a href="https://github.com/"><i class="fa-brands fa-github fa-spin"></i></a>
      
      </div>
      &nbsp;
  <a href="mailto:yasaswinibollineni25@gmail.com"><i class="fa-solid fa-envelopes-bulk fa-spin"></i>Contact Yashu</a>
</footer>
</>
 );
}
export default Footer;