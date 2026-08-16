import { Search } from "lucide-react";

export default function BlogSidebar() {
  return (
    <div className="space-y-8">

      {/* Search */}

      <div className="relative">

        <input
          type="text"
          placeholder="Search articles..."
          className="
          w-full
          border
          border-gray-200
          rounded-xl
          px-5
          py-4
          bg-white
          text-[#071B3B]
          placeholder:text-gray-500
          outline-none
          focus:border-[#3B82F6]
          focus:ring-2
          focus:ring-[#3B82F6]/20
          "
        />

        <Search
          size={18}
          className="absolute right-4 top-4 text-gray-400"
        />

      </div>

      {/* Categories */}

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">

        <h3 className="text-3xl font-bold text-[#071B3B] mb-6">
          Categories
        </h3>

        <div className="space-y-4 text-gray-700">

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            AI & Automation (12)
          </p>

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            Data Analytics (10)
          </p>

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            Cloud & DevOps (8)
          </p>

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            Industry Insights (9)
          </p>

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            Security (6)
          </p>

          <p className="hover:text-[#3B82F6] cursor-pointer transition">
            Digital Transformation (7)
          </p>

        </div>

      </div>

      {/* Newsletter */}

      <div className="bg-[#071B3B] rounded-3xl p-8 text-white">

        <h3 className="text-3xl font-bold mb-5">
          Subscribe to Our Newsletter
        </h3>

        <p className="text-gray-300 mb-6">
          Get the latest insights on AI and automation.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="
          w-full
          rounded-xl
          px-4
          py-4
          bg-white
          text-[#071B3B]
          placeholder:text-gray-500
          border
          border-gray-200
          outline-none
          focus:border-[#3B82F6]
          focus:ring-2
          focus:ring-[#3B82F6]/20
          "
        />

        <button
          className="
          mt-4
          w-full
          bg-[#3B82F6]
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-[#2563EB]
          transition-all
          duration-300
          "
        >
          Subscribe
        </button>

      </div>

    </div>
  );
}