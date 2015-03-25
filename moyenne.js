var nbNotes = 0,
    sum = 0,
    notes = document.querySelectorAll('.moy-note');

for (var i = 0, size = notes.length; i < size; ++i) {
    var note = parseFloat(notes[i].innerHTML).toFixed(2);
    if (isNaN(note)) {
        continue;
    }
    sum += Number(note);
    nbNotes++;
}

var title = document.createElement('h3');
title.innerHTML = (nbNotes > 0) ? 'Moyenne générale estimée : ' + (sum / nbNotes).toFixed(2) : 'Aucune de note valide';
document.querySelector('.page-title').appendChild(title);

// pour le style
document.body.style.width = '100%';