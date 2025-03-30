import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import VirtualCards from './pages/VirtualCards';
import VirtualAccounts from './pages/VirtualAccounts';
import Wallets from './pages/Wallets';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Simple auth check

  return (
    <div className="flex flex-col h-screen">
      {isAuthenticated && <Navbar />}
      <div className="flex flex-1 overflow-hidden">
        {isAuthenticated && <Sidebar />}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/virtual-cards" element={<VirtualCards />} />
            <Route path="/virtual-accounts" element={<VirtualAccounts />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;