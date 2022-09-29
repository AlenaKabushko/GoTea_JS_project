import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const btnSignin = document.querySelector('#signin')
const form = document.querySelector('form')
const username = document.querySelector('#username')
const userEmail = document.querySelector('#email')
const userPassword = document.querySelector('#password')


const firebaseConfig = {
apiKey: "AIzaSyBJ6lLv5ogHYuOSl9BMNSc1LMbJdJmoKEY",
authDomain: "command-js-gotea.firebaseapp.com",
projectId: "command-js-gotea",
storageBucket: "command-js-gotea.appspot.com",
messagingSenderId: "283349162300",
appId: "1:283349162300:web:ee87f6c905fbc95c2b2639"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


btnSignin.addEventListener('click', (e) => {

    const password = userPassword.value;
    const email = userEmail.value;
    const name = e.currentTarget.username.value;
    console.log(password)
    console.log(email)
    console.log(name)

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      alert('User created')
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    // ..
  });
})



//-------------------------------------------------------------
//Форми з дз
/*const form = document.querySelector('.login-form')
form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = {
    mail: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  }
  if (formElements.mail === "" || formElements.password === "") {
    return alert("Please fill in all the fields!");
  } console.log(formElements);
    event.currentTarget.reset();
}*/

//----------------------------------------------------------------------------------------
// Збереження в локалсторедж
/*import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const textarea = document.querySelector('textarea')
const email = document.querySelector('input')

const STORAGE_KEY = 'feedback-form-state'
const formData = {}


form.addEventListener('submit', onFormSubmit)
form.addEventListener("input", throttle(onTextInput, 1000))

populateText()

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value
    console.log(formData)
    const formDataJSON = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, formDataJSON)
}

function populateText() {
    const savedData= localStorage.getItem(STORAGE_KEY)
    // console.log(savedData)
    
    if (savedData) {
        const savedDataParse = JSON.parse(savedData)
        email.value = savedDataParse.email
        textarea.value = savedDataParse.message
    }
}*/



