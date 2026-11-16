import { useState } from 'react';
import { sendContactMessage } from '../api/client.js';
import { CONTACT_TOPICS } from '../data/site.js';

const EMPTY = { name: '', email: '', topic: CONTACT_TOPICS[0], message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [message, setMessage] = useState('');

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      await sendContactMessage(values);
      setStatus('done');
      setMessage('Thanks! Your message is on its way — we’ll get back to you soon.');
      setValues(EMPTY);
    } catch {
      setStatus('error');
      setMessage('Sorry, something went wrong. Please email info@rabbitladders.com or call 310-726-9688.');
    }
  }

  return (
    <form className="card card--form contact-form" onSubmit={handleSubmit}>
      <h2 className="h3">Send us a message</h2>

      <div className="form-grid">
        <label className="field">
          <span>Your name</span>
          <input type="text" required autoComplete="name" value={values.name} onChange={update('name')} />
        </label>
        <label className="field">
          <span>Email</span>
          <input type="email" required autoComplete="email" value={values.email} onChange={update('email')} />
        </label>
      </div>

      <label className="field">
        <span>How can we help?</span>
        <select value={values.topic} onChange={update('topic')}>
          {CONTACT_TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Message</span>
        <textarea rows={6} required value={values.message} onChange={update('message')} />
      </label>

      <button type="submit" className="btn btn--primary btn--start" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
