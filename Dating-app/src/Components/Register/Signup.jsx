import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigate();


    const  handleSumit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {email, password})
        .then((result) => {console.log(result)
        navigation('/home')})
        .catch((err) => console.log(err))
    }
  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleSumit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
