import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Enginner from "./pages/Enginner";

function App() {
  return (
    <Router>
      <Routes>
        <Route
        exact
        path="/"
        element= {
          <Suspense fallback={<div className="loader"></div>}>
            <Login />
          </Suspense>
        }
        />
      </Routes>
      <Routes>
        <Route
        exact
        path="/admin"
        element= {
          <Suspense fallback={<div className="loader"></div>}>
            <Admin />
          </Suspense>
        }
        />
      </Routes>
      <Routes>
        <Route
        exact
        path="/customer"
        element= {
          <Suspense fallback={<div className="loader"></div>}>
            <Customer />
          </Suspense>
        }
        />
      </Routes>
      <Routes>
        <Route
        exact
        path="/enginner"
        element= {
          <Suspense fallback={<div className="loader"></div>}>
            <Enginner />
          </Suspense>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
