// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiW6EdEHDNPMsVX3DvKRpoiHZm5vvA3Bk",
  authDomain: "contact-form-4f57c.firebaseapp.com",
  databaseURL: "https://contact-form-4f57c.firebaseio.com",
  projectId: "contact-form-4f57c",
  storageBucket: "contact-form-4f57c.appspot.com",
  messagingSenderId: "677291494559",
  appId: "1:677291494559:web:9dc353eba2053bd8ec66aa",
  measurementId: "G-V67JDWQ0TQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messageRef = firebase.database().ref("messages");

//listeners
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, company, email, phone, message);

  //show alert
  document.querySelector(".alert").style.display = "block";

  //hide alert
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //clear form
  document.getElementById("contactForm").reset();
}

//function to get the form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//save messages

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
