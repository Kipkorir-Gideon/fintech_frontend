import { Link } from 'react-router-dom';


const Sidebar = () => {
    const links = [
        { to: '/', label: 'Dashboard' },
        { to: '/invoices', label: 'Invoices' },
        { to: '/virtual-cards', label: 'Virtual Cards' },
        { to: '/virtual-accounts', label: 'Virtual Accounts' },
        { to: '/wallets', label: 'Wallets' },
        { to: '/payments', label: 'Payments' },
        { to: '/notifications', label: 'Notifications' },
    ];

    return (
        <aside className='w-64 bg-gray-800 text-white p-4 h-full'>
            <ul>
                {links.map((link) => (
                    <li key={link.to} className='mb-2'>
                        <Link to={link.to} className='block p-2 hover:text-gray-700 rounded'>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;