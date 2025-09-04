import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
 
  const phoneNumber = '+54911xxxxxxxx'; // Reemplazar con el número de WhatsApp
  const message = encodeURIComponent('Hola Andina Labrada, me gustaría hacer una consulta sobre una pieza que vi en la web.');

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

 

  

  return (
    <a 
      href={whatsappUrl} 
      className={styles.whatsappButton} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}

export default WhatsAppButton;