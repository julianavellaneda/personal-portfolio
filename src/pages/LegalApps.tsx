import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

// Define the type for application data
interface LegalApp {
  name: string;
  displayName: string;
}

const LegalApps: React.FC = () => {
  // List of applications that have legal pages
  const legalApps: LegalApp[] = [
    { name: 'gather', displayName: 'Gather' },
  ];

  return (
    <div className="legal-pages-container">
      <h1 className="legal-pages-heading">Legal Pages by Application</h1>
      <div className="legal-apps-list">
        {legalApps.map((app) => (
          <div key={app.name} className="legal-app-item">
            <Link to={`/legal/app/${app.name}`} className="legal-app-link">
              {app.displayName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalApps;