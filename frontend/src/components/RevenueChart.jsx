// src/components/RevenueChart.jsx

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 90 },
  { month: "Feb", value: 85 },
  { month: "Mar", value: 140 },
  { month: "Apr", value: 110 },
  { month: "May", value: 240 },
  { month: "Jun", value: 320 },
];

export default function RevenueChart() {
  return (
    <div className="h-full text-white">
      <h3 className="text-lg font-semibold mb-4">
        Project Progress
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid
            stroke="rgba(255,255,255,0.08)"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#d1d5db", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#d1d5db", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#1E40AF"
            strokeWidth={4}
            dot={{
              fill: "#1E40AF",
              r: 5,
            }}
            activeDot={{
              r: 8,
              fill: "#1E40AF",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}