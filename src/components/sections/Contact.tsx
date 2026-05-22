import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SendStatus>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
        },
        () => {
          setStatus('error');
        },
      );
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow"><span className="eyebrow-num">09</span> Get in Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <p className="contact-stand">Riverside, CA · usually replies within 24h</p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:javellaneda0213@gmail.com">
                <span className="icon"><FaEnvelope /></span>
                <span className="label">Email</span>
                <span className="arr">↗</span>
              </a>
              <a
                className="contact-link"
                href="https://github.com/julianavellaneda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon"><FaGithub /></span>
                <span className="label">GitHub</span>
                <span className="arr">↗</span>
              </a>
              <a
                className="contact-link"
                href="http://www.linkedin.com/in/julianavellaneda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon"><FaLinkedin /></span>
                <span className="label">LinkedIn</span>
                <span className="arr">↗</span>
              </a>
            </div>
          </div>

          <div
            className="contact-form-card reveal"
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
          >
            <h3>Send me a message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your name" required />

              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="you@example.com" required />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What are we building?"
                required
              ></textarea>

              <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="contact-status contact-status--success" role="status">
                  Thanks — message sent. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status contact-status--error" role="alert">
                  Something went wrong. Please email me directly at javellaneda0213@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
