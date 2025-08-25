const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.getGalleryItems = functions.https.onRequest((req, res) => {

  cors(req, res, async () => {
    if (req.method !== 'GET') {
      return res.status(405).send('Method Not Allowed');
    }

    try {
      const db = admin.firestore();
      const galeriaRef = db.collection('galeria');
      const snapshot = await galeriaRef.get();

      if (snapshot.empty) {
        return res.status(404).json({ message: 'No se encontraron items en la galería.' });
      }

      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      res.status(200).json(items);
    } catch (error) {
      console.error("Error al obtener los documentos: ", error);
      res.status(500).send("Error interno del servidor.");
    }
  });
});