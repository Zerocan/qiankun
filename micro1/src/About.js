import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      Micro1 About Page
      <Link to="/user"> to micro User页面</Link>
    </div>
  );
}

export default About;
