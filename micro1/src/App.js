import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

function App(props) {
  console.log("🚀 ~ file: App.js ~ line 6 ~ App ~ props", props)
  return (
    <div className="App">
      <button onClick={() => props.history.push('/about')}>跳转</button>
    </div>
  );
}

export default withRouter(App);
