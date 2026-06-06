export default function BlogCTA() {
  return (
    <section className="pb-20">

      <div className="max-w-[1500px] mx-auto px-8">

        <div
          className="
          bg-white
          rounded-3xl
          p-10
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-8
          "
        >

          <div>

            <h2 className="text-4xl font-bold text-[#071B3B]">
              Have a topic in mind?
            </h2>

            <p className="text-gray-600 mt-3">
              We'd love to hear your thoughts and suggestions.
            </p>

          </div>

          <button
            className="
            border-2
            border-[#3B82F6]
            text-[#3B82F6]
            hover:bg-[#3B82F6]
            hover:text-white
            transition-all
            duration-300
            px-10
            py-4
            rounded-xl
            font-semibold
            "
          >
            Contact Our Experts →
          </button>

        </div>

      </div>

    </section>
  );
}