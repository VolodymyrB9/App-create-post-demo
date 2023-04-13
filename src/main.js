import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import { initializeApp } from "firebase/app"
import 'firebase/database'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKQhYDbWB4pTQPpAd43fEPZrwR0etTJB0",
  authDomain: "vue-test-firebase-d61ea.firebaseapp.com",
  projectId: "vue-test-firebase-d61ea",
  storageBucket: "vue-test-firebase-d61ea.appspot.com",
  messagingSenderId: "371097397408",
  appId: "1:371097397408:web:ac4ca19a948f690b5c41c5"
};

const fapp = initializeApp(firebaseConfig);
const fdb = getFirestore(fapp)


const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

app.mount('#app');

export {
  fdb
}

