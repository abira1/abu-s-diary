import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Settings2Icon, CalendarIcon, MessageSquareIcon, ImageIcon, GamepadIcon, LogOutIcon, StickyNoteIcon, MusicIcon } from 'lucide-react';
import { useAuth } from '../../lib/hooks/useAuth';
const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    logout
  } = useAuth();
  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      navigate('/admin');
    }
  };
  const isActive = (path: string) => location.pathname === path;
  return <div className="min-h-screen bg-[#f8f0e3] flex">
      <div className="w-64 bg-white shadow-lg flex flex-col fixed h-full transition-all duration-300 ease-in-out">
        <div className="p-6 border-b border-[#d9c5b2]">
          <h1 className="text-xl font-bold text-[#a67c52] tracking-tight">
            Birthday Admin
          </h1>
          <p className="text-sm text-[#8a6f5c] mt-1 opacity-60">
            Manage your celebration
          </p>
        </div>
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Link to="/admin/dashboard" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/dashboard') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <Settings2Icon className={`w-5 h-5 transition-transform duration-200 ${isActive('/admin/dashboard') ? 'rotate-0' : 'group-hover:rotate-45'}`} />
              <span className="ml-3 font-medium">Dashboard</span>
            </Link>
            <Link to="/admin/countdown" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/countdown') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <CalendarIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Countdown</span>
            </Link>
            <Link to="/admin/messages" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/messages') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <MessageSquareIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Messages</span>
            </Link>
            <Link to="/admin/gallery" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/gallery') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <ImageIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Gallery</span>
            </Link>
            <Link to="/admin/games" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/games') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <GamepadIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Games</span>
            </Link>
            <Link to="/admin/notes" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/notes') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <StickyNoteIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Notes</span>
            </Link>
            <Link to="/admin/music" className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${isActive('/admin/music') ? 'bg-[#ffcb85] text-[#8a6f5c]' : 'text-[#8a6f5c] hover:bg-[#fff5e7]'}`}>
              <MusicIcon className="w-5 h-5" />
              <span className="ml-3 font-medium">Music</span>
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-[#d9c5b2]">
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 rounded-xl text-[#8a6f5c] hover:bg-[#fff5e7] transition-all duration-200 group">
            <LogOutIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>
      <div className="flex-1 ml-64 p-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>;
};
export default AdminLayout;