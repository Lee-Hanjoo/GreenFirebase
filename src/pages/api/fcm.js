// api > fcm.js
import admin from 'firebase-admin';


export default async function handler(req, res) {
    const serviceAccount = {
        projectId:'test-94b65',
        privateKey: '1234',
        clientEmail:'firebase-adminsdk-oh6qv@test-94b65.iam.gserviceaccount.com'
    }
    if (!admin.apps.length) {
      admin.initializeApp(
          {credential:admin.credential.cert(serviceAccount)}
      );
  }

    const msg = await admin.messaging().send(req.body);

    res.status(200).send('FCM 메세지 발송 완료!...');
};