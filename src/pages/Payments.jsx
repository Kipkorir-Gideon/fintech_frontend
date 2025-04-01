import { useState } from 'react';
import { processPayment } from '../services/api';

function Payments() {
  const [form, setForm] = useState({ amount: '', currency: 'USD', source: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await processPayment(form);
    // Handle response
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Payments</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Source (e.g., card token)"
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Process Payment
        </button>
      </form>
    </div>
  );
}

export default Payments;