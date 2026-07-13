import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationCar from './NavigationCar'

const ViewCar = () => {
     const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("https://host-demo-app.onrender.com/api/cars ").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationCar/>
        <div className="container mt-4">
      <h2 className="text-center mb-4">View All Cars</h2>

        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Reg No</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Type</th>
              <th>Fuel</th>
              <th>Transmission</th>
              <th>Seats</th>
              <th>Rent/Day</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((car, index) => (
              <tr key={index}>
                <td>{car.registration_number}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.vehicle_type}</td>
                <td>{car.fuel_type}</td>
                <td>{car.transmission}</td>
                <td>{car.seating_capacity}</td>
                <td>₹{car.rent_per_day}</td>
                <td>{car.city}</td>
                <td>{car.availability_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      


        </div>

    </div>
  )
}

export default ViewCar