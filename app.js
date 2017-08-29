var userInput = $("#searchInput").val;

console.log(userInput)

$("button").on("click", function() {
	var search = $(this).data(userInput);

	var queryURL = "https://api.chucknorris.io/jokes/search?query={" + "search" + "}";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	
})