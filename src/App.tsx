import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import useTokenRefresh from './features/auth/useTokenRefresh'; // Import the token refresh hook
import Login from './features/auth/Login'; // Import the Login component
import LogoutButton from './features/auth/LogoutButton'; // Import the Logout button
import './App.css';
import { Counter } from './features/counter/Counter';

function App() {
  useTokenRefresh(); // Call the token refresh hook
  const user = useSelector((state: RootState) => state.auth.user); // Access the user from Redux state

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <header className="App-header">
          {user ? (
            <>
              <h1>Welcome, {user.username}!</h1>
              <LogoutButton />
            </>
          ) : (
            <Login />
          )}
        </header>

        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </Router>
    </div>
  );
}

export default App;
