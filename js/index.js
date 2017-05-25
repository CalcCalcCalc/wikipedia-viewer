var titleURL = "https://en.wikipedia.org/w/index.php?search=";
var results = [];

$(document).ready(function() {
		for (i = 0; i < 10; i++) {
		$("#main-text").before("<p id=\"p" + i + "\"></p>");
	}
});

$("input").keydown(function(event) {
	if (event.which == 13)
		GetSearchResults($("#input").val());
});

$("button").click(function() {
		GetSearchResults($("#input").val());
});

function GetSearchResults(searchTerm) {
	$.ajax({
		url: '//en.wikipedia.org/w/api.php',
		data: {
			action: 'query',
			list: 'search',
			srsearch: searchTerm,
			format: 'json'
		},
		dataType: 'jsonp',
		success: function(x) {
			ShowResults(x.query.search);
		}
	});
}

function ShowResults(results) {
	for (i = 0; i < results.length; i++) {
	 		 $("#p"+i).html("<a href=\"" + titleURL + results[i].title + "\" target=\"_blank\">" + results[i].title + "</a><li>" + results[i].snippet + "</li>");
	}
}

/*TODO
1. Catch "" val
2. Tidy up layout
3. Make random title appear in search bar, rather than be taken straight to random page
4. Clear entries when searching with new val
*/