import { useState, useEffect } from 'react';

// Placeholder date — update this when the competition date is confirmed
const COMPETITION_DATE = new Date('2026-04-19T18:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = COMPETITION_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 3rem)', textAlign: 'center' }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
      }}>
        Competition Countdown
      </p>

      <div className="countdown-wrap">
        {UNITS.map((unit, i) => (
          <div key={unit} className="countdown-unit">
            <span className="countdown-number">{String(values[i]).padStart(2, '0')}</span>
            <span className="countdown-label">{unit}</span>
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.72rem',
        color: 'var(--text-secondary)',
        marginTop: '1.5rem',
        marginBottom: 0,
        opacity: 0.7,
      }}>
        Date TBD — placeholder shown
      </p>
    </div>
  );
}
