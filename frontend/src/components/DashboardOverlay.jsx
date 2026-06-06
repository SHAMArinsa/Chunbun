// src/components/DashboardOverlay.jsx

import RevenueChart from "./RevenueChart";
import DonutChart from "./DonutChart";
import { motion } from "framer-motion";

export default function DashboardOverlay() {
  return (
    <>
      {/* TOP KPI CARD */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-16
        right-0
        w-[650px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        p-6
        text-white
        shadow-2xl
        "
      >
        <h3 className="text-xl font-semibold mb-6">
          AI Performance Overview
        </h3>

        <div className="grid grid-cols-3 gap-8">

          

          <div>
            <p className="text-gray-300 text-sm mb-2">
              Revenue Impact
            </p>

            <h2 className="text-4xl font-bold text-[#053177]">
              $2.45M
            </h2>

            <span className="text-[#10B981] text-sm font-semibold">
              ↑ 24.5%
            </span>
          </div>

          <div>
            <p className="text-gray-300 text-sm mb-2">
              Automations
            </p>

            <h2 className="text-4xl font-bold text-[#053177]">
              156
            </h2>

            <span className="text-[#10B981] text-sm font-semibold">
              ↑ 32.1%
            </span>
          </div>

          <div>
            <p className="text-gray-300 text-sm mb-2">
              Satisfaction
            </p>

            <h2 className="text-4xl font-bold text-[#053177]">
              98%
            </h2>

            <span className="text-[#10B981] text-sm font-semibold">
              ↑ 12.8%
            </span>
          </div>

        </div>
      </motion.div>

      {/* PROJECT PROGRESS CARD */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-20
        left-10
        w-[300px]
        h-[250px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        p-5
        shadow-2xl
        "
      >
        <RevenueChart />
      </motion.div>

      {/* DONUT CARD */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-20
        right-0
        w-[300px]
        h-[250px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        p-5
        shadow-2xl
        "
      >
        <DonutChart />
      </motion.div>
    </>
  );
}