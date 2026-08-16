import { Navigate, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

const legalPages = {
  "/privacy-policy": { title: "Privacy Policy", description: "How ARINSA AI MINDS collects, uses and protects information provided through this website.", sections: [
    ["Information we collect", "We may collect information you submit through contact, quote or internship forms, including your name, email address, phone number, company and message. We may also receive basic technical information such as browser type, device type and website usage data when analytics are enabled."],
    ["How we use information", "We use submitted information to respond to enquiries, prepare requested quotations, manage applications, provide services and improve this website. We do not sell personal information."],
    ["Sharing and retention", "Information may be shared with service providers that support website hosting, email delivery and business operations, only as needed for those services. We retain information for as long as reasonably necessary for the purpose for which it was collected and applicable legal obligations."],
    ["Your choices", "You may ask to access, correct or delete personal information you have provided, subject to applicable legal requirements. You can also opt out of marketing communications at any time."],
  ] },
  "/terms-of-service": { title: "Terms of Service", description: "Terms governing use of the ARINSA AI MINDS website.", sections: [
    ["Website use", "You may use this website for lawful informational and business-enquiry purposes. You must not attempt to disrupt the website, access restricted systems or submit unlawful, misleading or harmful material."],
    ["Information and proposals", "Website content is provided for general information and does not create a client relationship, professional advice, a warranty or a binding service commitment. Project scope, timing, fees, responsibilities and deliverables are established only in a separate written agreement."],
    ["Intellectual property", "Unless otherwise stated, the website design, text, graphics and other original content belong to ARINSA AI MINDS or its licensors. You may not reproduce or commercially use that material without permission."],
    ["Third-party links and availability", "Links to third-party websites are provided for convenience. We do not control their content or practices. We may update, suspend or discontinue parts of this website without notice."],
    ["Liability", "To the extent permitted by law, ARINSA AI MINDS is not liable for indirect or consequential loss arising from use of, or inability to use, this informational website."],
  ] },
  "/cookie-policy": { title: "Cookie Policy", description: "Information about cookies and similar technologies on the ARINSA AI MINDS website.", sections: [
    ["What cookies are", "Cookies are small text files a website may place on your device to remember preferences, support essential functionality or understand website usage."],
    ["How this website may use them", "The website may use strictly necessary cookies for security and functionality. If analytics or embedded third-party services are enabled, they may use additional cookies to measure performance or provide their features."],
    ["Managing cookies", "You can block or delete cookies through your browser settings. Blocking essential cookies may affect some website functionality. Where applicable, a consent control will be provided before non-essential cookies are used."],
    ["Third-party services", "External services linked or embedded on this website may set cookies under their own policies. Review the relevant provider's privacy and cookie information for details."],
  ] },
};

export default function LegalPage() {
  const { pathname } = useLocation(); const page = legalPages[pathname];
  if (!page) return <Navigate to="/" replace />;
  return <><SEO title={`${page.title} | ARINSA AI MINDS`} description={page.description} canonical={pathname} /><Navbar /><main>
    <header className="bg-[#071B3B] px-6 py-16 text-white lg:py-20"><div className="mx-auto max-w-[980px]"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Legal</p><h1 className="mt-4 text-4xl font-bold sm:text-5xl">{page.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50/85">{page.description}</p></div></header>
    <article className="mx-auto max-w-[980px] px-6 py-14 text-[#071B3B] lg:py-20"><p className="text-sm text-slate-500">Last updated: 30 April 2025</p><div className="mt-10 space-y-10">{page.sections.map(([heading, body]) => <section key={heading}><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 text-base leading-8 text-slate-600">{body}</p></section>)}</div>
      <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6"><h2 className="text-xl font-bold">Contact</h2><p className="mt-3 leading-7 text-slate-600">Questions about this policy can be sent to <a className="font-semibold text-[#1559bd] underline" href="mailto:info@arinsaaiminds.com">info@arinsaaiminds.com</a>.</p></section>
    </article></main><Footer /></>;
}
