const grid = document.getElementsByClassName(`grid-item`)
const breeze = `<img src="image/breeze.png" style="height:30px; width:30px">`
const stink = `<img src="image/stink.png" style="height:50%; width:50%">`
const monster = {
  monster: `<img src="image/monster.png" style="height:70%; width:70%" id="monster">`,
  stink: `<img src="image/stink.png" style="height:70%; width:70%" id="stink">`,
  locale: undefined,
}
const hero = {
  up:    `<img src="image/kngup.png" style="height:80%; width:80%" id="hero">`,
  down:  `<img src="image/kngdown.png" style="height:80%; width:80%" id="hero">`,
  right: `<img src="image/kngright.png" style="height:80%; width:80%" id="hero">`,
  left:  `<img src="image/kngleft.png" style="height:80%; width:80%" id="hero">`,
  locale: undefined,
  direction: undefined,
  state: {
    canvas: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],],
    found: false,
    won: false,
    score: 0,
  },
  goLeft: () =>{},
  goRight: () => {},
  forward: () => {},
  catchTreasure: () => {
    hero.state.found = true
  },
  atack: () => {},
  perception: (n, locale) => {
    //brisa, fedor, buraco, parede, grito,
  }
}

setInitialCanvas = () => {
  setDoor()
  setHole()
  setHole()
  setHole()
  setmonster()
  gameLoop()
}

const gameLoop = () => setInterval(
  () => {
    if (hero.won)
      clearInterval(gameLoop)

    hero.perception()
    action()
  },
  2000
)

const action = () => {
  console.log('asd')

  if(hero.state[hero.locale].contains('treasure') && !hero.state.found)
    hero.catchTreasure()
  else
    hero.forward()
}

const clearCanvas = () => {
  Array.prototype.map.call(grid, item => item.innerHTML = ``)
  Array.prototype.map.call(grid, item => item.classList.remove('hole', 'door', 'treasure'))
}

const monsterTo = n => {
  const items = []

  if ( ![3, 7, 11, 15].includes(n) )
    items.push(n+1)
  if ( ![0, 4, 8, 12].includes(n) )
    items.push(n-1)
  if ( ![0, 1, 2, 3].includes(n) )
    items.push(n+4)
  if ( ![12, 13, 14, 15].includes(n) )
    items.push(n-4)

  return items[Math.floor(Math.random()*items.length)]
}

const setDoor = () => {
  const n = Math.floor(Math.random() * 16)
  if ([5, 6, 9, 10].includes(n))
    setDoor()
  else{
    grid[n].classList.add('door')
    setHero(n)
  }
}

const setTreasure = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].classList.contains('door') || grid[n].classList.contains('hole'))
    setTreasure()
  else
    grid[n].classList.add('treasure')
}

const setHole = () => {
  const n = Math.floor(Math.random() * 16)
  const classList = grid[n].classList

  if (classList.contains('door') || classList.contains('hole') || classList.contains('treasure'))
    setHole()
  else{
    classList.add('hole')
    setBreeze(n)
  }
}

const setmonster = () => {
  const n = Math.floor(Math.random() * 16)
  if (grid[n].classList.contains('door'))
    setmonster()
  else {
    grid[n].innerHTML = grid[n].innerHTML + monster.monster
    monster.locale = n
    setStink(n)
  }
}

const removeMonster = n => {
  const theMonster = document.getElementById('monster')
  grid[n].removeChild(theMonster)
  //removeStink(n)
}

const setHero = n => {
  grid[n].innerHTML = grid[n].innerHTML + hero.down
  hero.locale = n
  setTreasure()
}

const setStink = n => {
  if ( ![3, 7, 11, 15].includes(n) )
    grid[n+1].innerHTML = grid[n+1].innerHTML + monster.stink 
  if ( ![0, 4, 8, 12].includes(n) )
    grid[n-1].innerHTML = grid[n-1].innerHTML + monster.stink
  if ( ![0, 1, 2, 3].includes(n) )
    grid[n-4].innerHTML = grid[n-4].innerHTML + monster.stink
  if ( ![12, 13, 14, 15].includes(n) )
    grid[n+4].innerHTML = grid[n+4].innerHTML + monster.stink
}

const removeStink = n => {
  const theStink = document.getElementById('stink')
  grid[n-1].removeChild(theStink)
  grid[n+1].removeChild(theStink)
  grid[n+4].removeChild(theStink)
  grid[n-4].removeChild(theStink)
}

const setBreeze = n => {
  // if ( ![3, 7, 11, 15].includes('hole') )
  //   grid[n+1].innerHTML = grid[n+1].innerHTML + breeze
  // if ( ![0, 4, 8, 12].includes('hole') )
  //   grid[n-1].innerHTML = grid[n-1].innerHTML + breeze
  // if ( ![0, 1, 2, 3].includes('hole') )
  //   grid[n-4].innerHTML = grid[n-4].innerHTML + breeze
  // if ( ![12, 13, 14, 15].includes('hole') )
  //   grid[n+4].innerHTML = grid[n+4].innerHTML + breeze
}

// Buttons
const btnGo = document.getElementById(`btnGo`)
btnGo.addEventListener(`click`, () => {clearCanvas(); setInitialCanvas()})

const btnRestart = document.getElementById(`btnRestart`)
btnRestart.addEventListener(`click`, () => clearCanvas())
