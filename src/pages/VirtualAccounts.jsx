import { useEffect, useState } from 'react';
import { createVirtualAccount, /* add getVirtualAccounts if implemented */ } from '../services/api';

function VirtualAccounts() {
  const [accounts, setAccounts] = useState([]);

  const handleCreate = async () => {
    const res = await createVirtualAccount({ currency: 'USD' });
    setAccounts([...accounts, res.data]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Virtual Accounts</h1>
      <button onClick={handleCreate} className="bg-blue-600 text-white p-2 rounded mb-6">
        Create Virtual Account
      </button>
      {/* Add table or list for accounts */}
    </div>
  );
}

export default VirtualAccounts;