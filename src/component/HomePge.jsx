import React from 'react'
import { Link } from 'react-router-dom'

const HomePge = () => {
  return (
    <div>

        <div className="container mt-5">
      <div className="card shadow-lg border-0 p-5 text-center">
        <h1 className="display-5 fw-bold text-primary">
          🚗 Car Rental Management System
        </h1>

        <p className="lead mt-3">
          Welcome to the Car Rental Management System.
        </p>

        <p>
          This application allows you to manage rental vehicles efficiently.
          Add new cars, view the complete fleet, and keep track of vehicle
          details using a simple and user-friendly interface.
        </p>

        <div className="mt-4">
           
          <Link to="/add">
            <button className="btn btn-primary btn-lg me-3">
              Add Car
            </button>
          </Link>

          <Link to="/cars">
            <button className="btn btn-outline-primary btn-lg">
              View Cars
            </button>
          </Link>
        </div>
      </div>
    
    </div>




    </div>
  )
}

export default HomePge