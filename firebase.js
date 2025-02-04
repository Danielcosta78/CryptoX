// Importar funções necessárias do SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDIml9ifSHG2KX4bkGRra8e5SApKhfDjUI",
    authDomain: "p2pbtc.firebaseapp.com",
    projectId: "p2pbtc",
    storageBucket: "p2pbtc.appspot.com",
    messagingSenderId: "785188172818",
    appId: "1:785188172818:web:40ae5af246b84b485a14cb",
    measurementId: "G-FES0EEV034"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para criar um novo usuário (Registro)
document.getElementById('signup-btn').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Conta criada com sucesso!');
        })
        .catch((error) => {
            alert("Erro ao registrar: " + error.message);
        });
});

// Função de login
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login bem-sucedido!');
            // Mostrar a área oculta após o login bem-sucedido
            document.getElementById('content').style.display = 'block';
        })
        .catch((error) => {
            alert("Erro ao fazer login: " + error.message);
        });
});

// Função para recuperação de senha
document.getElementById('recover-btn').addEventListener('click', () => {
    const email = document.getElementById('recover-email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('E-mail de recuperação enviado!');
        })
        .catch((error) => {
            alert("Erro ao enviar e-mail: " + error.message);
        });
});

// Monitorando o estado de autenticação para garantir que a área oculta será exibida após o login
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Se o usuário estiver autenticado, mostra a área oculta
        document.getElementById('content').style.display = 'block';
    } else {
        // Se não estiver autenticado, garante que a área oculta permaneça escondida
        document.getElementById('content').style.display = 'none';
    }
});