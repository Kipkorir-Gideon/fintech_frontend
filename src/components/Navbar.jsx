import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <nav className="flex items-center justify-between p-6 bg-gray-800">
            <div className="flex items-center">
                <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300">
                    MyBank
                </Link>
            </div>
            <div className="flex items-center">
                <button onClick={handleLogout} className="text-white text-sm font-bold hover:text-gray-300">Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;