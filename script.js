const grid = document.getElementsByClassName(`grid-item`)

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
  grid[n].innerHTML = '🚪'
}

setTreasure = () => {}

setHole = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML == '🚪' || grid[n].innerHTML == 'B')
    setHole()
  else{
    grid[n].innerHTML = 'B'
    setBreeze(n)
  }
}

setMoster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML == '🚪')
    setMoster()
  else{
    grid[n].innerHTML = 'M'
    setStink(n)
  }
}

setStink = n => {

}

setBreeze = n => {
  
}

// Buttons
const btnGo = document.getElementById(`btnGo`)
btnGo.addEventListener(`click`, () => setInitialCanvas())

const btnNext = document.getElementById(`btnNext`)
btnNext.addEventListener(`click`, () => alert(`next`))

const btnRestart = document.getElementById(`btnRestart`)
btnRestart.addEventListener(`click`, () => clearCanvas())
