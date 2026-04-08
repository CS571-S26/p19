import RSVPForm from './RSVPForm';
import SectionDivider from './SectionDivider';

const details = [
  { icon: '📅', label: 'Date', value: 'TBD — Spring 2026' },
  { icon: '⏰', label: 'Time', value: 'TBD' },
  { icon: '📍', label: 'Venue', value: 'TBD — UW-Madison Campus' },
  { icon: '🎟️', label: 'Admission', value: 'Free & open to the public' },
  { icon: '🎞️', label: 'Livestream', value: 'Link to be announced' },
];

const categories = ['Bharatanatyam', 'Kathak', 'Odissi', 'Kuchipudi', 'Mohiniyattam', 'Fusion'];

export default function CompetitionDetails() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>

        {/* Left column */}
        <div style={{ flex: '1 1 420px' }}>
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--purple-light)',
              marginBottom: '0.5rem',
            }}>
              Annual Event
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '2.2rem', marginBottom: '1rem' }}>
              Nakshatra 2026
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 0 }}>
              Eight highly skilled Indian classical dance teams from across the nation
              compete on a single stage, celebrating the rich traditions of classical
              Indian dance and enriching the Madison community.
            </p>
          </div>

          {details.map(d => (
            <div className="detail-item" key={d.label}>
              <span className="detail-icon">{d.icon}</span>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>
                  {d.label}
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{d.value}</div>
              </div>
            </div>
          ))}

          <SectionDivider />

          <div>
            <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem' }}>
              Dance Categories
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map(cat => (
                <span key={cat} className="event-badge" style={{ fontSize: '0.78rem' }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: '1 1 320px' }}>
          <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
              Competing Teams
            </p>
            <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              8 Teams · Nationwide
            </h5>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 0 }}>
              Competing teams will be announced as the event approaches.
              Eight of the most skilled collegiate Indian classical dance
              groups from across the country will take the stage.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
              RSVP for the Event
            </h5>
            <RSVPForm eventName="Nakshatra 2026 Competition" />
          </div>
        </div>
      </div>
    </div>
  );
}
