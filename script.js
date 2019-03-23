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
  left:  `<img src="image/kngleft.png" style="height:80%; width:80%" id="hero">`,
  right: `<img src="image/kngright.png" style="height:80%; width:80%" id="hero">`,
  locale: undefined,
  direction: undefined,
  state: {
    canvas: [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],],
    found: false,
    won: false,
    score: 0,
  },
  goLeft: () => {
    const theHero = document.getElementById('hero')
    grid[hero.locale].removeChild(theHero)
    if (hero.direction == 'right'){
      grid[hero.locale].innerHTML = hero.up
      hero.direction = 'up'
    }
    else if (hero.direction == 'up'){
      grid[hero.locale].innerHTML = hero.left
      hero.direction = 'left'
    }
    else if (hero.direction == 'down'){
      grid[hero.locale].innerHTML = hero.right
      hero.direction = 'right'
    }
    else if (hero.direction == 'left'){
      grid[hero.locale].innerHTML = hero.down
      hero.direction = 'down'
    }
  },
  goRight: () => {
    const theHero = document.getElementById('hero')
    grid[hero.locale].removeChild(theHero)
    if (hero.direction == 'right'){
      grid[hero.locale].innerHTML = hero.down
      hero.direction = 'down'
    }
    else if (hero.direction == 'up'){
      grid[hero.locale].innerHTML = hero.right
      hero.direction = 'right'
    }
    else if (hero.direction == 'down'){
      grid[hero.locale].innerHTML = hero.left
      hero.direction = 'left'
    }
    else if (hero.direction == 'left'){
      grid[hero.locale].innerHTML = hero.up
      hero.direction = 'up'
    }
  },
  forward: () => {
    const locale = hero.locale
    const theHero = document.getElementById('hero')
    if(hero.direction == 'right' && ![3,7,11,15].includes(locale)){
      grid[hero.locale].removeChild(theHero)
      hero.locale = locale + 1
      grid[hero.locale].innerHTML = hero.right
    }
    if(hero.direction == 'up' && ![0,1,2,3].includes(locale)){
      grid[hero.locale].removeChild(theHero)
      hero.locale = locale - 4
      grid[hero.locale].innerHTML = hero.up
    }
    if(hero.direction == 'down' && ![12,13,14,15].includes(locale)){
      grid[hero.locale].removeChild(theHero)
      hero.locale = locale + 4
      grid[hero.locale].innerHTML = hero.down
    }
    if(hero.direction == 'left' && ![0,4,8,12].includes(locale)){
      grid[hero.locale].removeChild(theHero)
      hero.locale = locale - 1
      grid[hero.locale].innerHTML = hero.left
    }
  },
  catchTreasure: () => {
    hero.state.found = true
  },
  atack: () => {},
  perception: (n, locale) => {
    //brisa, fedor, buraco, parede, grito,
    if(locale.classList.contains('treasure'))
      hero.state.canvas[n].push('treasure')
    else if(locale.classList.contains('breeze'))
      hero.state.canvas[n].push('breeze')
    else if(locale.classList.contains('door'))
      hero.state.canvas[n].push('door')
    else if(locale.contains('asd'))
      hero.state.canvas[n].push('')
    else if(locale.contains('daa'))
      hero.state.canvas[n].push('')

  }
}

setInitialCanvas = () => {
  setDoor()
  setHole()
  setHole()
  setHole()
  setmonster()
  //gameLoop()
}

const gameLoop = () => setInterval(
  () => {
    if (hero.won)
      clearInterval(gameLoop)

    hero.perception(hero.locale, grid[hero.locale])
    action()
  },
  2000
)

const action = () => {
  console.log('asd')

  if(hero.state.canvas[hero.locale].includes('treasure') && !hero.state.found)
    hero.catchTreasure()
  else
    hero.goRight()
}

const clearCanvas = () => {
  Array.prototype.map.call(grid, item => item.innerHTML = ``)
  Array.prototype.map.call(grid, item => item.classList.remove('hole', 'door', 'treasure','monster'))
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
    grid[n].classList.add('monster')
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
  hero.direction = 'down'
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

const move = e => {
  if (e.key === ' ' || e.key === 'Spacebar')
    hero.forward()
  else if (e.keyCode == '37')
    hero.goLeft()
  else if (e.keyCode == '39')
    hero.goRight()

  if(grid[hero.locale].classList.contains('treasure')){
      alert('You Win'); 
      clearCanvas();
      setInitialCanvas()
  }
  else if(grid[hero.locale].classList.contains('hole'))
    alert('You lose')
  else if(grid[hero.locale].classList.contains('monster'))
    alert('You lose')
}

document.addEventListener("keydown", move)

// Buttons
const btnGo = document.getElementById(`btnGo`)
btnGo.addEventListener(`click`, () => {
    clearCanvas();
    setInitialCanvas()
})

const btnRestart = document.getElementById(`btnRestart`)
btnRestart.addEventListener(`click`, () => clearCanvas())

