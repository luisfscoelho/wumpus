const grid = document.getElementsByClassName(`grid-item`)
const monster = 'M'//"<img src='image/wumpus.svg' style='height: 100%;width: 100%'>"
const mosnterLocale = null
const door = 'D'//"<img src='image/door.svg' style='height: 100%;width: 100%'>"
const hole = '🕳'
const breeze = 0
const stink = 0
const heroLocale = null
const hero = {up: '↑', down: '↓', right: '→', left: '←'}

setInitialCanvas = () => {
  setDoor()
  setHole()
  setHole()
  setHole()
  setMoster()
  setTreasure()
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
  setHero(n)
}

setTreasure = () => {}

setHole = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML.includes(door) || grid[n].innerHTML == hole)
    setHole()
  else{
    grid[n].innerHTML = '🕳'
    setBreeze(n)
  }
}

setMoster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML == door)
    setMoster()
  else{
    grid[n].innerHTML = grid[n].innerHTML + monster
    mosnterLocale = n
    setStink(n)
  }
}

setHero = n => {
  grid[n].innerHTML = grid[n].innerHTML + hero.left
  //heroLocale = n
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
