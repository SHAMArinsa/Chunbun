// src/components/DonutChart.jsx

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "AI Solutions", value: 40 },
  { name: "Automation", value: 30 },
  { name: "Analytics", value: 20 },
  { name: "Development", value: 10 },
];

const COLORS = [
  "#1E40AF", // Deep Blue (replaced yellow)
  "#22C55E",
  "#3B82F6",
  "#A855F7",
];

export default function DonutChart() {
  return (
    <div className="h-full flex flex-col text-white">
      <h3 className="text-lg font-semibold mb-2">
        Solutions by Category
      </h3>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full flex items-center justify-between">

          {/* Small Donut Chart */}
          <div className="w-[100px] h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={22}
                  outerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="transparent"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="space-y-3 text-sm flex-1 ml-4">

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1E40AF]" />
              <span>AI Solutions</span>
              <span className="ml-auto">40%</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
              <span>Automation</span>
              <span className="ml-auto">30%</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
              <span>Analytics</span>
              <span className="ml-auto">20%</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#A855F7]" />
              <span>Development</span>
              <span className="ml-auto">10%</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}