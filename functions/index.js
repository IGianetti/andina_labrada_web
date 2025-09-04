const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.getGalleryItems = functions.https.onCall(async (data, context) => {
  try {
    const galleryCollection = admin.firestore().collection("galeria");
    const snapshot = await galleryCollection.get();
    
    if (snapshot.empty) {
      console.log("No matching documents.");
      return [];
    }
    
    const items = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    
    // Devolvemos los datos directamente
    return items;
    
  } catch (error) {
    console.error("Error al obtener la galería:", error);
    // Lanzamos un error de HTTPS para que el frontend lo capture
    throw new functions.https.HttpsError("internal", "Error al obtener la galería.");
  }
});