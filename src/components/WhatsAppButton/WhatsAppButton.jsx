import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '+54911xxxxxxxx'; // Reemplazar con el número de WhatsApp
  const message = encodeURIComponent('Hola Andina Labrada, me gustaría hacer una consulta sobre una pieza que vi en la web.');

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href={whatsappUrl} 
      className={`${styles.whatsappButton} ${isVisible ? styles.visible : ''}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}

export default WhatsAppButton;