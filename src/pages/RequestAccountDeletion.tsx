import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './LegalPages.css';

const RequestAccountDeletion = () => {
  const { appName: routeAppName } = useParams<{ appName: string }>();
  const appName = routeAppName || "Gather";
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // In a real app, you would get the user's email from their session
 // For this pseudo-code, we'll let them type it.
  const userEmailFromAuth = "user@example.com"; // Placeholder

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would:
    // 1. Authenticate the user (e.g., require password).
    // 2. Send a request to your backend.
    // 3. Your backend would trigger a process to delete all user data from
    //    Firestore (the user document), Storage (profile pic), and Auth.
    console.log(`Deletion requested for email: ${email}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="legal-page-container">
        <h1>Deletion Request Received</h1>
        <p>
          We have received your account deletion request for <strong>{email}</strong>.
        </p>
        <p>
          The deletion process has begun and may take up to 48 hours to complete. You will receive a final confirmation email once all your data has been permanently removed.
        </p>
        <p>Thank you for using {appName}.</p>
        
        <p className="back-link">
          <a href={`/legal/app/gather`}>Back to Gather Legal Pages</a>
        </p>
      </div>
    );
  }

  return (
    <div className="legal-page-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Request Account Deletion</h1>
      
      <div className="warning-box">
        <p><strong>Warning:</strong> This action is permanent and cannot be undone.</p>
      </div>

      <h2>What will be deleted?</h2>
      <p>
        When you delete your account, we will permanently remove all of the following data associated with your profile:
      </p>
      <ul>
        <li>Your account credentials (email, password).</li>
        <li>Your profile information (name, bio, profile picture).</li>
        <li>Your list of joined {appName} and blocked users.</li>
        <li>All {appName} you organized.</li>
        <li>All in-app and push notification data.</li>
      </ul>

      <h2>What will remain?</h2>
      <p>
        Chat messages you sent in {appName} organized by other people will remain, but they will be attributed to a "Deleted User" to protect your privacy.
      </p>

      <h2>How to Proceed</h2>
      <p>
        To confirm that you want to permanently delete your account, please enter your email address below and click the delete button.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your Account Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={userEmailFromAuth}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        {/* For added security, you should also ask for their password here */}
        {/* <label htmlFor="password">Password:</label>
           <input type="password" id="password" required /> */}
        <button
          type="submit"
          className="delete-button"
        >
          Permanently Delete My Account
        </button>
      </form>
      
      <p className="back-link">
        <a href={`/legal/app/gather`}>Back to Gather Legal Pages</a>
      </p>
    </div>
  );
};

export default RequestAccountDeletion;