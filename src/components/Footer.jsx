import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', id: 'home' }, { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' }, { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' }, { label: 'Contact', id: 'contact' },
  ];

  const socials = [
    { icon: FiGithub, href: 'https://github.com/Niranjan-g-13012007', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:niranjangobinathan@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{ background: '#0F172A', color: '#E2E8F0' }}>
      <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
        {/* Top grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
          marginBottom: 40,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 800, fontSize: '0.85rem', fontFamily: 'Inter',
              }}>
                NG
              </div>
              <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#F1F5F9' }}>
                Niranjan Gobinathan
              </span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, maxWidth: 240 }}>
              B.Tech IT student passionate about building intelligent, scalable solutions.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 10, background: '#1E293B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94A3B8', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1E293B'; e.currentTarget.style.color = '#94A3B8'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.875rem', color: '#F1F5F9', marginBottom: 18 }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(({ label, id }) => (
                <button key={id} onClick={() => scrollTo(id)}
                  style={{
                    fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', padding: 0, transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '0.875rem', color: '#F1F5F9', marginBottom: 18 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:niranjangobinathan@gmail.com"
                style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
              >
                niranjangobinathan@gmail.com
              </a>
              <span style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B' }}>
                Erode, Tamil Nadu, India
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#10B981', fontWeight: 500 }}>Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #1E293B', marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#475569', margin: 0 }}>
            © {year} Niranjan Gobinathan. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter', fontSize: '0.82rem', color: '#475569', margin: 0, display: 'flex', alignItems: 'center', gap: 5 }}>
            Designed & Developed with <FiHeart size={12} color="#EF4444" style={{ fill: '#EF4444' }} /> by Niranjan Gobinathan
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
