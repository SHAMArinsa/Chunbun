import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { blogCategories, publishedArticles } from "../data/blog";
import { Breadcrumbs, CTA, SectionHeader } from "../components/services/ServiceUI";

export default function BlogCategory() {
  const { categorySlug, tagSlug } = useParams();
  const isTag = Boolean(tagSlug); const key = tagSlug || categorySlug;
  const category = blogCategories.find((item) => item.slug === key);
  const posts = publishedArticles.filter((article) => isTag ? article.tags.map((tag) => tag.toLowerCase().replaceAll(" ", "-")).includes(key) : article.category === key);
  if (!category && !isTag) return <Navigate to="/blog" replace />;
  const title = category?.name || key.replaceAll("-", " ");
  return <><SEO title={`${title} Articles | ARINSA AI MINDS`} description={`Published ARINSA AI MINDS articles about ${title}.`} canonical={`/blog/${isTag ? "tag" : "category"}/${key}`} /><Navbar/><main><section className="bg-[#071B3B] text-white py-16"><div className="max-w-[1180px] mx-auto px-6"><Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: title }]} /><h1 className="text-5xl font-bold mt-10 capitalize">{title}</h1><p className="text-blue-50/85 text-lg mt-5">{category?.description || `Articles tagged with ${title}.`}</p></div></section><section className="py-20"><div className="max-w-[1180px] mx-auto px-6"><SectionHeader eyebrow="Published articles" title={`Explore ${title}.`} /><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">{posts.map((article) => <a href={`/blog/${article.slug}`} key={article.slug} className="border rounded-2xl overflow-hidden"><img src={article.image} alt="" className="aspect-[16/9] object-cover w-full" /><div className="p-6"><h2 className="font-bold text-xl">{article.title}</h2><p className="text-slate-600 mt-3">{article.excerpt}</p></div></a>)}</div>{!posts.length && <p className="text-slate-600 mt-8">No published articles are available for this topic yet.</p>}</div></section><CTA/></main><Footer/></>;
}
