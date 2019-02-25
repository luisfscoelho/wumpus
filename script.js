const grid = document.getElementsByClassName(`grid-item`)
const monster = `<img src="image/moster.png" style="height:70%; width:70%">`
const monsterLocale = null
const breeze = 0
const stink = 0
const hero = {
  up:    `<img src="image/hero.png" style="height:70%; width:70%">`,
  down:  `<img src="image/hero.png" style="height:70%; width:70%">`,
  right: `<img src="image/hero.png" style="height:70%; width:70%">`,
  left:  `<img src="image/hero.png" style="height:70%; width:70%">`,
  locale: undefined,
  direction: undefined,
}

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
  Array.prototype.map.call(grid, item => item.classList.remove('hole', 'door'))
}

const setDoor = () => {
  let n = 6
  while ([5, 6, 9, 10].includes(n)) {
    n = Math.floor(Math.random() * 16)
  }
  grid[n].classList.add('door')
  setHero(n)
}

const setTreasure = () => {}

const setHole = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].classList.contains('door') || grid[n].classList.contains('hole'))
    setHole()
  else{
    grid[n].classList.add('hole')
    setBreeze(n)
  }
}

const setmonster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].classList.contains('door'))
    setmonster()
  else {
    grid[n].innerHTML = grid[n].innerHTML + monster
    monsterLocale = n
    setStink(n)
  }
}

const setHero = n => {
  grid[n].innerHTML = grid[n].innerHTML + hero.left
  hero.locale = n
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
