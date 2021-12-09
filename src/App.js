import "./App.css";
import React from "react";
import Chadar from "./pages/chadar/chadar";
import Home from "./pages/home/home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import Gangotri from "./pages/gangotri/gangotri";
import Goechala from "./pages/goechala/goechala";
import Kuari from "./pages/kuari/kuari";
import Ladhakh from "./pages/ladhakh/ladhakh";
import Nanda from "./pages/nanda/nanda";
import Roopkund from "./pages/roopkund/roopkund";
import Aboutus from "./pages/aboutus/aboutus";
import Valley from "./pages/valley/valley";
class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/chadar" element={<Chadar />} />
        <Route exact path="/ladhakh" element={<Ladhakh />} />
        <Route exact path="/gangotri" element={<Gangotri />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/goechala" element={<Goechala />} />
        <Route exact path="/roopkund" element={<Roopkund />} />

        <Route exact path="/kuari" element={<Kuari />} />
        <Route exact path="/valley" element={<Valley />} />

        <Route exact path="/nanda" element={<Nanda />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    );
  }
}

export default App;
