// src/components/ContactForm/ContactForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
    alert('¡Mensaje enviado con éxito!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className={styles.formInput}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Correo electrónico:
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'El correo electrónico es obligatorio', 
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Formato de correo inválido'
            }
          })}
          className={styles.formInput}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Mensaje:
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'El mensaje es obligatorio' })}
          className={styles.formTextarea}
        ></textarea>
        {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;