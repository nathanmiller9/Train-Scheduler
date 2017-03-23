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
  var trainName;
  var destination;
  var firstTrain;
  var frequency;

  $("#submit").on("click", function() {

      event.preventDefault();

      // Add to clickCounter
      clickCounter++;
      trainName = $("#train-name").val();
      destination = $("#destination").val();
      firstTrain = $("#first-train-time").val();
      frequency = $("#frequency").val();




      //  Store Click Data to Firebase in a JSON property called clickCount
      // Note how we are using the Firebase .set() method
      database.ref().set({
        clickCount: clickCounter;
        trainName: trainName;
        destination: destination;
        firstTrain: firstTrain;
        frequency: frequency;
      });
    });

  database.ref().on("value", function(snapshot) {

      // Then we console.log the value of snapshot
      console.log(snapshot.val());

      // Then we change the html associated with the number.
      $("#click-value").html(snapshot.val().clickCount);
      $("#train").html(snapshot.val().trainName);
      $("dest").html(snapshot.val().destination);
      $("first").html(snapshot.val().firstTrain);
      $("freq").html(snapshot.val().frequency);

      // Then update the clickCounter variable with data from the database.
      clickCounter = snapshot.val().clickCount;

    // If there is an error that Firebase runs into -- it will be stored in the "errorObject"
    // Again we could have named errorObject anything we wanted.
    }, function(errorObject) {

      // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
    });



