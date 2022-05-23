
import About from "./About";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import Service from "./Service";
// import './About.module.css'
import classes from "./Home.module.css"

const Home = () => {
  return (
<div className={classes.home}>
<div className="card bg-dark text-white border-0">
        <img
          src="/assets/truck.jpeg"
          className={classes.cardImg}
          alt="background"
          height="700px"
          
        />
 
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container ">
  <h1>
      WE MAKE  STRONGEST <br />
      SERVISE ABOUT THE WORLD 
  </h1>  

  <div className="buttons d-flex justify-content-center mt-4">


  <NavLink  type="button" id={classes.btn1} to="./service" className="btn btn-outline-light me-3">OUR SERVISE</NavLink> 
  <NavLink  type="button" id={classes.btn2} to="./service" className="btn btn-outline-light ">GET A QUATE</NavLink> 

  </div>
          </div>
        </div>
      </div>

      <About />
      <Service/>
      <Contact/>
  
</div>


  );
};
export default Home;
