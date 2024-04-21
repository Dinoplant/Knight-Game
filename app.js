
const textElement = document.getElementById('text'); //gets the ids from the html to change the text for the story
const optionButtonsElement = document.getElementById('btnOptions');
let inventoryElement = document.getElementById(`invText`)
let d4one = 0
let d4two = 0
let d8one = 0
let d8two = 0
let d12 = 0
let d20 = 0
let pendant = 1
let combatQuestion = false
let continueCombat = false
let playerHp = 150
let oldPlayerHp
let damage = 0
let heal = 0
let mutl = 0
let attack = false
let enemyD20 = 1
let enemy1 = 0
let enemy2 = 0
let enemy3 = 0
let endingNode = 0

class Enemy {
  constructor(enemyName, enemyHp, enemyPeace, extraDamage, extraRoll) {
    this.enemyName = enemyName;
    this.enemyHp = enemyHp;
    this.enemyPeace = enemyPeace;
    this.extraDamage = extraDamage;
    this.extraRoll = extraRoll;
  }
}

let None = new Enemy(`Nothing`, 0, 0, 0, 0)
let Bandit = new Enemy(`Bandit`, 20, 10, 0, 0);
let King = new Enemy(`King`, 100, 0, 30, 0)

// bandit bear, wolves, genral, Henry, gruad, archer, dragon, yourself, 
// gernal, graud, archer, bear,  henry, dragoon, 

let player = {
  wis: 0,
  str: 0,
  con: 0,
  dex: 0,
  bow: false,
  rapier: false,
  greatAxe: false,
  spear: false,
  shortSword: false,
  healPot: 0,
  jade: 0,
  debug: 0,
}

function startGame() {
  player = {
    wis: 0,
    str: 0,
    con: 0,
    dex: 0,
    bow: 0,
    rapier: 0,
    greatAxe: 0,
    spear: 0,
    shortSword: 0,
    healPot: 7,
    jade: 0,
    debug: 0,
  }
  showTextNode(1)
}

function showTextNode(textNodeIndex) { // goes through tthe text nodes checks what I put for the text and changes the text in the HTML
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.startCombat === 1) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    startCombat()
    combat(1, 3, 3)
    endingNode = 8
  }
  if (textNode.startCombat === 2) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    startCombat()
    combat(1, 3, 2, 1)
  }
  else if (textNode.continueCombat === true) { //checks if you are continue combat
    console.log('combat mode cont');
    combatQuestion = true
  }
  else {
    console.log('no violence = sad pandas');
    combatQuestion = false
  }
  while (optionButtonsElement.firstChild) { //removes buttons for combat, deletes the buttons but then adds new buttons
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => { //makes the options by checking the opition premator see how mnay optitions there are
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      if (option === textNode.options[0]) {
        button.addEventListener('click', () => slash()) //checking certain buttons and adding the comabt funation accordin to each one
      } else if (option === textNode.options[1]) {
        button.addEventListener('click', () => healPot(player.healPot))
      } else if (option === textNode.options[2]) {
        button.addEventListener('click', () => slash())
      } else if (option === textNode.options[3]) {
        button.addEventListener('click', () => slash())
      } else if (option === textNode.options[4]) {
        button.addEventListener('click', () => slash())
      } else if (option === textNode.options[5]) {
        button.addEventListener('click', () => slash())
      }
      if (textNode.heal === true && option === textNode.options[1]) {
        button.removeEventListener('click', () => slash())
        button.addEventListener('click', () => healPot(player.healPot))
      }

      optionButtonsElement.appendChild(button)
    }



  })
}

function showOption(option) { //shows the opitions if they have a certain item and such
  return option.requiredPlayer == null || option.requiredPlayer(player)
}

function update() {
  inventoryElement.innerText = player
  // console.log(`neato`)
}

function selectOption(option) { //decetcs if button is clicked with a set player demator, and does what it is told to do
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  player = Object.assign(player, option.setPlayer)
  update()
  showTextNode(nextTextNodeId)
}

function healPot(amount) {

  switch (amount) {
    case 10:
      player.healPot = 9;
      break;
    case 9:
      player.healPot = 8;
      break;
    case 8:
      player.healPot = 7;
      break;
    case 7:
      player.healPot = 6;
      break;
    case 6:
      player.healPot = 5;
      break;
    case 5:
      player.healPot = 4;
      break;
    case 4:
      player.healPot = 3;
      break;
    case 3:
      player.healPot = 2;
      break;
    case 2:
      player.healPot = 1;
      break;
    case 1:
      player.healPot = 0;
      break;
    default:
  }
  if (player.healPot >= 0 && combatQuestion === true || player.healPot >= 0 && continueCombat === true) {
    d8one = Math.floor(Math.random() * (9 - 1) + 1)
    d8two = Math.floor(Math.random() * (9 - 1) + 1)
    oldPlayerHp = playerHp
    if (player.str >= 9) {
      damage += 6
    } else if (player.str >= 6) {
      damage += 3
    } else if (player.str >= 3) {
      damage += 2
    }
    heal = (d8one + d8two) * 2
    playerHp += heal

    textElement.innerText = `You were at ${oldPlayerHp} HP but after drinking your potion, you are at <<${playerHp} Hp>>.`
  }
}
function slash() { //combat function only works if the combat funation is true and will only work if combat is on going or started 

  if (combatQuestion === true || continueCombat === true) {
    d12 = Math.floor(Math.random() * (13 - 1) + 1)
    damage = d12
    attack = true
  } else {
    console.log(`na man`)
  }

  //debug
  if (player.debug >= 1) {
    damage += 100
  }

  if (player.greatAxe >= 0 && player.str >= 7) {
    damage += 5
  } else if (player.str >= 9) {
    damage += 4
  } else if (player.str >= 6) {
    damage += 2
  } else if (player.str >= 3) {
    damage += 1
  }

  if (player.bow >= 1 && player.wis >= 5) {
    damage += 3
  }
  damage = damage * 1.5

  combat()
}
// comstumizable combat system, it has evrything needed
function startCombat() {

  if (player.con >= 9 && combatQuestion === true) {
    playerHp = 200
  } else if (player.con >= 6) {
    playerHp = 175
  } else if (player.con >= 3) {
    playerHp = 160
  } else { playerHp = 150 }

  console.log(`It is in use`)
  //debug
  if (player.debug >= 1) {
    playerHp = 690
  }
}

function endCombat() {
  if (playerHp <= 0) {
    console.log(`yipee you are dead`)
    startGame()
  }
  else if (enemy1.enemyHp <= 0 && enemy2.enemyHp <= 0 && enemy3.enemyHp <= 0 && combatQuestion === true) {
    console.log(`YAY you are done`)
    attack = false
    combatQuestion = false
    showTextNode(endingNode)

  } else { console.log(`it did not work(end)`) }


}

function combat(one, two, three) {

  if (one === 1) {
    enemy1 = Bandit
  } else if (one === 2) {
    enemy1 = King
  } else if (one === 3) {
    enemy1 = None
  }

  if (two === 1) {
    enemy2 = Bandit
  } else if (two === 2) {
    enemy2 = King
  } else if (two === 3) {
    enemy2 = None
  }

  if (three === 1) {
    enemy3 = Bandit
  } else if (three === 2) {
    enemy3 = King
  } else if (three === 3) {
    enemy3 = None
  }

  battle1()
  function battle1() {
    if (attack === true && combatQuestion === true && enemy1.enemyHp >= .1) {

      enemy1.enemyHp -= Math.floor(damage)

      enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
      enemyD20 = Math.floor((enemyD20 * 1.7) + enemy1.extraDamage)
      playerHp -= Math.floor(enemyD20)
      textElement.innerText = `The ${enemy1.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy1.enemyHp} HP> left.`
      console.log(`The ${enemy1.enemyName} did ${enemyD20} damage to you which leaves you with ${playerHp} HP left. You did ${damage} damage, leaving them with ${enemy1.enemyHp} HP left.`)
      damage = 0

    }

    else {
      battle2()
    }
  }

  function battle2() {
    if (attack === true && combatQuestion === true && enemy2.enemyHp >= .1) {

      enemy2.enemyHp -= Math.floor(damage)

      enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
      enemyD20 = Math.floor((enemyD20 * 1.7) + enemy2.extraDamage)
      playerHp -= Math.floor(enemyD20)
      textElement.innerText = `The ${enemy2.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy2.enemyHp} HP> left.`
      console.log(`The ${enemy2.enemyName} did ${enemyD20} damage to you which leaves you with ${playerHp} HP left. You did ${damage} damage, leaving them with ${enemy2.enemyHp} HP left.`)
      damage = 0

    } else { battle3() }
  }

  function battle3() {
    if (attack === true && combatQuestion === true && enemy3.enemyHp >= .1) {

      enemy3.enemyHp -= Math.floor(damage)

      enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
      enemyD20 = Math.floor((enemyD20 * 1.7) + enemy3.extraDamage)
      playerHp -= Math.floor(enemyD20)
      textElement.innerText = `The ${enemy3.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy3.enemyHp} HP> left.`
      console.log(`The ${enemy3.enemyName} did ${enemyD20} damage to you which leaves you with ${playerHp} HP left. You did ${damage} damage, leaving them with ${enemy3.enemyHp} HP left.`)
      damage = 0

    } else { endCombat() }
  }

}
//holds all the story elements along with the options 
let textNodes = [
  {
    id: 1, //story element or story part or section
    text: `Welcome to our Knight text adventure, click Play to start`, //text was is visable first
    options: [ //creates the options
      { //to set something: setPlayer: {},
        //to require player: requiredPlayer: {element boolien elemenet},
        text: `More Info`, //text was is visable first
        nextText: 2, //brings it to the next id 
      }, // make sure to add commas
      {
        text: `PLAY`,
        //text was is visable first
        nextText: 4 //brings it to the next id 
      }, // make sure to add commas
      {
        text: `Credits`, //text was is visable first
        nextText: 3 //brings it to the next id 
      },

    ], // make sure to add commas
  },
  {
    id: 2,
    text: `This is a text adventure made for our CART lab. This was made in just about 6 week from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system, Have Fun!`,
    options: [
      {
        text: `Back`,
        nextText: 1,
      },
      {
        text: `PLAY`,
        nextText: 4
      },
      {
        text: `Credits`,
        nextText: 3
      }
    ],
  },
  {
    id: 3,
    text: `Made by: Angel Delgado Jimenez (Lead Programer)
    Loghan Hornor (Lead Writer & Art Direction)`,
    options: [
      {
        text: `More Info`,
        nextText: 2
      },
      {
        text: `PLAY`,
        nextText: 4
      },
      {
        text: `Back`,
        nextText: 1
      }
    ],
  },
  {
    id: 4,
    text: `Currently battling`,
    options: [
      {
        text: `Slash`,
        nextText: 5
      },
      {
        text: `Heal Potions`,
        nextText: 8
      },
      {
        text: `Scare`,
        nextText: 2
      },
      {
        text: `Stab`,
        nextText: 2
      },
      {
        text: `Pendant of Pain`,
        nextText: 2
      },
      {
        text: `Persuade`,
        nextText: 2
      }
    ],
    startCombat: 1 //depending on the number combat will change emenies or allies
  },
  {
    id: 5,
    text: `This lets you roll a d12, and multiply that roll by 1.5 to damage A enemy.`,
    options: [
      {
        text: `Confirm Slash`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],

  },
  {
    id: 6,
    text: `Text will change based off action`,
    options: [
      {
        text: `Ok`,
        nextText: 7
      }
    ],
    continueCombat: true
  },
  {
    id: 7,
    text: `Currently battling`,
    options: [
      {
        text: `Slash`,
        nextText: 5
      },
      {
        text: `Heal Potions`,
        nextText: 8
      },
      {
        text: `Scare`,
        nextText: 2
      },
      {
        text: `Stab`,
        nextText: 2
      },
      {
        text: `Pendant of Pain`,
        nextText: 2
      },
      {
        text: `Persuade`,
        nextText: 2
      }
    ],
  },
  {
    id: 8,
    text: `This lets you roll a d12, and multiply that roll by 1.5 to damage A enemy.`,
    options: [
      {
        text: `Drink Heal Potion`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],
    heal: true
  },
]
startGame()

