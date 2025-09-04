import React, { useState, useEffect } from 'react';
import { getConfig } from '../../services/firebaseService'
import { isMobile } from 'react-device-detect';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {

  const [phoneNumber, setPhoneNumber] = useState('');
   const [message, setMessage] = useState('');

   // Función auxiliar para descodificar cadenas Unicode escapadas
  const decodeUnicodeEscapes = (str) => {
    // Si la cadena es nula o vacía, o no contiene escapes, la devolvemos tal cual.
    if (!str || !str.includes('\\u')) {
      return str;
    }
    // Usa un método seguro para interpretar los escapes Unicode
    // JSON.parse intenta parsear la cadena como JSON, y los escapes Unicode son válidos en JSON.
    // Necesitamos envolver la cadena con comillas para que sea un string JSON válido.
    try {
      return JSON.parse(`"${str}"`);
    } catch (e) {
      console.error("Error al decodificar escapes Unicode:", e);
      return str; // En caso de error, devuelve la cadena original
    }
  };


   useEffect(() => {
    const fetchConfiguracion = async () => {
      try {
        const atencionData = await getConfig("atencion");
        if (atencionData && atencionData.celular) {
          setPhoneNumber(atencionData.celular || ''); 
           // Descodificamos el mensaje aquí antes de guardarlo en el estado
          setMessage(decodeUnicodeEscapes(atencionData.mensaje_whatsapp || ''));
        }
      } catch (error) {
        console.error("Error al obtener la configuración de WhatsApp:", error);
      }
    };
    fetchConfiguracion();
  }, []);

   // Función para crear el enlace de WhatsApp
  const createWhatsAppLink = () => {
    // Si no hay número o mensaje, retorna un enlace nulo
    if (!phoneNumber || !message) return '#';     
    const encodedMessage = encodeURIComponent(message);
     // Lógica condicional: si es móvil, usa el enlace wa.me
    if (isMobile) {
      return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    } else {
      // Si es escritorio, usa un enlace que funciona en todos los navegadores
      return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
  };  

  return (
    <a 
      href={createWhatsAppLink()} 
      className={styles.whatsappButton} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
}

export default WhatsAppButton;