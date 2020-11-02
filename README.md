# javascript-challenge


This is the javascript and DOM manipulation assignment from the Data Analytics Boot Camp, Tecnológico de Monterrey.  

In this assignment, we have a HTML web page from the index.html file, the CSS style file and data.js file with the UFO information.  The purspose is to use javascript and D3.js code to display the table with the UFO information and include filter to select filtered data.

The HTML file include the scripts we need for javascript and D3js:  
  * <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>  
  * <script src="static/js/data.js"></script>  
  * <script src="static/js/app.js"></script>  

The assignment has two levels:

*Level 1*  
Write code that appends a table to web page and then adds new rows of data for each UFO sighting: function fulltable() was created to obtain this part. 

In this level, it was also required to inlclude a JavaScript code to include an event listener and display only table information depending on the  a date/time column to find rows that match user input.  
First, using d3, selected the table body.

I used "forEach" to automatically iterates (loops) through each item of data.  Then used the Object iteration property to read each object: keys and values, and apped them to the table. 

Please proceed to read Level 2 information, where I will describe code used to obtain this.  

*Level 2*  
This part required to set multiple filters to search for UFO sightings.  Besides the date/time filter from Level 1, add: city, sate, country and shape.

First, on the HTML file, I added more "li" to the "ul", and in each include the correspondingly "input" item for user to capture the desire datetime, city, state, country or shape.  
I also added a "Reset" button, in order to clear all the input, refresh table and show full table again.  

After selecting the filter button and the table with d3, for both created event listeners so function runFilter is triggered upon "click" and "submit". In function runFilter, variables were created to capture input value, compare with the information and then passing only info that meets that conditions to the table body. Please be advise that I inlcued some console.log lines to display info on the console while I was working on the code.  Some of them I left them, some other I commented on the final code.  

Once the user finishes input of selected filter, will click the button, and if there is data with such condition, will display on the table, otherwise, a message alert will pop up saying there is no data with such conditions.




