import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Card({ 
  children, 
  className, 
  hoverEffect = false,
  shadowColor = "default", // "default", "purple", "blue", "teal", "orange"
  borderWidth = "border-2",
  padding = "p-6",
  ...props 
}) {
  
  const shadowClass = {
    default: "shadow-duo border-gray-200",
    purple: "shadow-duo border-brand-purple/30 bg-purple-50/20",
    blue: "shadow-duo border-brand-blue/30 bg-blue-50/10",
    teal: "shadow-duo border-brand-teal/30 bg-teal-50/10",
    orange: "shadow-duo border-brand-orange/30 bg-orange-50/10",
  }[shadowColor] || "shadow-duo border-gray-200";

  const hoverClass = hoverEffect 
    ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" 
    : "";

  return (
    <div 
      className={twMerge(
        "bg-white rounded-2xl border-solid text-left",
        borderWidth,
        shadowClass,
        hoverClass,
        padding,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
