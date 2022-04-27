import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Request from './pages/Request';
import axios from 'axios';

axios.defaults.withCredentials = true;

const App = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);
  const [approved, setApproved] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('/api/auth')
      .then((res) => {
        setAuth(res.data.auth);
        setAdmin(res.data.admin);
        setApproved(res.data.approved);
      })
      .catch((err) => {});
  }, []);

  return (
    <BrowserRouter>
      <Navbar auth={auth} admin={admin} approved={approved} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/request" element={<Request />} />
        <Route
          path="*"
          element={
            <div className="text-7xl text-center mt-9 text-white">
              I think you're lost :(
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
