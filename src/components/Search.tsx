import React from 'react';

export default function Search() {
  return (
    <div style={card}>
      <h2 style={title}>Search</h2>
      <p style={subtitle}>
        Plan your next trip. Use this form for flights or hotels.
      </p>

      <form onSubmit={(e) => e.preventDefault()} style={formGrid}>
        <div style={fieldCol}>
          <label htmlFor="tripType" style={label}>Type</label>
          <select id="tripType" name="tripType" style={input}>
            <option value="flight">Flight</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>

        <div style={twoCol}>
          <div style={fieldCol}>
            <label htmlFor="from" style={label}>From / City</label>
            <input id="from" name="from" placeholder="SFO / San Francisco" style={input} />
          </div>
          <div style={fieldCol}>
            <label htmlFor="to" style={label}>To / Destination</label>
            <input id="to" name="to" placeholder="JFK / New York" style={input} />
          </div>
        </div>

        <div style={threeCol}>
          <div style={fieldCol}>
            <label htmlFor="depart" style={label}>Check-in / Depart</label>
            <input id="depart" name="depart" type="date" style={input} />
          </div>
          <div style={fieldCol}>
            <label htmlFor="return" style={label}>Check-out / Return</label>
            <input id="return" name="return" type="date" style={input} />
          </div>
          <div style={fieldCol}>
            <label htmlFor="guests" style={label}>Guests / Travelers</label>
            <input id="guests" name="guests" type="number" min={1} defaultValue={1} style={input} />
          </div>
        </div>

        <div style={actionsRow}>
          <button type="submit" style={primaryBtn}>Search</button>
          <button type="reset" style={ghostBtn}>Clear</button>
        </div>
      </form>
    </div>
  );
}

const fontStack =
  `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;

const card: React.CSSProperties = {
  width: 'min(1200px, 100%)',
  background: '#fff',
  borderRadius: 20,
  border: '1px solid #e5e7eb',
  boxShadow: '0 18px 40px rgba(2, 6, 23, 0.10)',
  padding: 40,
  fontFamily: fontStack,
  color: '#0f172a',
};

const title: React.CSSProperties = {
  margin: 0,
  marginBottom: 8,
  fontSize: 30,
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
  fontWeight: 800,
};

const subtitle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 24,
  color: '#475569',
  fontSize: 18,
};

const formGrid: React.CSSProperties = {
  display: 'grid',
  gap: 18,
};

const fieldCol: React.CSSProperties = {
  display: 'grid',
  gap: 10,
};

const label: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 17,
  color: '#0f172a',
};

const input: React.CSSProperties = {
  height: 56,
  fontSize: 18,
  lineHeight: 1.35,
  border: '1px solid #d1d5db',
  borderRadius: 14,
  padding: '0 14px',
  background: '#fff',
  outline: 'none',
  boxShadow: 'inset 0 1px 1.5px rgba(0,0,0,0.04)',
};

const twoCol: React.CSSProperties = {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
};

const threeCol: React.CSSProperties = {
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
};

const actionsRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginTop: 8,
};

const primaryBtn: React.CSSProperties = {
  height: 56,
  borderRadius: 14,
  padding: '0 22px',
  border: '1px solid #1d4ed8',
  background: '#1d4ed8',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 800,
  fontSize: 18,
  boxShadow: '0 10px 22px rgba(29, 78, 216, 0.25)',
};

const ghostBtn: React.CSSProperties = {
  height: 56,
  borderRadius: 14,
  padding: '0 22px',
  border: '1px solid #e5e7eb',
  background: '#fff',
  color: '#0f172a',
  cursor: 'pointer',
  fontWeight: 800,
  fontSize: 18,
};

const hint: React.CSSProperties = {
  color: '#94a3b8',
  marginTop: 4,
  fontSize: 14,
};
