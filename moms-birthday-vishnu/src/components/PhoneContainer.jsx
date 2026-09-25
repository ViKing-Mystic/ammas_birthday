import React, { useState, createContext, useContext } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

export const DeviceContext = createContext({
  deviceMode: 'phone',
  setDeviceMode: () => {},
});

export const useDeviceMode = () => useContext(DeviceContext);

/**
 * PhoneContainer provides a fully responsive layout across all device viewports:
 * - 320px (iPhone SE / small phones)
 * - 375px - 430px (Standard / Pro Max phones)
 * - 768px (iPads / Tablets)
 * - 1024px+ (Laptops and Desktops)
 * 
 * Includes an interactive preview toggle on desktop so user can view in mobile frame or wide screen.
 */
export default function PhoneContainer({ children }) {
  const [deviceMode, setDeviceMode] = useState('phone'); // 'phone' | 'wide'

  return (
    <DeviceContext.Provider value={{ deviceMode, setDeviceMode }}>
      <div className="min-h-screen w-full bg-[#FDF0EE] text-rosewood-950 flex flex-col items-center justify-start sm:justify-center p-0 md:p-6 transition-all duration-300">
      
      {/* Desktop view switcher pill (Only visible on screens >= 768px) */}
      <div className="hidden md:flex items-center gap-2 mb-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rosegold-200 shadow-sm z-50 text-xs font-semibold text-rosewood-900">
        <span className="text-rosewood-600 font-medium">Device Preview:</span>
        <button
          onClick={() => setDeviceMode('phone')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            deviceMode === 'phone'
              ? 'bg-rosegold-500 text-white shadow-sm font-bold'
              : 'text-rosewood-700 hover:bg-rose-50'
          }`}
          aria-label="Switch to Phone view"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile Phone (430px)</span>
        </button>
        <button
          onClick={() => setDeviceMode('wide')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
            deviceMode === 'wide'
              ? 'bg-rosegold-500 text-white shadow-sm font-bold'
              : 'text-rosewood-700 hover:bg-rose-50'
          }`}
          aria-label="Switch to Full Screen view"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Responsive Tablet & Desktop</span>
        </button>
      </div>

      {/* Main Responsive Container */}
      <div
        className={`w-full transition-all duration-500 relative flex flex-col bg-[#FFF8F7] ${
          deviceMode === 'phone'
            ? 'md:max-w-[430px] md:h-[92vh] md:min-h-[720px] md:max-h-[960px] md:rounded-[44px] md:border-[9px] md:border-[#D49A89] md:shadow-[0_25px_60px_-15px_rgba(183,110,121,0.4)] md:overflow-y-auto md:overflow-x-hidden md:ring-1 md:ring-rosegold-300'
            : 'max-w-4xl lg:max-w-5xl min-h-screen md:min-h-[90vh] md:rounded-3xl md:shadow-xl md:border border-rosegold-200/60 md:overflow-y-auto md:overflow-x-hidden'
        }`}
      >
        {/* Rose Gold Phone Top Dynamic Island (Only in desktop phone frame) */}
        {deviceMode === 'phone' && (
          <div className="hidden md:flex sticky top-0 z-50 w-full justify-center pt-2 pb-1 bg-[#FFF8F7]/90 backdrop-blur-sm pointer-events-none">
            <div className="w-24 h-4 bg-rosewood-900 rounded-full flex items-center justify-end px-3 shadow-xs">
              <div className="w-2 h-2 rounded-full bg-[#1A060C] ring-1 ring-white/10" />
            </div>
          </div>
        )}

        {/* Content body with responsive padding */}
        <div className="flex-1 w-full min-w-0 flex flex-col relative pb-32 sm:pb-36">
          {children}
        </div>
      </div>
    </div>
  </DeviceContext.Provider>
  );
}
