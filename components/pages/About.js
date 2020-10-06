import React, { Component } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container accn-box">
      <div className="py-5">
        <h1>&nbsp;About page</h1>
        <div className="accordion py-3" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Gate-Entry Pass Application
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Apply for Gatepass by filling the application form. <br />
                Your application will be reviewed, if accepted, PDF version of
                your gatepass will be made available. Gatepass applications can
                also be declined and deleted by Admins if applicant is found to
                be unsuitable
                <br />
                <br />
                <Link to="/users/add">Click here to apply for a Gatepass!</Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Admin Panel (Reviewing Applications)
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Password Protected Administration Panel to review gate entry
                pass applications. Admin of the system has the authority to view
                applications and generate PDF versions of Gate-Entry Passes.
                Admin also has the authority to decline/delete gatepass
                applications!
                <br />
                <br />
                <Link to="/login">
                  Click here to Login into the administration panel
                </Link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  About this Web Application
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                Gate pass is simply a printed document that needs to be filled
                out by the person who wants to move out of the premises of the
                organisation. The person is supposed to fill out the necessary
                information including the purpose of travel to get approval.
                <br />
                <br />
                This web application made using React JS serves the purpose of a
                Gatepass system. The web application is simplistic, minimal and
                responsive in design and has all the necessary features required
                to support the back-end of this system.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
