var averageNotation = 0,
	notes = $('.moy-note');

notes.each(
	function(index, element) {
		averageNotation += parseFloat(element.innerHTML);
	}
);

averageNotation = (averageNotation / notes.length).toFixed(2);

$('.page-title').append($('<h3>Moyenne générale estimée : ' + averageNotation + '</h3>'));