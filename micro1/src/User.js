import React from 'react';
import { Link } from "react-router-dom";

function User() {
  return (
    <div>
      Micro1 User Page
      <Link to="/about"> to micro About页面</Link>
    </div>
  );
}

export default User;
