import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export const login = (username, password) => 
    api.post('users/login/', {username, password});

export const register = (username, email, password) => 
    api.post('users/register/', {username, email, password});

export const getTransactions = () => api.get('core/transactions/');
export const getProfile = () => api.get('users/profile/');
export const createInvoice = (data) => api.post('invoices/create-invoice/', data);
export const getInvoices = () => api.get('invoices/list/');
export const createVirtualCard = (data) => api.post('virtual-cards/create-card/', data);
export const createVirtualAccount = (data) => api.post('virtual-accounts/create-account/', data);
export const createWallet = (data) => api.post('wallets/', data);
export const getWallets = () => api.get('wallets/');
export const processPayment = (data) => api.post('payments/process/', data);
export const getNotifications = () => api.get('notifications/');


export default api;