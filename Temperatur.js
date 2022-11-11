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

      // let refTerrariet = database.ref('Sensor3-Terrariet')
      let refTerrariet = database.ref('All Sensors')
      
      // database.on("value", (temp)=>{
      //   let data = temp.val()

      //   let S1h = data["Sensor1-Vardagsrummet"]["Humidity"]
      //   let keys1 = Object.keys(S1h)
      //   let Hum1 = S1h[keys1[keys1.length-1]]
        
      //   let S1t = data["Sensor1-Vardagsrummet"]["Temperature"]
      //   let keys1t = Object.keys(S1t)
      //   let Temp1 = S1t[keys1t[keys1t.length-1]]


      //   let S2h = data["Sensor2-Pingisrummet"]["Humidity"]
      //   let keys2 = Object.keys(S2h)
      //   let Hum2 = S2h[keys2[keys2.length-1]]

      //   let S2t = data["Sensor2-Pingisrummet"]["Temperature"]
      //   let keys2t = Object.keys(S2t)
      //   let Temp2 = S2t[keys2t[keys2t.length-1]]


      //   let S3h = data["Sensor3-Terrariet"]["Humidity"]
      //   let keys3 = Object.keys(S3h)
      //   let Hum3 = S3h[keys3[keys3.length-1]]

      //   let S3t = data["Sensor3-Terrariet"]["Temperature"]
      //   let keys3t = Object.keys(S3t)
      //   let Temp3 = S3t[keys3t[keys3t.length-1]]


      //   let S4t = data["Sensor4-Klassrummet"]["Humidity"]
      //   let keys4t = Object.keys(S4t)
      //   let Temp4 = S4t[keys4t[keys4t.length-1]]

      //   let S4h = data["Sensor4-Klassrummet"]["Temperature"]
      //   let keys4 = Object.keys(S4h)
      //   let Hum4 = S4h[keys4[keys4.length-1]]


      //   let S5h = data["Sensor5-Kafeterian"]["Humidity"]
      //   let keys5 = Object.keys(S5h)
      //   let Hum5 = S5h[keys5[keys5.length-1]]

      //   let S5t = data["Sensor5-Kafeterian"]["Temperature"]
      //   let keys5t = Object.keys(S5t)
      //   let Temp5 = S5t[keys5t[keys5t.length-1]]

      //   console.log(Hum1,Hum2,Hum3,Hum4,Hum5)
      //   console.log(Temp1,Temp2,Temp3,Temp4,Temp5)
      // })

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

        // console.log(myChart.data.datasets[0])
        // console.log(myChart.data.datasets[1])



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
          // removeData(myChart)
          // myChart.data.datasets.data.pop();
          // datasets.data.pop();
          // myChart.options.plugins.title.text = 'new title';
          // myChart.update();                  
        }

        

        

        // myChart.data.datasets.forEach((dataset) => {
        //   dataset.data.push(100);
        // });
        
        myChart.update();

        console.log(room, datum)
         
      }