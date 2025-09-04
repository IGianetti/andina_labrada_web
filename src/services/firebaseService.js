import { db } from '../firebase/firebase';
import { doc, getDoc} from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions'
import { functions } from '../firebase/firebase'

/**
 * Obtiene un documento de la colección 'configuracion'.
 * @param {string} docId - El ID del documento (ej: 'logo', 'atencion', etc).
 * @returns {Promise<Object|null>} Los datos del documento o null si no existe.
 */
export const getConfig = async (docId) => {
  try {
    const docRef = doc(db, 'configuracion', docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error(`Error: No se encontró el documento con ID: ${docId}`);
      return null;
    }
  } catch (error) {
    console.error("Error al obtener la configuración:", error);
    return null;
  }
};

/**
 * Obtiene todos los documentos de la colección 'galeria' usando una función de Firebase.
 * Esta es la forma más segura y robusta para datos privados.
 * @returns {Promise<Array|null>} Un array de documentos de la galería o null si hay un error.
 */
export const getGalleryItems = async () => {
  try {
    const getItemsFunction = httpsCallable(functions, 'getGalleryItems');
    const result = await getItemsFunction();
    return result.data;
  } catch (error) {
    console.error("Error al obtener documentos de la galería:", error);
    return null;
  }
};