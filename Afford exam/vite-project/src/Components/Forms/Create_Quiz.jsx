import { React, useState } from "react";
import axios from "axios";

export default function Create_Quiz() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [NQues, setNQues] = useState(0);

  return (
    <form /* onSubmit={handleSubmit}*/>
      <div className="container ">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">No of Questions: </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setNQues(e.target.value)}
          />
        </div>

        <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
      </div>
    </form>
  );
}
