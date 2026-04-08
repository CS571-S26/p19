import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <footer className="footer-dark">
      <Container>
        <Row className="align-items-start g-4">
          <Col md={4}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.18em', marginBottom: '0.5rem' }}>
              ✦ NAKSHATRA
            </div>
            <p style={{ margin: 0, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              The premier Indian classical dance competition at the University of Wisconsin–Madison.
            </p>
          </Col>

          <Col md={4} className="text-md-center">
            <p style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
              Affiliation
            </p>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Multicultural Student Center<br />
              University of Wisconsin–Madison
            </p>
          </Col>

          <Col md={4} className="text-md-end">
            <p style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
              Contact
            </p>
            <a href="mailto:nakshatrauw@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500 }}>
              nakshatrauw@gmail.com
            </a>
            <p style={{ color: 'var(--text-secondary)', margin: '0.75rem 0 0', fontSize: '0.78rem' }}>
              © {new Date().getFullYear()} Nakshatra at UW-Madison
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
