// from data.js
var tableData = data;

// YOUR CODE HERE!

// This part display the complete table
// Use d3 to update each cell's text with
// ufo values (datetime, city, state,country,shape,duration, comments)
//======================================================================

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


 //This part is to filter by datetime
 //======================================================================
  var button = d3.select("#filter-btn1");

  // Select the table
  var tabla = d3.select("tbody");
  
  // Create event handlers for clicking the button or pressing the enter key
  button.on("click", runFilter);
  tabla.on("submit",runFilter);
  
  // Create the function to run for both events
  function runFilter() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the datetime
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
	
	// filter the information by the selected datetime
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	console.log(filteredData);
	 // clear the existing output
	tabla.html("");

	//create the table wiht the filtered Data
	var tbody = d3.select("tbody");
	filteredData.forEach(function(ufo) {
	  // console.log(ufo);
	  var row = tbody.append("tr");
	  Object.entries(ufo).forEach(function([key, value]) {
	  //   console.log(key, value);
		// Append a cell to the row for each value
		// in the weather report object
		var cell = row.append("td");
		cell.text(value);
	  });
	});
}

//This part is to filter by city
 //======================================================================
 var button = d3.select("#filter-btn2");

 // Select the table
 var tabla = d3.select("tbody");
 
 // Create event handlers for clicking the button or pressing the enter key
 button.on("click", runFilter);
 tabla.on("submit",runFilter);
 
 // Create the function to run for both events
 function runFilter() {
 
   // Prevent the page from refreshing
   d3.event.preventDefault();
 
   // Select the input element and get the datetime
   var inputElement = d3.select("#ciudad");
 
   // Get the value property of the input element
   var inputValue = inputElement.property("value");
 
   // Print the value to the console
   console.log(inputValue);
   
   // filter the information by the selected datetime
   var filteredData = tableData.filter(tableData => tableData.city === inputValue);
   console.log(filteredData);
	// clear the existing output
   tabla.html("");

   //create the table wiht the filtered Data
   var tbody = d3.select("tbody");
   filteredData.forEach(function(ufo) {
	 // console.log(ufo);
	 var row = tbody.append("tr");
	 Object.entries(ufo).forEach(function([key, value]) {
	 //   console.log(key, value);
	   // Append a cell to the row for each value
	   // in the weather report object
	   var cell = row.append("td");
	   cell.text(value);
	 });
   });
}
