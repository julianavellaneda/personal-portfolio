import { useDocumentMeta } from '../hooks/useDocumentMeta';
import './LegalPages.css';

const ChildSafetyPolicy = () => {
  // Updated details based on your app's code
  const appName = "Gather";
  const contactEmail = "vella_media@proton.me";
  const lastUpdated = "October 12, 2025";

  useDocumentMeta({
    title: `Child Safety Policy — ${appName}`,
    description: `Child safety standards and reporting procedures for ${appName}.`,
  });

  return (
    <div className="legal-page-container">
      <h1>Child Safety Policy for {appName}</h1>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>

      <h2>1. Commitment to Child Safety</h2>
      <p>
        At {appName}, we are committed to ensuring the safety and well-being of all users, with special attention to protecting children from sexual abuse and exploitation. We take seriously our responsibility to maintain a safe environment for all users of our platform.
      </p>

      <h2>2. Published Standards Against Child Sexual Abuse and Exploitation (CSAE)</h2>
      <p>
        Our platform has established clear standards and policies to prevent, identify, and address child sexual abuse and exploitation. These standards include:
      </p>
      <ul>
        <li>Zero tolerance for any content or behavior that involves the sexual abuse or exploitation of children.</li>
        <li>Strict community guidelines that prohibit inappropriate contact with minors.</li>
        <li>Robust verification processes to prevent underage users from accessing our platform.</li>
        <li>Advanced content moderation systems to detect and remove harmful material.</li>
        <li>Regular training for our staff on child protection issues.</li>
      </ul>

      <h2>3. In-App Reporting Mechanism</h2>
      <p>
        We provide multiple in-app mechanisms for users to report concerns about child safety:
      </p>
      <ul>
        <li>Report buttons available on user profiles and content.</li>
        <li>Direct reporting to our moderation team through the app interface.</li>
        <li>Emergency reporting options for urgent child safety concerns.</li>
        <li>Anonymous reporting options to encourage users to come forward.</li>
      </ul>

      <h2>4. Addressing Child Sexual Abuse Material (CSAM)</h2>
      <p>
        {appName} has established protocols to address child sexual abuse material (CSAM):
      </p>
      <ul>
        <li>Immediate removal of any identified CSAM content.</li>
        <li>Cooperation with law enforcement and child protection agencies.</li>
        <li>Use of advanced technology to detect and prevent the sharing of CSAM.</li>
        <li>Regular audits of our content moderation systems.</li>
        <li>Mandatory reporting of CSAM to appropriate authorities.</li>
      </ul>

      <h2>5. Compliance with Child Safety Laws</h2>
      <p>
        We comply with all applicable laws and regulations regarding child safety, including but not limited to:
      </p>
      <ul>
        <li>Children's Online Privacy Protection Act (COPPA)</li>
        <li>Protect Our Children Act</li>
        <li>Other applicable federal, state, and international child protection laws.</li>
        <li>Industry best practices as recommended by organizations like the Tech Coalition.</li>
      </ul>

      <h2>6. Age Verification and Access Restrictions</h2>
      <p>
        To ensure the safety of minors, {appName} implements the following measures:
      </p>
      <ul>
        <li>Age verification processes during registration.</li>
        <li>Prohibition of users under the age of 13.</li>
        <li>Additional protections for users under 18.</li>
        <li>Parental consent mechanisms where required by law.</li>
        <li>Monitoring and enforcement of age restrictions.</li>
      </ul>

      <h2>7. User Education and Awareness</h2>
      <p>
        We are committed to educating our users about child safety:
      </p>
      <ul>
        <li>Providing safety tips and resources within the app.</li>
        <li>Offering guidance on safe online behavior.</li>
        <li>Partnering with child safety organizations to provide educational content.</li>
        <li>Regular updates on safety features and best practices.</li>
      </ul>

      <h2>8. Staff Training and Procedures</h2>
      <p>
        Our team receives regular training on child safety issues:
      </p>
      <ul>
        <li>Recognition of potential child safety concerns.</li>
        <li>Proper handling and escalation procedures.</li>
        <li>Legal obligations regarding reporting.</li>
        <li>Ongoing education on evolving child safety challenges.</li>
      </ul>

      <h2>9. Technology and Content Moderation</h2>
      <p>
        We employ advanced technology to protect children on our platform:
      </p>
      <ul>
        <li>AI-powered content detection systems.</li>
        <li>Human moderation teams trained in child safety.</li>
        <li>Real-time monitoring of suspicious activities.</li>
        <li>Secure systems to prevent unauthorized access to user data.</li>
      </ul>

      <h2>10. Reporting and Response Procedures</h2>
      <p>
        When child safety concerns are reported, we follow established procedures:
      </p>
      <ul>
        <li>Immediate assessment of reported concerns.</li>
        <li>Temporary restrictions when appropriate.</li>
        <li>Cooperation with law enforcement.</li>
        <li>Follow-up actions based on investigation findings.</li>
        <li>Documentation and review of all cases.</li>
      </ul>

      <h2>11. Child Safety Point of Contact</h2>
      <p>
        For questions or concerns regarding our child safety policies, please contact our designated child safety point of contact:
      </p>
      <p>
        <strong>Child Safety Officer</strong><br />
        Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>

      <h2>12. Regular Review and Updates</h2>
      <p>
        This Child Safety Policy is regularly reviewed and updated to ensure its effectiveness and compliance with evolving legal requirements and best practices. We continuously work to improve our child safety measures based on feedback from experts, law enforcement, and child protection organizations.
      </p>

      <h2>13. Cooperation with Authorities</h2>
      <p>
        {appName} is committed to cooperating fully with law enforcement and child protection agencies. We will provide all necessary information and support in investigations related to child safety.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions about this Child Safety Policy or if you need to report a child safety concern, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
      
      <p className="back-link">
        <a href={`/legal/app/gather`}>Back to Gather Legal Pages</a>
      </p>
    </div>
  );
};

export default ChildSafetyPolicy;