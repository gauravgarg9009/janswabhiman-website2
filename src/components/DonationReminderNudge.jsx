import React, { useState, useEffect } from 'react';
import { Heart, X, Sparkles, ArrowRight } from 'lucide-react';

export default function DonationReminderNudge({ 
  onOpenDonate, 
  projectName = null,
  active = true 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (!active) {
      setIsVisible(false);
      return;
    }

    // Gentle delay before showing the reminder nudge
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setIsMinimized(false);
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, [active]);

  // If user minimizes it, periodically expand it back after 30 seconds
  useEffect(() => {
    if (!active || !isMinimized) return;

    const timer = setTimeout(() => {
      setIsMinimized(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [isMinimized, active]);

  if (!active || !isVisible) return null;

  return (
    <aside 
      aria-label="Donation reminder"
      className="fixed bottom-5 right-5 z-40 transition-all duration-300 ease-out"
    >
      {isMinimized ? (
        /* Minimized Floating Pill */
        <button
          onClick={() => setIsMinimized(false)}
          className="group flex items-center gap-2.5 bg-[#CC444B] hover:bg-red-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-[0_8px_25px_rgba(204,68,75,0.4)] hover:shadow-xl transition-all cursor-pointer border-2 border-white/40 hover:scale-105 active:scale-95"
          title="Click to open donation reminder"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
          </div>
          <span className="font-heading font-extrabold text-xs tracking-wide">
            Support Seva
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping" />
        </button>
      ) : (
        /* Expanded Floating Reminder Card */
        <div className="w-[320px] sm:w-[340px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-red-100/80 text-left relative animate-fadeIn transition-all">
          
          {/* Top accent line */}
          <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-[#CC444B] via-red-400 to-[#CC444B] rounded-full" />

          {/* Dismiss button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-3 right-3 w-6 h-6 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Minimize reminder"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-3 pt-1">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-[#CC444B] flex items-center justify-center shrink-0 border border-red-100">
              <Heart className="w-4 h-4 fill-[#CC444B] animate-pulse" />
            </div>

            <div className="flex-1 pr-4">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-sm text-gray-900 leading-tight">
                  {projectName ? `Support ${projectName}` : "Support JSWS Seva"}
                </span>
              </div>
              <p className="font-sans text-[11.5px] text-gray-600 mt-1 leading-snug">
                Every rupee directly empowers ground seva. 100% transparent & 80G tax-exempted.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center gap-2">
            <button
              onClick={() => {
                onOpenDonate();
                setIsMinimized(true);
              }}
              className="flex-1 bg-[#CC444B] hover:bg-red-700 active:scale-98 text-white font-heading font-extrabold text-xs py-2 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Donate Now</span>
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
            </button>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-[11px] font-heading font-bold text-gray-500 hover:text-gray-800 px-2 py-2 cursor-pointer transition-colors"
            >
              Later
            </button>
          </div>

        </div>
      )}
    </aside>
  );
}
