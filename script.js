const grid = document.getElementsByClassName(`grid-item`)
const monster = "<img src='image/wumpus.svg' style='height: 100%;width: 100%'>"
const door = "<img src='image/door.svg' style='height: 100%;width: 100%'>"
const breeze = 0;
const stink = 0;

setInitialCanvas = () => {
  setDoor()
  setHole()
  setHole()
  setHole()
  setMoster()
}

clearCanvas = () => {
  Array.prototype.map.call(grid, item => item.innerHTML = ``)
}

setDoor = () => {
  let n = 6
  while(n==5 || n==6 || n==9 || n==10) {
    n = Math.floor(Math.random() * 16)
  }
  grid[n].innerHTML = door
}

setTreasure = () => {}

setHole = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML == door || grid[n].innerHTML == '🕳')
    setHole()
  else
    grid[n].innerHTML = '🕳'
}

setMoster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML == door)
    setMoster()
  else{
    grid[n].innerHTML = monster;
    setStink(n)
  }
}

setStink = n => {

}

setBreeze = n => {
  
}

// Buttons
const btnGo = document.getElementById(`btnGo`)
btnGo.addEventListener(`click`, () => {clearCanvas(); setInitialCanvas()})

const btnNext = document.getElementById(`btnNext`)
btnNext.addEventListener(`click`, () => alert(`next`))

const btnRestart = document.getElementById(`btnRestart`)
btnRestart.addEventListener(`click`, () => clearCanvas())
