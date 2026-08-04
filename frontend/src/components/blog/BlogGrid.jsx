import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
const posts = [
  {
    image: blog1,
    title: "How AI Automation is Transforming Operations",
    category: "AI & Automation",
    desc: "Learn how intelligent automation streamlines workflows and improves operational efficiency.",
  },
  {
    image: blog2,
    title: "Turning Data into Decisions: The Power of Analytics",
    category: "Data Analytics",
    desc: "Discover how businesses leverage data analytics to make faster and smarter decisions.",
  },
  {
    image: blog3,
    title: "Cloud-Native Strategies for Scalable Growth",
    category: "Cloud & DevOps",
    desc: "Explore modern cloud architectures that drive performance, security and growth.",
  },
  {
    image: blog4,
    title: "AI in Cybersecurity: Smarter Threat Detection",
    category: "Security",
    desc: "Understand how AI helps organizations detect and prevent cyber threats in real time.",
  },
  {
    image: blog5,
    title: "Digital Transformation in Banking",
    category: "Industry Insights",
    desc: "Learn how digital technologies are reshaping customer experiences in banking.",
  },
  {
    image: blog6,
    title: "Building Smarter AI Agents",
    category: "AI & Automation",
    desc: "A guide to creating intelligent AI agents that automate workflows and improve productivity.",
  },
];

export default function BlogGrid() {
  return (
    <div>

      {/* FILTERS */}

      <div className="flex flex-wrap gap-4 mb-10">

        <button className="bg-[#071B3B] text-white px-8 py-3 rounded-xl">
          All Topics
        </button>

        <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-white transition">
          AI & Automation
        </button>

        <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-white transition">
          Data Analytics
        </button>

        <button className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-white transition">
          Cloud & DevOps
        </button>

      </div>

      {/* BLOG GRID */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {posts.map((post, index) => (
          <div
            key={index}
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            border
            border-[#EAECEF]
            hover:-translate-y-2
            hover:shadow-xl
            transition-all
            duration-300
            "
          >

            {/* IMAGE */}

            <img
              src={post.image}
              alt={post.title}
              className="
              w-full
              h-[240px]
              object-cover
              "
            />

            {/* CONTENT */}

            <div className="p-6">

              <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-wide">
                {post.category}
              </p>

              <h3 className="text-2xl font-bold text-[#071B3B] mt-3 leading-snug">
                {post.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {post.desc}
              </p>

              <button
                className="
                mt-6
                text-[#3B82F6]
                font-semibold
                hover:underline
                "
              >
                Read More →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}