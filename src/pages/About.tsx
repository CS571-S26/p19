import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ── Scroll-reveal hook ────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ── Reveal wrapper ────────────────────────────────────────────
function Reveal({ children, delay = 0, height }: { children: React.ReactNode; delay?: number; height?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        height,
      }}
    >
      {children}
    </div>
  );
}

// ── Helper function for initials ──────────────────────────────
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
}

// ── Data ──────────────────────────────────────────────────────
const departments: {
  dept: string;
  email: string;
  members: { name: string; photo: string; objectPosition?: string; transform?: string; }[];
}[] = [
  {
    dept: 'Directors',
    email: 'nakshatrauw@gmail.com',
    members: [
      { name: 'Sudeeksha Nooka', photo: 'src/assets/sudeeksha_nooka.jpg' },
      { name: 'Rohan Vuppalapati', photo: 'src/assets/rohan_vuppalapati.jpg' },
      { name: 'Rhianna Nakrani', photo: 'src/assets/rhianna_nakrani.jpg' },
    ],
  },
  {
    dept: 'Events',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Diya Gopinath', photo: 'src/assets/diya_gopinath.jpg' },
      { name: 'Mardav Shah', photo: 'src/assets/mardav_shah.jpg' },
    ],
  },
  {
    dept: 'Finance',
    email: 'nakshatrauw.finance@gmail.com',
    members: [
      { name: 'Raja Chinnakotla', photo: 'src/assets/raja_chinnakotla.jpg' },
    ],
  },
  {
    dept: 'Fundraising',
    email: 'nakshatrauw.finance@gmail.com',
    members: [
      { name: 'Isha Darshan Lokande', photo: 'src/assets/isha_darshan_lokande.jpg', objectPosition: 'center 60%' },
      { name: 'Sanjay Murali', photo: 'src/assets/sanjay_murali.jpg' },
      { name: 'Srikar Kalapala', photo: 'src/assets/srikar_kalapala.jpg' },
    ],
  },
  {
    dept: 'Head Liaisons',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Ayush Harish', photo: 'src/assets/ayush_harish.jpg' },
      { name: 'Kaitlyn Narman', photo: 'src/assets/kaitlyn_narman.jpg' },
    ],
  },
  {
    dept: 'Hospitality',
    email: 'nakshatrauw.finance@gmail.com',
    members: [
      { name: 'Akshita Tirumalaraju', photo: 'src/assets/akshita_tirumalaraju.jpg' },
      { name: 'Sobhan Pandey', photo: 'src/assets/sobhan_pandey.jpg' },
    ],
  },
  {
    dept: 'Judging',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Nandini Shah', photo: 'src/assets/nandini_shah.jpg' },
      { name: 'Vinay Ramanathan', photo: 'src/assets/vinay_ramanathan.jpg' },
    ],
  },
  {
    dept: 'Logistics',
    email: 'nakshatrauw.finance@gmail.com',
    members: [
      { name: 'Aniruddh Mayya', photo: 'src/assets/aniruddh_mayya.jpg' },
      { name: 'Prishaa Rajesh', photo: 'src/assets/prishaa_rajesh.jpg' },
    ],
  },
  {
    dept: 'Marketing',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Iman Hafeez', photo: 'src/assets/iman_hafeez.jpg' },
      { name: 'Shruthi Sridhar', photo: 'src/assets/shruthi_sridhar.jpg', objectPosition: 'center 40%' },
    ],
  },
  {
    dept: 'Philanthropy',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Rithika Rajesh', photo: 'src/assets/rithika_rajesh.jpg' },
    ],
  },
  {
    dept: 'Registration',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Diya Satanur', photo: 'src/assets/diya_satanur.jpg' },
      { name: 'Riya Mathews', photo: 'src/assets/riya_mathews.jpg' },
    ],
  },
  {
    dept: 'Risk & Affiliation',
    email: 'nakshatrauw.relations@gmail.com',
    members: [
      { name: 'Aanchal Capoor', photo: 'src/assets/aanchal_capoor.jpg' },
      { name: 'Megha Brahmbhatt', photo: 'src/assets/megha_brahmbhatt.jpg' },
    ],
  },
  {
    dept: 'Tech',
    email: 'nakshatrauw.finance@gmail.com',
    members: [
      { name: 'Keshav Shah', photo: 'src/assets/keshav_shah.jpg', objectPosition: 'center 40%' },
      { name: 'Krishna Maganti', photo: 'src/assets/krishna_maganti.jpg' },
    ],
  },
];

const stats = [
  { value: '8',  label: 'Competing Teams' },
  { value: '1',  label: 'Stage' },
  { value: '6+', label: 'Dance Forms' },
  { value: 'UW', label: 'Madison' },
];

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '3.5rem 0' }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, var(--gold-muted))' }} />
      <div style={{ width: '7px', height: '7px', background: 'var(--gold)', transform: 'rotate(45deg)', margin: '0 16px', boxShadow: '0 0 8px var(--gold-glow)' }} />
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, var(--gold-muted))' }} />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <Container>

        {/* Heading */}
        <Row className="text-center mb-2">
          <Col>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '0.75rem' }}>
              Who We Are
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
              About Us
            </h1>
          </Col>
        </Row>

        {/* Narrative */}
        <Row className="justify-content-center mb-4">
          <Col lg={8}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Nakshatra is the premier Indian classical dance competition at the University of
              Wisconsin-Madison, showcasing the rich traditions of Indian dance. This annual event
              invites eight highly skilled Indian classical dance teams from across the nation.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              The competition is organized by a dedicated executive board, supported by liaisons
              and event managers, who work tirelessly to deliver a spectacular cultural showcase.
              Nakshatra not only celebrates the art of Indian classical dance but also enriches the
              Madison community by offering a glimpse into various classical Indian dance forms.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.9, margin: 0 }}>
              Affiliated with the Multicultural Student Center at the University of Wisconsin–Madison,
              Nakshatra is open to all students and welcomes anyone passionate about Indian culture,
              the performing arts, and community-building.
            </p>
          </Col>
        </Row>

        {/* Stats */}
        <Row className="justify-content-center mb-2">
          <Col lg={8}>
            <div className="glass-card" style={{ padding: '2rem 1rem', marginTop: '1rem' }}>
              <Row className="g-3 text-center">
                {stats.map(s => (
                  <Col key={s.label} xs={6} md={3}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, textShadow: '0 0 20px var(--gold-glow)' }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                      {s.label}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Divider />

        {/* Executive Board heading */}
        <Row className="mb-5">
          <Col>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              Executive Board
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
              Questions? Reach the full team at{' '}
              <a href="mailto:nakshatrauw@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                nakshatrauw@gmail.com
              </a>
            </p>
          </Col>
        </Row>

        {/* Department sections — each dept is its own reveal group */}
        {departments.map((dept, di) => (
          <div key={dept.dept} style={{ marginBottom: '2.5rem' }}>

            {/* Department title slides up first */}
            <Reveal delay={0}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.06em', margin: 0 }}>
                  {dept.dept}
                </h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-gold)' }} />
                <a href={`mailto:${dept.email}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-secondary)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  {dept.email}
                </a>
              </div>
            </Reveal>

            {/* Cards stagger in after the title */}
            <Row className="g-2">
              {dept.members.map((m, mi) => (
                <Col key={mi} xs={12} sm={6} md={4} lg={3}>
                  <Reveal delay={0.1 + mi * 0.08}>
                    <div style={{ overflow: 'hidden', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-purple)' }}>
                      <img
                        src={m.photo}
                        alt={m.name}
                        style={{
                          width: '100%',
                          height: '280px',
                          objectFit: 'cover',
                          objectPosition: m.objectPosition || 'center 60%',
                          transform: m.transform,
                          display: 'block'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLDivElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div
                        style={{
                          width: '100%',
                          height: '280px',
                          background: 'rgba(107, 33, 168, 0.2)',
                          color: 'var(--gold)',
                          display: 'none',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        {getInitials(m.name)}
                      </div>
                      <div style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.88rem' }}>
                        {m.name}
                      </div>
                    </div>
                  </Reveal>
                </Col>
              ))}
            </Row>

            {di < departments.length - 1 && (
              <div style={{ height: '1px', background: 'var(--border-gold)', marginTop: '2rem', opacity: 0.4 }} />
            )}
          </div>
        ))}

        <Divider />

        {/* Affiliations */}
        <Row className="g-4 align-items-stretch">
          <Col md={4} style={{ display: 'flex', flexDirection: 'column' }}>
            <Reveal delay={0} height="100%">
              <div className="glass-card" style={{ flex: 1, padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Affiliation
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Multicultural Student Center (MSC)
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Dual-affiliated with the Multicultural Student Center (MSC) at UW-Madison. Through the MSC affiliation program, Nakshatra gains access to priority space reservations, eligibility for the Multicultural Council Grant, and co-sponsorship opportunities with Identity Centers.
                </p>
              </div>
            </Reveal>
          </Col>
          <Col md={4} style={{ display: 'flex', flexDirection: 'column' }}>
            <Reveal delay={0.1} height="100%">
              <div className="glass-card" style={{ flex: 1, padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Affiliation
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  International Student Services (ISS)
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Affiliated with International Student Services (ISS) at UW-Madison. Through this affiliation, Nakshatra has the opportunity to host Global Café, a biweekly cultural event bringing together international and U.S. students, table at the International Student Organization Fair, and access additional funding through the Global Badger Experience Grant (GBEG).
                </p>
              </div>
            </Reveal>
          </Col>
          <Col md={4} style={{ display: 'flex', flexDirection: 'column' }}>
            <Reveal delay={0.2} height="100%">
              <div className="glass-card" style={{ flex: 1, padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Accreditation
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  SOLI Accredited RSO
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  Recognized as an Accredited RSO by the Office for Student Organizations, Leadership & Involvement (SOLI) at UW-Madison, an acknowledgement of our commitment to member experience and organizational excellence.
                </p>
              </div>
            </Reveal>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
