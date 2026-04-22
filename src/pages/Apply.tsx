import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionDivider from '../components/SectionDivider';

const roles = [
  {
    icon: '👑',
    title: 'Executive Board',
    description:
      'The core leadership team behind Nakshatra. Board members drive the vision, manage the organization, and oversee all aspects of the annual competition — from logistics to sponsorships.',
    requirements: ['Strong organizational & leadership skills', 'Prior event or leadership experience preferred', 'Significant time commitment throughout the year'],
  },
  {
    icon: '🤝',
    title: 'Liaison',
    description:
      'Liaisons serve as the primary point of contact between Nakshatra and the competing dance teams. You coordinate communication, manage team logistics, and ensure a seamless experience for all participants.',
    requirements: ['Excellent communication skills', 'Detail-oriented and responsive', 'Comfortable managing multiple contacts'],
  },
  {
    icon: '📋',
    title: 'Event Manager',
    description:
      'Event managers handle the day-of experience — coordinating volunteers, managing the venue, and ensuring everything runs smoothly. No dance experience required; organizational skills are key.',
    requirements: ['Available for key rehearsals and event day', 'Strong problem-solving skills', 'Works well in a fast-paced environment'],
  },
];

const timeline = [
  { date: 'September', event: 'Applications Open' },
  { date: 'Late September', event: 'Info Session & Team Mixer' },
  { date: 'Early October', event: 'Interviews & Selection' },
  { date: 'Mid October', event: 'Offers Extended' },
  { date: 'November – March', event: 'Active Planning & Coordination' },
  { date: 'Spring 2026', event: 'Competition Weekend' },
];

const EXEC_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecbg2GtWrmJbveCSYEIktBbN7OnsKh3oxpyv7MKff7J97k7w/viewform?usp=header';

interface InterestForm {
  name: string;
  email: string;
  year: string;
  why: string;
}

const DEADLINE_NOTE = (
  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginTop: '1rem', marginBottom: 0 }}>
    Applications are due <strong style={{ color: 'var(--text-primary)' }}>Thursday, April 23rd at 11:59 PM CST</strong>.
    Directors will reach out to schedule interviews after the deadline.
  </p>
);

export default function Apply() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [form, setForm] = useState<InterestForm>({ name: '', email: '', year: '', why: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleRoleSelect(title: string) {
    if (selectedRole === title) {
      setSelectedRole(null);
    } else {
      setSelectedRole(title);
      setSubmitted(false);
      setForm({ name: '', email: '', year: '', why: '' });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <Container>
        {/* Header */}
        <Row className="text-center mb-2">
          <Col>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '0.75rem' }}>
              Join the Team
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Apply to Nakshatra
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Open to all UW-Madison students. No dance experience required for most roles —
              just passion, commitment, and a desire to celebrate Indian culture.
            </p>
          </Col>
        </Row>

        <SectionDivider />

        {/* Role cards */}
        <Row className="mb-2">
          <Col>
            <h2 className="section-title mb-4"><span className="gold-underline">Open Roles</span></h2>
          </Col>
        </Row>
        <Row className="g-4 mb-4">
          {roles.map(role => {
            const isSelected = selectedRole === role.title;
            return (
              <Col key={role.title} md={4}>
                <div
                  className="glass-card role-card"
                  onClick={() => handleRoleSelect(role.title)}
                  style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    position: 'relative',
                    border: isSelected ? '2px solid var(--gold)' : '2px solid transparent',
                    transition: 'border 0.2s ease',
                  }}
                >
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      width: '1.4rem',
                      height: '1.4rem',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      color: '#000',
                      fontWeight: 700,
                    }}>
                      ✓
                    </div>
                  )}
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{role.icon}</div>
                  <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                    {role.title}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {role.description}
                  </p>
                  <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-secondary)', fontSize: '0.82rem', margin: 0, lineHeight: 1.8 }}>
                    {role.requirements.map(req => <li key={req}>{req}</li>)}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Selection action area */}
        {selectedRole && (
          <Row className="justify-content-center mb-5">
            <Col lg={8}>
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                {selectedRole === 'Executive Board' ? (
                  <>
                    <a href={EXEC_FORM_URL} target="_blank" rel="noopener noreferrer">
                      <button className="btn-gradient">Apply Now</button>
                    </a>
                    {DEADLINE_NOTE}
                  </>
                ) : submitted ? (
                  <>
                    <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>✦</div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                      Application Received!
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                      Thanks, <strong style={{ color: 'var(--text-primary)' }}>{form.name}</strong>! We'll be in touch at{' '}
                      <strong style={{ color: 'var(--text-primary)' }}>{form.email}</strong> when{' '}
                      {selectedRole} applications open.
                    </p>
                  </>
                ) : (
                  <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                    <Row className="g-3">
                      <Col sm={6}>
                        <label className="form-label-dark">Full Name</label>
                        <input name="name" className="form-control form-control-dark" placeholder="Your name" value={form.name} onChange={handleChange} required />
                      </Col>
                      <Col sm={6}>
                        <label className="form-label-dark">Email</label>
                        <input name="email" type="email" className="form-control form-control-dark" placeholder="your@wisc.edu" value={form.email} onChange={handleChange} required />
                      </Col>
                      <Col xs={12}>
                        <label className="form-label-dark">Year</label>
                        <select name="year" className="form-select form-select-dark" value={form.year} onChange={handleChange} required>
                          <option value="">Select year</option>
                          <option>Freshman</option>
                          <option>Sophomore</option>
                          <option>Junior</option>
                          <option>Senior</option>
                          <option>Graduate Student</option>
                        </select>
                      </Col>
                      <Col xs={12}>
                        <label className="form-label-dark">Why do you want to join Nakshatra?</label>
                        <textarea
                          name="why"
                          className="form-control form-control-dark"
                          placeholder="Tell us a bit about yourself and your interest..."
                          rows={4}
                          value={form.why}
                          onChange={handleChange}
                          required
                          style={{ resize: 'vertical' }}
                        />
                      </Col>
                      <Col xs={12}>
                        <button type="submit" className="btn-gradient" style={{ width: '100%' }}>
                          Express Interest
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </div>
            </Col>
          </Row>
        )}

        <SectionDivider />

        <Row className="g-5">
          {/* Timeline */}
          <Col lg={5}>
            <h2 className="section-title mb-4"><span className="gold-underline">Timeline</span></h2>
            {timeline.map(item => (
              <div className="timeline-item" key={item.date}>
                <div className="timeline-dot" />
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {item.date}
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{item.event}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
