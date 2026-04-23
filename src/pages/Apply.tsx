import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionDivider from '../components/SectionDivider';

const roles = [
  {
    title: 'Executive Board',
    description:
      'Lead the vision and operations of Nakshatra. Executive board members oversee all aspects of the competition from securing venues and sponsors to managing judges, logistics, marketing, and more. Roles include Events, Finance, Fundraising, Head Liaisons, Hospitality, Judging, Logistics, Marketing, Philanthropy, Registration, Risk & Affiliation, and Tech.',
    requirements: [
      'Strong organizational and leadership skills',
      'Significant time commitment throughout the academic year',
      'Prior event or leadership experience preferred',
    ],
  },
  {
    title: 'Liaison',
    description:
      'Serve as the primary point of contact for your assigned competing dance team throughout competition weekend. Liaisons ensure their team moves through the weekend smoothly from tech rehearsal and hotel room decorating to crafts day and performances. You are responsible for your team\'s safety and experience from arrival to departure.',
    requirements: [
      'Available for the full competition weekend (Spring 2027)',
      'Able to attend mandatory meetings and SAP/AOD training beforehand',
      'Must complete one concession shift and obtain ServSafe certification',
    ],
  },
  {
    title: 'Event Manager',
    description:
      'Support the board and liaisons in bringing competition weekend to life. Event managers help set up the mixer, create props and decorations for crafts day, assist during performances and tech time, and fill in for liaison roles when needed. A great way to be part of the Nakshatra team without being assigned to a specific competing team.',
    requirements: [
      'Available for the full competition weekend (Spring 2027)',
      'Able to attend mandatory meetings and SAP/AOD training beforehand',
      'Must complete one concession shift and obtain ServSafe certification',
    ],
  },
];

const timeline = [
  { date: 'April 23rd, 11:59 PM CST', event: 'Executive Board Applications Close' },
  { date: 'Late April', event: 'Executive Board Interviews' },
  { date: 'Early May', event: 'Executive Board Finalized' },
  { date: 'Early September', event: 'Liaison & Event Manager Recruitment Opens' },
  { date: 'Mid-Late September', event: 'Liaison & Event Manager Interviews' },
  { date: 'Early October', event: 'Full Team Finalized' },
  { date: 'November – March', event: 'Active Planning & Coordination' },
  { date: 'Spring 2027', event: 'Competition Weekend' },
];

const EXEC_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecbg2GtWrmJbveCSYEIktBbN7OnsKh3oxpyv7MKff7J97k7w/viewform?usp=header';

interface InterestForm {
  name: string;
  email: string;
  year: string;
}

const DEADLINE_NOTE = (
  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginTop: '1rem', marginBottom: 0 }}>
    Applications are due <strong style={{ color: 'var(--text-primary)' }}>Thursday, April 23rd at 11:59 PM CST</strong>.
    Directors will reach out to schedule interviews after the deadline.
  </p>
);

export default function Apply() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [form, setForm] = useState<InterestForm>({ name: '', email: '', year: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleRoleSelect(title: string) {
    if (selectedRole === title) {
      setSelectedRole(null);
    } else {
      setSelectedRole(title);
      setSubmitted(false);
      setForm({ name: '', email: '', year: '' });
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
                      <button className="btn-ghost">Apply Now</button>
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
                        <button type="submit" className="btn-ghost" style={{ width: '100%' }}>
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

        <Row className="mb-2">
          <Col>
            <h2 className="section-title mb-4"><span className="gold-underline">Timeline</span></h2>
          </Col>
        </Row>

        {/* Desktop horizontal timeline */}
        <div className="d-none d-md-block" style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
          <div style={{ position: 'relative', minWidth: '700px', padding: '100px 0 80px' }}>
            {/* Horizontal gold line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '2px',
              background: 'var(--gold)',
              transform: 'translateY(-50%)',
            }} />

            {/* Items */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              {timeline.map((item, i) => {
                const above = i % 2 === 0;
                return (
                  <div key={item.date} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    flex: 1,
                  }}>
                    {/* Date — above the line */}
                    <div style={{
                      position: 'absolute',
                      bottom: above ? 'calc(50% + 22px)' : 'auto',
                      top: above ? 'auto' : 'calc(50% + 22px)',
                      width: '100%',
                      textAlign: 'center',
                      padding: '0 4px',
                    }}>
                      {above ? (
                        <>
                          <div style={{ color: 'var(--gold)', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>
                            {item.date}
                          </div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.4, marginTop: '0.25rem' }}>
                            {item.event}
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '0.25rem' }}>
                            {item.event}
                          </div>
                          <div style={{ color: 'var(--gold)', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>
                            {item.date}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Diamond marker on the line */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(45deg)',
                      width: '12px',
                      height: '12px',
                      background: 'var(--gold)',
                      flexShrink: 0,
                    }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="d-md-none" style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical gold line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '7px',
            width: '2px',
            background: 'var(--gold)',
          }} />

          {timeline.map(item => (
            <div key={item.date} style={{ position: 'relative', marginBottom: '2rem' }}>
              {/* Diamond marker */}
              <div style={{
                position: 'absolute',
                left: 'calc(-2rem + 1px)',
                top: '4px',
                width: '12px',
                height: '12px',
                background: 'var(--gold)',
                transform: 'rotate(45deg)',
                flexShrink: 0,
              }} />
              <div style={{ color: 'var(--gold)', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                {item.date}
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.92rem' }}>
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
