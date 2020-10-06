import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import { MdArrowBack } from "react-icons/md";

const User = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    purpose: "",
    gate: "",
    dates: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  const downloadPdf = () => {
    //First Name
    const fname = "First Name: " + user.firstName;
    //Last Name
    const lname = "Last Name: " + user.lastName;
    //Email
    const email_add = "Email Address: " + user.email;
    //Phone Number
    const phone = "Phone Number: " + user.phone;
    //Purpose
    const purp = "Purpose of entry: " + user.purpose;
    //Gate number
    const gatee = "Gate no.: " + user.gate;
    //Datetime of entry
    const datet = "Date and Time of Entry: " + user.dates;

    var doc = new jsPDF("p", "pt");
    doc.text(30, 45, "Gate Entry Pass for the person - ");
    doc.text(30, 74, fname);
    doc.text(30, 94, lname);
    doc.text(30, 114, email_add);
    doc.text(30, 134, phone);
    doc.text(30, 154, purp);
    doc.text(30, 174, gatee);
    doc.text(30, 194, datet);
    doc.save("generated.pdf");
  };

  return (
    <div className="container py-4">
      <div class="row">
        <div class="col">
          <h2 className="display-5">User ID: {id}</h2>
        </div>
        <div class="col right-align">
          <Link className="btn btn-primary btn-lg special mr-2" to="/home">
            <MdArrowBack />
          </Link>
          <Link className="btn btn-primary mr-2" onClick={() => downloadPdf()}>
            Generate/Download Gatepass! (PDF)
          </Link>
        </div>
      </div>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">
          {" "}
          <span className="boldness">First Name</span> - {user.firstName}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Last Name</span> - {user.lastName}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Phone no.</span> - {user.phone}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Email Address</span> - {user.email}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Gate no.</span> - {user.gate}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Date & Time of entry</span> - {user.dates}{" "}
        </li>
        <li className="list-group-item">
          {" "}
          <span className="boldness">Purpose of visiting</span> - {user.purpose}{" "}
        </li>
      </ul>
    </div>
  );
};

export default User;
