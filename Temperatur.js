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

        let S1h = data["Sensor1-Vardagsrummet"]["Humidity"]
        let keys1 = Object.keys(S1h)
        let Hum1 = S1h[keys1[keys1.length-1]]

        let S1t = data["Sensor1-Vardagsrummet"]["Temperature"]
        let keys1t = Object.keys(S1t)
        let Temp1 = S1t[keys1t[keys1t.length-1]]


        let S2h = data["Sensor2-Pingisrummet"]["Humidity"]
        let keys2 = Object.keys(S2h)
        let Hum2 = S2h[keys2[keys2.length-1]]

        let S2t = data["Sensor2-Pingisrummet"]["Temperature"]
        let keys2t = Object.keys(S2t)
        let Temp2 = S2t[keys2t[keys2t.length-1]]


        let S3h = data["Sensor3-Terrariet"]["Humidity"]
        let keys3 = Object.keys(S3h)
        let Hum3 = S3h[keys3[keys3.length-1]]

        let S3t = data["Sensor3-Terrariet"]["Temperature"]
        let keys3t = Object.keys(S3t)
        let Temp3 = S3t[keys3t[keys3t.length-1]]


        let S4t = data["Sensor4-Klassrummet"]["Humidity"]
        let keys4t = Object.keys(S4t)
        let Temp4 = S4t[keys4t[keys4t.length-1]]

        let S4h = data["Sensor4-Klassrummet"]["Temperature"]
        let keys4 = Object.keys(S4h)
        let Hum4 = S4h[keys4[keys4.length-1]]


        let S5h = data["Sensor5-Kafeterian"]["Humidity"]
        let keys5 = Object.keys(S5h)
        let Hum5 = S5h[keys5[keys5.length-1]]

        let S5t = data["Sensor5-Kafeterian"]["Temperature"]
        let keys5t = Object.keys(S5t)
        let Temp5 = S5t[keys5t[keys5t.length-1]]

        console.log(Hum1,Hum2,Hum3,Hum4,Hum5)
        console.log(Temp1,Temp2,Temp3,Temp4,Temp5)
      })