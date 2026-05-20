import { useParams } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './LegalPages.css';

const TermsAndConditions = () => {
  const { appName: routeAppName } = useParams<{ appName: string }>();
  const appName = routeAppName || "Gather";
  const contactEmail = "vella_media@proton.me";
  const lastUpdated = "October 2, 2025";

  useDocumentMeta({
    title: `Terms & Conditions — ${appName}`,
    description: `Terms and conditions governing your use of ${appName}.`,
  });

  return (
    <div className="legal-page-container">
      <h1>Terms and Conditions for {appName}</h1>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By creating an account and using the {appName} mobile application (the "Service"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Service.
      </p>

      <h2>2. User Accounts</h2>
      <p>
        You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h2>3. User-Generated Content</h2>
      <p>
        You are solely responsible for the content you post, including chat messages, {appName} details, and images ("User Content").
      </p>
      <ul>
        <li>You retain ownership of your User Content.</li>
        <li>By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing the Service.</li>
        <li>You agree not to post content that is illegal, defamatory, harassing, hateful, or otherwise objectionable. We reserve the right to remove any content that violates these terms.</li>
      </ul>

      <h2>4. Prohibited Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any illegal purpose.</li>
        <li>Harass, threaten, or defraud other users.</li>
        <li>Spam or send unsolicited messages to other users.</li>
        <li>Attempt to reverse-engineer or disrupt the Service.</li>
      </ul>
      
      <h2>5. AI-Powered Features</h2>
      <p>
        Our Service utilizes artificial intelligence (AI) to generate suggestions and summaries. While we strive for accuracy, AI-generated content may contain errors or be incomplete. You agree to use these features at your own risk and acknowledge that {appName} is not liable for any inaccuracies in AI-generated content.
      </p>
      
      <h2>6. Reporting and Moderation</h2>
      <p>
        The Service provides tools for you to report other users for violating these terms. We reserve the right, but have no obligation, to investigate such reports and take appropriate action, which may include removing content or suspending or terminating user accounts.
      </p>

      <h2>7. Termination</h2>
      <p>
        We may terminate or suspend your account at any time, without prior notice, for conduct that we believe violates these Terms. You may terminate your account at any time by following the instructions on our <a href={`/app/${routeAppName || 'gather'}/request-account-deletion`}>Account Deletion page</a>.
      </p>

      <h2>8. Disclaimers and Limitation of Liability</h2>
      <p>
        The Service is provided "AS IS" without any warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.
      </p>
      
      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
      
      <p className="back-link">
        <a href={`/legal/app/gather`}>Back to Gather Legal Pages</a>
      </p>
    </div>
  );
};

export default TermsAndConditions;