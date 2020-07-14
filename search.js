var webSearch;
webSearch = new google.search.WebSearch();
webSearch.setSearchCompleteCallback(this, webSearchComplete, [webSearch]);

function webSearchComplete (searcher, searchNum) {
	var contentDiv = document.getElementById('web-content');
	contentDiv.innerHTML = '';
        var results = searcher.results;

    var newResultsDiv = document.createElement('div');
    newResultsDiv.id = 'web-content';
    for (var i = 0; i < results.length; i++) {
      var result = results[i];

	  var resultHTML = '<div>';
      resultHTML += '<a href="' + result.unescapedUrl + '" target="_blank"><b>' +
                        result.titleNoFormatting + '</b></a><br/>' +
                        result.content +
                        '<div/>';
      newResultsDiv.innerHTML += resultHTML;
    }
    contentDiv.appendChild(newResultsDiv);
}

function search(query) {
	webSearch.execute(query);
}
