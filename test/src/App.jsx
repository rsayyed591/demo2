import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import AxiosUser from "./components/AxiosUser";
import Greetings from "./components/Greetings";
import UserCard from "./components/UserCard";
import Hooks from "./pages/Hooks"
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/fetch">Fetch API</Link>
        <Link to="/axios">Axios API</Link>
        <Link to="/greeting">Greeting</Link>
        <Link to="/users">Our team</Link>
        <Link to="/hooks">Basic Hook</Link>
      </nav>

      <Routes>
        <Route path="/hooks" element={<Hooks />}/>
        <Route path="/fetch" element={<FetchUser />} />
        <Route path="/axios" element={<AxiosUser />} />
        <Route path="/greeting" element={<Greetings name="rehan" />} />
        <Route path="/users" element={<UserCard />} />
        <Route path="*" element={<p>Select a method above 👆</p>} />
      </Routes>
    </Router>
  );
}

export default App;
