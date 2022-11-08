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
      let database = firebase.database()

      var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
      var datumRef = database.ref("Sensor3-Terrariet/saved");

      var minaDatum = []
      var minData = null
      datumRef.once('value', (snapshot)=>{
        console.log(snapshot.val())
        minData = snapshot.val()
        for (month in minData) {
          for (dag in minData[month])
          {
            let minDatum = `2022-${month}-${dag}`
            minaDatum.push(minDatum)
          }
        }
        console.log(minaDatum)
        var datumSelect  = document.getElementById('datum');

        for (let i = 0; i < minaDatum.length; i++) {
          let option = document.createElement('option')
          option.value = minaDatum[i]
          option.innerText = minaDatum[i]
  
          datumSelect.appendChild(option)
        }

      })


      database.ref().on("value", (temp)=>{
        let data = temp.val()
        console.log('data',data)
        let S1h = data["Sensor1-Vardagsrummet"]["current"]['hum']

        let S1t = data["Sensor1-Vardagsrummet"]['current']['temp']

        const d = new Date();
        const date = d.getDate()
        const hour = d.getHours()

        let S1sh = data['Sensor1-Vardagsrummet']['saved']['november'][`${date}`]

      })



      new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            data: [],
            borderColor: "red",
            fill: false
          }, {
            data: [300, 100, 1000, 5000, 1000, 4000, 2000, 1000, 200, 100],
            borderColor: "green",
            fill: false
          }, {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
          }]
        },
        options: {
          legend: { display: false }
        }
      });

      function getDataForDay() {
        var room  = document.getElementById('rooms').value;
        var datum  = document.getElementById('datum').value;
        const d = new Date();
        const date = d.getDate()
        const hour = d.getHours()

        let S1sh = `Sensor1-Vardagsrummet/saved/november/${date}`
      }