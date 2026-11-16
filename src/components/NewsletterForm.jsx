import { useId, useState } from 'react';
import { subscribeNewsletter } from '../api/client.js';

export default function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    try {
      await subscribeNewsletter(email);
      setStatus('done');
      setMessage('You’re on the list — thanks for hopping on!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Sorry, we couldn’t sign you up right now. Please try again later.');
    }
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit}>
      <label htmlFor={`${id}-email`} className="newsletter__label">
        Get new arrivals by email
      </label>
      <div className="newsletter__row">
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Joining…' : 'Join'}
        </button>
      </div>
      <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
