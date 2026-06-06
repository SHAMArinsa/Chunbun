import featuredImg from "../../assets/blog-featured.jpg";

export default function FeaturedArticle() {
  return (
    <section className="pb-12">

      <div className="max-w-[1500px] mx-auto px-8">

        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm">

          <img
            src={featuredImg}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="p-10">

            <span className="bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-2 rounded-full text-sm font-medium">
              FEATURED
            </span>

            <h2 className="text-5xl font-bold text-[#071B3B] mt-6 leading-tight">
              The Future of AI in Business:
              Trends to Watch in 2026
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Discover the key AI trends shaping industries
              and how businesses can leverage them for growth.
            </p>

            <button className="mt-8 text-[#3B82F6] font-semibold">
              Read More →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}