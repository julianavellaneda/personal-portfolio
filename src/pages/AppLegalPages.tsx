import React from 'react';
import { useParams } from 'react-router-dom';
import './LegalPages.css';

const AppLegalPages: React.FC = () => {
  const { appName } = useParams<{ appName: string }>();

  // Decode the app name for display (replace hyphens with spaces and capitalize)
  const displayAppName = appName
    ? appName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : 'Unknown App';

  return (
    <div className="legal-pages-container">
      <div className="legal-pages-content">
        <h1 className="legal-pages-title">{displayAppName} Legal Pages</h1>
        <p className="legal-pages-intro">
          Below are the legal documents for {displayAppName}. Please review these documents to understand your rights and responsibilities when using our application.
        </p>
        
        <div className="legal-pages-list">
          <div className="legal-page-item">
            <h2 className="legal-page-title">Privacy Policy</h2>
            <p className="legal-page-description">
              Our privacy policy explains how we collect, use, and protect your personal information.
            </p>
            <a 
              href={`/app/${appName}/privacy-policy`} 
              className="legal-page-link"
            >
              View Privacy Policy
            </a>
          </div>
          
          <div className="legal-page-item">
            <h2 className="legal-page-title">Terms and Conditions</h2>
            <p className="legal-page-description">
              Our terms and conditions outline the rules and regulations for using our application.
            </p>
            <a 
              href={`/app/${appName}/terms-and-conditions`} 
              className="legal-page-link"
            >
              View Terms and Conditions
            </a>
          </div>
          
          <div className="legal-page-item">
            <h2 className="legal-page-title">Request Account Deletion</h2>
            <p className="legal-page-description">
              Learn how to request deletion of your account and associated data.
            </p>
            <a 
              href={`/app/${appName}/request-account-deletion`} 
              className="legal-page-link"
            >
              Request Account Deletion
            </a>
          </div>
          
          <div className="legal-page-item">
            <h2 className="legal-page-title">Child Safety Policy</h2>
            <p className="legal-page-description">
              Our commitment to protecting children using our application.
            </p>
            <a 
              href={`/app/${appName}/child-safety-policy`} 
              className="legal-page-link"
            >
              View Child Safety Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLegalPages;