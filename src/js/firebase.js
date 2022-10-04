import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, set, ref, onValue } from 'firebase/database';
import { clearErrorMessage, setErrorMessage } from './errorMessage';

const firebaseConfig = {
  apiKey: 'AIzaSyAXpyPv9Yp_mmKUPpMWQb_Lv-IgFrfPCj0',
  authDomain: 'myproject-7e992.firebaseapp.com',
  projectId: 'myproject-7e992',
  storageBucket: 'myproject-7e992.appspot.com',
  messagingSenderId: '221233745157',
  appId: '1:221233745157:web:9d09e7079c1e141383fb6c',
  databaseURL: 'https://myproject-7e992-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const formReg = document.querySelector('.reg-form');
const formLogin = document.querySelector('.login-form');
const logoutBtn = document.querySelector('.logout-btn');
const openModalBtn = document.querySelector('[ data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const libraryBtn = document.querySelector('.library');
const userNameContainer = document.querySelector('.header__library-user');

formReg.addEventListener('submit', createUser);
formLogin.addEventListener('submit', getUser);
logoutBtn.addEventListener('click', logOutUser);

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('visually-hidden');
}

// Функція створення користувача - реєстрація
function createUser(event) {
  event.preventDefault();
  const formElements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
    username: event.currentTarget.elements.username.value,
  };
  // Створення користувача за поштою та емейлом
  createUserWithEmailAndPassword(
    auth,
    formElements.email,
    formElements.password,
    formElements.username
  )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      alert(`Welcome to Filmoteka, ${formElements.username}!`);
      modal.classList.toggle('visually-hidden');
      return user;
    })
    .then(user => {
      set(ref(database, 'users/' + user.uid), {
        username: formElements.username,
        email: formElements.email,
        uid: user.uid,
      });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  event.currentTarget.reset();
}

// Функция входу користувача та отримання його данних
function getUser(event) {
  event.preventDefault();
  const formElements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  signInWithEmailAndPassword(auth, formElements.email, formElements.password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      const db = getDatabase();
      const nameRef = ref(db, 'users/' + user.uid + '/username');
      onValue(nameRef, snapshot => {
        const name = snapshot.val();

        const user = {
          id: auth.currentUser.uid,
          email: auth.currentUser.email,
          name: snapshot.val(),
        };
        alert(`Welcome back, ${name}`);

        document.location.href = 'library.html'; //Перехід на сторінку Library після авторизації
        logoutBtn.classList.toggle('visually-hidden');
        libraryBtn.classList.remove('disabled');

        modal.classList.toggle('visually-hidden');
      });
      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

const authCheking = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      //Getting users name
      const db = getDatabase();
      const nameRef = ref(db, 'users/' + user.uid + '/username');
      onValue(nameRef, snapshot => {
        const name = snapshot.val();

        const userIn = {
          id: auth.currentUser.uid,
          email: auth.currentUser.email,
          name: snapshot.val(),
        };
        userNameContainer.insertAdjacentHTML('afterbegin', `<p>${name}</p>`);
        openModalBtn.classList.add('visually-hidden');
        logoutBtn.classList.remove('visually-hidden');
        libraryBtn.classList.remove('disabled');
      });

      // ...
    }
  });
};

authCheking();
//Функція виходу зі сторінки користувача
function logOutUser(event) {
  signOut(auth)
    .then(() => {
      document.location.href = 'index.html';

      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
