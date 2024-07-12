import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Signup() {
    const [companyName, setcompanyName] = useState();
    const [categoryName, setcategoryName] = useState();
    const [minPrice, setminPrice] = useState();
    const [maxPrice, setmaxPrice] = useState();
    const [data, setData] = useState([]);


    const  handleSumit = async (e) => {
      try {
        await axios.get(`http://20.244.56.144/test/companies/${categoryName}/categories/${categoryName}/products?top=10&minPrice=${minPrice}$maxPrice=${maxPrice}`).then((data)=> {setData(data); });
          
      } catch (error) {
        console.log(error);
      }
        
    }


  useEffect (()=>{
    handleSumit();
  }, [])
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
            <label className="form-label ">categoryName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setcategoryName(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label ">minPrice</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> setminPrice(e.target.value)}
            />
          </div>
          <div className="form-outline w-50 mx-auto my-3">
            <label className="form-label">ownerEmail</label>
            <input
              type="email"
              className="form-control form-group-sm"
              id="exampleInputPassword1"
              onChange={(e) => setmaxPrice(e.target.value)}
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
