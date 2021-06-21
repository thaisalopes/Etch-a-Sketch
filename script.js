function initialize (numberOfSquares) {
  const container = document.querySelector('.gridSquares');
  container.style.cssText = `grid-template-columns: repeat(${numberOfSquares}, auto);`
  for (let i = 1; i <= numberOfSquares**2; i++)
  {
    const content = document.createElement('div');
    content.classList.add('square')
    content.setAttribute('id','square'+i);        
    container.appendChild(content);
  }
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}`;
  });
});
}
initialize(20);

function changeGrid (){
  let numberOfSquares = 0;  
  do {
    numberOfSquares = prompt("Please input S for the grid size SxS (max = 100")
  }  while (numberOfSquares>100 || numberOfSquares <1 || isNaN(numberOfSquares))
  removeDivs();
  return numberOfSquares;
}

function removeDivs () {
  const elemento = document.querySelector('.gridSquares');
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }

function resetGrid () {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {square.style.backgroundColor = 'white';
});
}

const changeGridButton = document.querySelector('#changeGrid');
changeGridButton.addEventListener('click', () => { 
  initialize(changeGrid())});

const resetGridButton = document.querySelector('#resetGrid');
resetGridButton.addEventListener('click', () => {
  resetGrid()});
