import React, { useEffect, useState } from 'react';

const caseStudies = [
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    image: "/image/casestudy_genai.jpg",
    image2: "/image/casestudy_genai2.jpg",
    overview:
      "Our client, a global publishing house, faced rising demands for multilingual, audience-tailored content. They needed a faster way to generate and repurpose editorial pieces without compromising brand voice or accuracy.",
    challenges:
      "Manual content creation across different regions and topics was slow, inconsistent, and resource-heavy. Editorial teams struggled to maintain tone consistency and meet fast content cycles across platforms.",
    solution:
      "We built and fine-tuned a domain-specific GPT model integrated into their CMS. The system could generate first-draft articles, summarize lengthy research papers, and rephrase content for various readership levels, all while aligning with editorial standards.",
    results:
      "Content production time decreased by 60%, and bounce rates fell by 25%. SEO performance improved by 35%, driving a 40% increase in organic traffic. Editorial teams reported 3x faster publishing cycles.",
    testimonial:
      "“Our team is now 3x more productive. GPT integration has been a game changer.” – Head of Digital Publishing",
    keyTechnologies: ["GPT-3", "CMS Integration", "NLP"],
    clientFeedback: "The publishing house saw a drastic reduction in editorial bottlenecks and improved content relevance.",
    futurePlans: "Further expansion of AI-driven content solutions across other content types, including video and social media posts.",
  },
  {
    id: "ai-agent",
    title: "AI Agents for Business Operations",
    image: "/image/casestudy_aiagent.jpg",
    image2: "/image/casestudy_aiagent2.jpg",
    overview:
      "A mid-sized logistics firm needed to streamline customer support and internal workflows. Manual tracking and delayed responses hurt client satisfaction and escalated operational costs.",
    challenges:
      "The support team was overwhelmed with routine queries like delivery tracking, rescheduling, and documentation. Legacy tools lacked real-time integration, and staff burnout led to higher attrition.",
    solution:
      "We deployed custom AI agents trained on internal SOPs, customer interaction logs, and shipment data. These agents handled 75% of inbound queries, performed automatic ticket escalation, and integrated with CRM and real-time GPS APIs.",
    results:
      "Customer response time dropped by 50%, and first-contact resolution improved by 60%. The support team workload was reduced by 65%, freeing staff to focus on high-priority requests.",
    testimonial:
      "“Our customers now get instant updates and resolutions. This has transformed our operations.” – COO, LogiFast",
    keyTechnologies: ["AI Agents", "Natural Language Processing", "CRM Integration"],
    clientFeedback: "Our operational efficiency improved significantly, and we received positive customer feedback.",
    futurePlans: "We plan to further enhance the agents’ capabilities, including voice integration and multilingual support.",
  },
  {
    id: "ai-automation",
    title: "AI-Powered Automation in Fintech",
    image: "/image/casestudy_aiautomation.jpg",
    image2: "/image/casestudy_aiautomation2.jpg",
    overview:
      "A fintech startup needed to scale its user onboarding, fraud detection, and compliance workflows without hiring extensively. Their manual checks introduced delays and operational bottlenecks.",
    challenges:
      "Document verification was taking 24-48 hours due to human dependency. The fraud detection logic had too many false positives, and analysts were overwhelmed during scale-up campaigns.",
    solution:
      "We built an AI pipeline combining OCR, fuzzy logic validation, fraud-pattern detection (based on ML), and credit-risk profiling using decision trees. The system was designed to learn from feedback and adapt dynamically.",
    results:
      "Verification time dropped to 10 minutes. Fraud detection accuracy improved by 42%, and regulatory audits reported 30% fewer compliance errors. The client scaled to 10x users without expanding the analyst team.",
    testimonial:
      "“This level of automation helped us scale without hiring more analysts.” – CTO, FinSecure",
    keyTechnologies: ["OCR", "Machine Learning", "Fraud Detection"],
    clientFeedback: "The AI system has been invaluable in reducing errors and increasing operational speed.",
    futurePlans: "The client plans to introduce AI-driven investment tools to further streamline their operations.",
  },
  {
    id: "healthcare-ai-case-study",
    title: "Healthcare AI Transformation",
    image: "/image/casestudy_health.jpg",
    image2: "/image/casestudy_health2.jpg",
    overview:
      "We collaborated with a multi-city hospital network aiming to improve diagnostic turnaround times and triage prioritization using AI. Overloaded radiologists and long patient queues affected outcomes.",
    challenges:
      "Doctors spent 40% of their time on routine X-ray/MRI analysis, and patients waited hours or days for basic reports. Mis-triaging led to delayed interventions in critical cases.",
    solution:
      "Our team deployed medical AI models for image diagnostics (X-rays, MRIs) and a natural language triage chatbot trained on symptoms and EHR data. Clinician feedback loops ensured accuracy and continuous learning.",
    results:
      "Triage wait times were reduced by 70%, and diagnostic accuracy increased significantly in pilot wards. The AI suggestions aligned with radiologist conclusions 92% of the time.",
    testimonial:
      "“Our doctors now focus on critical cases faster thanks to AI support.” – Chief Medical Officer",
    keyTechnologies: ["AI Image Diagnostics", "Natural Language Processing", "Triage Chatbot"],
    clientFeedback: "The AI models significantly reduced the time spent on routine tasks, improving overall patient care.",
    futurePlans: "The hospital network plans to expand AI use to other diagnostic fields, including oncology and cardiology.",
  },
];

const CaseStudyAll: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    window.scrollTo(0, 0);
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/image/casestudy.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '300px' : '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
          padding: isMobile ? '0 20px' : '0 40px',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '2rem' : '3rem',
            color: '#fff',
            margin: 0,
            fontWeight: 'bold',
          }}
        >
          Explore Case Studies
        </h1>
      </div>

      {caseStudies.map((caseStudy) => (
        <section
          key={caseStudy.id}
          id={caseStudy.id}
          style={{
            padding: isMobile ? '40px 20px' : '60px 40px',
            backgroundColor: '#2c2c2c',
            color: '#fff',
            marginTop: '20px',
            marginBottom: '20px',
            fontSize: isMobile ? '1.8rem' : '2.5rem',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>{caseStudy.title}</h2>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: isMobile ? '1 1 100%' : '1 1 40%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <img
                src={caseStudy.image2}
                alt={`${caseStudy.title} - Additional`}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </div>
            <div style={{ flex: isMobile ? '1 1 100%' : '1 1 50%' }}>
              <p style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', lineHeight: '1.6' }}>
                <strong>Overview: </strong>{caseStudy.overview}
                <br /><br />
                <strong>Challenges: </strong>{caseStudy.challenges}
                <br /><br />
                <strong>Solution: </strong>{caseStudy.solution}
                <br /><br />
                <strong>Results: </strong>{caseStudy.results}
                <br /><br />
                <strong>Testimonial: </strong>{caseStudy.testimonial}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CaseStudyAll;
