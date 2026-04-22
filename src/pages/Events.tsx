import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from '../components/EventCard';
import SectionDivider from '../components/SectionDivider';

const events = [
  {
    title: 'Nakshatra Mixer',
    type: 'Info Session',
    date: 'September 2026',
    time: 'TBD',
    location: 'TBD',
    description:
      "Kick off the year with the Nakshatra team. Learn about being a liaison or event manager and find out how to get involved with Wisconsin's premier Indian classical dance competition.",
  },
  {
    title: 'Cultural Night Showcase',
    type: 'Performance',
    date: 'November 2026',
    time: 'TBD',
    location: 'Varsity Hall, Union South',
    description:
      'Join us for an evening dedicated to raising awareness for our philanthropic partners. Come support and celebrate the incredible organizations we work with on campus!',
  },
  {
    title: 'Nakshatra 2026 Competition',
    type: 'Competition',
    date: 'Spring 2027',
    time: 'TBD',
    location: 'TBD',
    description:
      'The main event. Eight elite collegiate teams from across the nation take the stage for the annual Nakshatra Indian classical dance competition. Free and open to the public.',
  },
];

export default function Events() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <Container>
        <Row className="text-center mb-2">
          <Col>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--purple-light)',
              marginBottom: '0.75rem',
            }}>
              Throughout the Year
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Events
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Workshops, performances, and cultural events — RSVP to secure your spot.
            </p>
          </Col>
        </Row>

        <SectionDivider />

        <Row className="g-4">
          {events.map(event => (
            <Col key={event.title} md={6} lg={4}>
              <EventCard {...event} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
