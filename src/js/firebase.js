import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
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


formReg.addEventListener('submit', createUser)
formLogin.addEventListener('submit', getUser)
  
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
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 }



// //-------------------------------------------------------------
// //Форми з дз
// /*const form = document.querySelector('.login-form')
// form.addEventListener("submit", onFormSubmit)

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElements = {
//     mail: event.currentTarget.elements.email.value,
//     password: event.currentTarget.elements.password.value,
//   }
//   if (formElements.mail === "" || formElements.password === "") {
//     return alert("Please fill in all the fields!");
//   } console.log(formElements);
//     event.currentTarget.reset();
// }*/

// //----------------------------------------------------------------------------------------
// // Збереження в локалсторедж
// /*import throttle from 'lodash.throttle'

// const form = document.querySelector('.feedback-form')
// const textarea = document.querySelector('textarea')
// const email = document.querySelector('input')

// const STORAGE_KEY = 'feedback-form-state'
// const formData = {}


// form.addEventListener('submit', onFormSubmit)
// form.addEventListener("input", throttle(onTextInput, 1000))

// populateText()

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.target.reset()
//     localStorage.removeItem(STORAGE_KEY)
// }

// function onTextInput(evt) {
//     formData[evt.target.name] = evt.target.value
//     console.log(formData)
//     const formDataJSON = JSON.stringify(formData)
//     localStorage.setItem(STORAGE_KEY, formDataJSON)
// }

// function populateText() {
//     const savedData= localStorage.getItem(STORAGE_KEY)
//     // console.log(savedData)
    
//     if (savedData) {
//         const savedDataParse = JSON.parse(savedData)
//         email.value = savedDataParse.email
//         textarea.value = savedDataParse.message
//     }
// }*/



