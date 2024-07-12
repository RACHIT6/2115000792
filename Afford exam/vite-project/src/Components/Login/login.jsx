import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [companyName, setcompanyName] = useState();
  const [ownerName, setownerName] = useState();
  const [rollNo, setrollNo] = useState();
  const [ownerEmail, setownerEmail] = useState();
  const [accessCode, setaccessCode] = useState();
  const navigation = useNavigate();
  const [error, setError] = useState('');

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        companyName, ownerName, rollNo, ownerEmail, accessCode
      });
      if (response.data.success) {
        alert('Login successful!');
        navigation('/')
      } else {
          setError('Invalid username or password');
      }
  } catch (err) {
    setError('Invalid username or password');
  }
};

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
              onChange={(e) => setEmail(e.target.value)}
            />
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
