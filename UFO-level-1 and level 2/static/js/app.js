// from data.js
var tableData = data;

// YOUR CODE HERE!

// This part display the complete table
// Use d3 to update each cell's text with
// ufo values (datetime, city, state,country,shape,duration, comments)
//======================================================================

function fulltable(){
  var tbody = d3.select("tbody");
  tableData.forEach(function(ufo) {
    // console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo data object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

fulltable()

//This part is to filter using all keys
 //======================================================================
 var button = d3.select("#filter-btn1");
 // Select the table
 var tabla = d3.select("tbody");
 // Create event handlers for clicking the button or pressing the enter key
 button.on("click", runFilter);
 tabla.on("submit",runFilter);
 
 // Create the function to run for both events
 function runFilter() {
    var filteredData = data
   // Prevent the page from refreshing
   d3.event.preventDefault();
 
   // Select the input element 
   var inputElement1 = d3.select("#datetime");
   var inputElement2 = d3.select("#ciudad");
   var inputElement3 = d3.select("#estado");
   var inputElement4 = d3.select("#pais");
   var inputElement5 = d3.select("#forma");
 
   // Get the value property of the input element
   var inputValue1 = inputElement1.property("value");
   var inputValue2 = inputElement2.property("value");
   var inputValue3 = inputElement3.property("value");
   var inputValue4 = inputElement4.property("value");
   var inputValue5 = inputElement5.property("value");
 
   // Print the value to the console
   console.log(inputValue1);
   console.log(inputValue2);
   console.log(inputValue3);
   console.log(inputValue4);
   console.log(inputValue5);
   
   // Iterate through each ufo object
   //---------------------------------------------
   
   if (inputValue1 !== "") {
	var filteredData = filteredData.filter(tableData => tableData.datetime === inputValue1);
	}
   if (inputValue2 !== "") {
	var filteredData = filteredData.filter(tableData => tableData.city === inputValue2);
	} 
	if (inputValue3 !== "") {
		var filteredData = filteredData.filter(tableData => tableData.state === inputValue3);
	}
	if (inputValue4 !== "") {
		var filteredData = filteredData.filter(tableData => tableData.country === inputValue4);
	}
	if (inputValue5 !== "") {
		var filteredData = filteredData.filter(tableData => tableData.shape === inputValue5);
		}
   //------------------------------
  
   console.log(filteredData);
   
  // get an alert message if there is no information with the selected filters
  if (filteredData.length === 0) {
    alert("There is no ufo information for that filter info");
  }


	// clear the existing output
    tabla.html("");

   //create the table wiht the filtered Data
    var tbody = d3.select("tbody");
    filteredData.forEach(function(ufo) {
	 // console.log(ufo);
	 var row = tbody.append("tr");
	 Object.entries(ufo).forEach(function([key, value]) {
	 //   console.log(key, value);
	   // Append a cell to the row for each value in the ufo  object
	   var cell = row.append("td");
	   cell.text(value);
	    });
        });
	 }
 //======================================================================


  // Select the table
//  var tabla = d3.select("tbody");
//  tabla.on("submit",fulltable);


//This part is to reset filters and display again full table
 //======================================================================
 // Select the Filter all button.
 var fecha = d3.select("#datetime");
 var button2 = d3.select("#filter-btn2");
 // Create event handlers for clicking the button 
 button2.on("click", someFunc);

 
 function someFunc() {
  fulltable();
  myFunction2();
  // allcero();
  
}


 

function myFunction2() {
  var myCollection = document.getElementsByTagName("input");
  var i;
  for (i = 0; i < myCollection.length; i++) {
    myCollection[i].value = "";
    console.log(myCollection[i]);
    console.log(myCollection[i].value);

  }
}


// These are the function that I created to clear the text, but didn't work ok.bottom
//====================================================================================

// function allcero(){
//   console.log("llego aqui");
 
//   // fecha.text("");
//   var fecha1 =fecha.property("value")
//   console.log(fecha1)
//   document.getElementById("datetime").innerHTML=""
// }
 
 
//  function clear(){
// 	document.getElementById('datetime').value = null
// }

// function myFunction() {
// 	document.getElementById("datetime").reset();
//   }


