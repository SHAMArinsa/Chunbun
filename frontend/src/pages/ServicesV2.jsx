import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import reference from "../assets/services-reference.png";
import { allServices, categories } from "../data/services";
import { CTA, ServiceFinder } from "../components/services/ServiceUI";

const hotspotStyle = (left, top, width, height) => ({ position: "absolute", left, top, width, height, zIndex: 2, borderRadius: 10 });
function ServiceVisual() {
  return <section aria-label="ARINSA AI MINDS services" style={{ position: "relative", overflow: "hidden", background: "white", aspectRatio: "1656 / 850" }}>
    <img src={reference} alt="Technology services designed for intelligent growth" style={{ position: "absolute", top: 0, left: 0, width: "100%", maxWidth: "none", transform: "translateY(-10.6%)", pointerEvents: "none" }}/>
    <Link aria-label="Discuss your requirements" to="/contact" style={hotspotStyle("8.5%", "60.7%", "17%", "7%")}/>
    <a aria-label="Explore our capabilities" href="#directory" style={hotspotStyle("26.5%", "60.7%", "16%", "7%")}/>
    <Link aria-label="Explore AI systems" to="/services/artificial-intelligence" style={hotspotStyle("49.7%", "11.3%", "15.7%", "27.5%")}/>
    <Link aria-label="Explore data flows" to="/services/data-automation" style={hotspotStyle("66.4%", "11.3%", "15.7%", "27.5%")}/>
    <Link aria-label="Explore digital products" to="/services/software-product-engineering" style={hotspotStyle("49.7%", "40.8%", "15.7%", "27.5%")}/>
    <Link aria-label="Explore cloud operations" to="/services/cloud-technology" style={hotspotStyle("66.4%", "40.8%", "15.7%", "27.5%")}/>
  </section>;
}

export default function ServicesV2() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("");
  return <><SEO title="Technology Services Designed for Intelligent Growth | ARINSA AI MINDS" description="AI strategy, automation, data engineering, custom software and cloud technology services for practical digital growth." canonical="/services"/><Navbar/><main><ServiceVisual/><div id="directory"><ServiceFinder services={allServices} query={query} setQuery={setQuery} category={category} setCategory={setCategory} categories={categories}/></div><CTA/></main><Footer/></>;
}
