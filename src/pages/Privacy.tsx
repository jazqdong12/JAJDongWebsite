import "./Privacy.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div>
      <section className="privacy">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. This privacy policy explains how JAJ
          Dong Homes Inc. handle your personal information.
        </p>

        <h3>Information Collection and Use</h3>
        <p>
          We do not store any personal information from our users. Our website
          is designed to provide real estate information and services without
          the need to store any personal data. The contact information you
          provide on the contact page is used solely to respond to your
          inquiries. It will not be used for any other purpose or shared with
          third parties.
        </p>

        <h3>Cookies</h3>
        <p>
          We do not use cookies or any other tracking technologies on our
          website. Your browsing activity on our site is not monitored or
          recorded in any way.
        </p>

        <h3>Third-Party Services</h3>
        <p>
          Our website integrates third-party services to improve functionality
          and provide you with a seamless user experience. Below is an overview
          of the services we use and how they may process your data:
        </p>
        <ul>
          <li>
            <strong>EmailJS:</strong> We use EmailJS to handle email
            communications through our contact forms. When you submit a message,
            EmailJS collects your name, email address, and the message content.
            Please refer to the{" "}
            <a
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EmailJS Privacy Policy
            </a>{" "}
            for more information.
          </li>
          <li>
            <strong>Google Maps:</strong> Our website features embedded Google
            Maps to provide interactive location information. Google Maps Embed
            API may collect your IP address and other usage data to display the
            map and ensure functionality. This data is subject to Google's data
            policies. For more information, please refer to the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Google Translate:</strong> To support multilingual content,
            we use Google Translate. This service processes text you submit for
            translation, which may include personal data if entered. For details
            on how this data is handled, please review the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </li>
        </ul>
        <p>
          By using our website, you consent to the processing of your data by
          these third-party services in accordance with their respective privacy
          policies.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our privacy policy from time to time. Any changes will
          be posted on this page. We encourage you to review this privacy policy
          periodically to stay informed about how we are protecting your
          information.
        </p>
        <div className="terms">
          <h2>Terms & Conditions</h2>

          <p>
            By accessing or using JAJ Dong Homes ("the Website"), you agree to
            comply with and be bound by the following terms and conditions
            ("Terms"). If you do not agree to these Terms, please do not use the
            Website.
          </p>

          <h3>Use of Website</h3>
          <p>
            The Website is provided for informational purposes only,
            specifically for displaying property models and related information.
            All content, including property models, images, and descriptions, is
            provided "as is" and is subject to change without notice.
          </p>

          <h3>Accuracy of Information</h3>
          <p>
            While we strive to ensure that the information displayed on the
            Website is accurate and up-to-date, we do not warrant or guarantee
            the completeness, accuracy, or reliability of any information on the
            Website. Property models and descriptions may include errors,
            omissions, or outdated information. You acknowledge that any
            reliance on such information is at your own risk.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            All content on the Website, including but not limited to text,
            images, graphics, logos, and designs, is the property of JAJ Dong
            Homes and is protected by copyright, trademark, and other
            intellectual property laws. Unauthorized use, reproduction, or
            distribution of any content on the Website is prohibited.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, JAJ Dong Homes shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of the Website, including but not limited to any errors or omissions
            in the content.
          </p>

          <h3>Disclaimer of Warranties</h3>
          <p>
            The Website is provided "as is" and "as available" without any
            warranties of any kind, whether express or implied, including but
            not limited to warranties of merchantability, fitness for a
            particular purpose, or non-infringement. We do not warrant that the
            Website will be uninterrupted, secure, or error-free.
          </p>

          <h3>Changes to Terms</h3>
          <p>
            We reserve the right to modify or update these Terms at any time
            without prior notice. Your continued use of the Website after any
            changes to the Terms constitutes your acceptance of the revised
            Terms. We recommend that you review these Terms periodically.
          </p>

          <h3>Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the state of Florida, without regard to its conflict of
            law principles. Any disputes arising out of or in connection with
            these Terms shall be subject to the exclusive jurisdiction of the
            courts located in Lehigh Acres, Florida.
          </p>

          <h3>No Representation or Warranty</h3>
          <p>
            The content, visuals, and information available on jajdonghomes.com
            may have mistakes or inaccuracies. We retain the right to update or
            alter any information on this site at any time without prior
            notification. As allowed by U.S. law, the materials on this site are
            provided "as is" without any assurances, whether explicit or
            implicit, including, but not limited to, implied guarantees of
            suitability for a specific purpose, marketability, or protection
            against infringement.
          </p>

          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <Nav.Link as={Link} to="/contact" className="link">
              jajdonghomes@gmail.com
            </Nav.Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
