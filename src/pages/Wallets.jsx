import { useEffect, useState } from 'react';
import { getWallets, createWallet } from '../services/api';

function Wallets() {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const fetchWallets = async () => {
      const res = await getWallets();
      setWallets(res.data);
    };
    fetchWallets();
  }, []);

  const handleCreate = async () => {
    const res = await createWallet({ currency: 'USD' });
    setWallets([...wallets, res.data]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Wallets</h1>
      <button onClick={handleCreate} className="bg-blue-600 text-white p-2 rounded mb-6">
        Create Wallet
      </button>
      {/* Add table or list for wallets */}
    </div>
  );
}

export default Wallets;