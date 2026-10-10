import React from 'react';
import { Play } from 'lucide-react';

export default function HeroSection({ onOpenDonate, onOpenGlimpses }) {
  return (
    <section id="home" className="w-full bg-white pt-6 md:pt-8 pb-8 md:pb-12 px-0 md:px-6 lg:px-0 overflow-hidden">

      {/* ========================================================================= */}
      {/* DESKTOP HERO: Exact Figma node 141:9525 with Group 3263 (node 158:1851)   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1492px] max-w-full mx-auto h-[580px]">

        {/* Background Canvas: Exact Rendered Figma Container (node 141:9525) */}
        <div className="absolute left-0 top-0 w-full h-[561px] pointer-events-none">
          <img
            src="/assets/hero_slider_container.png"
            alt="Hero Background"
            className="w-full h-full object-contain object-left-top"
          />
        </div>

        {/* Interactive Overlay: slider-content (Figma node 141:9540) */}
        {/* Adjusted vertical layout so Donate Now button has generous height clearance from bottom curve */}
        <div className="absolute left-[99px] top-[30px] w-[682px] flex flex-col justify-start items-start text-left z-20 space-y-4">

          {/* Title: Nunito 58px 700 bold, line-height 68px */}
          <h1 className="font-heading font-bold text-[56px] xl:text-[60px] leading-[66px] xl:leading-[70px] text-white tracking-tight whitespace-pre-line">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description: Nunito Sans 18px, line-height 28px, max-w-[580px] */}
          <p className="font-sans font-normal text-[17px] xl:text-[18px] leading-[27px] xl:leading-[28px] text-white max-w-[580px]">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Frame 20: Buttons Row - lifted from bottom with generous clearance */}
          <div className="flex items-center gap-8 pt-3">

            {/* Donate Now Button: slightly taller (h-[48px]), prominent, with bottom clearance */}
            <button
              onClick={onOpenDonate}
              className="w-[158px] h-[48px] bg-white hover:bg-gray-50 text-[#243C4B] rounded-[9px] flex items-center justify-between px-[16px] shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] hover:shadow-lg transition-all group cursor-pointer"
            >
              <span className="font-sans font-black text-[12px] leading-[18px] text-[#243C4B] uppercase tracking-wider">
                Donate Now
              </span>
              <div className="w-[36px] h-[35px] flex items-center justify-center shrink-0">
                <img
                  src="/assets/frame_9_141_9547.svg"
                  alt="Heart"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </button>

            {/* Glimpses of Seva Button (Figma Frame 19: w 163px, h 38px) */}
            <button
              onClick={onOpenGlimpses}
              className="flex items-center gap-[10px] text-white hover:text-white/80 group transition-all cursor-pointer"
            >
              <div className="w-[38px] h-[38px] rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow-[0px_4px_4px_-4px_rgba(12,12,13,0.05),0px_16px_16px_-8px_rgba(12,12,13,0.1)] group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span className="font-heading font-semibold text-[14px] leading-[21px] text-white underline-offset-4 group-hover:underline">
                Glimpses of Seva
              </span>
            </button>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXACT FIGMA NODE 158:1851 (Group 3263) - Two Illustrated Avatar Heads      */}
        {/* Dimensions: 235px × 95px, position: left: 44px, top: 465px                */}
        {/* Sits right inside the bottom-left notch cutout of the red container!       */}
        {/* ========================================================================= */}
        <div
          id="node-158-1851"
          className="absolute left-[44px] top-[465px] w-[235px] h-[95px] z-30 pointer-events-auto"
        >
          <img
            src="/assets/group_3263_158_1851.svg"
            alt="Group 3263 Donors"
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET HERO: Crisp Native UI (Figma Frame 4078 / Node 158:1794)  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-3 sm:px-6">
        <div className="w-full max-w-[360px] sm:max-w-[400px] mx-auto bg-[#CC444B] rounded-[28px] sm:rounded-[32px] pt-7 pb-6 px-5 text-white text-center space-y-4 shadow-2xl relative overflow-hidden">
          
          {/* Title: Nunito 24px-27px, 800 bold, line-height 31px-35px */}
          <h1 className="font-heading font-extrabold text-[24px] sm:text-[27px] leading-[31px] sm:leading-[35px] text-white tracking-tight whitespace-pre-line drop-shadow-xs">
            Building Dignity.{"\n"}Creating Opportunity.{"\n"}Empowering Lives.
          </h1>

          {/* Description: Nunito Sans 12.5px-13.5px, line-height 19px-21px */}
          <p className="font-sans font-normal text-[12.5px] sm:text-[13.5px] leading-[19px] sm:leading-[21px] text-white/95 max-w-[305px] mx-auto">
            We work alongside underserved communities to create access to education, livelihoods, rehabilitation, and essential support—helping people build more secure and self-reliant futures.
          </p>

          {/* Interactive Buttons Row */}
          <div className="flex items-center justify-center gap-3 pt-1">
            
            {/* Donate Now Button: crisp white pill button with heart SVG icon */}
            <button
              onClick={onOpenDonate}
              className="w-[136px] h-[40px] bg-white hover:bg-gray-50 active:scale-95 text-[#243C4B] rounded-[8px] flex items-center justify-between px-3 shadow-[0px_4px_12px_rgba(0,0,0,0.12)] transition-all group cursor-pointer"
            >
              <span className="font-sans font-black text-[11px] leading-none uppercase tracking-wider text-[#243C4B]">
                Donate Now
              </span>
              <div className="w-[20px] h-[20px] flex items-center justify-center shrink-0">
                <img 
                  src="/assets/frame_9_141_9547.svg" 
                  alt="Heart" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
            </button>

            {/* Glimpses of Seva Button */}
            <button
              onClick={onOpenGlimpses}
              className="h-[40px] flex items-center gap-2 text-white hover:text-white/85 active:scale-95 transition-all cursor-pointer group"
            >
              <div className="w-[32px] h-[32px] rounded-full bg-white text-[#243C4B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
                <Play className="w-3.5 h-3.5 fill-[#243C4B] translate-x-0.5" />
              </div>
              <span className="font-heading font-semibold text-[13px] text-white underline-offset-4 group-hover:underline">
                Glimpses of Seva
              </span>
            </button>

          </div>

          {/* Circular Collage Image: High-Resolution 1107px retina asset */}
          <div className="pt-2 flex justify-center">
            <div className="relative w-[270px] h-[270px] sm:w-[290px] sm:h-[290px] rounded-full overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.3)] border-2 border-white/20">
              <img 
                src="/assets/hero_circular_collage_hd.png" 
                alt="Jan Swabhiman Seva Activities" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Donors Counter Bottom: Vector Group 3263 (Node 158:1851) */}
          <div className="pt-1 flex items-center justify-center gap-3">
            <div className="w-[125px] h-[52px] shrink-0">
              <img 
                src="/assets/group_3263_158_1851.svg" 
                alt="Donors Avatars" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-200" 
              />
            </div>
            <div className="text-left">
              <span className="font-heading font-black italic text-white text-[15px] block leading-tight">
                500+ Donors
              </span>
              <span className="text-white/90 text-[11px] block leading-tight font-sans">
                supporting seva that creates impact
              </span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
