import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

const Navbar = ({ setIsAuthenticated }) => { // Receive setIsAuthenticated
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('users/logout/');
      localStorage.removeItem('token');
      setIsAuthenticated(false); // Update App state
      toast.success('Logged out successfully!');
      navigate('/login');
    } catch (err) {
      toast.error('Logout failed!');
      console.error(err);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">FinTech</Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;