const grid = document.getElementsByClassName(`grid-item`)
const monster = `<img src="image/moster.png" style="height:70%; width:70%">`
const monsterLocale = null
const door = `<img src="image/door.svg" style="height: 80%;width: 80%">`
const breeze = 0
const stink = 0
const heroLocale = null
const hero = {up: '↑', down: '↓', right: '→', left: '←'}

setInitialCanvas = () => {
  setDoor()
  setHole()
  setHole()
  setHole()
  setmonster()
  setTreasure()
}

const clearCanvas = () => {
  Array.prototype.map.call(grid, item => item.innerHTML = ``)
  Array.prototype.map.call(grid, item => item.classList.remove('hole'))
}

const setDoor = () => {
  let n = 6
  while(n==5 || n==6 || n==9 || n==10) {
    n = Math.floor(Math.random() * 16)
  }
  grid[n].innerHTML = door
  setHero(n)
}

const setTreasure = () => {}

const setHole = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML.includes(door) || grid[n].classList.contains('hole'))
    setHole()
  else{
    grid[n].classList.add('hole')
    setBreeze(n)
  }
}

const setmonster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].innerHTML.includes(door))
    setmonster()
  else{
    grid[n].innerHTML = grid[n].innerHTML + monster
    monsterLocale = n
    setStink(n)
  }
}

const setHero = n => {
  grid[n].innerHTML = grid[n].innerHTML + hero.left
  //heroLocale = n
}

const setStink = n => {

}

const setBreeze = n => {
  
}

// Buttons
const btnGo = document.getElementById(`btnGo`)
btnGo.addEventListener(`click`, () => {clearCanvas(); setInitialCanvas()})

const btnNext = document.getElementById(`btnNext`)
btnNext.addEventListener(`click`, () => alert(`next`))

const btnRestart = document.getElementById(`btnRestart`)
btnRestart.addEventListener(`click`, () => clearCanvas())
