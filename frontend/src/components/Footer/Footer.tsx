import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#ccc', padding: '20px 40px', marginTop: 'auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Company Info */}
        <div>
          <h4 style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>ARINSA AI MINDS PVT LTD</h4>
          <p style={{ color: '#aaa' }}>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Page Links */}
        <div className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          <Link to="/connect" style={{ color: '#ccc', textDecoration: 'none' }}>Connect with us</Link>
          <Link to="/my-arinsa" style={{ color: '#ccc', textDecoration: 'none' }}>My ARINSA</Link>
          <Link to="/legal-privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Legal and privacy</Link>
        </div>

        {/* Social Links */}
        <div className="footer-social" style={{ display: 'flex', gap: '15px' }}>
          <a
            href="https://www.linkedin.com/company/ans-ai-minds/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ccc', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/arinsa_ai_minds?igsh=MzUzb2cxNWwyMTlw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ccc', textDecoration: 'none' }}
          >
            Instagram
          </a>
          <a
            href="https://x.com/ARINSA_AI_MINDS?t=63OPDjj4CcyZ3PhfGt1r8A&s=08"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ccc', textDecoration: 'none' }}
          >
            X
          </a>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            footer {
              padding: 20px;
            }
            .footer-links,
            .footer-social {
              flex-direction: column;
              gap: 10px;
            }
            .footer-links a,
            .footer-social a {
              font-size: 14px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
