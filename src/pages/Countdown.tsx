import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlarmClockIcon } from 'lucide-react';
import { useFirebaseData } from '../lib/hooks/useFirebase';
const Countdown = () => {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);
  const {
    data: countdownData,
    loading
  } = useFirebaseData('countdown', {
    targetDate: '2025-04-27T00:00:00',
    isEnabled: true
  });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
    if (loading) return;
    if (!countdownData.isEnabled || new Date() >= new Date(countdownData.targetDate)) {
      navigate('/', {
        replace: true
      });
      return;
    }
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(countdownData.targetDate);
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        navigate('/', {
          replace: true
        });
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(difference % (1000 * 60) / 1000);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownData, navigate, loading]);
  if (loading) {
    return <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"></div>
      </div>;
  }
  return <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className={`transition-all duration-1000 w-full max-w-md ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 flex justify-center">
          <AlarmClockIcon className="w-16 h-16 text-[#333]" />
        </div>
        <div className="bg-[#e6e6e6] rounded-2xl p-6 shadow-md mb-12">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-[#333] text-xs font-bold mt-2">DAYS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-[#333] text-xs font-bold mt-2">HOURS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-[#333] text-xs font-bold mt-2">MINS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-[#333] text-xs font-bold mt-2">SECS</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#a67c52]">
            Until Your Special Day!
          </h2>
          <p className="text-[#8a6f5c] text-sm">
            Please wait until the countdown ends to access your birthday
            surprise.
          </p>
        </div>
      </div>
    </div>;
};
export default Countdown;