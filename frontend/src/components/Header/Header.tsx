import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import { useState, useEffect, useRef } from 'react';
import AboutUsPage from '../AboutUs/AboutUsPage';
import CareersPage from '../Careers/CareersPage';
import IndustriesPage from '../Industries/IndustriesPage';
import InsightsPage from '../Insights/InsightsPage';
import ServicesPage from '../Services/ServicesPage';
import CoursesPage from '../Courses/CoursesPage';

const Header = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeDropdown = () => {
    setActiveDropdown(null);
    setShowDropdown(false);
  };

  const handleAuthClick = () => {
    closeDropdown();
    setIsMobileMenuOpen(false);
    navigate('/my-arinsa');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDropdown();
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeDropdown || isMobileMenuOpen ? 'hidden' : 'auto';
  }, [activeDropdown, isMobileMenuOpen]);

  useEffect(() => {
    if (activeDropdown) {
      setTimeout(() => setShowDropdown(true), 10);
    }
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleMouseLeave = () => {
    if (!dropdownRef.current?.contains(document.activeElement)) {
      closeDropdown();
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: '#5f6f91',
          padding: '20px 40px',
          borderBottom: '1px solid #444',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
          <Link to="/" onClick={closeDropdown}>
            <img
              src={logo}
              alt="Company Logo"
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Link>

          <nav style={{ display: 'flex', gap: '30px', fontSize: '16px', fontWeight: 500 }}>
            {[
              { label: 'Home', path: '/', hover: false },
              { label: 'About Us', key: 'about' },
              { label: 'Careers', key: 'careers' },
              { label: 'Industries', key: 'industries' },
              { label: 'Insights', key: 'insights' },
              { label: 'Services', key: 'services' },
              { label: 'Courses', key: 'courses' },
            ].map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={closeDropdown}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  style={{ color: 'white', cursor: 'pointer' }}
                  onMouseEnter={() => setActiveDropdown(item.key!)}
                  onClick={() => setActiveDropdown(item.key!)}
                >
                  {item.label}
                </span>
              )
            )}
          </nav>
        </div>

        {/* Desktop Button */}
        <div className="desktop-auth-btn">
          <button
            onClick={handleAuthClick}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            My ARINSA AI MINDS
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          ☰
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-nav"
          style={{
            backgroundColor: '#5f6f91',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            color: 'white',
            width: '100vw',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          }}
        >
          {[
            { label: 'Home', path: '/', hover: false },
            { label: 'About Us', key: 'about' },
            { label: 'Careers', key: 'careers' },
            { label: 'Industries', key: 'industries' },
            { label: 'Insights', key: 'insights' },
            { label: 'Services', key: 'services' },
            { label: 'Courses', key: 'courses' },
          ].map((item) =>
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => {
                  closeDropdown();
                  setIsMobileMenuOpen(false);
                }}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                onClick={() => {
                  setActiveDropdown(item.key!);
                  setIsMobileMenuOpen(false);
                }}
                style={{ cursor: 'pointer' }}
              >
                {item.label}
              </span>
            )
          )}
          <button
            onClick={handleAuthClick}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            My ARINSA AI MINDS
          </button>
        </div>
      )}

      {/* Dropdown Section */}
      {activeDropdown && (
        <div
          ref={dropdownRef}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            top: '120px', // increased gap between header and dropdown
            left: 10,
            right: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(2px)',
            color: 'white',
            zIndex: 15,
            padding: '40px 20px 20px 20px',
            minHeight: 'calc(100vh - 80px - 60px)',
            overflowY: 'auto',
            display: 'flex',
            justifyContent: 'center',
            boxSizing: 'border-box',
            opacity: showDropdown ? 1 : 0,
            transform: showDropdown ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1200px', padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={closeDropdown}
                style={{
                  background: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  padding: '6px 12px',
                  cursor: 'pointer',
                }}
              >
                Close ✕
              </button>
            </div>

            {activeDropdown === 'about' && <AboutUsPage closeDropdown={closeDropdown} />}
            {activeDropdown === 'careers' && <CareersPage closeDropdown={closeDropdown} />}
            {activeDropdown === 'industries' && <IndustriesPage closeDropdown={closeDropdown} />}
            {activeDropdown === 'insights' && <InsightsPage closeDropdown={closeDropdown} />}
            {activeDropdown === 'services' && <ServicesPage closeDropdown={closeDropdown} />}
            {activeDropdown === 'courses' && <CoursesPage closeDropdown={closeDropdown} />}
          </div>
        </div>
      )}

      {/* Mobile Responsive Styles */}
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          @media (max-width: 768px) {
            nav {
              display: none !important;
            }
            .hamburger {
              display: block !important;
            }
            .desktop-auth-btn {
              display: none !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
