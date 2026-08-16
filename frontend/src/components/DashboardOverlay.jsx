import RevenueChart from "./RevenueChart";
import DonutChart from "./DonutChart";
import { motion } from "framer-motion";

export default function DashboardOverlay() {
  return (
    <>
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-16 right-0 w-[650px] rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
        <h3 className="mb-6 text-xl font-semibold">AI Performance Overview</h3>
        <div className="grid grid-cols-3 gap-8">
          <div><p className="mb-2 text-sm text-gray-300">Revenue Impact</p><h2 className="text-4xl font-bold text-[#053177]">$2.45M</h2><span className="text-sm font-semibold text-[#10B981]">↑ 24.5%</span></div>
          <div><p className="mb-2 text-sm text-gray-300">Automations</p><h2 className="text-4xl font-bold text-[#053177]">156</h2><span className="text-sm font-semibold text-[#10B981]">↑ 32.1%</span></div>
          <div><p className="mb-2 text-sm text-gray-300">Satisfaction</p><h2 className="text-4xl font-bold text-[#053177]">98%</h2><span className="text-sm font-semibold text-[#10B981]">↑ 12.8%</span></div>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 left-10 h-[250px] w-[300px] rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"><RevenueChart /></motion.div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-0 h-[250px] w-[300px] rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"><DonutChart /></motion.div>
    </>
  );
}
