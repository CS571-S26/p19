import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '1300px', padding: '0 1rem' }}>
          <p className="hero-tagline">UW–Madison · Indian Classical Dance</p>
          <h1 className="hero-title">NAKSHATRA</h1>
          <p className="hero-subtitle">
            The Premier Indian Classical Dance Competition at UW-Madison
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/competition">
              <button className="btn-ghost">View Competition</button>
            </Link>
            <Link to="/about">
              <button className="btn-ghost">About Us</button>
            </Link>
          </div>
        </div>
      </section>

      {/* About blurb */}
      <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h2 className="section-title mb-4">
                <span className="gold-underline">What is Nakshatra?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to="/about">
                <button className="btn-ghost">Learn More</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
