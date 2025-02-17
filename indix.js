import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import './styles/global.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // تحقق من حالة تسجيل الدخول عبر API ديسكورد
    fetch("/api/auth/user")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
    <Router>
      <nav className="navbar">
        <Link to="/">الرئيسية</Link>
        <Link to="/apply">التقديم</Link>
        {user ? <Link to="/dashboard">لوحة التحكم</Link> : <Link to="/login">تسجيل الدخول</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
