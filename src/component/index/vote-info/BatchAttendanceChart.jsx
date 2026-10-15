"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { BATCH_ATTENDANCE_DATA } from "@/config/vote-info/voteChart.config";

// Custom Tooltip Design
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-teal-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg text-xs border border-teal-700/50">
        <p className="font-bold">ব্যাচ: {label}</p>
        <p className="text-teal-200">
          উপস্থিতি: <span className="font-bold text-white">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function BatchAttendanceChart() {
  return (
    <div className="w-full h-70 sm:h-80 pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={BATCH_ATTENDANCE_DATA}
          margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
        >
          {/* Gradient fill matching your exact image layout */}
          <defs>
            <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0284c7" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0284c7" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />

          <XAxis
            dataKey="batch"
            interval={0}
            angle={-60}
            textAnchor="end"
            tick={{ fontSize: 10, fill: "#64748b" }}
            tickLine={false}
            axisLine={{ stroke: "#cbd5e1" }}
          />

          <YAxis
            domain={[0, 120]}
            ticks={[0, 20, 40, 60, 80, 100, 120]}
            tickFormatter={(val) => `${val}%`}
            tick={{ fontSize: 11, fill: "#64748b" }}
            tickLine={false}
            axisLine={{ stroke: "#cbd5e1" }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="percentage"
            stroke="#0284c7"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#attendanceGradient)"
            dot={{
              r: 3,
              fill: "#0284c7",
              stroke: "#ffffff",
              strokeWidth: 1.5,
            }}
            activeDot={{
              r: 5,
              fill: "#0284c7",
              stroke: "#ffffff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}