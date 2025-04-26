import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/hooks/useAuth';
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    login
  } = useAuth();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = await login(email, password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };
  return <div className="min-h-screen bg-[#f8f0e3] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-[#a67c52] mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#8a6f5c] mb-1">
                Email
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" placeholder="Enter admin email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8a6f5c] mb-1">
                Password
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" placeholder="Enter password" required />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>;
};
export default AdminLogin;