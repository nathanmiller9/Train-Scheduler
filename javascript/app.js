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
    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    var currentTime = moment().format("HH:mm");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var remainder = diffTime % frequency;
    var minutesAway = frequency - remainder;
    // var nextTrain = moment().add(minutesAway, "minutes");

    console.log(trainName, destination, firstTrain, frequency, firstTimeConverted, currentTime, diffTime, remainder, minutesAway);

    var newTrain = {
        fName: trainName,
        fDest: destination,
        fFrequency: frequency,
        fFirstTrain: firstTrain,
        // fNext: nextTrain,
        fAway: minutesAway
    }
    console.log(newTrain);
    // console.log(newTrain.nextTrain);

    database.ref().push(newTrain);

    console.log(newTrain.fName);
    console.log(newTrain.fDest);
    console.log(newTrain.fFirstTrain);
    console.log(newTrain.fFrequency);
    console.log(newTrain.fNext);
    console.log(newTrain.fAway);


    alert("Train successfully added");

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    // console.log the value of snapshot
    console.log(childSnapshot.val());

    // change the html associated with the number.
    var trainName = childSnapshot.val().fName;
    var destination = childSnapshot.val().fDest;
    var firstTrain = childSnapshot.val().fFirstTrain;
    var nextTrain = childSnapshot.val().fNext;
    var minutesAway = childSnapshot.val().fAway;
    var frequency = childSnapshot.val().fFrequency;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(nextTrain);
    console.log(minutesAway);
    console.log(frequency);


    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
        frequency + "</td><td>" + nextTrain + "</td><td>" + minutesAway + "</td><tr>");
});
