import axios from 'axios';
import React, { useState } from 'react'

const AddCar = () => {
    const [input, setInput] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  })
  

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValues = () => {
    console.log(input);

    axios.post("https://host-demo-app.onrender.com/api/add-car", input)
        .then((response) => {
            console.log(response.data);
            alert("Car added successfully");
        })
        .catch((err) => {
            console.log(err.response.data);
            console.log(err.response.status);
        })
}
  return (
    

        <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Car</h2>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-3">
          <div className="col-md-6">
            <label>Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="registration_number"
              value={input.registration_number}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={input.brand}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>Model</label>
            <input
              type="text"
              className="form-control"
              name="model"
              value={input.model}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>Vehicle Type</label>
            <select
              className="form-select"
              name="vehicle_type"
              value={input.vehicle_type}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option>Hatchback</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>MUV</option>
              <option>Luxury</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Fuel Type</label>
            <select
              className="form-select"
              name="fuel_type"
              value={input.fuel_type}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>CNG</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Transmission</label>
            <select
              className="form-select"
              name="transmission"
              value={input.transmission}
              onChange={inputHandler}
            >
              <option value="">Select</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Seating Capacity</label>
            <input
              type="number"
              className="form-control"
              name="seating_capacity"
              value={input.seating_capacity}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>Rent Per Day</label>
            <input
              type="number"
              className="form-control"
              name="rent_per_day"
              value={input.rent_per_day}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={input.city}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label>Availability Status</label>
            <select
              className="form-select"
              name="availability_status"
              value={input.availability_status}
              onChange={inputHandler}
            >
              <option>Available</option>
              <option>Booked</option>
              <option>Maintenance</option>
            </select>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={readValues}>
              Add Car
            </button>
          </div>
        </div>
      </div>
    
    </div>

   
  )
}

export default AddCar