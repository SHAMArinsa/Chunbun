import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./components/Home";
import About from "./pages/About";
import Services from "./pages/ServicesV2";

import ServiceDetail from "./pages/services/ServiceDetail";
import ServiceCategory from "./pages/services/ServiceCategory";

import Industries from "./pages/IndustriesV2";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import BlogCategory from "./pages/BlogCategory";
import { InternshipFAQ, InternshipHome } from "./pages/Internship";
import Contact from "./pages/Contact";
import CaptureExpert from "./pages/CaptureExpert";

import ScrollToTop from "./components/ScrollToTop";

function ExternalInternshipRegistration() {
  useEffect(() => {
    window.location.replace("https://www.intern.arinsaaiminds.com");
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* Main Pages */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:industrySlug" element={<IndustryDetail />} />

        <Route
          path="/case-studies"
          element={<CaseStudies />}
        />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
        <Route path="/blog/tag/:tagSlug" element={<BlogCategory />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />

        <Route path="/internship" element={<InternshipHome />} />
        <Route path="/internship/register" element={<ExternalInternshipRegistration />} />
        <Route path="/internship/faq" element={<InternshipFAQ />} />
        <Route path="/internship/basic" element={<Navigate to="/internship" replace />} />
        <Route path="/internship/professional" element={<Navigate to="/internship" replace />} />
        <Route path="/internship/premium" element={<Navigate to="/internship" replace />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/capture-expert" element={<CaptureExpert />} />

        {/* Service Pages */}

        <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/services/:categorySlug" element={<ServiceCategory />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
