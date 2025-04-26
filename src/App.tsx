import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Countdown from './pages/Countdown';
import SurpriseMessage from './pages/SurpriseMessage';
import Gallery from './pages/Gallery';
import GameList from './pages/GameList';
import GamePlay from './pages/GamePlay';
import Chat from './pages/Chat';
import Notes from './pages/Notes';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCountdown from './pages/admin/AdminCountdown';
import AdminMessages from './pages/admin/AdminMessages';
import AdminGallery from './pages/admin/AdminGallery';
import AdminGames from './pages/admin/AdminGames';
import AdminNotes from './pages/admin/AdminNotes';
import AdminMusic from './pages/admin/AdminMusic';
import { useAuth } from './lib/hooks/useAuth';
import { useFirebaseData } from './lib/hooks/useFirebase';
const isCountdownComplete = (countdownData: {
  targetDate: string;
  isEnabled: boolean;
}) => {
  const {
    targetDate,
    isEnabled
  } = countdownData;
  if (!isEnabled) return true;
  return new Date() >= new Date(targetDate);
};
const ProtectedRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {
    data: countdownData,
    loading
  } = useFirebaseData('countdown', {
    targetDate: '2025-04-27T00:00:00',
    isEnabled: true
  });
  if (loading) {
    return <div className="min-h-screen bg-[#f8f0e3] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  if (!isCountdownComplete(countdownData)) {
    return <Navigate to="/countdown" replace />;
  }
  return <>{children}</>;
};
const ProtectedAdminRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {
    isAdmin,
    loading
  } = useAuth();
  if (loading) {
    return <div className="min-h-screen bg-[#f8f0e3] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
};
export function App() {
  return <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/*" element={<ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="countdown" element={<AdminCountdown />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="games" element={<AdminGames />} />
          <Route path="notes" element={<AdminNotes />} />
          <Route path="music" element={<AdminMusic />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="countdown" element={<Countdown />} />
          <Route index element={<ProtectedRoute>
                <Home />
              </ProtectedRoute>} />
          <Route path="surprise-message" element={<ProtectedRoute>
                <SurpriseMessage />
              </ProtectedRoute>} />
          <Route path="gallery" element={<ProtectedRoute>
                <Gallery />
              </ProtectedRoute>} />
          <Route path="games" element={<ProtectedRoute>
                <GameList />
              </ProtectedRoute>} />
          <Route path="games/:id" element={<ProtectedRoute>
                <GamePlay />
              </ProtectedRoute>} />
          <Route path="chat" element={<ProtectedRoute>
                <Chat />
              </ProtectedRoute>} />
          <Route path="notes" element={<ProtectedRoute>
                <Notes />
              </ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>;
}