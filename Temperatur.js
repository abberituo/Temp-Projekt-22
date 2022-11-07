      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
      let database = firebase.database().ref()
      database.on("value", (temp)=>{
        let data = temp.val()
        let hum = data["Sensor1-Vardagsrummet"]["Humidity"]
        let keys = Object.keys(hum)
        let last = hum[keys[keys.length-1]]
        console.log(last)
      })