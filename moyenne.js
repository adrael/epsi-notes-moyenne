var nbAbsent = 0,
	averageNotation = 0,
	notes = $('.moy-note');

notes.each(
	function(index, element) {

        if(element.innerHTML !== "Absent") {
		    
		    averageNotation += parseFloat(element.innerHTML);

        } else {

            ++nbAbsent;

        }
        
	}
);

averageNotation = (averageNotation / (notes.length - nbAbsent)).toFixed(2);

$('.page-title').append($('<h3>Moyenne générale estimée : ' + averageNotation + '</h3>'));