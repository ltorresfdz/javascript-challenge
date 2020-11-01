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
 
   // Get the value property of the input element
   var inputValue1 = inputElement1.property("value");
   var inputValue2 = inputElement2.property("value");
   var inputValue3 = inputElement3.property("value");
   
 
   // Print the value to the console
   console.log(inputValue1);
   console.log(inputValue2);
   console.log(inputValue3);
   
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




	//------------------------------
  
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




