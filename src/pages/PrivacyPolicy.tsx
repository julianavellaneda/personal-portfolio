import { useParams } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './LegalPages.css';

const PrivacyPolicy = () => {
  const { appName: routeAppName } = useParams<{ appName: string }>();
  const appName = routeAppName || "Gather";
  const contactEmail = "vella_media@proton.me";
  const lastUpdated = "October 2, 2025";

  useDocumentMeta({
    title: `Privacy Policy — ${appName}`,
    description: `Privacy policy for ${appName}, describing what data we collect, how we use it, and your rights.`,
  });

  // App-specific content mapping
  const appSpecificContent = {
    gather: {
      serviceDescription: "Gathering chats and events",
      contentTypes: "Gathering titles, goals, and chat transcripts",
      featureDescription: "goal suggestions, discussion starters, and chat summaries"
    },
    // Add more apps here as needed
  };

  const currentAppContent = appSpecificContent[routeAppName as keyof typeof appSpecificContent] || appSpecificContent.gather;

  return (
    <div className="legal-page-container">
      <h1>Privacy Policy for {appName}</h1>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to {appName}. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use and share it, and your choices concerning our data practices.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        Based on your use of our services, we collect the following types of information:
      </p>
      <ul>
        <li>
          <strong>Account Information:</strong> When you create an account, we collect your email address and a hashed password. We also assign you a unique user ID (UID).
        </li>
        <li>
          <strong>Profile Information:</strong> You may provide us with your first name, last name, a profile picture, and a short biography.
        </li>
        <li>
          <strong>User-Generated Content:</strong> This includes any content you create within the app, such as:
          <ul>
            <li>Messages you send in {appName} chats.</li>
            <li>The title, goal, and cover image for {appName} you create.</li>
            <li>Reports you submit about other users, including the reason and description.</li>
          </ul>
        </li>
        <li>
          <strong>Technical and Usage Information:</strong>
          <ul>
            <li><strong>Push Notification Tokens (FCM Tokens):</strong> To send you push notifications about new messages and other {appName} activity, we store a unique token for your device.</li>
            <li><strong>App Interactions:</strong> We collect information about which {appName} you join or create, and which users you may block.</li>
          </ul>
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use your information for the following purposes:
      </p>
      <ul>
        <li><strong>To Provide the Service:</strong> To operate your account, facilitate chat within {appName}, and allow you to create and join events.</li>
        <li><strong>To Communicate With You:</strong> To send you in-app and push notifications about activity relevant to you, such as new chat messages or event reminders. You can manage these preferences in your Notification Settings.</li>
        <li><strong>For Safety and Security:</strong> To process reports of misconduct, block users, and enforce our Terms and Conditions.</li>
        <li><strong>To Improve Our Services (AI Features):</strong> We use third-party AI services to provide features like {currentAppContent.featureDescription}. To do this, we send relevant, non-personally identifiable content (like {currentAppContent.contentTypes}) to be processed.</li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell your personal data. We may share information with the following third parties:
      </p>
      <ul>
        <li>
          <strong>Google Firebase:</strong> We use Firebase for backend services, including authentication, database (Firestore), cloud functions, and push notifications (Firebase Cloud Messaging).
        </li>
        <li>
          <strong>Google AI (Gemini):</strong> As mentioned above, content such as {currentAppContent.contentTypes} are sent to Google's AI models to provide specific in-app features. This data is used by Google in accordance with their own privacy policies.
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active. If you choose to delete your account, we will delete your personal data in accordance with our deletion process outlined in our Account Deletion policy.
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p>
        You have rights over your personal information.
      </p>
      <ul>
        <li><strong>Access and Update:</strong> You can access and update your profile information at any time through the "Edit Profile" screen in the app.</li>
        <li><strong>Notifications:</strong> You can manage your notification preferences in the "Notification Preferences" screen.</li>
        <li><strong>Account Deletion:</strong> You can request the permanent deletion of your account and associated data. Please see our <a href={`/app/${routeAppName || 'gather'}/request-account-deletion`}>Account Deletion page</a> for instructions.</li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        Our service is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
      
      <p className="back-link">
        <a href={`/legal/app/gather`}>Back to Gather Legal Pages</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;