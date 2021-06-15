import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/about">micro1</Link>
      <br/>
      <Link to="/micro2">micro2</Link>
    </div>
  );
}

export default App;
