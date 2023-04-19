import Layout from "./components/Layout";
import "./style/home.css";
import { useState, useEffect } from "react";
import User from "./components/User";
import Admin from "./components/Admin";
import { v4 as uuidv4 } from 'uuid';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {

  const [employees, setEmployees] = useState([]);
  const [sector, setSector] = useState();

  useEffect(() => {
    setEmployees(mockEmployees);
  }, []);

  // กด สลับ User , Admin
  const switchSector = () => {
    if (sector === "admin") {
      return (
        <Admin
          employees={employees}
          deleteEmployees={deleteEmployees}
          addUser={addUser}
        />
      );
    } else if (sector === "user") {
      return <User employees={employees} />;
    } else {
      return <div>เชิญกดจ้า!!!!!</div>;
    }
  };

  // สลับHeader User , Admin
  const switchHeader = () => {
    if (sector === "admin") {
      return "Home - Admin Sector";
    } else if (sector === "user") {
      return "Home - User Sector";
    } else {
      return "React - Assessment";
    }
  };

  //เพิ่มรายชื่อ
  const addUser = (fname, lname, eposition) => {
    const newId = uuidv4();
    const newEmployees = [
      {
        id: newId,
        name: fname,
        lastname: lname,
        position: eposition,
      },
    ];
    setEmployees([...employees, ...newEmployees]);
  };

  //ลบรายชื่อ
  const deleteEmployees = (id) => {
    setEmployees(employees.filter((data) => data.id !== id));
  };

  return (
    <Layout>
      <h1>
        Generation Thailand <br />
        {switchHeader()}
      </h1>
      <div className="sector">
        <button onClick={() => setSector("user")}> User Home Sector</button>
        <button onClick={() => setSector("admin")}> Admin Home Sector</button>
      </div>
      {switchSector()}
    </Layout>
  );
};

export default Home;
