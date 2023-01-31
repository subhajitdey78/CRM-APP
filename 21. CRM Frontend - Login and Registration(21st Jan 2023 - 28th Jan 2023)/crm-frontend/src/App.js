import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer";
import Enginner from "./pages/Engineer";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <Router>
      <Routes>
        <Route
        exact
        path="/"
        element={
          <Suspense fallback={<div className="loader">Wait</div>}>
            <Login />
          </Suspense>
        }
        />
        <Route 
         exact
         path="/unauthorized"
         element={
          <Suspense fallback={<div className="loader"></div>}>
            <Unauthorized />
          </Suspense>
        }
        />
        <Route
        exact
        path="/admin"
        element={
          <Suspense fallback={<div className="loader">Wait</div>}>
            <Admin />
          </Suspense>
        }
        />
        <Route
        exact
        path="/customer"
        element={
          <Suspense fallback={<div className="loader">Wait</div>}>
            <Customer />
          </Suspense>
        }
        />
        <Route
        exact
        path="/engineer"
        element={
          <Suspense fallback={<div className="loader">Wait</div>}>
            <Enginner />
          </Suspense>
        }
        />
        <Route
        path="/*"
        element={
          <Suspense fallback={<div className="loader"></div>}>
            <NotFound />
          </Suspense>
        }
        />
        </Routes>
    </Router>
  );
}

export default App;
