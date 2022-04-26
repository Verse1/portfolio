import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Request from './pages/Request';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

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
