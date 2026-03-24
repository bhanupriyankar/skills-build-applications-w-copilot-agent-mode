

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import logo from './octofitapp-small.png';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Logo" style={{ height: 40, marginRight: 12 }} />
            <span className="fw-bold fs-4 text-white">OctoFit Tracker</span>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2 className="mt-4 text-primary">Welcome to OctoFit Tracker!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
