import { useState } from 'react';
import api from '../services/api'; // Impor api dari services

const PaymentReminder = () => {
  const [reminderDate, setReminderDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSetReminder = async () => {
    try {
      await api.post('/payments/reminder', { date: reminderDate });
      setMessage('Reminder set successfully!');
    } catch (error) {
      setMessage('Failed to set reminder.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h3>Set Payment Reminder</h3>
      <input
        type="date"
        value={reminderDate}
        onChange={(e) => setReminderDate(e.target.value)}
      />
      <button onClick={handleSetReminder}>Set Reminder</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentReminder;