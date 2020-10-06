import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="container main-page py-5">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Apply for a Gatepass</h5>
              <p class="card-text">
                <ul>
                  <li>Apply for Gatepass by filling the application form.</li>
                  <li>
                    Your application will be reviewed, if accepted, PDF version
                    of your gatepass will be made available
                  </li>
                  <li>
                    Gatepass applications can also be declined and deleted by
                    Admins if applicant is found to be unsuitable
                  </li>
                </ul>
              </p>
              &nbsp; &nbsp;{" "}
              <Link to="/users/add">
                Click here to apply for Gate-Entry Pass now!
              </Link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Admin Panel (Review Applications)</h5>
              <p class="card-text">
                Password Protected Administration Panel to review gate entry
                pass applications. Admin of the system has the authority to view
                applications and generate PDF versions of Gate-Entry Passes.
                Admin also has the authority to decline/delete gatepass
                applications!
              </p>
              <div className="blank-space"></div>
              <Link to="/login" class="btn btn-primary">
                Go to the Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
