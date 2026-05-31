import React from 'react';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

async function fetchStatus() {
  const response = await fetch(`${apiBaseUrl}/status`);
  return response.json();
}

export default function App() {
  const [status, setStatus] = React.useState('Loading...');

  React.useEffect(() => {
    fetchStatus()
      .then((data) => setStatus(data.message || 'Service online'))
      .catch(() => setStatus('Unable to reach backend'));
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>SkillPulse</h1>
      <p>Frontend is running and talking to the backend.</p>
      <div style={{ marginTop: 16, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <strong>Backend status:</strong>
        <div>{status}</div>
      </div>
    </main>
  );
}
