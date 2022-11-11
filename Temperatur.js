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

      var xValues = [];

      let refTerrariet = database.ref('All Sensors')

        const d = new Date();
        const date = d.getDate()
        const hour = d.getHours()

      let data = null

      refTerrariet.once("value").then((snapshot) => {
        if (snapshot.val()) {
          data = snapshot.val()
          var datumSelect  = document.getElementById('datum');
          let months = Object.keys(data['saved'])

          console.log(months)

          for (let i = 0; i < months.length; i++) {
            let days = Object.keys(data['saved'][months[i]])
            console.log(days)

            for (let j = 0; j < days.length; j++) {
              let option = document.createElement('option')
              let date = `2022-${months[i]}-${days[j]}`
              option.value = date
              option.innerText = date
      
              datumSelect.appendChild(option)              
            }

          }
          
        }
      });


      var myChart = new Chart("myChart", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [ {
            data: [300, 100, 1000, 5000, 1000, 4000, 2000, 1000, 200, 100],
            borderColor: "green",
            fill: false,
            label: 'Humidity'
          }, {
            data: [],
            borderColor: "blue",
            fill: false,
            label: 'Temperatur'
          }]
        },
        options: {
          legend: { display: true }
        }
      });



      function getDataForDay() {
        var room  = document.getElementById('rooms').value;
        var datum  = document.getElementById('datum').value;

        let datumSplit = datum.split('-')

        var firebaseData = [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100]

        let values = data['saved'][datumSplit[1]][datumSplit[2]]
        
        xValues = Object.keys(values)
        tempValues = []
        humValues = []
        myChart.data.datasets[0].data = []
        myChart.data.datasets[1].data = []

        for (let i = 0; i < xValues.length; i++) {
          tempValues.push(values[xValues[i]]['temp'])
          humValues.push(values[xValues[i]]['hum'])

          console.log(tempValues)
          console.log(humValues)

          myChart.data.datasets[0].data.push(values[xValues[i]]['hum'])
          myChart.data.datasets[1].data.push(values[xValues[i]]['temp'])               
        }
        
        myChart.update();

        console.log(room, datum)
         
      }