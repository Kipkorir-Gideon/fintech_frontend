import { useEffect, useState } from 'react';
import { createVirtualCard, /* add getVirtualCards if implemented */ } from '../services/api';

function VirtualCards() {
  const [cards, setCards] = useState([]);

  const handleCreate = async () => {
    const res = await createVirtualCard({ currency: 'USD' });
    setCards([...cards, res.data]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Virtual Cards</h1>
      <button onClick={handleCreate} className="bg-blue-600 text-white p-2 rounded mb-6">
        Create Virtual Card
      </button>
      {/* Add table or list for cards */}
    </div>
  );
}

export default VirtualCards;