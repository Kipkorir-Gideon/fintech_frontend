import { useEffect, useState } from 'react';
import { getNotifications } from '../services/api';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getNotifications();
      setNotifications(res.data);
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li key={notif.id} className="p-4 bg-white rounded-lg shadow-md">
            {notif.message} - {new Date(notif.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;