// Thin wrapper around the future Express backend.
// In development, Vite proxies /api to http://localhost:5000 (see vite.config.js).
// In production, set VITE_API_URL if the API lives on another domain.

const BASE_URL = (import.meta.env.VITE_API_URL || '') + '/api';

async function post(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // Empty or non-JSON response; ignore.
  }

  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

/** POST /api/contact  { name, email, topic, message } */
export function sendContactMessage(payload) {
  return post('/contact', payload);
}

/** POST /api/newsletter  { email } */
export function subscribeNewsletter(email) {
  return post('/newsletter', { email });
}
