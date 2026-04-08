import { useState } from 'react';
import RSVPForm from './RSVPForm';

interface EventCardProps {
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export default function EventCard({ title, type, date, time, location, description }: EventCardProps) {
  const [showRsvp, setShowRsvp] = useState(false);

  return (
    <div className="glass-card event-card" style={{ padding: '1.75rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <span className="event-badge">{type}</span>

        <h5 style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--gold)',
          fontWeight: 700,
          fontSize: '1.4rem',
          letterSpacing: '0.04em',
          marginBottom: '0.75rem',
        }}>
          {title}
        </h5>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
          📅 {date} · {time}
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1rem' }}>
          📍 {location}
        </p>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>
          {description}
        </p>

        {!showRsvp ? (
          <button className="btn-gradient" onClick={() => setShowRsvp(true)}>
            RSVP
          </button>
        ) : (
          <RSVPForm eventName={title} />
        )}
      </div>
    </div>
  );
}
