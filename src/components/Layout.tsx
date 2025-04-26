import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { MessageCircleIcon, ImageIcon, DicesIcon, StickyNoteIcon } from 'lucide-react';
const Layout = () => {
  const location = useLocation();
  const showNavigation = ['/', '/gallery', '/games', '/chat', '/notes'].includes(location.pathname);
  return <div className="fixed inset-0 flex flex-col bg-[#f8f0e3] w-full overflow-hidden">
      <div className="relative flex-1 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-[#d9c5b2] rounded-r-full opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-[#d9c5b2] rounded-t-full opacity-50"></div>
          <div className="absolute top-[30%] left-6 md:left-10 w-12 h-12 md:w-16 md:h-16">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#777] animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50,10 C70,25 70,40 50,55 C30,40 30,25 50,10 Z" />
              <path d="M30,30 C50,45 50,60 30,75 C10,60 10,45 30,30 Z" />
              <path d="M70,30 C90,45 90,60 70,75 C50,60 50,45 70,30 Z" />
              <path d="M50,50 C70,65 70,80 50,95 C30,80 30,65 50,50 Z" />
            </svg>
          </div>
          <div className="absolute bottom-[20%] right-6 md:right-10 w-16 h-16 md:w-24 md:h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#777] animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50,10 C70,25 70,40 50,55 C30,40 30,25 50,10 Z" />
              <path d="M30,30 C50,45 50,60 30,75 C10,60 10,45 30,30 Z" />
              <path d="M70,30 C90,45 90,60 70,75 C50,60 50,45 70,30 Z" />
              <path d="M50,50 C70,65 70,80 50,95 C30,80 30,65 50,50 Z" />
            </svg>
          </div>
        </div>
        <div className="relative h-full overflow-hidden pt-4 pb-24">
          <div className="h-full overflow-auto">
            <div className="w-full max-w-md mx-auto px-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {showNavigation && <div className="fixed bottom-0 left-0 right-0 bg-[#f8f0e3] pb-safe">
          <div className="flex justify-between items-center max-w-md mx-auto px-4 py-2">
            <Link to="/chat" className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]">
                <MessageCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-[#d9b382]" />
              </div>
              <span className="mt-1 text-[#a67c52] font-bold text-xs md:text-sm">
                CHAT
              </span>
            </Link>
            <Link to="/notes" className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]">
                <StickyNoteIcon className="w-6 h-6 md:w-7 md:h-7 text-[#d9b382]" />
              </div>
              <span className="mt-1 text-[#a67c52] font-bold text-xs md:text-sm">
                NOTES
              </span>
            </Link>
            <Link to="/gallery" className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]">
                <ImageIcon className="w-6 h-6 md:w-7 md:h-7 text-[#d9b382]" />
              </div>
              <span className="mt-1 text-[#a67c52] font-bold text-xs md:text-sm">
                GALLERY
              </span>
            </Link>
            <Link to="/games" className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]">
                <DicesIcon className="w-6 h-6 md:w-7 md:h-7 text-[#d9b382]" />
              </div>
              <span className="mt-1 text-[#a67c52] font-bold text-xs md:text-sm">
                GAME
              </span>
            </Link>
          </div>
        </div>}
    </div>;
};
export default Layout;