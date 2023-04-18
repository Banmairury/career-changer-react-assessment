import "../style/sector.css";
import { useState } from "react";
import User from './User'
import Admin from "./Admin";


const Sector = (props) => {
  

  return (
    <div className="sector">
      <button onClick={() => setShow}> User Home Sector</button>

      <button> Admin Home Sector</button>

      <User employees={employees}/>
      <Admin employees={employees}/>
      
    </div>
  );
};

export default Sector;
