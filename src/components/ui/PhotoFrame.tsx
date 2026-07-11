"use client";

import React from "react";

interface ArchFrameProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export const ArchFrame: React.FC<ArchFrameProps> = ({
  imageSrc,
  altText,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-2 sm:p-4 ${className}`}>
      <div
        className="relative w-full max-w-[260px] sm:max-w-[340px] border-2 border-[#D4AF37]/60 shadow-xl overflow-hidden"
        style={{
          borderRadius: "200px 200px 0px 0px",
          aspectRatio: "3/4",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
