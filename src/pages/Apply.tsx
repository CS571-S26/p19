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

interface AppForm {
  name: string;
  email: string;
  year: string;
  role: string;
  why: string;
}

export default function Apply() {
  const [form, setForm] = useState<AppForm>({ name: '', email: '', year: '', role: '', why: '' });
  const [submitted, setSubmitted] = useState(false);

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
        <Row className="g-4 mb-5">
          {roles.map(role => (
            <Col key={role.title} md={4}>
              <div className="glass-card role-card" style={{ padding: '2rem' }}>
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
          ))}
        </Row>

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

          {/* Application form */}
          <Col lg={7}>
            <h2 className="section-title mb-4"><span className="gold-underline">Express Interest</span></h2>
            <div className="glass-card" style={{ padding: '2rem' }}>
              {submitted ? (
                <div className="confirmation-box">
                  <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>✦</div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Application Received!
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                    Thanks, <strong style={{ color: 'var(--text-primary)' }}>{form.name}</strong>!
                    We'll be in touch at <strong style={{ color: 'var(--text-primary)' }}>{form.email}</strong> when
                    applications open for the {form.role || 'selected'} role.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col sm={6}>
                      <label className="form-label-dark">Full Name</label>
                      <input name="name" className="form-control form-control-dark" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </Col>
                    <Col sm={6}>
                      <label className="form-label-dark">Email</label>
                      <input name="email" type="email" className="form-control form-control-dark" placeholder="your@wisc.edu" value={form.email} onChange={handleChange} required />
                    </Col>
                    <Col sm={6}>
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
                    <Col sm={6}>
                      <label className="form-label-dark">Role Interest</label>
                      <select name="role" className="form-select form-select-dark" value={form.role} onChange={handleChange} required>
                        <option value="">Select a role</option>
                        <option>Executive Board</option>
                        <option>Liaison</option>
                        <option>Event Manager</option>
                        <option>Unsure — Tell me more</option>
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
                        Submit Application
                      </button>
                    </Col>
                  </Row>
                </form>
              )}
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textAlign: 'center', marginTop: '1rem' }}>
              Questions? Email us at{' '}
              <a href="mailto:nakshatrauw@gmail.com" style={{ color: 'var(--gold)' }}>nakshatrauw@gmail.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
