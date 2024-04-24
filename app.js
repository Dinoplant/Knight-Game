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
//enemyPeace is the base of talking
//neededEnemeyPeace amount of peace you need to talk out of fighting
let None1 = new Enemy(`The Air`, 0, 0, 0, 0, 0)
let None2 = new Enemy(`The Wind`, 0, 0, 0, 0, 0)
let None3 = new Enemy(`The Breeze`, 0, 0, 0, 0, 0)
let Bandit1 = new Enemy(`Nate the Bandit`, 25, 0, 45, 0, 0)
let Bandit2 = new Enemy(`Josh the Bandit`, 30, 0, 50, 0, 0)
let Bandit3 = new Enemy(`Steven the Bandit`, 20, 5, 50, 0, 0)
let Bandit4 = new Enemy(`Johnson the Bandit`, 40, 0, 35, 0, 0)
let Bandit5 = new Enemy(`Nick the Bandit`, 30, 10, 80, 0, 0)
let BanditGen1 = new Enemy(`The Bandit`, 35, 10, 40, 0, 0)
let BanditGen2 = new Enemy(`The Bandit`, 20, 0, 50, 0, 0) // 10
let BanditGen3 = new Enemy(`The Bandit`, 50, 20, 100, 0, 0)
let BanditGen4 = new Enemy(`The Bandit`, 25, 0, 55, 0, 0)
let LeadBandit = new Enemy(`Bandit Leader`, 50, 0, 100, 10, 0)

let Guard1 = new Enemy(`Eligh the Guard`, 70, 10, 120, 6, 2)
let Guard2 = new Enemy(`Guston the Guard`, 60, 0, 70, 8, 0)
let Guard3 = new Enemy(`Duke the Guard`, 90, 0, 100, 4, 0)
let Guard4 = new Enemy(`Brandon the Guard`, 80, 0, 110, 6, 0)
let Guard5 = new Enemy(`Matthew the Guard`, 70, 0, 90, 8, 3)
let GuardGen1 = new Enemy(`The Guard`, 70, 0, 100, 7, 0)
let GuardGen2 = new Enemy(`The Guard`, 75, 12, 120, 2, 2) // 20
let GuardGen3 = new Enemy(`The Guard`, 80, 0, 100, 4, 1)
let GuardGen4 = new Enemy(`The Guard`, 90, 5, 90, 3, 1)

let Archer1 = new Enemy(`Noah the Archer`, 50, 0, 90, 9, 4)
let Archer2 = new Enemy(`Ezekiel the Archer`, 40, 0, 65, 5, 5)
let ArcherGen1 = new Enemy(`The Archer`, 45, 0, 90, 4, 4)
let ArcherGen2 = new Enemy(`The Archer`, 65, 0, 50, 7, 5)

let Genral = new Enemy(`The Genral`, 100, 0, 100, 10, 5)

let Bear1 = new Enemy(`The Brown Bear`, 60, 0, 70, 7, 0)
let Bear2 = new Enemy(`The Black Bear`, 50, 0, 60, 0, 3)
let Wolf1 = new Enemy(`The Gray Wolf`, 40, 0, 70, 10, 1) //30
let Wolf2 = new Enemy(`The Sliver Wolf`, 45, 0, 80, 7, 3)
let Dragon = new Enemy(`The Dragon`, 300, 0, 350, 10, 10)
let AlphaWolf = new Enemy(`The Alpha Wolf`, 70, -20, 90, 5, 5)
let FirstHenry = new Enemy(`Henry`, 400, 0, 700, 15, 10)
let SecondHenry = new Enemy(`Henry`, 250, 0, 300, 10, 7)
let Yourself = new Enemy(`Yourself`, 1000, 0, 3000, 0, 0)

const textElement = document.getElementById('text'); //gets the ids from the html to change the text for the story
const optionButtonsElement = document.getElementById('btnOptions');
let inventoryElement = document.getElementById(`invText`)
let d4one = 0
let d4two = 0
let d10one = 0
let d10two = 0
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
let weapon = `None`
let attack = false
let speech = false
let newText = null
let enemyD20 = 0
let enemy1 = None1
let enemy2 = None2
let enemy3 = None3
let endingNode = 0
let combatEnded = false

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
    key: 0,
    debug: 0,
  }
  showTextNode(1)
}

function showTextNode(textNodeIndex) { // goes through tthe text nodes checks what I put for the text and changes the text in the HTML
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.startCombat === 1 && combatEnded === false) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    newText = `You are fighting a two Bandits.`
    endingNode = 27
    startCombat()
    combat(7, 11, 1)

  } else if (textNode.startCombat === 2 && combatEnded === false) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    newText = `You are fighting a Bandit then a Bear, then Bandit Leader following after.`
    endingNode = 28
    startCombat()
    combat(9, 28, 15)

  } else if (textNode.startCombat === 3 && combatEnded === false) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    newText = `You are fighting 2 different Guards, and their Genral last.`
    endingNode = 29
    startCombat()
    combat(14, 22, 27)

  }
  else if (textNode.startCombat === 4 && combatEnded === false) { //just checks is a paramantor to see if combat starts
    console.log('combat mode engaged');
    combatQuestion = false
    newText = `You are fighting 2 different Guards, and their <<KING>> last.`
      endingNode = 33
      startCombat()
    combat(19, 21, 35)
  
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
function weaponUpdate() {
  if (player.bow >= 1) {
    weapon = `Bow`
  } else if (player.greatAxe >= 1) {
    weapon = `Great Axe`
  } else if (player.shortSword >= 1) {
    weapon = `Short Sword`
  } else if (player.rapier >= 1) {
    weapon = `Rapier`
  } else if (player.spear >= 1) {
    weapon = `Spear`
  }
}
function update() {
  weaponUpdate()
  document.getElementById('invText').innerText = `You have ${playerHp} HP left
  Strength: ${player.str}
  Dexterity: ${player.dex}
  Wisdom: ${player.wis}
  Charisma: ${player.cha}
  Constitution: ${player.con}
  Weapon: ${weapon}
  ${player.healPot} Heal Potions left
  Jade: ${player.jade}
  Boss Keys: ${player.key}
  `

  document.getElementById('staText').innerText = ` ${enemy1.enemyName}: 
  ${enemy1.enemyHp} HP and ${enemy1.enemyPeace}/${enemy1.neededEnemyPeace} convinced
   ${enemy2.enemyName}: 
  ${enemy2.enemyHp} HP and ${enemy2.enemyPeace}/${enemy2.neededEnemyPeace} convinced
   ${enemy3.enemyName}: 
  ${enemy3.enemyHp} HP and ${enemy3.enemyPeace}/${enemy3.neededEnemyPeace} convinced
  `
  console.log(`Update function worked and ran`)
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
    if (player.healPot >= 1) {
      beforePotPlayerHp = Math.floor(playerHp)
      d10one = Math.floor(Math.random() * (11 - 1) + 1)
      d10two = Math.floor(Math.random() * (11 - 1) + 1)
      if (player.con >= 9) {
        d10one += 4
      } else if (player.con >= 6) {
        d10one += 2
      } else if (player.con >= 3) {
        d10one += 1
      }
      if (player.wis >= 9) {
        d10one += 4
      } else if (player.wis >= 6) {
        d10one += 2
      } else if (player.wis >= 3) {
        d10one += 1
      }
      onlyEnemy = 1
      heal = Math.floor(((d10one + d10two) * multi) * 2)
      combat()
    } else {
      onlyEnemy = 2
      heal = 0
      combat()
    }
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
  }
}

function painPendant() {
  if (combatQuestion === true || continueCombat === true) {
    multi = 1
    multi = Math.floor(Math.random() * (5 - 1) + 1)
    if (player.wis >= 10) {
      multi += 2
    } else if (player.wis >= 8) {
      multi += 1
    }

    onlyEnemy = 3
    combat()
  }
}

function scare() {
  if (combatQuestion === true || continueCombat === true) {
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.con >= 9) {
      d20 += 5
    } else if (player.con >= 6) {
      d20 += 3
    } else if (player.con >= 3) {
      d20 += 2
    }
    if (player.str >= 9) {
      d20 += 3
    } else if (player.con >= 6) {
      d20 += 2
    }
    type = `sca`
    talk = d20
    talk = talk * multi
    speech = true
    talking()
  }
}

function persuade() {
  if (combatQuestion === true || continueCombat === true) {
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.cha >= 9) {
      d20 += 5
    } else if (player.cha >= 6) {
      d20 += 3
    } else if (player.cha >= 3) {
      d20 += 2
    }
    if (player.wis >= 9) {
      d20 += 3
    } else if (player.wis >= 6) {
      d20 += 2
    }
    type = `per`
    talk = d20
    talk = talk * multi
    speech = true
    talking()
  }
}

function slash() { //combat function only works if the combat funation is true and will only work if combat is on going or started
  if (combatQuestion === true || continueCombat === true) {
    d12 = Math.floor(Math.random() * (13 - 1) + 1)
    if (player.str >= 6 && player.greatAxe >= 1) {
      d12 += 4
    } else if (player.wis >= 6 && player.bow >= 1) {
      d12 += 4
    }
    if (playerHp >= 150 && player.spear >= 1) {
      d12 += 7
    }
    else if (playerHp >= 100 && player.spear >= 1) {
      d12 += 4
    } else if (playerHp >= 50 && player.spear >= 1) {
      d12 += 2
    }
    if (player.str >= 9) {
      d12 += 5
    } else if (player.str >= 6) {
      d12 += 3
    } else if (player.str >= 3) {
      d12 += 2
    }
    if (player.debug >= 1) {
      d12 += 120
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

    if (player.dex >= 6 && player.rapier >= 1) {
      d12 += 4
    } else if (player.con >= 6 && player.shortSword >= 1) {
      d12 += 4
    }
    if (playerHp >= 150 && player.spear >= 1) {
      d12 += 7
    }
    else if (playerHp >= 100 && player.spear >= 1) {
      d12 += 4
    } else if (playerHp >= 50 && player.spear >= 1) {
      d12 += 2
    }
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
  switch (one) {
    case 1:
      enemy1 = None1
      break;
    case 2:
      enemy1 = None2
      break;
    case 3:
      enemy1 = None3
      break;
    case 4:
      enemy1 = Bandit1
      break;
    case 5:
      enemy1 = Bandit2
      break;
    case 6:
      enemy1 = Bandit3
      break;
    case 7:
      enemy1 = Bandit4
      break;
    case 8:
      enemy1 = Bandit5
      break;
    case 9:
      enemy1 = BanditGen1
      break;
    case 10:
      enemy1 = BanditGen2
      break;
    case 11:
      enemy1 = BanditGen3
      break;
    case 12:
      enemy1 = BanditGen4
      break;
    case 13:
      enemy1 = LeadBandit
      break;
    case 14:
      enemy1 = Guard1
      break;
    case 15:
      enemy1 = Guard2
      break;
    case 16:
      enemy1 = Guard3
      break;
    case 17:
      enemy1 = Guard4
      break;
    case 18:
      enemy1 = Guard5
      break;
    case 19:
      enemy1 = GuardGen1
      break;
    case 20:
      enemy1 = GuardGen2
      break;
    case 21:
      enemy1 = GuardGen3
      break;
    case 22:
      enemy1 = GuardGen4
      break;
    case 23:
      enemy1 = Archer1
      break;
    case 24:
      enemy1 = Archer2
      break;
    case 25:
      enemy1 = ArcherGen1
      break;
    case 26:
      enemy1 = ArcherGen2
      break;
    case 27:
      enemy1 = Genral
      break;
    case 28:
      enemy1 = Bear1
      break;
    case 29:
      enemy1 = Bear2
      break;
    case 30:
      enemy1 = Wolf1
      break;
    case 31:
      enemy1 = Wolf2
      break;
    case 32:
      enemy1 = Dragon
      break;
    case 33:
      enemy1 = AlphaWolf
      break;
    case 34:
      enemy1 = FirstHenry
      break;
    case 35:
      enemy1 = SecondHenry
      break;
    case 36:
      enemy1 = Yourself
      break;
    default:
  }

  switch (two) {
    case 1:
      enemy2 = None1
      break;
    case 2:
      enemy2 = None2
      break;
    case 3:
      enemy2 = None3
      break;
    case 4:
      enemy2 = Bandit1
      break;
    case 5:
      enemy2 = Bandit2
      break;
    case 6:
      enemy2 = Bandit3
      break;
    case 7:
      enemy2 = Bandit4
      break;
    case 8:
      enemy2 = Bandit5
      break;
    case 9:
      enemy2 = BanditGen1
      break;
    case 10:
      enemy2 = BanditGen2
      break;
    case 11:
      enemy2 = BanditGen3
      break;
    case 12:
      enemy2 = BanditGen4
      break;
    case 13:
      enemy2 = LeadBandit
      break;
    case 14:
      enemy2 = Guard1
      break;
    case 15:
      enemy2 = Guard2
      break;
    case 16:
      enemy2 = Guard3
      break;
    case 17:
      enemy2 = Guard4
      break;
    case 18:
      enemy2 = Guard5
      break;
    case 19:
      enemy2 = GuardGen1
      break;
    case 20:
      enemy2 = GuardGen2
      break;
    case 21:
      enemy2 = GuardGen3
      break;
    case 22:
      enemy2 = GuardGen4
      break;
    case 22:
      enemy1 = GuardGen4
      break;
    case 23:
      enemy2 = Archer1
      break;
    case 24:
      enemy2 = Archer2
      break;
    case 25:
      enemy2 = ArcherGen1
      break;
    case 26:
      enemy2 = ArcherGen2
      break;
    case 27:
      enemy2 = Genral
      break;
    case 28:
      enemy2 = Bear1
      break;
    case 29:
      enemy2 = Bear2
      break;
    case 30:
      enemy2 = Wolf1
      break;
    case 31:
      enemy2 = Wolf2
      break;
    case 32:
      enemy2 = Dragon
      break;
    case 33:
      enemy2 = AlphaWolf
      break;
    case 34:
      enemy2 = FirstHenry
      break;
    case 35:
      enemy2 = SecondHenry
      break;
    case 36:
      enemy2 = Yourself
      break;
    default:
  }

  switch (three) {
    case 1:
      enemy3 = None1
      break;
    case 2:
      enemy3 = None2
      break;
    case 3:
      enemy3 = None3
      break;
    case 4:
      enemy3 = Bandit1
      break;
    case 5:
      enemy3 = Bandit2
      break;
    case 6:
      enemy3 = Bandit3
      break;
    case 7:
      enemy3 = Bandit4
      break;
    case 8:
      enemy3 = Bandit5
      break;
    case 9:
      enemy3 = BanditGen1
      break;
    case 10:
      enemy3 = BanditGen2
      break;
    case 11:
      enemy3 = BanditGen3
      break;
    case 12:
      enemy3 = BanditGen4
      break;
    case 13:
      enemy3 = LeadBandit
      break;
    case 14:
      enemy3 = Guard1
      break;
    case 15:
      enemy3 = Guard2
      break;
    case 16:
      enemy3 = Guard3
      break;
    case 17:
      enemy3 = Guard4
      break;
    case 18:
      enemy3 = Guard5
      break;
    case 19:
      enemy3 = GuardGen1
      break;
    case 20:
      enemy3 = GuardGen2
      break;
    case 21:
      enemy3 = GuardGen3
      break;
    case 22:
      enemy3 = GuardGen4
      break;
    case 22:
      enemy3 = GuardGen4
      break;
    case 23:
      enemy3 = Archer1
      break;
    case 24:
      enemy3 = Archer2
      break;
    case 25:
      enemy3 = ArcherGen1
      break;
    case 26:
      enemy3 = ArcherGen2
      break;
    case 27:
      enemy3 = Genral
      break;
    case 28:
      enemy3 = Bear1
      break;
    case 29:
      enemy3 = Bear2
      break;
    case 30:
      enemy3 = Wolf1
      break;
    case 31:
      enemy3 = Wolf2
      break;
    case 32:
      enemy3 = Dragon
      break;
    case 33:
      enemy3 = AlphaWolf
      break;
    case 34:
      enemy3 = FirstHenry
      break;
    case 35:
      enemy3 = SecondHenry
      break;
    case 36:
      enemy3 = Yourself
      break;
    default:
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
    if (attack === true && combatQuestion === true && enemy1.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy1.enemyHp >= .1) {
      if (onlyEnemy === 1) {
        playerHp += heal
        afterPotPlayerHp = playerHp
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.1) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion you healed ${heal} HP you are at <${afterPotPlayerHp} Hp>. ${enemy1.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 2) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.8) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You had no potions left so the ${enemy1.enemyName} took the chance to deal ${enemyD20} damage while you left your guard down leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 3) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.4) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You use the Pendant of Pain and fell your next action is going to be x${multi} as much. ${enemy1.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
      } else if (attack === true) {
        enemy1.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy1.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy1.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`${enemy1.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy1.enemyHp} HP> left.`)
        multi = 1
      }
      onlyEnemy = 0
      damage = 0
      heal = 0
      attack = false

    }
  }
  function battle2() {
    if (attack === true && combatQuestion === true && enemy2.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy2.enemyHp >= .1) {
      if (onlyEnemy === 1) {
        playerHp += heal
        afterPotPlayerHp = playerHp
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.1) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion you healed ${heal} HP you are at <${afterPotPlayerHp} Hp>. ${enemy2.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 2) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.8) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You had no potions left so the ${enemy2.enemyName} took the chance to deal ${enemyD20} damage while you left your guard down leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 3) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.4) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You use the Pendant of Pain and fell your next action is going to be x${multi} as much. ${enemy2.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
      } else if (attack === true) {
        enemy2.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`${enemy2.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy2.enemyHp} HP> left.`)
        multi = 1
      }
      onlyEnemy = 0
      damage = 0
      heal = 0
      attack = false
    }
  }
  function battle3() {
    if (attack === true && combatQuestion === true && enemy3.enemyHp >= .1 || onlyEnemy >= 1 && combatQuestion === true && enemy3.enemyHp >= .1) {
      if (onlyEnemy === 1) {
        playerHp += heal
        afterPotPlayerHp = playerHp
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.1) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion you healed ${heal} HP you are at <${afterPotPlayerHp} Hp>. ${enemy3.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 2) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.8) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You had no potions left so the ${enemy3.enemyName} took the chance to deal ${enemyD20} damage while you left your guard down leaving you with <<${playerHp} Hp>> left`
        multi = 1
      } else if (onlyEnemy === 3) {
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.4) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = `You use the Pendant of Pain and fell your next action is going to be x${multi} as much. ${enemy3.enemyName} took the chance to deal ${enemyD20} damage leaving you with <<${playerHp} Hp>> left`
      } else if (attack === true) {
        enemy3.enemyHp -= Math.floor(damage)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        newText = (`${enemy3.enemyName} did ${enemyD20} damage to you which leaves you with <<${playerHp} HP>> left. You did ${damage} damage, leaving them with <${enemy3.enemyHp} HP> left.`)
        multi = 1
      }
      onlyEnemy = 0
      damage = 0
      heal = 0
      attack = false
    }
  }
  updateText()
  if (playerHp <= 0) {
    console.log(`the has died in the combat, combat detected death`)
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
          newText = `${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you succesfully conviced the enemy to leave the battle.`
        } else {
          newText = `${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left. You convinced the enemy and now they are <${enemy1.enemyPeace}/${enemy1.neededEnemyPeace}> convinced to leave the battle.`
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
              newText = `You tired to presuade the enemy, but you ended rambling about how the election is corrupt. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to presuade the enemy, but you didn't even have five cited sources. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tired to presuade the enemy, but ${enemy1.enemyName} had both earbuds in. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to presuade the enemy, but you forgot your key points. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
      } multi = 1
      updateText()
    }
  }
  function talk2() {
    if (speech === true && combatQuestion === true && enemy2.enemyHp >= .1) {
      if (talk >= 13) {
        talk = Math.floor(talk * 1.7)
        enemy2.enemyPeace += talk
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        if (enemy2.enemyPeace >= enemy2.neededEnemyPeace) {
          enemy2.enemyHp = 0
          newText = `The ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you succesfully conviced the enemy to leave the battle.`
        } else {
          newText = `The ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left. You convinced the enemy and now they are <${enemy2.enemyPeace}/${enemy2.neededEnemyPeace}> convinced to leave the battle.`
        }
      } else if (talk <= 12) {
        console.log(`did not make it for the talk`)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy2.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy2.extraDamage)
        playerHp -= Math.floor(enemyD20)
        d4one = Math.floor(Math.random() * (5 - 1) + 1)
        if (type === `sca`) {
          switch (d4one) {
            case 1:
              newText = `You tired to scare the enemy, but you accidentally had a voice crack mid sentence. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to scare the enemy, but you didn't even make eye contact. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to scare the enemy, but since you don't look scary, they thought you were a two year old. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tired to presuade the enemy, but you ended rambling about how the election is corrupt. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to presuade the enemy, but you didn't even have five cited sources. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tired to presuade the enemy, but the ${enemy2.enemyName} had both earbuds in. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to presuade the enemy, but you forgot your key points. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
      }
      multi = 1
      updateText()
    }
  }
  function talk3() {
    if (speech === true && combatQuestion === true && enemy3.enemyHp >= .1) {
      if (talk >= 13) {
        talk = Math.floor(talk * 1.7)
        enemy3.enemyPeace += talk
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        if (enemy3.enemyPeace >= enemy3.neededEnemyPeace) {
          enemy3.enemyHp = 0
          newText = `${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you succesfully conviced the enemy to leave the battle.`
        } else {
          newText = `${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left. You convinced the enemy and now they are <${enemy3.enemyPeace}/${enemy3.neededEnemyPeace}> convinced to leave the battle.`
        }
      } else if (talk <= 12) {
        console.log(`did not make it for the talk`)
        enemyD20 = Math.floor((Math.random() * (21 - 1) + 1) + enemy3.extraRoll)
        enemyD20 = Math.floor((enemyD20 * 1.7) + enemy3.extraDamage)
        playerHp -= Math.floor(enemyD20)
        d4one = Math.floor(Math.random() * (5 - 1) + 1)
        if (type === `sca`) {
          switch (d4one) {
            case 1:
              newText = `You tired to scare the enemy, but you accidentally had a voice crack mid sentence. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to scare the enemy, but you didn't even make eye contact. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to scare the enemy, but since you don't look scary, they thought you were a two year old. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tired to presuade the enemy, but you ended rambling about how the election is corrupt. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tired to presuade the enemy, but you didn't even have five cited sources. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tired to presuade the enemy, but the ${enemy3.enemyName} had both earbuds in. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tired to presuade the enemy, but you forgot your key points. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
      }
      multi = 1
      updateText()
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
  console.log(combatQuestion, playerHp)
  if (enemy1.enemyHp <= 0 && enemy2.enemyHp <= 0 && enemy3.enemyHp <= 0) {
    combatEnded = true
    console.log(`combat ended is true now`)
  }
  if (playerHp <= 0) {
    newText = `You have been killed and won't be missed`
    showTextNode(13)
    playerHp = 150
  }
  else if (combatQuestion === true && combatEnded === true) {
    attack = false
    console.log(`this did go in the end winning combat`)
    combatQuestion = false
    playerHp = 150
    newText = `You have won the battle`
    showTextNode(endingNode)
  } else { console.log(`The end function did not work`) }
}

function updateText() {
  textElement.innerText = newText
}


//holds all the story elements along with the options

// this is way to hide options if item/  requiredPlayer: (currentState) => {currentState.str >= 1}
let textNodes = [
  {
    id: 1, //story element or story part or section
    text: `Welcome to our Knight text adventure, click Play to start. This is the play test version`, //text was is visable first
    options: [ //creates the options
      { //to set something: setPlayer: {},
        //to require player: requiredPlayer: {element boolien elemenet},
        text: `More Info`, //text was is visable first
        nextText: 2, //brings it to the next id
      }, // make sure to add commas
      {
        text: `PLAY`,
        //text was is visable first
        nextText: 14 //brings it to the next id
      }, // make sure to add commas
      {
        text: `Credits`, //text was is visable first
        nextText: 3 //brings it to the next id
      },
    ], // make sure to add commas
  },
  {
    id: 2,
    text: `This is a text adventure made for our CART lab. This was made in just about 6 week from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system. The combat makes you roll dice to do actions, and stats can buff that dice roll, Have Fun!`,
    options: [
      {
        text: `Back`,
        nextText: 1,
      },
      {
        text: `PLAY`,
        nextText: 14
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
        nextText: 14
      },
      {
        text: `Back`,
        nextText: 1
      }
    ],
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
    continueCombat: true
  },
  {
    id: 7,
    text: `Finish off the enemies`,
    options: [
      {
        text: `Slash/Shoot`,
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
        text: `Stab/Bow Bite`,
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
    continueCombat: true
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
    text: `You have been killed and won't be missed`,
    options: [
      {
        text: `Restart`,
        nextText: -1
      }
    ],
  },
  {
    id: 14,
    text: `(Play Test Version) Warning, this version only has combat because story is not done yet, also the blue box is the screen and that is not done yet too.`,
    options: [
      {
        text: `Next`,
        nextText: 15
      }
    ],
  },
  {
    id: 15,
    text: `Some stats used with the right actions can buff your damage by adding to your dice roll, but first you need a weapon`,
    options: [
      {
        text: `Next`,
        nextText: 16
      }
    ],
  },
  {
    id: 16,
    text: `Pick a weapon.`,
    options: [
      {
        text: `Bow
        (Best while using Shoot)`,
        nextText: 17,
        setPlayer: { bow: 1 }
      },
      {
        text: `Great Axe
        (Best while using Slash)`,
        nextText: 17,
        setPlayer: { greatAxe: 1 }
      },
      {
        text: `Rapier
        (Best while using Stab)`,
        nextText: 17,
        setPlayer: { rapier: 1 }
      },
      {
        text: `Short Sword
        (Best while using Stab)`,
        nextText: 17,
        setPlayer: { shortSword: 1 }
      },
      {
        text: `Spear
        (Best whilst having more HP)`,
        nextText: 17,
        setPlayer: { spear: 1 }
      },
    ],
  },
  {
    id: 17,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Constitution 3
         (Best with Scare, Heal Potions, and gives more HP)`,
        nextText: 18,
        setPlayer: { con: 3 }
      },
      {
        text: `Strength 3
         (Best with Slash and Scare)`,
        nextText: 19,
        setPlayer: { str: 3 }
      },
      {
        text: `Dexterity 3
         (Better with Stab)`,
        nextText: 19,
        setPlayer: { dex: 3 }
      },
      {
        text: `Wisdom 3
         (Better with Persuade, Pendant, and Heal Potions)`,
        nextText: 18,
        setPlayer: { wis: 3 }
      },
      {
        text: `Charisma 4
         (Very Best with Persuade)`,
        nextText: 18,
        setPlayer: { cha: 4 }
      },
    ],
  },
  {
    id: 18,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Constitution 4 & Wisdom 5`,
        nextText: 20,
        setPlayer: { con: 4, wis: 5 }
      },
      {
        text: `Charisma 6 & Wisdom 4`,
        nextText: 21,
        setPlayer: { cha: 6, wis: 4 }
      },
      {
        text: `Constitution 4 & Strength 4`,
        nextText: 22,
        setPlayer: { con: 4, str: 4 }
      },
    ],
  },
  {
    id: 19,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Strength 6 & Constitution 4`,
        nextText: 22,
        setPlayer: { str: 6, con: 4 }
      },
      {
        text: `Constitution 5 & Dexterity 5`,
        nextText: 20,
        setPlayer: { con: 5, dex: 5 }
      },
      {
        text: `Dexterity 5 & Charisma 5`,
        nextText: 21,
        setPlayer: { dex: 5, cha: 5 }
      },
    ],
  },
  {
    id: 20,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Constitution 7 & Charisma 4`,
        nextText: 23,
        setPlayer: { con: 7, cha: 4 }
      },
      {
        text: `Constitution 9 & Strength 5`,
        nextText: 23,
        setPlayer: { con: 9, str: 5 }
      },
      {
        text: `Dexterity 7 & Wisdom 6`,
        nextText: 23,
        setPlayer: { dex: 7, wis: 6 }
      },
      {
        text: `Wisdom 10`,
        nextText: 23,
        setPlayer: { wis: 10 }
      },
      {
        text: `Constitution 10`,
        nextText: 23,
        setPlayer: { con: 10 }
      }
    ],
  },
  {
    id: 21,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Strength 6 & Dexterity 6`,
        nextText: 23,
        setPlayer: { str: 6, dex: 6 },
      },
      {
        text: `Charisma 7 & Constitution 5`,
        nextText: 23,
        setPlayer: { cha: 7, con: 5 },
      },
      {
        text: `Wisdom 7 & Charisma 8`,
        nextText: 23,
        setPlayer: { wis: 7, cha: 8 }
      },
      {
        text: `Charisma 10`,
        nextText: 23,
        setPlayer: { cha: 10 }
      },
    ],
  },
  {
    id: 22,
    text: `Set some stats, every 3 of one stat buffs a action in some way (Max of 10, and these are not adding your stats, they are setting).`,
    options: [
      {
        text: `Strength 7 & Constitution 7`,
        nextText: 23,
        setPlayer: { str: 7, con: 7 }
      },
      {
        text: `Constitution 6 & Dexterity 6`,
        nextText: 23,
        setPlayer: { con: 6, dex: 6 }
      },
      {
        text: `Dexterity 6 & Wisdom 5`,
        nextText: 23,
        setPlayer: { dex: 6, wis: 5 }
      },
      {
        text: `Strength 10`,
        nextText: 23,
        setPlayer: { str: 10 }
      },
      {
        text: `Dexterity 10`,
        nextText: 23,
        setPlayer: { dex: 10 }
      },
    ],
  },
  {
    id: 23,
    text: `After all those stats, chose how hard you want the battle to be`,
    options: [
      {
        text: `Easy`,
        nextText: 24,
      },
      {
        text: `Normal`,
        nextText: 25,
      },
      {
        text: `Hard`,
        nextText: 26,
      },
    ]
  },
  {
    id: 24,
    text: `You are fighting a two Bandits.`,
    options: [
      {
        text: `Slash/Shoot`,
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
        text: `Stab/Bow Bite`,
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
    startCombat: 1,
    continueCombat: true
  },
  {
    id: 25,
    text: `You are fighting a Bandit then wolf, then Bandit Leader following after.`,
    options: [
      {
        text: `Slash/Shoot`,
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
        text: `Stab/Bow Bite`,
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
    startCombat: 2
  },
  {
    id: 26,
    text: `You are fighting 2 different Guards, and their Genral last.`,
    options: [
      {
        text: `Slash/Shoot`,
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
        text: `Stab/Bow Bite`,
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
    startCombat: 3
  },
  {
    id: 27,
    text: `You have won on easy mode, gg but do better.`,
    options: [
      {
        text: `OK, I won't have a skill issue next time`,
        nextText: 30
      },

    ],
    continueCombat: true
  },
  {
    id: 28,
    text: `You won on normal, GG. You are a gamer.`,
    options: [
      {
        text: `Ok :)`,
        nextText: 30
      },
    ],
    continueCombat: true
  },
  {
    id: 29,
    text: `YOU WON ON HARD, GG. I didn't even play test this one and you beat it.`,
    options: [
      {
        text: `I am just built different`,
        setPlayer: { key: 1 },
        nextText: 30
      },
    ],
    continueCombat: true
  },
  {
    id: 30,
    text: ` Thank you for playing this play test version, this will help me see if I need to change some combat things.`,
    options: [
      {
        text: `Restart`,
        nextText: -1
      },
      {
        text: `Open the boss door using the key?!`,
        requiredPlayer: (currentState) => { currentState.key >= 1 },
        nextText: 31
      },
    ],
  },
  {
    id: 31,
    text: `Wait how did you... oh never mind. If you wan to fight the boss pick one stat to max out first. Choose Wisely.`,
    options: [
      {
        text: `Constitution 10`,
        nextText: 32,
        setPlayer: { con: 10 }
      },
      {
        text: `Strength 10`,
        nextText: 32,
        setPlayer: { str: 10 }
      },
      {
        text: `Dexterity 10`,
        nextText: 32,
        setPlayer: { dex: 10 }
      },
      {
        text: `Wisdom 10`,
        nextText: 32,
        setPlayer: { wis: 10 }
      },
      {
        text: `Charisma 10`,
        nextText: 32,
        setPlayer: { cha: 10 }
      },
    ],
  },
  {
    id: 32,
    text: `You are fighting 2 different Guards, and their <<KING>> last.`,
    options: [
      {
        text: `Slash/Shoot`,
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
        text: `Stab/Bow Bite`,
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
    startCombat: 4
  },
  {
    id: 33,
    text: `YOU WON ON THE BOSS, GG. I REALLY didn't play test this one and you beat it.`,
    options: [
      {
        text: `I AM THE BEST IN THE WORLD (restart).`,
        nextText: -1
      },
    ],
  },
  {
    id: 34,
    text: `YOU WON ON THE BOSS, GG. I REALLY didn't play test this one and you beat it.`,
    options: [
      {
        text: `I AM THE BEST IN THE WORLD (restart).`,
        nextText: -1
      },
    ],
  },
]

startGame()