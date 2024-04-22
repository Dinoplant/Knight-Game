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
let beforePotPlayerHp = 0
let afterPotPlayerHp = 0
let onlyEnemy = 0
let damage = 0
let talk = 0
let type = 0
let heal = 0
let multi = 1
let attack = false
let speech = false
let newText = `Currently in battle`
let enemyD20 = 0
let enemy1 = 0
let enemy2 = 0
let enemy3 = 0
let endingNode = 0
//enemyPeace is the base of talking
//neededEnemeyPeace amount of peace you need to talk out of fighting

class Enemy {
  constructor(enemyName, enemyHp, enemyPeace, neededEnemyPeace, extraDamage, extraRoll) {
    this.enemyName = enemyName;
    this.enemyHp = enemyHp;
    this.neededEnemyPeace = neededEnemyPeace;
    this.extraDamage = extraDamage;
    this.extraRoll = extraRoll;
    this.enemyPeace = enemyPeace
  }
}


let None = new Enemy(`Nothing`, 0, 0, 0, 0, 0)
let Bandit = new Enemy(`Bandit`, 20, 0, 50, 0, 0)
let bear = new Enemy(`bear`, 40, 0, 70, 0, 0)
let King = new Enemy(`King`, 100, 0, 1000, 30, 0)


// bandit bear, wolves, genral, Henry, gruad, archer, dragon, yourself,
// gernal, graud, archer, bear,  henry, dragoon,


let player = {
  wis: 0,
  str: 0,
  con: 0,
  dex: 0,
  cha: 0,
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
    cha: 0,
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
    combat(1, 2, 3)
    endingNode = 8
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


  textNode.options.forEach(option => { //makes the options by checking the opition premator see how many optitions there are
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      if (option === textNode.options[0] && textNode.heal !== true && textNode.scare !== true && textNode.pendant !== true && textNode.stab !== true && textNode.persuade !== true && textNode.none !== true) {
        button.addEventListener('click', () => slash(),) //checking certain buttons and adding the comabt funation accordin to each one
      } else if (option === textNode.options[1]) {
        button.addEventListener('click', () => healPot(player.healPot))
      } else if (option === textNode.options[2]) {
        button.addEventListener('click', () => scare())
      } else if (option === textNode.options[3]) {
        button.addEventListener('click', () => stab())
      } else if (option === textNode.options[4]) {
        button.addEventListener('click', () => painPendant())
      } else if (option === textNode.options[5]) {
        button.addEventListener('click', () => persuade())
      }


      if (textNode.heal === true && option === textNode.options[0]) {
        button.removeEventListener('click', () => slash(),)
        button.addEventListener('click', () => healPot(player.healPot))
      } else if (textNode.scare === true && option === textNode.options[0]) {
        button.removeEventListener('click', () => slash(),)
        button.addEventListener('click', () => scare())
      } else if (textNode.stab === true && option === textNode.options[0]) {
        button.removeEventListener('click', () => slash(),)
        button.addEventListener('click', () => stab())
      } else if (textNode.pendant === true && option === textNode.options[0]) {
        button.removeEventListener('click', () => slash(),)
        button.addEventListener('click', () => painPendant())
      } else if (textNode.persuade === true && option === textNode.options[0]) {
        button.removeEventListener('click', () => slash(),)
        button.addEventListener('click', () => persuade())
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
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Heal fucntion active`)

  }
}

function painPendant() {
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Pendant fucntion active`)

  }
}

function scare() {
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Scare fucntion active`)
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.con >= 9) {
      d20 += 5
    } else if (player.con >= 6) {
      d20 += 3
    } else if (player.con >= 3) {
      d20 += 2
    }
    type = `sca`
    talk = d20
    speech = true
    talking()
  }
}

function persuade() {
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Presuade fucntion active`)

    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.cha >= 9) {
      d20 += 5
    } else if (player.cha >= 6) {
      d20 += 3
    } else if (player.cha >= 3) {
      d20 += 2
    }
    type = `per`
    talk = d20
    speech = true
    talking()
  }
}

function slash() { //combat function only works if the combat funation is true and will only work if combat is on going or started
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Slash fucntion active`)
    d12 = Math.floor(Math.random() * (13 - 1) + 1)

    if (player.str >= 9) {
      d12 += 5
    } else if (player.str >= 6) {
      d12 += 3
    } else if (player.str >= 3) {
      d12 += 2
    }

    damage = (d12 * multi) * 1.5
    attack = true
    combat()
  }
}
function stab() {
  if (combatQuestion === true || continueCombat === true) {
    console.log(`Stab fucntion active`)
    d4one = Math.floor(Math.random() * (5 - 1) + 1)
    d4two = Math.floor(Math.random() * (5 - 1) + 1)
    if (player.dex >= 9) {
      d4one += 4
    } else if (player.dex >= 6) {
      d4one += 2
    } else if (player.dex >= 3) {
      d4one += 1
    }
    if (player.con >= 8) {
      d4one += 3
    } else if (player.con >= 4) {
      d4one += 1
    }
    damage = ((d4one + d4two) * multi) * 1.5
    attack = true
    combat()
  }
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


  console.log(`Start COmbat is being used`)
  //debug
  if (player.debug >= 1) {
    playerHp = 690
  }
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

  if (playerHp <= 0) {
    endCombat()
  }
  else if (enemy1.enemyHp >= .1) {
    battle1()
  }
  else if (enemy2.enemyHp >= .1) {
    battle2()
  }
  else if (enemy3.enemyHp >= .1) {
    battle3()
  } else { endCombat() }

  function battle1() {
    console.log(`battle1 is being ran`)
    if (attack === true && combatQuestion === true && enemy1.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy1.enemyHp >= .1) {

      if (onlyEnemy === 1) {
        playerHp += heal
        afterPotPlayerHp = playerHp
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.2) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion, you are at <${afterPotPlayerHp} Hp>. The enemy took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
      } else if (attack === true) {
        enemy1.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`The ${enemy1.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy1.enemyHp} HP> left.`)


      }
      damage = 0
      attack = false
    }
  }


  function battle2() {
    console.log(`battle3 is being called somehow`)
    if (attack === true && combatQuestion === true && enemy2.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy2.enemyHp >= .1) {
      console.log(`battle2 if statement thing is on`)
      if (attack === true) {
        enemy2.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`The ${enemy2.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy2.enemyHp} HP> left.`)

      }
    }
  }


  function battle3() {
    if (attack === true && combatQuestion === true && enemy2.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy2.enemyHp >= .1) {
      console.log(`battle2 if statement thing is on`)
      if (attack === true) {
        enemy3.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`The ${enemy3.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy3.enemyHp} HP> left.`)

      }
    }
  }

  attack = false
  damage = 0
  updateText()
  if (playerHp <= 0) {
    endCombat()
  }
}

function talking() {


  if (playerHp <= 0) {
    endCombat()
  }
  else if (enemy1.enemyHp >= .1) {
    talk1()
  }
  else if (enemy2.enemyHp >= .1) {
    talk2()
  }
  else if (enemy3.enemyHp >= .1) {
    talk3()
  } else { endCombat() }


  function talk1() {
    console.log(`talk1 is going`)
    if (speech === true && combatQuestion === true && enemy1.enemyHp >= .1) {

      if (talk >= 13) {
        talk = Math.floor(talk * 1.7)
        enemy1.enemyPeace += talk
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        if (enemy1.enemyPeace >= enemy1.neededEnemyPeace) {
          enemy1.enemyHp = 0
          newText = `The ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you succesfully conviced the enemy to leave the battle.`
        } else {
          newText = `The ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left. You convinced the enemy and now they are <${enemy1.enemyPeace}/${enemy1.neededEnemyPeace}> convinced to leave the battle.`
        }
      } else if (talk <= 12) {
        console.log(`did not make it for the talk`)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)

        d4one = Math.floor(Math.random() * (5 - 1) + 1)
        if (type === `sca`) {
          switch (d4one) {
            case 1:
              newText = `You tired to scare the enemy, but you accidentally had a voice crack mid sentence. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to scare the enemy, but you didn't even make eye contact. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to scare the enemy, but since you don't look scary, they thought you were a two year old. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tired to presuade the enemy, but you ended rambling about how the election is corrupt. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to presuade the enemy, but you didn't even have five cited sources. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tired to presuade the enemy, but the ${enemy1.enemyName} had both earbuds in. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to presuade the enemy, but you forgot your key points. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        updateText()
      }
    }
  }
  function talk2() {
    if (speech === true && combatQuestion === true && enemy2.enemyHp >= .1) {

    }
  }

  function talk3() {
    if (speech === true && combatQuestion === true && enemy2.enemyHp >= .1) {

    }
  }
  talk = 0
  speech = false
  updateText()
  if (playerHp <= 0) {
    endCombat()
  }
}
function endCombat() {
  if (playerHp <= 0) {
    console.log(`yipee you are dead`)
    showTextNode(13)
  }
  else if (enemy1.enemyHp <= 0 && enemy2.enemyHp <= 0 && enemy3.enemyHp <= 0 && combatQuestion === true) {
    console.log(`YAY you are done`)
    attack = false
    combatQuestion = false
    showTextNode(endingNode)
    newText = `You have been killed and won't be missed`
    updateText()
  } else { console.log(`The end function did not work`) }
}
function updateText() {
  textElement.innerText = newText
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
        nextText: 9
      },
      {
        text: `Stab`,
        nextText: 10
      },
      {
        text: `Pendant of Pain`,
        nextText: 11
      },
      {
        text: `Persuade`,
        nextText: 12
      }
    ],
    startCombat: 1 //depending on the number combat will change emenies or allies
  },
  {
    id: 5,
    text: `This lets you roll a d12, and multiply that roll by 1.5 to damage the enemy.`,
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
    none: true,
    updateText: true,
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
        nextText: 9
      },
      {
        text: `Stab`,
        nextText: 10
      },
      {
        text: `Pendant of Pain`,
        nextText: 11
      },
      {
        text: `Persuade`,
        nextText: 12
      }
    ],
  },
  {
    id: 8,
    text: `Roll two d8s and heal the sum of the dice multiplied by two.`,
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
  {
    id: 9,
    text: `Roll a d20 and if it's above a 13, multiply that roll by 2 to convince the enemy.`,
    options: [
      {
        text: `Scare enemy`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],
    scare: true
  },
  {
    id: 10,
    text: `This lets you roll two d4s, and multiply that sum by 1.5 to damage the enemy.`,
    options: [
      {
        text: `Stab enemy`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],
    stab: true
  },
  {
    id: 11,
    text: `Roll a d4 and that roll is used to multiply next dice roll that's not the pendant.`,
    options: [
      {
        text: `Use Pendant of Pain`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],
    pendant: true
  },
  {
    id: 12,
    text: `Roll a d20 and if it's above a 13, multiply that roll by 2 to convince the enemy.`,
    options: [
      {
        text: `Persuade enemy`,
        nextText: 6
      },
      {
        text: `Back to Selection`,
        nextText: 7
      },
    ],
    persuade: true
  },
  {
    id: 13,
    text: `You have been killed`,
    options: [
      {
        text: `Restart`,
        nextText: -1
      }
    ],

  },
]

startGame()