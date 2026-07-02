import React from 'react';
import Card from './Card';
import { ArrowUpRight } from 'lucide-react';

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  color = "purple", // "purple", "blue", "teal", "orange"
  trend,
  className
}) {
  
  const colorStyles = {
    purple: {
      border: "purple",
      iconBg: "bg-purple-100 text-brand-purple",
      trendText: "text-purple-600",
    },
    blue: {
      border: "blue",
      iconBg: "bg-blue-100 text-brand-blue",
      trendText: "text-blue-600",
    },
    teal: {
      border: "teal",
      iconBg: "bg-teal-100 text-brand-teal",
      trendText: "text-teal-600",
    },
    orange: {
      border: "orange",
      iconBg: "bg-orange-100 text-brand-orange",
      trendText: "text-orange-600",
    }
  }[color];

  return (
    <Card 
      shadowColor={colorStyles.border} 
      hoverEffect={true}
      className={className}
      padding="p-5"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-extrabold text-gray-900 font-display">{value}</p>
        </div>
        <div className={`p-3 rounded-2xl ${colorStyles.iconBg}`}>
          <Icon className="h-6 w-6 stroke-[2.5]" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center gap-1">
          <span className={`text-xs font-semibold flex items-center ${colorStyles.trendText}`}>
            <ArrowUpRight className="h-3 w-3" /> {trend}
          </span>
          <span className="text-xs text-gray-400">vs last month</span>
        </div>
      )}
    </Card>
  );
}
