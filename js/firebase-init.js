// Importando as funções necessárias do SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";  // Adicionando a importação do getDatabase

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiE8hxFwn49JzFBkowE-V4FFd8NirS4RE",
  authDomain: "project-e8d1d.firebaseapp.com",
  databaseURL: "https://project-e8d1d-default-rtdb.firebaseio.com",
  projectId: "project-e8d1d",
  storageBucket: "project-e8d1d.firebasestorage.app",
  messagingSenderId: "381529656272",
  appId: "1:381529656272:web:61f83075a0bbb4ef76c7d5",
  measurementId: "G-JMFE1Q4Y65"
};

// Inicializando o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializando o banco de dados
const db = getDatabase(app);

// Exportando o banco de dados para uso em outros arquivos
export { db };
