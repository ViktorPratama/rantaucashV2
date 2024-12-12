import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import RoomList from './components/RoomList';
import PaymentHistory from './components/PaymentHistory';
import RoomListAdmin from './components/admin/RoomListAdmin';
import PaymentHistoryAdmin from './components/admin/PaymentHistoryAdmin';
import PaymentQR from './components/PaymentQR';
import PaymentReminder from './components/PaymentReminder';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route 
          path="/dashboard" 
          element={<PrivateRoute allowedRoles={['penghuni', 'pemilik']} element={<Dashboard />} />} 
        />
        <Route 
          path="/rooms" 
          element={<PrivateRoute allowedRoles={['penghuni', 'pemilik']} element={<RoomList />} />} 
        />
        <Route 
          path="/payments" 
          element={<PrivateRoute allowedRoles={['penghuni', 'pemilik']} element={<PaymentHistory />} />} 
        />
        <Route 
          path="/admin" 
          element={<PrivateRoute allowedRoles={['pemilik']} element={<AdminPanel />} />} 
        />
        <Route 
          path="/rooms-admin" 
          element={<PrivateRoute allowedRoles={['pemilik']} element={<RoomListAdmin />} />} 
        />
        <Route 
          path="/payments-admin" 
          element={<PrivateRoute allowedRoles={['pemilik']} element={<PaymentHistoryAdmin />} />} 
        />
        <Route 
          path="/pay/:id" 
          element={<PrivateRoute allowedRoles={['penghuni', 'pemilik']} element={<PaymentQR />} />} 
        />
        <Route 
          path="/reminders" 
          element={<PrivateRoute allowedRoles={['penghuni', 'pemilik']} element={<PaymentReminder />} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;