import React from "react";
import logoNav from "../images/logo-nav.png";
import CartWidget from './CartWidget';

const itemsDropdown = ['Remeras', 'Peluches', 'Almohadas'];

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> <img src={logoNav} alt="logo" height={32}/> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">                  
                {
                      itemsDropdown.map(item => {  
                        return (
                              <li><a class="dropdown-item" href="#">{item}</a></li>   
                        )
                      })
                }
                </ul>
              </li>

              <li class="nav-item position-absolute end-0">
                <a class="nav-link" href="#"> <CartWidget/> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
};

export default Navbar;