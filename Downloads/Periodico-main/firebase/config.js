import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBZkk7x_tGRbf-Yg_A7Y9QYcBQe7T9QtWU",
  authDomain: "periodico-hoy-bolivia.firebaseapp.com",
  databaseURL: "https://periodico-hoy-bolivia-default-rtdb.firebaseio.com",
  projectId: "periodico-hoy-bolivia",
  storageBucket: "periodico-hoy-bolivia.appspot.com",
  messagingSenderId: "618787391049",
  appId: "1:618787391049:web:98b34d2849d093d67e6198"
};


export const app = initializeApp(firebaseConfig)
