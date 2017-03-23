// Initialize Firebase
    // The copied and pasted code from the app page
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBTFJflYvwLEyAgFQxCyqFRjnf9iGjMtKo",
    authDomain: "train-scheduler-d5a94.firebaseapp.com",
    databaseURL: "https://train-scheduler-d5a94.firebaseio.com",
    storageBucket: "train-scheduler-d5a94.appspot.com",
    messagingSenderId: "482996641940"
  };
  
  firebase.initializeApp(config);
  
  // references the database
  var database = firebase.database();

  var clickCounter = 0;

  $("#submit").on("click", function(event) {

      event.preventDefault();

      var trainName = $("#train-name").val().trim();
      var destination = $("#destination").val().trim();
      var firstTrain = $("#first-train-time").val().trim();
      var frequency = $("#frequency").val().trim();

      //  Store Click Data to Firebase in a JSON property called clickCount
      // Note how we are using the Firebase .set() method
      var newTrain = {
        fName: trainName,
        fDest: destination,
        fFirstTrain: firstTrain,
        fFrequency: frequency
      }

      database.ref().push(newTrain);

      console.log(newTrain.fName);
      console.log(newTrain.fDest);
      console.log(newTrain.fFirstTrain);
      console.log(newTrain.fFrequency);

      alert("Train successfully added");

      $("#train-name").val("");
      $("#destination").val("");
      $("#first-train-time").val("");
      $("#frequency").val("");
    });

    //   database.ref().set({
    //     clickCount: clickCounter
    //     trainName: trainName
    //     destination: destination
    //     firstTrain: firstTrain
    //     frequency: frequency
    // });
    

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

      // Then we console.log the value of snapshot
      console.log(childSnapshot.val());

      // Then we change the html associated with the number.
      var trainName = childSnapshot.val().fName;
      var destination = childSnapshot.val().fDest;
      var firstTrain = childSnapshot.val().fFirstTrain;
      var frequency = childSnapshot.val().fFrequency;

      console.log(trainName);
      console.log(destination);
      console.log(firstTrain);
      console.log(frequency);

      // Then update the clickCounter variable with data from the database.
     $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  frequency + "</td><td>" + "first train" + "</td><td>" + "minutes away" + "</td><tr>");
    });

  



