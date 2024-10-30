// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f67280', padding: '1rem', textAlign: 'center', color: '#fff' }}>
      <p>Síguenos en:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <p>&copy; 2024 Cupcake Store</p>
    </footer>
  );
};

export default Footer;
