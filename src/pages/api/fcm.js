// api > fcm.js
import admin from 'firebase-admin';


export default async function handler(req, res) {
    const serviceAccount = {
        projectId:'test-94b65',
        privateKey:'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC88NOglcmskGvu\n30JbwZU79rEbLQBBB0Ju3txAaCeasjGcu5mPajcHUilXpakEpFAKpxSG1GsADRQW\nKnyuw16noRZ3bnqERLN/4LuffA/VtSIUzlPS1IuZQwsWep5nQ+RSwwhcJtAlFDqO\n+O1LR1CZppa0ZGMv8IX3JNNzRLwskoGXt+MeIskzZ9xsJig0MPE0CurCWWwobyyq\nRmgcEugARSempAmGd3X6kpIW+sjvuULp7wf363kDijqgQxRlToEK4dAKHFbq3Ooc\nvs0BbbW+BH/fUD+clgqqjVOZCFzYnwf5Oa5WJDfoe+AcUPVHyZVrpm09NsytWidf\nM2z2YVUhAgMBAAECggEAMRgOlUp2hc1dDkuazYbGhTc7m8kcqMj/HRnxdxbZO5wT\nwhsI8rfxpohVz71u5pLfbXUuoz4ss22yi3Psw+hl/v6ffNcLJLVJQvAdMHqnDqur\nOGbIZx7tSxydk/C2mjSM7mhZEsDPEuNnt+C8n/Pe4J3lyOfQ0hMYbDh4bRouHxJb\nAqjEBEtrShGPzWLgwtBnZHoGYPkYDr2Yf4PaLpYmch8H0HIBRSp7wS/+pfmR+Eob\nHdJoQXfbGVRM8x5Ha7849I3nQAFGIx2bF8ti6g83XuRQgHwuzlExuDQGqI37cq7X\nldK2DRTsaqwO4ZB9SRlXcxfI4TjmjG6uDPY3scfGZQKBgQD9aRuT38VWfgZcuLuc\nRTbVPnKrPr89v57xcoaj5KOoMlS8uTfh7T47l4yjVgkCze1oSTvoNnf9tJMqyrqd\ntnspBtOLoSK9EVqxrii1R50bKIIR3Lc/UNePT0C7Vy29Dux2AcsCEO2fvuocF7F2\n5vLTn6hrIm2YBdk/G1hDeNW6ywKBgQC+3xLKeDx4tubFGEN5IbJK6OaDVCpdMfZp\neSNdp1JPVGODPnQ7VaNZNbOwRritw+2RPKGIuB0jOe17RRsaqhhw1scl8G5cjbNB\nanHpha2GZJDyI8fXFRk04Afs3spu8zrXh7OG2xwF9Kzv9zkPUcBN4m7oZdW7VOC0\n22LyaKwWQwKBgQDGIuqnIm2/hOYglWhLdWq8LQmnj3YkJ7F1A6D2gIzdtAzBSujA\nw6jHG2WhSGHfSXf49Fnc5MnJGul+qehj7Aw8NdQt9p2cyvbouk2mAAp8851Prg2x\nedoxeTwZvr5KdmK4mgpK4UWKg9G0iWn+l/EBOnKK4e5i0R/d0dmfV9l1JQKBgDan\njavoTfiK9v2M+xUebv1AP3FvkknpWpPNGjFhDhKlKXGVWpb66LFMzU02kv8+0TH7\nWI3bmoxRtAzONvqlpiX5ekEE3bUm5iNfJYsmug93kIGleT2/Tt5zIBHVocWvZDP/\nKYr+BsI106dK9U3LrPMgWX22W0MvBMEE6QpcqpodAoGBAIyEXkAtOqoE+bKx67M4\no6M8fYzEe1kqddj1aezcHpSfAsmNV2V0d5z/wULpLw0j6TkTSCEqMachhCFvU/Y8\nP8W9eh4qkLmYss16OY/dTo7a2CbdFNGT+2JLDMXvruk+Gakfd2u70hClYaO4ByoP\nc0KSUcm81APYU62eKvCYkSon\n-----END PRIVATE KEY-----\n',
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