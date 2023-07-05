window.onload = function() {
    const doc = document.querySelector('#chessboard');

    const whiteCell = '<div style="width: 100px; height: 100px; background-color: white"></div>';
    const blackCell = '<div style="width: 100px; height: 100px; background-color: black"></div>'; 

    var cOOntent = "";

    for(let i = 0; i < 8; i++) {
        var row = "";

        for(let j = 0; j < 8; j++) {
            if((i + j) % 2 === 0) {
                row += whiteCell;
            } else {
                row += blackCell;
            }
        }

        cOOntent += '<div style="display: flex; flex-direction: row">' + row + '</div>';
    }

    doc.innerHTML = '<div>' + cOOntent + '</div>';
}