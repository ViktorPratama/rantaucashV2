import { useState, useEffect } from 'react';
import api from '../services/api'; // Impor api dari services
import Navbar from '../components/admin/NavbarAdmin';

const AdminPanel = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users/profile');
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err.response?.data || err.message);
        alert('Failed to fetch data. Please login again.');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Admin Panel</h2>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    </>
  );
};

export default AdminPanel;