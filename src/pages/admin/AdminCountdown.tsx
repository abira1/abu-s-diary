import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './components/ui/Card';
import { CalendarIcon, ToggleLeft, ToggleRight } from 'lucide-react';
import { useFirebaseData } from '../../lib/hooks/useFirebase';
const AdminCountdown = () => {
  const {
    data: countdownData,
    loading,
    updateData
  } = useFirebaseData('countdown', {
    targetDate: '2025-04-27T00:00',
    isEnabled: true
  });
  const [saved, setSaved] = useState(false);
  const handleSave = async () => {
    await updateData(countdownData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  const toggleCountdown = () => {
    updateData({
      ...countdownData,
      isEnabled: !countdownData.isEnabled
    });
  };
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div>
      <h1 className="text-2xl font-bold text-[#a67c52] mb-6">
        Countdown Settings
      </h1>
      <div className="max-w-md">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4">
                  <CalendarIcon className="w-6 h-6 text-[#8a6f5c]" />
                </div>
                <h2 className="text-lg font-bold text-[#8a6f5c]">
                  Target Date & Time
                </h2>
              </div>
              <button onClick={toggleCountdown} className={`p-2 ${countdownData.isEnabled ? 'text-green-500' : 'text-gray-400'}`}>
                {countdownData.isEnabled ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
              </button>
            </div>
            <div className="space-y-4">
              <div className={countdownData.isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}>
                <label className="block text-sm font-medium text-[#8a6f5c] mb-1">
                  Set Target Date
                </label>
                <input type="datetime-local" value={countdownData.targetDate} onChange={e => updateData({
                ...countdownData,
                targetDate: e.target.value
              })} className="w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]" />
              </div>
              <div className="pt-4 border-t border-[#d9c5b2]">
                <button onClick={handleSave} className="w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors">
                  {saved ? 'Settings Saved!' : 'Save Changes'}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default AdminCountdown;