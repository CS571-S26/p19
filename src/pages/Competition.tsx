import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const placeholders = [
  { icon: '📅', label: 'Date', value: 'TBD — Spring 2026' },
  { icon: '📍', label: 'Venue', value: 'TBD — UW-Madison Campus' },
  { icon: '🎟️', label: 'Admission', value: 'Free & open to the public' },
  { icon: '🎞️', label: 'Livestream', value: 'Link to be announced' },
];

export default function Competition() {
  return (
    <div className="page-wrapper" style={{ paddingBottom: '100px' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: '0.75rem' }}>
              Annual Event
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1rem' }}>
              The Competition
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              The Premier Indian Classical Dance Competition at UW-Madison
            </p>
          </Col>
        </Row>

        {/* Detail cards */}
        <Row className="g-3 mb-5 justify-content-center">
          {placeholders.map(d => (
            <Col key={d.label} xs={12} sm={6} md={3}>
              <Card className="glass-card h-100" style={{ border: 'none' }}>
                <Card.Body className="text-center" style={{ padding: '1.75rem 1rem' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{d.icon}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    {d.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                    {d.value}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Body text */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', marginBottom: '1rem' }}>
                About the Event
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                Nakshatra is the Premier Indian classical dance competition at University of Wisconsin-Madison,
                showcasing the rich traditions of Indian dance. This annual event invites eight highly skilled
                Indian classical dance teams from across the nation. The competition is organized by a dedicated
                executive board, supported by liaisons and event managers, who work tirelessly to deliver a
                spectacular cultural showcase. Nakshatra not only celebrates the art of Indian classical dance
                but also enriches the Madison community by offering a glimpse into various classical Indian dance
                forms. To get involved with Nakshatra or for more updates, contact us via email at
                nakshatrauw@gmail.com or follow our social media channels!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
