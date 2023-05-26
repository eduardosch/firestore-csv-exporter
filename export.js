const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json')
const exportSettings = require('./exportSettings')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const fire = admin.firestore()

exportSettings.forEach((exportSettings) => {
    const csvWriter = createCsvWriter({
        path: `files/${exportSettings.collection}.csv`,
        header: exportSettings.header,
    })
    
    fire.collection(exportSettings.collection)
        .get()
        .then(async (querySnapshot) => {
            const data = []
            await querySnapshot.forEach(async (doc) => {
                const docData = await doc.data()
                data.push(docData)
            })
            
            csvWriter.writeRecords(data)
                .then(() => console.log(`✅ ${exportSettings.collection}`))
                .catch((error) => console.error(`❌ ${exportSettings.collection}`, error))
        })
        .catch((error) => {
            console.error(`❌ Error fetching Firestore collection ${exportSettings.collection}`, error)
        })
})