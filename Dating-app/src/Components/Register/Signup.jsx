import React, { useState } from "react";
import axios from 'axios'

export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const  handleSumit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/', {email, password})
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
    }
  return (
    <>
      <div className="container my-3">
        <form action="/register" method="POST">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
