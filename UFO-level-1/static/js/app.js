// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

  // // Use d3 to update each cell's text with
  // ufo values (datetime, city, state,country,shape,duration, comments)
  data.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
