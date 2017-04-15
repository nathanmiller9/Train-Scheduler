# HW - {Train-Scheduler}

## Live Link 
 https://nathanmiller9.github.io/Train-Scheduler/

## Requirements
#### Create a train schedule application that incorporates Firebase to host arrival and departure data. The app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

- When adding trains, administrators should be able to submit the following:
1. Train Name
2. Destination
3. First Train Time -- in military time
4. Frequency -- in minutes
5. The app should be able to calculate when the next train will arrive; this should be relative to the current time.
6. Users from many different machines must be able to view same train times.

## Technologies Used
- Jquery
- Firebase
- HTML
- CSS
- Moment.js

## Code Explaination
- Used HTML, Bootstrap, jQuery, Firebase, javaScript, and moment.js to create a real time train schedule.  Created an on-click function to capture the user data entered onto the webpage.  The data was then stored as an object in the firebase database. The data was then sent back from the database to the webpage to be displayed in a table.  Moment.js was used to calculate and display real-time data to show when trains were set to arrive.  
