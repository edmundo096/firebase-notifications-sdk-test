/**
 * Created by Edmundo Elizondo on 5/31/2018.
 */
const admin = require('firebase-admin');

// **************************************************************************
// *** NOTE: Go to the project's Firebase console project and             ***
// ***       download a JSON file with your service account credentials   ***
// ***       under <project>/settings/serviceaccounts/adminsdk            ***
// **************************************************************************
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'  // Not used.
});



// ******************************************************************************
// *** Set topic, and modify message                                          ***
// *** See more:                                                              ***
// ***  https://firebase.google.com/docs/cloud-messaging/admin/send-messages  ***
// ******************************************************************************

// The topic name can be optionally prefixed with "/topics/".
const topic = 'highScores';

// See documentation on defining a message payload.
const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  topic: topic
};

// Send a message to devices subscribed to the provided topic.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
