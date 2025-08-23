import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Health: React.FC = () => {
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  const boxStyle = isMobile
    ? {
        backgroundColor: '#1e1e1e',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '30px',
        boxShadow: '0 0 12px rgba(255,255,255,0.1)',
      }
    : {};

  const textStyle = {
    fontSize: '1.7rem',
    lineHeight: '1.6',
  };

  const headingStyle = {
    marginTop: '40px',
    fontSize: '2rem',
  };

  return (
    <div>
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/health.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '0 40px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            color: '#fff',
            margin: 0,
            fontWeight: 'bold',
          }}
        >
          Health
        </h1>
      </div>

      {/* Section */}
      <section
        style={{
          padding: isMobile ? '30px 20px' : '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.7rem',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2.4rem',
          }}
        >
          Embracing Innovation for Better Patient Outcomes
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '40px',
          }}
        >
          {/* Images */}
          {!isMobile && (
            <div style={{ flex: '1 1 40%' }}>
              {[
                'health1.jpg',
                'health2.jpg',
                'health3.jpg',
                'health4.jpg',
                'health5.jpg',
                'health6.jpg',
                'health7.jpg',
                'health8.jpg',
                'health9.jpg',
              ].map((src, index) => (
                <img
                  key={index}
                  src={`/image/${src}`}
                  alt={`Health ${index + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: index !== 8 ? '80px' : '0',
                  }}
                />
              ))}
            </div>
          )}

          {/* Text content */}
          <div style={{ flex: '1 1 55%' }}>
            <div style={isMobile ? boxStyle : {}}>
              <p style={textStyle}>
                <strong>Healthcare transformation</strong> is being reshaped by digital advancements like AI diagnostics, wearable technologies, telemedicine, and smart infrastructure. At Arinsa, we develop agile solutions that modernize healthcare delivery, enhance patient experience, and improve system efficiency.
              </p>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Key Innovations</h3>
              <ul>
                <li><strong>Telemedicine & Virtual Care:</strong> Breaking distance barriers for patient care. Example: Mayo Clinic’s virtual consultation service has seen a 300% rise post-COVID.</li>
                <li><strong>Electronic Health Records (EHRs):</strong> Seamless data sharing. Example: Cleveland Clinic’s MyChart platform enhances transparency and access.</li>
                <li><strong>AI-powered Diagnostics:</strong> Faster, accurate diagnosis. Example: Google’s DeepMind identified over 50 eye diseases from retinal scans with expert-level accuracy.</li>
                <li><strong>Wearable Health Tech:</strong> Preventive care through vitals tracking. Example: WHOOP and Fitbit used in monitoring athletes' recovery and early illness detection.</li>
                <li><strong>Personalized Medicine:</strong> Genomics-driven treatment. Example: FoundationOne uses gene sequencing to recommend targeted therapies in oncology.</li>
              </ul>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Digital Transformation Benefits</h3>
              <ul>
                <li><strong>Improved Outcomes:</strong> Real-time monitoring and precision care. Example: Abbott’s FreeStyle Libre sensors improve glycemic control in diabetic patients.</li>
                <li><strong>Efficiency:</strong> Automated workflows and smart alerts. Example: Kaiser Permanente’s AI-led scheduling reduced appointment no-shows by 23%.</li>
                <li><strong>Expanded Access:</strong> Mobile clinics and telehealth networks. Example: eSanjeevani in India facilitated over 100 million virtual consultations by 2024.</li>
                <li><strong>Cost Savings:</strong> Proactive care and early detection. Example: Mount Sinai's AI models help prevent hospital readmissions, saving millions annually.</li>
                <li><strong>Data-Driven Decisions:</strong> Predictive analytics improve population health. Example: BlueDot identified COVID-19 threat days before WHO alerts using AI tracking.</li>
              </ul>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Emerging Tech in Healthcare</h3>
              <ul>
                <li><strong>Blockchain:</strong> Secure, immutable health data. Example: Estonia’s eHealth Foundation uses blockchain for national EHR system.</li>
                <li><strong>Robotics:</strong> Assisting surgeries and rehab. Example: da Vinci Surgical System performs over 1.2 million robotic surgeries per year globally.</li>
                <li><strong>3D Printing:</strong> Custom devices and implants. Example: BioLife4D printed a mini human heart prototype using patient cells.</li>
                <li><strong>NLP (Natural Language Processing):</strong> Smart charting and clinical summaries. Example: Amazon Comprehend Medical extracts data from clinical notes for analysis.</li>
                <li><strong>AR/VR:</strong> Used for training and anxiety reduction. Example: VR used in pediatric wards to distract children during vaccinations.</li>
              </ul>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>How Arinsa Supports Healthcare</h3>
              <ul>
                <li>AI-driven tools for diagnostics, imaging, and patient triage.</li>
                <li>Integrated platforms combining EHR, telemedicine, and mobile apps.</li>
                <li>Secure cloud hosting compliant with HIPAA, GDPR, and local regulations.</li>
                <li>Custom dashboards and KPIs for health administrators and insurance partners.</li>
                <li>Training simulators for medical institutions using AR/VR solutions.</li>
                <li>Patient engagement apps for appointment booking, reminders, and post-care.</li>
                <li>Predictive models to manage hospital inventory and staff planning.</li>
              </ul>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Future Outlook</h3>
              <p style={textStyle}>
                By 2030, global healthcare is expected to be fully data-centric, with smart hospitals powered by AI and IoT. Digital twins, virtual health assistants, and personalized genomic treatments will be mainstream. Arinsa is committed to helping providers navigate this evolving landscape by building agile, secure, and scalable solutions tailored for next-gen healthcare systems.
              </p>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Patient-Centric Care: Empowering Individuals</h3>
              <p style={textStyle}>
                Empowering patients through digital health tools increases engagement, adherence, and satisfaction. Mobile apps with personalized health tips, AI-driven symptom checkers, and remote monitoring devices enable proactive care management. Arinsa’s patient portals integrate seamlessly with clinical workflows, providing users with accessible health records, appointment scheduling, and direct communication channels with caregivers.
              </p>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Sustainability & Healthcare Innovation</h3>
              <p style={textStyle}>
                Sustainability is gaining momentum in healthcare with eco-friendly facilities, waste reduction, and energy-efficient medical devices. Digital transformation supports sustainability by minimizing paper use and travel through telehealth and electronic records. Arinsa promotes green healthcare initiatives by developing cloud-native solutions optimized for minimal carbon footprint and supporting healthcare providers in their environmental goals.
              </p>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Challenges & Ethical Considerations</h3>
              <p style={textStyle}>
                Despite immense potential, healthcare digitalization faces challenges like data privacy, interoperability, and ethical AI use. Ensuring compliance with global standards, maintaining transparency in AI decision-making, and addressing biases are critical. Arinsa prioritizes building trust through secure, auditable systems and collaborates with stakeholders to promote equitable healthcare innovations.
              </p>
            </div>

            <div style={isMobile ? boxStyle : {}}>
              <h3 style={headingStyle}>Strategic Partnerships & Collaborations</h3>
              <p style={textStyle}>
                To accelerate healthcare innovation, Arinsa partners with leading hospitals, research institutions, technology firms, and policymakers. These collaborations foster knowledge exchange, co-development of cutting-edge solutions, and scalable pilot projects. Our partnerships ensure that healthcare technologies are clinically validated, user-friendly, and aligned with global health priorities.
              </p>
              <p style={{ ...textStyle, textAlign: 'center', fontStyle: 'italic', marginTop: '30px' }}>
                Together with our partners, Arinsa is building a healthier tomorrow — one innovation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
