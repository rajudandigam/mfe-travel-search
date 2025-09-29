import React from 'react';

export default function Search() {
  function readForm(target: HTMLFormElement) {
    const form = new FormData(target);
    const tripType = (form.get('tripType') as 'flight' | 'hotel') || 'flight';
    const from = (form.get('from') as string) || '';
    const to = (form.get('to') as string) || '';
    const depart = (form.get('depart') as string) || '';
    const ret = (form.get('return') as string) || '';
    const guests = Number(form.get('guests') || 1);

    return {
      kind: tripType,
      title: tripType === 'flight'
        ? `Trip to ${to || 'Destination'}`
        : `Hotel • ${to || 'City'}`,
      routeOrCity: tripType === 'flight'
        ? `${from || 'FROM'} → ${to || 'TO'}`
        : (to || 'City'),
      dates: tripType === 'flight'
        ? (depart || 'TBD')
        : `${depart || 'TBD'} → ${ret || 'TBD'}`,
      classOrRoom: tripType === 'flight' ? 'Economy' : 'Deluxe',
      travelers: guests,
      image: tripType === 'flight'
        ? 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop'
        : 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1200&auto=format&fit=crop',
    };
  }

  return (
    <div style={card}>
      <h2 style={title}>Search</h2>
      <p style={subtitle}>Plan your next trip. Use this form for flights or hotels.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const payload = readForm(e.currentTarget);
          const ev = new CustomEvent('search:submitted', { detail: payload });
          window.dispatchEvent(ev);
        }}
        style={formGrid}
      >
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
          <button
            type="button"
            style={secondaryBtn}
            onClick={(e) => {
              const formEl = (e.currentTarget as HTMLButtonElement).form!;
              const detail = readForm(formEl);
              const ev = new CustomEvent('draft:created', { detail });
              console.log("draft:created", detail);
              window.dispatchEvent(ev);

              const incEv = new CustomEvent('trips:increment', { detail: { delta: 1, source: 'search' } });
              window.dispatchEvent(incEv);
            }}
          >
            + Create Draft
          </button>
          <button type="reset" style={ghostBtn}>Clear</button>
        </div>
      </form>
    </div>
  );
}

/* existing styles + one new button style */
const fontStack = `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`;
const card: React.CSSProperties = { width: 'min(1200px,100%)', background: '#fff', borderRadius: 20, border: '1px solid #e5e7eb', boxShadow: '0 18px 40px rgba(2,6,23,0.10)', padding: 40, fontFamily: fontStack, color: '#0f172a' };
const title: React.CSSProperties = { margin: 0, marginBottom: 8, fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.01em', fontWeight: 800 };
const subtitle: React.CSSProperties = { marginTop: 0, marginBottom: 24, color: '#475569', fontSize: 18 };
const formGrid: React.CSSProperties = { display: 'grid', gap: 18 };
const fieldCol: React.CSSProperties = { display: 'grid', gap: 10 };
const label: React.CSSProperties = { fontWeight: 700, fontSize: 17, color: '#0f172a' };
const input: React.CSSProperties = { height: 56, fontSize: 18, lineHeight: 1.35, border: '1px solid #d1d5db', borderRadius: 14, padding: '0 14px', background: '#fff', outline: 'none', boxShadow: 'inset 0 1px 1.5px rgba(0,0,0,0.04)' };
const twoCol: React.CSSProperties = { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' };
const threeCol: React.CSSProperties = { display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' };
const actionsRow: React.CSSProperties = { display: 'flex', gap: 12, marginTop: 8 };
const primaryBtn: React.CSSProperties = { height: 56, borderRadius: 14, padding: '0 22px', border: '1px solid #1d4ed8', background: '#1d4ed8', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: 18, boxShadow: '0 10px 22px rgba(29,78,216,0.25)' };
const ghostBtn: React.CSSProperties = { height: 56, borderRadius: 14, padding: '0 22px', border: '1px solid #e5e7eb', background: '#fff', color: '#0f172a', cursor: 'pointer', fontWeight: 800, fontSize: 18 };
const secondaryBtn: React.CSSProperties = { height: 56, borderRadius: 14, padding: '0 22px', border: '1px solid #0ea5e9', background: '#0ea5e9', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: 18 };
