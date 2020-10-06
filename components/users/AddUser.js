import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    purpose: "",
    gate: "",
    dates: "",
  });

  const { firstName, lastName, phone, email, purpose, gate, dates } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="containers border shadow ">
      <h2 className="py-3">Apply for Gatepass</h2>
      <form
        className="input-form"
        autocomplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="form-row">
          <div className="col">
            <input
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col">
            <input
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col">
            <input
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select
              name="gate"
              value={gate}
              className="form-control select-input"
              onChange={(e) => onInputChange(e)}
            >
              <option selected="selected">Select Gate number</option>
              <option>Gate 1</option>
              <option>Gate 2</option>
              <option>Gate 3</option>
              <option>Gate 4</option>
            </select>
          </div>
          <div className="col">
            <input
              type="datetime-local"
              className="form-control"
              name="dates"
              value={dates}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <input
          name="purpose"
          className="form-control"
          placeholder="Purpose of Visit"
          value={purpose}
          onChange={(e) => onInputChange(e)}
        />
        <button className="btn btn-primary btn-block">
          Apply for gatepass
        </button>
      </form>
    </div>
  );
};

export default AddUser;
