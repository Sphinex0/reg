import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="nav-item nav-link" to="/">Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link class="nav-item nav-link" to="/contact">contact</Link> 
      
    </div>
  </div>
</nav>
            
        </div>
    );

}
export default Nav;