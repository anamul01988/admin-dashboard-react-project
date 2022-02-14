import React from "react";
import { useState, useEffect } from "react";
import Userpages from "../userPages/UserPages";
import "./Pages.css";

const Pages = () => {
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchData = () => {
    if (searchTerm === "") return record;
    return record.filter((val) =>
      val.username?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const HandleSearch = (e) => {
    e.preventDefault();
    console.log(record);
  };

  return (
    <div>
      <div className="content-dashboard mt-5 mb-5">
        <div className="dashboard-content-title d-flex justify-content-between ">
          <h5 class="mt-3 mb-3 text-secondary">Check Records of Employees</h5>

          <div className="search">
            <form className="search-box" onSubmit={HandleSearch}>
              <input
                className="inputField mt-3"
                type="search"
                placeholder="Search for an userName: "
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
            </form>
          </div>
        </div>

        <div>
          <div className="table-responsive">
            <table className="table">
            <thead class="thead-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchData()
                .slice(0, 10)
                .map((output) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td><span class="edit">Edit</span> | <span class="delete">Delete</span></td>
                 
                  </tr>
                ))}
            </tbody>

              </table>
          </div>
        </div>

        {/* <div className="table-responsive">
  
          <table class="table table-striped">
            <thead class="thead-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {searchData()
                .slice(0, 10)
                .map((output) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td><span>Edit</span> | <span>Delete</span></td>
                 
                  </tr>
                ))}
            </tbody>
        
          </table>

       
        </div> */}
      </div>

      <Userpages />
    </div>
  );
};

export default Pages;
