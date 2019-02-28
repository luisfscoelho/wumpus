const grid = document.getElementsByClassName(`grid-item`)
const monster = `<img src="image/monster.png" style="height:70%; width:70%">`
const monsterLocale = null
const breeze = 0
const stink = `<img src="image/stink.png" style="height:50%; width:50%">`
const hero = {
  up:    `<img src="image/kngup.png" style="height:80%; width:80%">`,
  down:  `<img src="image/kngdown.png" style="height:80%; width:80%">`,
  right: `<img src="image/kngright.png" style="height:80%; width:80%">`,
  left:  `<img src="image/kngleft.png" style="height:80%; width:80%">`,
  locale: undefined,
  direction: undefined,
}

setInitialCanvas = () => {
  setDoor()
  setHole(); setHole(); setHole()
  setmonster()
  setStink(); setStink(); setStink();
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

const setTreasure = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].classList.contains('door') || grid[n].classList.contains('hole') || n == monsterLocale) {
    setTreasure()
  }
  grid[n].classList.add('treasure')
}

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
    //monsterLocale = n
    setStink(n)
  }
}

const setHero = n => {
  grid[n].innerHTML = grid[n].innerHTML + hero.down
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
