import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createInvoice, getInvoices } from '../services/api';


const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [form, setForm] = useState({ amount: '', currency: 'USD', due_date: '', recipient_email: '' });

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const res = await getInvoices();
                setInvoices(res.data);
            } catch (err) {
                toast.error('Failed to fetch invoices');
            }
        };
        fetchInvoices();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createInvoice(form);
            setInvoices([...invoices, res.data]);
            toast.success('Invoice created successfully');
            setForm({ amount: '', currency: 'USD', due_date: '', recipient_email: '' });
        } catch (err) {
            toast.error('Failed to create invoice');
        }
    };


    return (
        <div>
          <h1 className="text-3xl font-bold mb-6">Invoices</h1>
          <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-lg shadow-md">
            <input
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="date"
              value={form.due_date}
              onChange={(e) => setForm({ ...form, due_date: e.target.value })}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Recipient Email"
              value={form.recipient_email}
              onChange={(e) => setForm({ ...form, recipient_email: e.target.value })}
              className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Create Invoice
            </button>
          </form>
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Number</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
                <th className="p-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id}>
                  <td className="p-2">{inv.invoice_number}</td>
                  <td className="p-2">{inv.amount} {inv.currency}</td>
                  <td className="p-2">{inv.status}</td>
                  <td className="p-2">{inv.due_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
}

export default Invoices;