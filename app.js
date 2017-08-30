const Chuck  = require('chucknorris-io'),
      client = new Chuck();


    client.search(#searchInput).then(function (response) {
			
}).catch(function (err) {
	alert("Please search again")
});

var userInput = $("#searchInput").val;

console.log(userInput)

$("button").on("click", function() {
	var search = $(this).data(userInput);

	var queryURL = "https://api.chucknorris.io/jokes/search?query={" + search + "}";

	$.ajax({
		url: queryURL,
		method: "GET"
	})


})