import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, set, ref, onValue } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAXpyPv9Yp_mmKUPpMWQb_Lv-IgFrfPCj0",
  authDomain: "myproject-7e992.firebaseapp.com",
  projectId: "myproject-7e992",
  storageBucket: "myproject-7e992.appspot.com",
  messagingSenderId: "221233745157",
  appId: "1:221233745157:web:9d09e7079c1e141383fb6c",
  databaseURL: "https://myproject-7e992-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

const formReg = document.querySelector('.reg-form')
const formLogin = document.querySelector('.login-form')
const logoutBtn = document.querySelector('[data-logout]')
const openModalBtn = document.querySelector("[ data-modal-open]")
const closeModalBtn = document.querySelector("[data-modal-close]")
const modal = document.querySelector("[data-modal]")


formReg.addEventListener('submit', createUser)
formLogin.addEventListener('submit', getUser)
logoutBtn.addEventListener('click', logOutUser)

openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    modal.classList.toggle("visually-hidden");
  };


function createUser(event) {
    event.preventDefault();
    const formElements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
    username: event.currentTarget.elements.username.value   
    }
    // console.log(formElements)
     createUserWithEmailAndPassword(auth, formElements.email, formElements.password, formElements.username)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          alert(`User ${formElements.username} created`)
          return user
        })
       .then((user) => {
          set(ref(database, 'users/' + user.uid), {
            username: formElements.username,
            email: formElements.email,
            uid: user.uid,
    
  })
       })
       .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            
       });
  event.currentTarget.reset()
}
function getUser(event) {
     event.preventDefault();
    const formElements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
      
    }
    signInWithEmailAndPassword(auth, formElements.email, formElements.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    const userId = auth.currentUser.uid
    // console.log(userId)

    const db = getDatabase();
    const nameRef = ref(db, 'users/' + user.uid + '/username')
    onValue (nameRef, (snapshot) => {
      const name = snapshot.val();
      // console.log(name)
      
      alert(`Welcome back, ${name}`)
      document.location.href = "library.html"  //Перехід на сторінку Library після авторизації
      // openModalBtn.classList.add('visually-hidden')
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
 //Функція виходу зі сторінки користувача
function logOutUser(event) {
  signOut(auth).then(() => {
    document.location.href = "index.html"
    // modalContainer.classList.add('visually-hidden')
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

