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
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="mailto:javellaneda0213@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/Mclovin0213" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <FaGithub /> GitHub
        </a>
        <a href="http://www.linkedin.com/in/julianavellaneda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
      <div className="contact-form">
        <h3>Send me a message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="contact-name">Name:</label>
          <input id="contact-name" type="text" name="name" required />

          <label htmlFor="contact-email">Email:</label>
          <input id="contact-email" type="email" name="email" required />

          <label htmlFor="contact-message">Message:</label>
          <textarea id="contact-message" name="message" rows={5} required></textarea>

          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact-form-status contact-form-status--success" role="status">
              Thanks — message sent. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form-status contact-form-status--error" role="alert">
              Something went wrong. Please email me directly at javellaneda0213@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
