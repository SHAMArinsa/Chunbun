import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductsAll: React.FC = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

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

  const sections = [{
  id: 'arinsamultiagent',
  title: 'Arinsa Multi Agent',
  image: '/image/product-arinsamultiagent.jpg',
  content: (
    <>
      <p>
        <strong>Arinsa Multi Agent</strong> by ARINSA AI MINDS is a powerful autonomous agent system designed to execute multi-step business tasks across departments without constant human input. Unlike traditional bots, it combines intelligence, memory, and coordination to perform real work like an AI-powered virtual employee.
      </p>

      <p>
        This platform supports a suite of specialized agents each trained for domains like sales, legal, finance, and documentation. These agents operate in parallel, share context, and execute tasks with autonomy. From reading spreadsheets and CRM logs to rewriting contracts or auditing compliance, <strong>Arinsa Multi Agent</strong> works across your workflows on its own.
      </p>

      <p><strong>Key Capabilities Include:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Finance Agent:</strong> Audits Excel files, flags anomalies, summarizes financial data, and sends Slack/email alerts</li>
        <li><strong>Sales Agent:</strong> Reads CRM data, drafts personalized emails, identifies cold leads, and schedules follow-ups</li>
        <li><strong>Legal Agent:</strong> Analyzes contracts, highlights risky clauses, compares legal documents, and suggests redlines</li>
        <li><strong>Doc Tracker Agent:</strong> Monitors spreadsheet changes across versions and generates row-level summaries in natural language</li>
        <li><strong>Research Agent:</strong> Reads articles and reports from multiple sources, clusters findings, and drafts insights with citations</li>
      </ul>

      <p>
        Each agent is autonomous yet collaborative using shared memory and task tracking to maintain consistency across workflows. With full customization options and tool integration (Google Workspace, Slack, CRMs, SQL, APIs), <strong>Arinsa Multi Agent</strong> adapts to your processes effortlessly.
      </p>

      <p><strong>Industries Benefiting from Arinsa Multi Agent:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Enterprises:</strong> Automating internal operations and cross-department task orchestration</li>
        <li><strong>Legal & Compliance:</strong> Reviewing contracts, managing audits, and reducing manual workload</li>
        <li><strong>Finance:</strong> Handling spreadsheets, reports, forecasts, and anomaly detection</li>
        <li><strong>SaaS & Startups:</strong> Boosting sales follow-ups, support tracking, and campaign operations</li>
        <li><strong>EdTech & Research:</strong> Synthesizing large knowledge bases and writing literature reviews</li>
        <li><strong>Consulting & Agencies:</strong> Delivering intelligence-driven services across clients at scale</li>
      </ul>

      <p>
        <strong>Arinsa Multi Agent</strong> transforms your teams by offloading routine, multi-layered processes giving you a truly intelligent and proactive AI workforce.
      </p>
    </>
  )
},{
  id: 'arinsacampaignagent',
  title: 'Arinsa Campaign Agent',
  image: '/image/product-arinsacampaignagent.jpg',
  content: (
    <>
      <p>
        <strong>Arinsa Campaign Agent</strong> by ARINSA AI MINDS is a full-funnel, autonomous marketing and sales intelligence system. It seamlessly manages everything from lead identification to multi-platform campaign execution with personalized outreach at scale.
      </p>

      <p>
        Powered by a network of specialized agents, it analyzes CRM data, crafts email/voice messages, A/B tests content, and launches campaigns across LinkedIn, X, WhatsApp, Instagram, and Email without requiring manual coordination.
      </p>

      <p><strong>Key Capabilities Include:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Sales Agent:</strong> Tracks cold/warm leads, drafts personalized email sequences, and schedules follow-ups</li>
        <li><strong>Voice Agent:</strong> Generates lifelike voice drops for customer engagement via audio messages</li>
        <li><strong>Campaign Agent:</strong> Builds, runs, and analyzes campaigns across 5+ platforms</li>
        <li><strong>CRM Sync:</strong> Updates lead activity, behavior metrics, and conversion readiness scores in real-time</li>
        <li><strong>A/B Optimization:</strong> Autonomously improves messaging and scheduling based on live analytics</li>
      </ul>

      <p>
        <strong>Arinsa Campaign Agent</strong> not only scales outreach it personalizes it using intelligent context, voice, and timing.
      </p>

      <p><strong>Industries Benefiting from Arinsa Campaign Agent:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Marketing Agencies:</strong> Scaling campaigns without extra headcount</li>
        <li><strong>SaaS & B2B:</strong> Increasing MQL → SQL conversion through multichannel personalization</li>
        <li><strong>D2C & EdTech:</strong> Engaging leads via voice + email follow-ups automatically</li>
        <li><strong>Startups:</strong> Running lean campaigns with high ROI across platforms</li>
      </ul>

      <p>
        Let <strong>Arinsa Campaign Agent</strong> orchestrate your entire marketing and sales flow while you focus on closing deals.
      </p>
    </>
  )
}
,{
  id: 'arinsafinsecureagent',
  title: 'Arinsa FinSecure Agent',
  image: '/image/product-arinsafinsecureagent.jpg',
  content: (
    <>
      <p>
        <strong>Arinsa FinSecure Agent</strong> by ARINSA AI MINDS is an autonomous financial workflow agent designed to manage reporting, auditing, tax filing, and regulatory compliance with zero manual oversight.
      </p>

      <p>
        Built for finance teams, tax consultants, and business owners, it monitors financial documents, highlights anomalies, generates audit-ready summaries, and even auto-fills statutory returns based on real-time insights.
      </p>

      <p><strong>Key Capabilities Include:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Report Agent:</strong> Summarizes cash flow, P&L, balance sheets, and forecasts using uploaded or cloud-based spreadsheets</li>
        <li><strong>Audit Agent:</strong> Checks internal policies vs compliance checklists, highlights risk areas, and flags financial inconsistencies</li>
        <li><strong>Tax Filing Agent:</strong> Auto-prepares and files GST/income tax forms, tracks deadlines, and alerts via Slack/email</li>
        <li><strong>Anomaly Detection:</strong> Detects suspicious or irregular transactions and provides interpretive analysis</li>
        <li><strong>Integration Ready:</strong> Works with ERP, QuickBooks, Tally, or Google Sheets API</li>
      </ul>

      <p>
        <strong>Arinsa FinSecure Agent</strong> is your always-on, never-distracted financial intelligence unit keeping you compliant, informed, and agile.
      </p>

      <p><strong>Industries Benefiting from Arinsa FinSecure Agent:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>SMEs:</strong> Automating monthly and annual filing + financial clarity</li>
        <li><strong>FinTech & BFSI:</strong> Assisting with compliance risk management and real-time reporting</li>
        <li><strong>Startups:</strong> Streamlining all financial reporting without hiring an accounting team</li>
        <li><strong>Tax Consultants:</strong> Reducing manual preparation by 80% via intelligent automation</li>
      </ul>

      <p>
        Trust <strong>Arinsa FinSecure Agent</strong> to protect your books while saving time, money, and effort.
      </p>
    </>
  )
}
,{
  id: 'arinsaoperationalagent',
  title: 'Arinsa Operational Agent',
  image: '/image/product-arinsaoperationalagent.jpg',
  content: (
    <>
      <p>
        <strong>Arinsa Operational Agent</strong> by ARINSA AI MINDS is a cross-team coordination and marketing execution agent that keeps your schedules aligned and campaigns on track across tools, teams, and time zones.
      </p>

      <p>
        Designed to simplify chaotic collaboration, it syncs calendars, assigns responsibilities, and tracks real-time progress of cross-functional marketing and project workflows.
      </p>

      <p><strong>Key Capabilities Include:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Calendar Agent:</strong> Manages events, syncs across Google/Outlook, and avoids schedule conflicts</li>
        <li><strong>Task Coordination Agent:</strong> Assigns and reassigns owners, nudges on deadlines, and reroutes delays</li>
        <li><strong>Campaign Tracker Agent:</strong> Orchestrates multi-channel releases and aligns stakeholders with auto reminders</li>
        <li><strong>Cross-tool Sync:</strong> Works with Trello, Notion, Asana, Slack, and internal CRMs</li>
        <li><strong>Operational Insights:</strong> Generates daily/weekly summaries with priority highlights</li>
      </ul>

      <p>
        <strong>Arinsa Operational Agent</strong> keeps your people, tools, and timelines in perfect sync like a full-stack ops manager running 24/7.
      </p>

      <p><strong>Industries Benefiting from Arinsa Operational Agent:</strong></p>
      <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
        <li><strong>Agencies:</strong> Managing creative timelines and campaign assets without chaos</li>
        <li><strong>Remote Teams:</strong> Ensuring cross-timezone alignment with minimal friction</li>
        <li><strong>Startups:</strong> Keeping lean teams highly efficient without hiring project managers</li>
        <li><strong>Marketing Departments:</strong> Running seamless multi-platform campaigns on schedule</li>
      </ul>

      <p>
        With <strong>Arinsa Operational Agent</strong>, execution never slips through the cracks no matter how fast your team moves.
      </p>
    </>
  )
}
,    {
      id: 'autodocquery',
      title: 'AutoDocQuery',
      image: '/image/product-autodocquery.jpg',
      content: (
  <>
    <p>
      <strong>AutoDocQuery</strong> by ARINSA AI MINDS is your AI-powered document assistant, built to intelligently handle and process multiple documents at once be it Word, Excel, or PDF.
    </p>
    <p>
      Simply upload your files, ask natural language questions, and receive smart, context-aware answers instantly. This tool eliminates manual search, accelerates understanding, and boosts productivity.
    </p>
    <p>
      Designed with scalability and adaptability in mind, <strong>AutoDocQuery</strong> fits seamlessly into your workflows. We also offer <strong>customization</strong> based on your organization’s specific needs such as role-based access, domain-specific tuning, and system integration.
    </p>
    <p><strong>Industries Benefiting from AutoDocQuery:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Legal:</strong> Contract review, compliance checks, and case summarization</li>
      <li><strong>Healthcare:</strong> Patient report interpretation and medical document queries</li>
      <li><strong>Finance:</strong> Policy analysis, audit reviews, and financial summaries</li>
      <li><strong>Education:</strong> Research extraction, syllabus parsing, academic insights</li>
      <li><strong>Government:</strong> Regulatory document processing and public audit evaluations</li>
      <li><strong>Corporate/HR:</strong> Employee policy search and document compliance checks</li>
      <li><strong>Insurance:</strong> Claims review and underwriting document analysis</li>
    </ul>
    <p>
      <strong>AutoDocQuery</strong> isn’t just a tool it’s your intelligent partner in making document-heavy tasks faster, smarter, and easier across industries.
    </p>
  </>
)

    },
    {
      id: 'codesimplify',
      title: 'CodeSimplify',
      image: '/image/product-codesimplify.jpg',
      content: (
  <>
    <p>
      <strong>CodeSimplify</strong> by ARINSA AI MINDS is your smart code documentation assistant, built to turn raw source code into clear, structured, and human-readable documentation instantly.
    </p>
    <p>
      Simply upload your code files or paste snippets in any supported language. Our AI will analyze classes, functions, variables, and logic to generate clean documentation that boosts project clarity, enhances team collaboration, and reduces onboarding time for new developers.
    </p>
    <p>
      Designed to scale with teams and projects of all sizes, <strong>CodeSimplify</strong> offers support for multi-language codebases and handles bulk documentation requests with ease. We also provide <strong>customized configurations</strong> to match your organization’s formatting standards, internal style guides, or industry specific compliance.
    </p>
    <p><strong>Industries Benefiting from CodeSimplify:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Software Development:</strong> Project documentation, code reviews, version control clarity</li>
      <li><strong>Education & Training:</strong> Teaching programming concepts with well-documented code samples</li>
      <li><strong>DevOps:</strong> Infrastructure-as-code documentation and automation scripts</li>
      <li><strong>Enterprise IT:</strong> Legacy codebase documentation and internal tool clarity</li>
      <li><strong>Startups:</strong> Faster developer onboarding and API documentation for MVPs</li>
      <li><strong>Cybersecurity:</strong> Clear visibility into code logic for audit and risk assessment</li>
    </ul>
    <p>
      <strong>CodeSimplify</strong> helps teams code confidently with documentation that's always in sync.
    </p>
  </>
)

    },
    {
      id: 'instacoder',
      title: 'InstaCoder',
      image: '/image/product-instacoder.jpg',
      content: (
  <>
    <p>
      <strong>InstaCoder</strong> by ARINSA AI MINDS is your on demand AI coding assistant designed to help developers rapidly generate accurate and functional code snippets across multiple programming languages.
    </p>
    <p>
      Simply select your preferred language, enter a prompt or description, and let <strong>InstaCoder</strong> deliver clean, executable code in seconds. Whether you're prototyping a new feature, writing utility functions, or automating repetitive logic, this tool saves valuable development time and boosts productivity.
    </p>
    <p>
      <strong>InstaCoder</strong> supports a wide range of modern languages and frameworks, and can be fine-tuned based on your team’s coding standards or architectural needs. For enterprise users, we offer <strong>customized templates, usage restrictions, and secure integrations</strong> with your internal development tools or IDEs.
    </p>
    <p><strong>Industries Benefiting from InstaCoder:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Software Development:</strong> Rapid prototyping, logic automation, and test case generation</li>
      <li><strong>EdTech:</strong> Helping learners understand coding concepts through AI-generated examples</li>
      <li><strong>Startups:</strong> Speeding up MVP development and reducing time-to-market</li>
      <li><strong>Enterprise IT:</strong> Assisting internal tools, scripting, and system automation</li>
      <li><strong>Game Development:</strong> Fast generation of gameplay logic or shader code</li>
      <li><strong>Research & Academia:</strong> Code generation for experiments, models, or data processing</li>
    </ul>
    <p>
      With <strong>InstaCoder</strong>, you write less and build more faster, smarter, and with AI by your side.
    </p>
  </>
)

    },
    {
      id: 'transcoder',
      title: 'TransCoder',
      image: '/image/product-transcoder.jpg',
      content: (
  <>
    <p>
      <strong>TransCoder</strong> by ARINSA AI MINDS is an intelligent code translation tool that allows seamless conversion of source code from one programming language to another while preserving logic, structure, and intent.
    </p>
    <p>
      Just select your source and target languages, upload or paste your code, and let <strong>TransCoder</strong> handle the rest. Whether you're migrating legacy systems, modernizing outdated stacks, or testing platform compatibility, this tool accelerates the transformation process without compromising accuracy.
    </p>
    <p>
      <strong>TransCoder</strong> supports multiple programming languages and is built with contextual understanding to avoid generic or syntax-only translations. For enterprise and academic use, we offer <strong>custom mapping rules, language pair tuning, and integration</strong> with internal systems or CI/CD pipelines.
    </p>
    <p><strong>Industries Benefiting from TransCoder:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Enterprise Modernization:</strong> Migrating legacy applications to modern tech stacks</li>
      <li><strong>Software Development:</strong> Converting open-source projects into preferred languages</li>
      <li><strong>EdTech:</strong> Teaching cross-language programming through side-by-side comparisons</li>
      <li><strong>Startups:</strong> Experimenting with multi-platform development with speed</li>
      <li><strong>DevOps:</strong> Refactoring scripts or automations to fit infrastructure requirements</li>
      <li><strong>Research:</strong> Reproducing academic models across supported languages</li>
    </ul>
    <p>
      <strong>TransCoder</strong> makes multi-language development and code migration smarter, faster, and hassle-free.
    </p>
  </>
)

    },
    {
      id: 'textifyai',
      title: 'TextifyAI',
      image: '/image/product-textifyai.jpg',
      content: (
  <>
    <p>
      <strong>TextifyAI</strong> by ARINSA AI MINDS is your creative and functional text generation companion powered by advanced language models designed to transform ideas into compelling content.
    </p>
    <p>
      Whether you're drafting marketing copy, product descriptions, blog intros, ad headlines, or engaging narratives, <strong>TextifyAI</strong> adapts to your tone, style, and context. Just provide a prompt or keyword, and our AI crafts high-quality, ready-to-use text in seconds.
    </p>
    <p>
      <strong>TextifyAI</strong> supports multilingual output, tone adjustments (formal, casual, professional), and use-case-based tuning. We also offer <strong>custom integration and content rules</strong> for enterprises to align with branding and compliance needs.
    </p>
    <p><strong>Industries Benefiting from TextifyAI:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Marketing & Advertising:</strong> Campaign content, ad copies, and email marketing</li>
      <li><strong>E-commerce:</strong> Product listings, feature descriptions, and promotional blurbs</li>
      <li><strong>Media & Publishing:</strong> Story generation, script ideation, and content planning</li>
      <li><strong>Education:</strong> Writing prompts, assignments, and curriculum summaries</li>
      <li><strong>Startups:</strong> Landing page content, elevator pitches, and brand messaging</li>
      <li><strong>HR & Corporate:</strong> Policy drafts, internal communication, and training materials</li>
    </ul>
    <p>
      <strong>TextifyAI</strong> helps you write faster, smarter, and more creatively on demand.
    </p>
  </>
)

    },
    {
      id: 'text2vision',
      title: 'Text2Vision',
      image: '/image/product-text2vision.jpg',
      content: (
  <>
    <p>
      <strong>Text2Vision</strong> by ARINSA AI MINDS transforms your words into stunning visuals using advanced text-to-image generation models. Simply describe what you want to see, and the tool produces high-quality, imaginative, and accurate images in real time.
    </p>
    <p>
      Whether you’re designing concepts, building visual assets, or brainstorming creatively, <strong>Text2Vision</strong> enables instant visual storytelling without needing design skills. It supports different artistic styles, resolutions, and use-case-focused presets to suit your specific goals.
    </p>
    <p>
      For teams and enterprises, we offer <strong>custom model training, brand-style alignment, and API access</strong> for seamless integration into your content creation workflows or marketing pipelines.
    </p>
    <p><strong>Industries Benefiting from Text2Vision:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Design & Advertising:</strong> Visual concept development, mockups, and storyboards</li>
      <li><strong>Marketing & Branding:</strong> Promotional graphics, social media visuals, campaign creatives</li>
      <li><strong>Education:</strong> Creating diagrams, illustrations, and visual aids</li>
      <li><strong>Entertainment:</strong> Character design, world-building, and scene ideation</li>
      <li><strong>E-commerce:</strong> Generating product mockups or visual catalogs</li>
      <li><strong>Publishing:</strong> Book covers, editorial illustrations, and magazine layouts</li>
    </ul>
    <p>
      <strong>Text2Vision</strong> turns your imagination into impactful visuals on demand and with creative control.
    </p>
  </>
)

    },
    {
      id: 'summarizerpro',
      title: 'SummarizerPro',
      image: '/image/product-summarizerpro.jpg',
      content: (
  <>
    <p>
      <strong>SummarizerPro</strong> by ARINSA AI MINDS is a multi-format summarization engine that helps you distill essential information from video, audio, and text—quickly and accurately.
    </p>
    <p>
      Upload files, provide URLs, or paste large content blocks <strong>SummarizerPro</strong> analyzes the material and generates concise summaries, key highlights, or bullet points. It's ideal for professionals who need to understand long-form content in less time without losing context.
    </p>
    <p>
      The tool supports multilingual input, timestamped output (for video/audio), and user-defined summary styles (bullet, paragraph, Q&A). For enterprise users, we offer <strong>custom NLP tuning, domain-aware summarization, and API-based integration</strong> into knowledge systems, LMS platforms, and internal portals.
    </p>
    <p><strong>Industries Benefiting from SummarizerPro:</strong></p>
    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
      <li><strong>Education:</strong> Lecture/video summarization, assignment briefings, and note generation</li>
      <li><strong>Corporate:</strong> Meeting recording summaries, internal reports, and knowledge management</li>
      <li><strong>Legal:</strong> Case brief summarization, contract extraction, and compliance audits</li>
      <li><strong>Healthcare:</strong> Clinical note summarization and patient transcript compression</li>
      <li><strong>Media & Journalism:</strong> Interview/audio-to-article conversion, content distillation</li>
      <li><strong>Research:</strong> Long paper breakdowns, thesis digests, and citation previews</li>
    </ul>
    <p>
      <strong>SummarizerPro</strong> helps you absorb more while reading or listening less powered by AI for modern content workflows.
    </p>
  </>
)

    }
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/image/product1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          position: 'relative',
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
            View Products
          </h1>
          <button
            onClick={() => navigate('/connect')}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#493c56ff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#635f63ff',
          color: '#111',
          padding: '20px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            PRODUCTS of ARINSA AI MINDS
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            At ARINSA AI MINDS, we proudly build and sell our own suite of innovative PaaS and SaaS products that empower businesses to operate smarter and scale faster. Our proprietary cloud-based solutions are designed to meet the real-world needs of modern organizations whether you're launching a startup or managing enterprise level operations.

            <br /><br />

            From AI-powered automation platforms to intelligent document processing, code generation tools, and workflow accelerators, our products are crafted to deliver performance, scalability, and security without the burden of infrastructure management. When you choose ARINSA AI MINDS, you're not just adopting software you’re investing in purpose built products backed by deep industry expertise and continuous innovation.
          </p>
        </div>
      </div>

      <div style={{ height: '40px', backgroundColor: '#f5f5f5' }} />

      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="section-row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '60px 40px',
            borderBottom: '10px solid #ddd',
            gap: '40px',
            background: '#A9A9A9',
            flexWrap: 'wrap',
          }}
        >
          <div className="section-img" style={{ flex: '0 0 400px' }}>
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
          <div
            className="section-content"
            style={{
              flex: '1',
              minWidth: '300px',
              textAlign: 'left',
            }}
          >
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{section.title}</h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{section.content}</div>
          </div>
        </div>
      ))}

      <style>
        {`
          @media (max-width: 768px) {
            .section-row {
              flex-direction: column !important;
              padding: 30px 20px !important;
              text-align: left;
            }

            .section-img {
              flex: unset !important;
              width: 100% !important;
              margin-bottom: 20px;
            }

            .section-content h2 {
              font-size: 1.5rem !important;
            }

            .section-content div {
              font-size: 1rem !important;
              line-height: 1.5 !important;
            }

            .section-content {
              min-width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductsAll;
