import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-5">
        <h1>View Applications</h1>
        <div className="py-4">
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone no.</th>
                <th scope="col">Purpose of Visit</th>
                <th scope="col">Time of entry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.purpose}</td>
                  <td>{user.dates}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/users/${user.id}`}
                    >
                      View/Download
                    </Link>
                    <Link
                      className="btn btn-outline-danger special mr-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      <ImCross />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
