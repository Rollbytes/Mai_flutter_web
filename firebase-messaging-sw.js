importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCvJTP77v6KYsukbhJtE_tRDkwHkj_-RIg",
  appId: "1:454392992549:web:7a32ae3ccacd41775cc0cc",
  messagingSenderId: "454392992549",
  projectId: "mai-today-2023",
  authDomain: "mai-today-2023.firebaseapp.com",
  storageBucket: "mai-today-2023.appspot.com",
  measurementId: "G-Y5Z9D0HXVX",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);

  // console.log("[firebase-messaging-sw.js] Received background message ", m);
  // Customize notification here
  const notificationTitle = m.notification.title;
  const notificationOptions = {
    body: m.notification.body,
    icon: m.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onMessage((m) => {
  console.log("onMessage", m);
});