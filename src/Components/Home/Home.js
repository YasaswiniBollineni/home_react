import './Home.css';
import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div class="background-container">
    <div class="centered">
    <i class="fa-solid fa-spinner fa-beat-fade">  WELCOME TO MY <span class="color">PORTOFOLIO</span></i>
    </div> 
      <button class="btn"><a href="https://github.com/YasaswiniBollineni">Check Out!!!</a></button>
      <button class="btn"><a href="https://drive.google.com/file/d/1Wok_sx0i9MPZrr7BNZVi4liFM0e1-q7I/view?usp=sharing">Profile!!!</a></button>
      
      </div>
      
    </>
  );
}
export default Home;
