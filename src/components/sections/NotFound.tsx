import React from 'react';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <section className="notfound-section" aria-label="Page not found">
      <div className="notfound-content">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">This page wandered off.</h1>
        <p className="notfound-body">
          The URL you tried doesn't match anything on this site. It might be a stale link,
          or a page that used to live here and moved.
        </p>
        <a href="/" className="notfound-cta">Back to home</a>
      </div>
    </section>
  );
};

export default NotFound;
