import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import hero from "../assets/case-studies-reference.png";
import { CTA } from "../components/services/ServiceUI";
const area=(left,top,width,height)=>({position:"absolute",left,top,width,height,zIndex:2,borderRadius:12});
export default function CaseStudiesV2(){return <><SEO title="Case Studies | ARINSA AI MINDS" description="From business challenges to working technology." canonical="/case-studies"/><Navbar/><main><section aria-label="Case studies" style={{position:"relative",overflow:"hidden",aspectRatio:"1525 / 775",background:"#031b42"}}><img src={hero} alt="From business challenges to working technology" style={{display:"block",width:"100%",pointerEvents:"none"}}/><a href="#projects" aria-label="Explore projects" style={area("6%","78%","17%","8%")}/><Link to="/contact" aria-label="Discuss your project" style={area("24%","78%","19%","8%")}/></section><section id="projects" className="py-16"><div className="max-w-[1320px] mx-auto px-6"><h2 className="text-3xl font-bold text-[#071B3B]">Explore projects</h2></div></section><CTA/></main><Footer/></>}
