import React from 'react';
import facebook from './assets/facebook.png';
import gmail from './assets/gmail.png';
import linkedin from './assets/linkedin.png';
import whatapp from './assets/social.png';

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="icons">
          <a
            href="https://m.me/61560709323436"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>

          <a
            href="https://www.linkedin.com/in/cloud-justice-356036314"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>

          <a
            href="https://wa.me/message/3JI7CXQ7FHTGO1?src=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatapp} alt="WhatsApp" />
          </a>

          <a href="mailto:a38556619@gmail.com">
            <img src={gmail} alt="Email" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
