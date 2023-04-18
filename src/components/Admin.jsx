import "../style/admin.css";
import { useState,useEffect } from "react";

const Admin = (props) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();
  const { employees, deleteEmployees, addUser } = props;

  return (
    <dev className="admin-input">
      <h3>Create User Here</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(event) => setLastname(event.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(event) => setPosition(event.target.value)}
        />
        <button
          className="btn-save"
          onClick={() => addUser(name, lastname, position)}
        >
          Save
        </button>
      </div>
      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.lastname}</td>
                  <td>{data.position}</td>
                  <td>
                    <button onClick={() => deleteEmployees(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </dev>
  );
};

export default Admin;
