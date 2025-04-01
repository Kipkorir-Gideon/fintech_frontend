import { useEffect, useState } from 'react';
import DashboardCard from '../components/DashboardCard' ;
import { getProfile, getTransactions, getWallets } from '../services/api';



const Dashboard = () => {
    const [profile, setProfile] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const profileRes = await getProfile();
            const transactionsRes = await getTransactions();
            const walletsRes = await getWallets();
            setProfile(profileRes.data);
            setTransactions(transactionsRes.data);
            setWallets(walletsRes.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <DashboardCard title="Balance" value={`${wallets[0]?.balance || 0} ${wallets[0]?.currency || 'USD'}`} color="green" />
                <DashboardCard title="Transactions" value={transactions.length} color="blue" />
                <DashboardCard title="Currency" value={profile.currency || 'USD'} color="purple" />
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                <table className="w-full bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-200">
                    <th className="p-2">Amount</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.slice(0, 5).map((tx) => (
                    <tr key={tx.id}>
                        <td className="p-2">{tx.amount} {tx.currency}</td>
                        <td className="p-2">{tx.transaction_type}</td>
                        <td className="p-2">{tx.status}</td>
                        <td className="p-2">{new Date(tx.created_at).toLocaleDateString()}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;