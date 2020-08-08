window.onload = setupFirebase;

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var subject = getInputVal("subject");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  saveMessage(name, subject, email, phone, message);

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

function saveMessage(name, subject, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });
}

function setupFirebase() {
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

  window["messageRef"] = firebase.database().ref("messages");

  //listeners
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  console.log("Firebase setup completed!");
}
