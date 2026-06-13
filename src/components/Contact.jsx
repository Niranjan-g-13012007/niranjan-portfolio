import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiUser, FiMessageSquare } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'niranjangobinathan@gmail.com', href: 'mailto:niranjangobinathan@gmail.com', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  { icon: FiPhone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX', color: '#10B981', bg: '#F0FDF4', border: '#A7F3D0' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/niranjan', href: 'https://linkedin.com', color: '#0A66C2', bg: '#EFF6FF', border: '#BFDBFE' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Niranjan-g-13012007', href: 'https://github.com/Niranjan-g-13012007', color: '#0F172A', bg: '#F8FAFC', border: '#E2E8F0' },
  { icon: FiMapPin, label: 'Location', value: 'Erode, Tamil Nadu, India', href: null, color: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
];

const inputStyle = {
  width: '100%', padding: '12px 16px 12px 40px',
  borderRadius: 12, border: '1.5px solid #E2E8F0',
  fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#0F172A',
  background: '#F8FAFC', outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle = {
  display: 'block', fontFamily: 'Inter', fontSize: '0.82rem',
  fontWeight: 600, color: '#374151', marginBottom: 6,
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };
  const focusStyle = e => { e.target.style.borderColor = '#2563EB'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.12)'; e.target.style.background = '#fff'; };
  const blurStyle = e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; e.target.style.background = '#F8FAFC'; };

  return (
    <section id="contact" style={{ background: '#F8FAFC' }} className="section">
      <div className="container" ref={ref}>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="section-header">
          <p className="section-badge">Get in Touch</p>
          <h2 className="section-title">Let's work<br /><span className="gradient-text">together</span></h2>
          <p className="section-subtitle">Open to internship, placement, and collaboration opportunities. Feel free to reach out!</p>
        </motion.div>

        <div className="grid-2">
          {/* Contact info */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#0F172A', marginBottom: 8 }}>
              Contact Information
            </h3>
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <motion.div key={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, padding: 16,
                  borderRadius: 18, border: '1px solid #E2E8F0',
                  background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s',
                }}
                whileHover={{ x: 4, borderColor: color }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                  background: bg, border: `1px solid ${border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={17} color={color} />
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.72rem', color: '#94A3B8', fontWeight: 500, margin: 0 }}>{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#0F172A', fontWeight: 600, textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = color}
                      onMouseLeave={e => e.currentTarget.style.color = '#0F172A'}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#0F172A', fontWeight: 600, margin: 0 }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={2}>
            <div style={{
              padding: 32, borderRadius: 24, border: '1px solid #E2E8F0',
              background: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              {submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', gap: 16 }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F0FDF4', border: '2px solid #A7F3D0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiCheckCircle size={32} color="#10B981" />
                  </div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1.2rem', color: '#0F172A', margin: 0 }}>Message sent!</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: '#64748B', textAlign: 'center', margin: 0 }}>
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                    style={{ padding: '10px 20px', borderRadius: 10, fontFamily: 'Inter', fontWeight: 600, fontSize: '0.875rem', color: '#2563EB', background: '#EFF6FF', border: '1px solid #BFDBFE', cursor: 'pointer' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', color: '#0F172A', margin: 0 }}>Send me a message</h3>

                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <div style={{ position: 'relative' }}>
                      <FiUser size={14} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Doe" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <FiMail size={14} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@example.com" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <div style={{ position: 'relative' }}>
                      <FiMessageSquare size={14} color="#94A3B8" style={{ position: 'absolute', left: 14, top: 14, pointerEvents: 'none' }} />
                      <textarea name="message" required value={form.message} onChange={handleChange}
                        placeholder="Hi Niranjan, I'd like to discuss..."
                        rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                        onFocus={focusStyle} onBlur={blurStyle}
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={loading}
                    style={{
                      width: '100%', padding: '14px 0', borderRadius: 12,
                      fontFamily: 'Inter', fontWeight: 600, fontSize: '0.9rem',
                      color: 'white', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                      background: loading ? '#93C5FD' : 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                      boxShadow: loading ? 'none' : '0 4px 14px rgba(37,99,235,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.transform = 'translateY(-1px)'; } }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    {loading ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
