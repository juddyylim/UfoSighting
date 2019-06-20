// from data.js
var tableData = data;

//Select table body tag
var tbody = d3.select("tbody");

// Append every sighting into the tbody 
tableData.forEach(function(sightings) {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        var td = row.append("td").text(value);  
    });
});

//Use a date form in your HTML document and write JavaScript code 
//that will listen for events and search through the `date/time` 
//column to find rows that match user input.

// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  var newdata = data.filter(sighting => sighting.datetime === inputValue);

  //Clear current table
  tbody.html("");

  //Add filtered data to table body
  newdata.forEach(function(filteredsightings) {
    var filteredRow = tbody.append("tr");
    Object.entries(filteredsightings).forEach(function([key, value]) {
      var filteredTD = filteredRow.append("td").text(value);
    });
  });
});
