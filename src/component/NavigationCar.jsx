import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCar = () => {
  return (
    <div>

        <nav class="navbar navbar-expand-lg n1">
            <div class="container-fluid">
                
                <a class="navbar-brand" href="#">CAR BOOKING MANAGEMENT </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    
                    <Link class="nav-link active" aria-current="page" to="/">HOME PAGE </Link>
                    <Link class="nav-link" to="/add">ADD CAR</Link>
                    <Link class="nav-link" to="/view">VIEW CAR</Link>
                    
                </div>
                </div>
            </div>
        </nav>


    </div>
  )
}

export default NavigationCar