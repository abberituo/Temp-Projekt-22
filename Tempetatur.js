// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBJSefVBqgAghW65XFdAAli0uPhPlNoIM0",
    authDomain: "temperatur-10bbf.firebaseapp.com",
    databaseURL: "https://temperatur-10bbf-default-rtdb.firebaseio.com",
    projectId: "temperatur-10bbf",
    storageBucket: "temperatur-10bbf.appspot.com",
    messagingSenderId: "579857266173",
    appId: "1:579857266173:web:a0ed3fb88b30b8584f9594",
    measurementId: "G-2WWE7QF78E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

var ledRef = db.ref("led");

ledRef.once("value").then((snapshot) => {
  if (snapshot.val()) {
    let myCheckBox = document.getElementById("checkbox");
    myCheckBox.checked = snapshot.val().led;
    if (myCheckBox.checked) {
      document.getElementById("myImage").src = "light-bulb-on.png";
    } else {
      document.getElementById("myImage").src = "light-bulb-off.png";
    }
  }
});

ledRef.on("value", (snapshot) => {
  const data = snapshot.val();
});

function turnOnOffLight() {
  let myCheckBox = document.getElementById("checkbox");

  if (myCheckBox.checked) {
    document.getElementById("myImage").src = "light-bulb-on.png";
    ledRef.update({ led: true });
  } else {
    document.getElementById("myImage").src = "light-bulb-off.png";
    // database.ref("/led").update({ led: true });
    ledRef.update({ led: false });
  }
}