function initialize (numberOfSquares) {
  for (let i = 1; i <= numberOfSquares**2; i++)
  {
    const container = document.querySelector('.gridSquares');
    
    const content = document.createElement('div');
    content.classList.add('square')
    content.setAttribute('id','square'+i);        
    container.appendChild(content);
  }
}
initialize(16);


const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'pink';
  });
});

function changeGrid (numberOfSquares){
  numberOfSquares = prompt("Please input the number of squares you want in the grid")
  removeDivs();
  return numberOfSquares;
}

function removeDivs () {
  for (let i = 1; i <= numberOfSquares**2; i++)
  {
    const elemento = document.getElementsByClassName('square');
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
}

/*function resetGrid () {
  squares.forEach((square) => {square.style.backgroundColor = 'white';
  return
});*/

const changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', () => initialize(changeGrid()));

const resetGridButton = document.querySelector('#resetGrid');
resetGridButton.addEventListener('click', () => resetGrid());
