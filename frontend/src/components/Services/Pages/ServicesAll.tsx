import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ServicesAll: React.FC = () => {
  const {hash} = useLocation();
  

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


  const sections = [
    {
      id: 'consulting',
      title: 'Consulting',
      image: '/image/service2.jpg',
      content: (
        <>
          <p><strong>Business Transformation:</strong> We help businesses undergo significant transformations to improve efficiency, streamline operations, and enhance their ability to scale.</p>
          <p><strong>Strategy Development:</strong> Our strategic insights help organizations identify and implement market entry strategies, optimize competitive positioning, and redefine value propositions.</p>
          <p><strong>Process Optimization:</strong> We use Lean and Six Sigma to streamline workflows, reduce costs, and improve productivity.</p>
          <p><strong>Customer Experience (CX):</strong> We enhance every touchpoint of your customer journey for loyalty and satisfaction.</p>
          <p><strong>Change Management:</strong> We equip your team to manage transitions smoothly with training and adoption support.</p>
          <p><strong>Case Study:</strong> A retail brand saw a 20% retention increase and 15% revenue boost through our CX strategy.</p>
        </>
      )
    },
  
    {
      id: 'technology',
      title: 'Technology',
      image: '/image/service4.jpg',
      content: (
        <>
          <p><strong>Custom Software:</strong> We build scalable and secure apps, platforms, and systems tailored to your needs.</p>
          <p><strong>Cloud Services:</strong> We manage your AWS, Azure, or Google Cloud infrastructure for performance and security.</p>
          <p><strong>Cybersecurity:</strong> We protect your data and systems through proactive monitoring and penetration testing.</p>
          <p><strong>AI/ML Integration:</strong> We automate processes and drive insights through artificial intelligence.</p>
          <p><strong>AI Automation:</strong> We implement intelligent automation to reduce manual work and enhance decision-making.</p>
          <p><strong>Agentic AI Systems:</strong> We design autonomous, goal-driven AI agents that interact, reason, and act on behalf of your business.</p>
          <p><strong>Generative AI Solutions:</strong> From content creation to design automation, we help you innovate at scale.</p>
          <p><strong>Data Analytics:</strong> We build dashboards and forecasting tools for actionable business intelligence.</p>
          <p><strong>Hypercare Support:</strong> We support post-go-live performance with issue resolution and training.</p>
          <p><strong>Hypercare Automation:</strong> Our tools detect and fix system issues in real time using AI-driven insights.</p>
        </>
      )
    },
    {
      id: 'managed-services',
      title: 'Managed Services',
      image: '/image/service5.jpg',
      content: (
        <>
          <p><strong>End-to-End IT Support:</strong> We provide 24/7 support for system stability and business continuity.</p>
          <p><strong>Cloud Infrastructure Management:</strong> We manage public, private, and hybrid clouds for scalability and cost savings.</p>
          <p><strong>Application Lifecycle Services:</strong> We handle development, deployment, updates, and maintenance.</p>
          <p><strong>Service Desk Outsourcing:</strong> We deliver 24/7 helpdesk support for users and IT issue resolution.</p>
          <p><strong>DevOps as a Service:</strong> We streamline release cycles and app quality through DevOps pipelines.</p>
          <p><strong>Hypercare Management:</strong> We support your systems after go-live with proactive monitoring and training.</p>
          <p><strong>Automation of Managed Workflows:</strong> We use RPA and AI to streamline operations and improve efficiency.</p>
          <p><strong>SaaS Management:</strong> We optimize subscriptions and integrate SaaS tools like Salesforce and HubSpot.</p>
          <p><strong>Multi-SaaS Support:</strong> We ensure your SaaS stack is synchronized for seamless business workflows.</p>
        </>
      )
    },

    {
      id: 'people-and-workforce',
      title: 'People and Workforce',
      image: '/image/service3.jpg',
      content: (
        <>
          <p><strong>Talent Strategy:</strong> We align your talent plan with your business goals to secure top-performing employees.</p>
          <p><strong>Workforce Analytics:</strong> We uncover trends in retention, satisfaction, and productivity using advanced analytics.</p>
          <p><strong>Learning & Development:</strong> We deliver custom upskilling and leadership programs to future-proof your workforce.</p>
          <p><strong>Diversity & Inclusion (D&I):</strong> We embed D&I strategies to foster a culture of inclusion and innovation.</p>
          <p><strong>HR Tech Enablement:</strong> We implement Workday, SuccessFactors, and other tools for smarter HR operations.</p>
          <p><strong>Case Study:</strong> A manufacturer improved retention by 40% through a new talent strategy and L&D initiative.</p>
        </>
      )
    }
    
  ];

  return (
    <div>
      
      {/* Banner */}
<div
  style={{
    backgroundImage: 'url("/image/service1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
    position: 'relative', // Needed for absolute positioning inside
  }}
>
  <div
    style={{
      position: 'absolute',
      bottom: '40px',
      left: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    }}
  >
    <h1 style={{ fontSize: '3rem', color: '#fff', fontWeight: 'bold', margin: 0 }}>
      View Services
    </h1>
    <button
      onClick={() => window.location.href = '/connect'} // Adjust as needed
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Contact Us
    </button>
  </div>
</div>

      

      {/* Intro Text */}
      <div
        style={{
          backgroundColor: '#777',
          color: '#111',
          padding: '20px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            SERVICES at ARINSA AI MINDS
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            At ARINSA AI MINDS, we offer a diverse range of services designed to drive growth,
            optimize operations, and inspire innovation across industries. Our solutions are
            designed for organizations of all sizes, from startups to enterprises.
          </p>
        </div>
      </div>

      {/* Spacer between intro and first section */}
      <div style={{ height: '40px', backgroundColor: '#f5f5f5' }} />

      {/* Section Rows */}
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center', // Vertical center alignment
            justifyContent: 'flex-start',
            padding: '60px 40px',
            borderBottom: '10px solid #ddd',
            gap: '40px',
            flexWrap: 'nowrap',
            background:'#A9A9A9',
          }}
        >
          <div style={{ flex: '0 0 400px' }}>
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{section.title}</h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesAll;
