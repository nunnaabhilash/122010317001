// App.js
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/home";
// import Login from './Components/login';
// import Signup from "./Components/signup";

function App() {
  return (
    <>
    <Home/>
      {/* <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>

      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link> */}
    </>
  );
}

export default App;
