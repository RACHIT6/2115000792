import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [companyName, setcompanyName] = useState();
    const [ownerName, setownerName] = useState();
    const [rollNo, setrollNo] = useState();
    const [ownerEmail, setownerEmail] = useState();
    const [accessCode, setaccessCode] = useState();
    const navigation = useNavigate();


    const  handleSumit = (e) => {
        e.preventDefault();
        axios.post('http://20.244.56.144/test/register', {companyName, ownerName, rollNo, ownerEmail, accessCode})
        .then((result) => {console.log(result)
        navigation('/')})
        .catch((err) => console.log(err))
    }
  return (
    <>
      <div className="container mh-100 my-5 text-center " style={{"background" : "white", "height" : "30rem"}}>
        <h3 className="my-5">REGISTER</h3>
        <form onSubmit={handleSumit}>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label ">companyName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setcompanyName(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label ">ownerName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setownerName(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label ">rollNo</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setrollNo(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label">ownerEmail</label>
            <input
              type="email"
              className="form-control form-group-sm"
              id="exampleInputPassword1"
              onChange={(e) => setownerEmail(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label">accessCode</label>
            <input
              type="password"
              className="form-control form-group-sm"
              id="exampleInputPassword1"
              onChange={(e) => setaccessCode(e.target.value)}
            />
          </div>
          <div className="align-self-end ml-auto" style={{"bottom" : "0"}}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
