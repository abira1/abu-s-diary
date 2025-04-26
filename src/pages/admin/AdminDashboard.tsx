import React from 'react';
import { Card, CardContent } from './components/ui/Card';
import { CalendarIcon, MessageSquareIcon, ImageIcon, GamepadIcon } from 'lucide-react';
const AdminDashboard = () => {
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-[#8a6f5c]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#8a6f5c]">Countdown</h3>
              <p className="text-sm text-[#a67c52]">April 27, 2025</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center">
              <MessageSquareIcon className="w-6 h-6 text-[#8a6f5c]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#8a6f5c]">Messages</h3>
              <p className="text-sm text-[#a67c52]">5 messages</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-[#8a6f5c]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#8a6f5c]">Gallery</h3>
              <p className="text-sm text-[#a67c52]">8 images</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center">
              <GamepadIcon className="w-6 h-6 text-[#8a6f5c]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#8a6f5c]">Games</h3>
              <p className="text-sm text-[#a67c52]">4 games available</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminDashboard;