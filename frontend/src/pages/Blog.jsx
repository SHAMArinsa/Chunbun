import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

import BlogHero from "../components/blog/BlogHero";
import FeaturedArticle from "../components/blog/FeaturedArticle";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogCTA from "../components/blog/BlogCTA";

export default function Blog() {
  return (
    <PageTransition>

      <SEO
        title="AI Blog | ARINSA AI MINDS"
        description="Latest AI insights, automation trends, Generative AI, data analytics and digital transformation."
      />

      <Navbar />

      <section className="bg-[#F8F9FC]">

        <BlogHero />

        <FeaturedArticle />

        <div className="max-w-[1500px] mx-auto px-8 pb-16">

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">

            <BlogGrid />

            <BlogSidebar />

          </div>

        </div>

        <BlogCTA />

      </section>

      <Footer />

    </PageTransition>
  );
}