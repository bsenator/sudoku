// Sudoku bulmacasını temsil eden 9x9'luk bir matris
var sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 3, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  // Sudoku tahtasını oluştur
function createSudokuBoard() {
    var table = document.getElementById("sudoku-board");
  
    for (var i = 0; i < 9; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < 9; j++) {
        var cell = row.insertCell(j);
        var inputValue = sudokuBoard[i][j] === 0 ? "" : sudokuBoard[i][j];
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.value = inputValue;
        input.addEventListener("input", function () {
          onInputChange(this, i, j);
        });
        cell.appendChild(input);
      }
    }
  }
  
  
  // Başlangıçta tahtayı oluştur
  createSudokuBoard();
  