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
let Bandit2 = new Enemy(`Josh the Bandit`, 30, 0, 50, 0, 0)//4
let Bandit3 = new Enemy(`Steven the Bandit`, 20, 5, 50, 0, 0)//6
let Bandit4 = new Enemy(`Johnson the Bandit`, 40, 0, 35, 0, 0) //7
let Bandit5 = new Enemy(`Nick the Bandit`, 30, 10, 80, 0, 0)//8
let BanditGen1 = new Enemy(`The Bandit`, 35, 10, 40, 0, 0) //9 
let BanditGen2 = new Enemy(`The Bandit`, 20, 0, 50, 0, 0) // 10
let BanditGen3 = new Enemy(`The Bandit`, 50, 20, 100, 0, 0) //11
let BanditGen4 = new Enemy(`The Bandit`, 25, 0, 55, 0, 0) //12
let LeadBandit = new Enemy(`Bandit Leader`, 50, 0, 100, 10, 0) //13

let Guard1 = new Enemy(`Eligh the Guard`, 70, 10, 120, 6, 2)
let Guard2 = new Enemy(`Guston the Guard`, 60, 0, 70, 8, 0)
let Guard3 = new Enemy(`Duke the Guard`, 90, 0, 100, 4, 0)
let Guard4 = new Enemy(`Brandon the Guard`, 80, 0, 110, 6, 0)
let Guard5 = new Enemy(`Matthew the Guard`, 70, 0, 90, 8, 3)
let GuardGen1 = new Enemy(`The Guard`, 70, 0, 100, 7, 0)
let GuardGen2 = new Enemy(`The Guard`, 75, 12, 120, 2, 2)
let GuardGen3 = new Enemy(`The Guard`, 80, 0, 100, 4, 1)
let GuardGen4 = new Enemy(`The Guard`, 90, 5, 90, 3, 1)

let Archer1 = new Enemy(`Noah the Archer`, 50, 0, 90, 9, 4)
let Archer2 = new Enemy(`Ezekiel the Archer`, 40, 0, 65, 5, 5)
let ArcherGen1 = new Enemy(`The Archer`, 45, 0, 90, 4, 4)
let ArcherGen2 = new Enemy(`The Archer`, 65, 0, 50, 7, 5)

let Genral = new Enemy(`The Genral`, 100, 0, 100, 10, 5)

let Bear1 = new Enemy(`The Brown Bear`, 60, 0, 70, 7, 0)
let Bear2 = new Enemy(`The Black Bear`, 50, 0, 60, 0, 3)
let Wolf1 = new Enemy(`The Gray Wolf`, 40, 0, 70, 10, 1)
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
let playerHp = 175
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
let newText = `Currently in battle`
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
    healPot: 0,
    jade: 0,
    key: 0,
    debug: 0,
  }
  showTextNode(1)
}

function showTextNode(textNodeIndex) { // goes through tthe text nodes checks what I put for the text and changes the text in the HTML
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.startCombat === 1 && combatEnded === false) { //starts the combat first
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 50;
    startCombat();
    combat(6, 10, 1); //ending id
  } else if (textNode.startCombat === 2 && combatEnded === false) { //starts the combat 2nd
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 83;
    startCombat();
    combat(6, 10, 13); //ending id
  }
  else if (textNode.continueCombat === true) { //checks if you are continue combat
    console.log('combat mode cont');
    combatQuestion = true
  }
  else {
    console.log('no violence = sad pandas');
    combatQuestion = false
  }

  if (textNode.diceRoll === 1) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something

    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.dex >= 9) {
      d20 += 4
    } else if (player.dex >= 6) {
      d20 += 2
    } else if (player.dex >= 3) {
      d20 += 1
    }
    console.log(d20)
    if (d20 >= 14) {
      showTextNode(48)
    } else if (d20 <= 14) {
      showTextNode(42)
    }

    if (d20 >= 14) {
      showTextNode(48)
    } else if (d20 <= 14) {
      showTextNode(42)
    }
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
  Keys: ${player.key}
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
    playerHp = 225
  } else if (player.con >= 6) {
    playerHp = 190
  } else if (player.con >= 3) {
    playerHp = 185
  } else { playerHp = 175 }
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy1.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy2.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy3.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy1.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy1.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy2.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy2.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy3.extraDamage)
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
        enemyD20 = Math.floor((enemyD20 * 1.5) + enemy3.extraDamage)
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
    playerHp = 175
  }
  else if (combatQuestion === true && combatEnded === true) {
    attack = false
    console.log(`this did go in the end winning combat`)
    combatQuestion = false
    playerHp = 175
    newText = `You have won the battle`
    showTextNode(endingNode)
  } else { console.log(`The end function did not work`) }
}

function updateText() {
  textElement.innerText = newText
}


//holds all the story elements along with the options

// this is way to hide options if item/requiredPlayer: (currentState) => {currentState.str >= 1}
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
    text: `This is a text adventure made for our CART lab. This was made in just about 6 week from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system, Have Fun!`,
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
    id: 4,
    text: `You are fighting a Bandit with the king next.`,
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
    text: `Finish off the enemies`,
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
    text: `You have been murdered without completing your mission`,
    options: [
      {
        text: `Next`,
        nextText: 15
      }
    ],
  },
  {
    id: 15,
    text: `You can't let this happen again`,
    options: [
      {
        text: `Next`,
        nextText: 16
      }
    ],
  },
  {
    id: 16,
    text: `Our story begins in a small village, Lüdingfeld, near the capital of Etair. The village is an important part of the Etair due to its access to fresh water and has a salt mine, which is incredibly valuable for trade. A war broke out between the two Empires near Lüdingfeld, Etair and Bani. `,
    options: [
      {
        text: `Continue`,
        nextText: 17
      }
    ],
  },
  {
    id: 17,
    text: 'Even though the conflict has been around for about a year, Lüdingfeld has not changed its style of living and has not been very affected by the war, but the Bani lord, Henry Willaims,  has set his sights on the little village, but the environment has taken a hit. ',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {
    id: 18,
    text: 'There were great beasts that used to roam the lands, but ever since the first war many of the beasts have been hunted and killed. Now they are merely legends, none has seen one for over a century. There is a rumour that they may be disguised as other animals to avoid being hunted. Nobody really knows yet, until now.',
    options: [
      {
        text: `Continue`,
        nextText: 19
      }
    ],
  },
  {
    id: 19,
    text: 'Dragon: "There was a time where this land was isolated and seemed to be at peace, but after a time many other countries became more anxious to conquer the world. After the failed revolution in the west, the sea demons turned their attention to the east. The land’s government wanted to stay in solitude and tried to obtain their ancient ways, but it was only a matter of time until the demons would come."',
    options: [
      {
        text: `Continue`,
        nextText: 20
      }
    ],
  },
  {
    id: 20,
    text: 'Dragon: "During the War, this land would be reborn for the greedy. The usage of their guns and other unholy technology won them the land. Instead of just taking the land over they decided to create new forms of free labour to gather the land’s natural treasures. As time went on more and more of the ancient Gods left these lands in search of more prosperous peoples. Even I was about to leave until I met a man named Jack."',
    options: [
      {
        text: `Continue`,
        nextText: 21
      }
    ],
  },
  {
    id: 21,
    text: 'Jack: "Before it all changed I used to live a peaceful life with my family, *sigh. My wife, the pride of the house. The one that kept everything whole. She was the only constant in my life. My two daughters, Victoria and Cami. Victoria was the loud, popular one who always found herself out of trouble. While Cami was the quiet one, she always was blamed for her sisters wrongs, I should have been there more."',
    options: [
      {
        text: `Continue`,
        nextText: 22
      }
    ],
  },
  {
    id: 22,
    text: 'Jack: "My one son, the age of 2. He was going to be the successor of our family’s land. He loved playing with the flowers and enjoying time with his mother. I only wished I had more time with them."',
    options: [
      {
        text: `Continue`,
        nextText: 23
      }
    ],
  },
  {
    id: 23,
    text: 'Jack :"I remember it like yesterday, the day when my greatest pride became my greatest failure. My daughters got mixed up with the wrong crowd, mostly Victoria. She met a man from the sea that promised her treasures if she stayed with him for a night. She accepted the gold, but never went to meet him. The man turned out to be a rich demon. Nights went by but nothing happened, until one night when the moon was fullest he came with his troops."',
    options: [
      {
        text: `Continue`,
        nextText: 24
      }
    ],
  },
  {
    id: 24,
    text: 'Jack: "After pillaging the town, he made it to my home. At this time I had no clue about what my daughter did, but it was far too late. They were too quick, there was no time to defend our town or loved ones. He killed them then…, I will not speak of the things he did. After hours of horror, he let them die, but he didn’t share the same kindness with me. He left me with only his name Vito."',
    options: [
      {
        text: `Continue`,
        nextText: 25
      }
    ],
  },
  {
    id: 25,
    text: 'This is where my story started and this is where it should have ended.',
    options: [
      {
        text: `Continue`,
        nextText: 26
      }
    ],
  },
  // base stats start here
  {
    id: 26,
    text: 'You first wake up in a burnt house surrounded by ash and taste of misery. You remember what happened to your family and one name rings constantly: Henry. As you get up you feel nothing even though you were beat bloody. You look around and pick up your weapon and armour.', options: [
      {
        text: `Continue`,
        nextText: 27
      }
    ],
  },
  // pick weapon 
  {
    id: 27,
    text: 'You look around your house to see what is left.',
    options: [
      {
        text: `Kitchen`,
        nextText: 28,
        setPlayer: { healPot: 2 }
      },
      {
        text: `Your Room`,
        nextText: 29
      },
      {
        text: `Examine the Room`,
        nextText: 31
      }
    ],
  },
  { // gives the player 2 healing posions
    id: 28,
    text: 'You enter the kitchen, you do not know what you were expecting. Everything is burnt or broken. The place that you once ate at is now nothing but a place to grieve. You do find some of your healing potions in the chest under the table.',
    options: [
      {
        text: `Back`,
        nextText: 27,
      },
      {
        text: `Your Room`,
        nextText: 29
      },
      {
        text: `Living Room`,
        nextText: 30
      }
    ],
  },
  {
    id: 29,
    text: 'Your room is still intact but it’s been cut through. You look through your chests and drawers, but you couldn’t find anything that can be helpful. You then look towards the wall to see the map that your Grandpa made when he travelled. You take it off the wall and put in your bag you find next to the bed.',
    options: [
      {
        text: `Kitchen`,
        nextText: 28,
        setPlayer: { healPot: 2 }
      },
      {
        text: `Back`,
        nextText: 27
      },
      {
        text: `Living Room`,
        nextText: 30
      }
    ],
  },
  {
    id: 30,
    text: 'You walk back into the living room, you relive the memories of what he did looking at your family.',
    options: [
      {
        text: `Kitchen`,
        nextText: 28,
        setPlayer: { healPot: 2 }
      },
      {
        text: `Your Room`,
        nextText: 29
      },
      {
        text: `Back`,
        nextText: 27
      },
      {
        text: `Examine the Room`,
        nextText: 31
      }
    ],
  },
  {
    id: 31,
    text: 'You look around the room for anything else you can grab or keep as a memory. You take your partner’s ring. You then decide too:',
    options: [
      {
        text: `Bury your family`,
        nextText: 32
      },
      {
        text: `Moarn then get on the road`,
        nextText: 33
      },
      {
        text: `Walk out of the room.`,
        nextText: 34
      }
    ],
  },
  {
    id: 32,
    text: 'You take the time to little graves and try to hold back the tears. It takes a three days, but you feel a little bit better and like they can now cross more comfortably.',
    options: [
      {
        text: `Continue`,
        nextText: 35
      }
    ],
  },
  {
    id: 33,
    text: 'You spend a day at the town’s church and pray for a safe passage through the afterlife. You spend one more night in your broken home.',
    options: [
      {
        text: `Continue`,
        nextText: 35
      }
    ],
  },
  {
    id: 34,
    text: 'You have no time to spend thinking about the past, there is nothing to be done.',
    options: [
      {
        text: `Continue`,
        nextText: 35
      }
    ],
  },
  {
    id: 35,
    text: 'You look around the town to see if there is anyone still alive. You can’t find anyone, you just pray that one of your friends got out. You yell out "Is there anyone!?" None answers, you make your way to the road that leads to forest seeing the burnt town full of ash and debris. You then hear a dog.',
    options: [
      {
        text: `Continue`,
        nextText: 36
      }
    ],
  },
  {
    id: 36,
    text: 'Dog: "Bark". The Dog looks at you and tilts its head, looking at your bag. It seems very skinny for a dog, you have never seen this dog before. (Important Choice)',
    options: [
      {
        text: `Help the dog.`,
        nextText: 37
      },
      {
        text: `Do not interact with the dog.`,
      },
      {
        text: `Tell the dog to go away.`,
      }
    ],
  },
  {
    id: 37,
    text: 'You take out some off your bread and tear a little piece and gave it to the dog. You tell let to follow and it seems to sorta understand and starts to follow you down the road.',
    options: [
      {
        text: `Continue`,
        nextText: 40
      }
    ],
  },
  {
    id: 38,
    text: 'You look at it and continue down the path, you see as it starts to follow you. You let it follow, but you have an uneasy feeling.',
    options: [
      {
        text: `Continue`,
        nextText: 3000
      }
    ],
  },
  {
    id: 39,
    text: 'You look at the dog and tell it to stay and to go far away from this plcae. The dog looks at you then decides to continue forward, luckly it goes a different way.',
    options: [
      {
        text: `Continue`,
        nextText: 6000
      }
    ],
  },
  //keep dog
  {
    id: 40,
    text: 'You start walking into the forest, you have heard many stories about what lurks within, but you are sure most of not true. The truth is that they are some word of bandits having a great influence over the region. You should tread carefully from now on, but lucky you are not alone.',
    options: [
      {
        text: `Continue`,
        nextText: 41
      }
    ],
  },
  {
    id: 41,
    text: 'You feel like you have been walking for days, the dog stops for a second and starts to growl. You look around and you see a merhcant caravan, you get closer to see what has happened, but the dog is not moving with you.',
    options: [
      {
        text: `Investigate`,
        nextText: 43
      }
    ],
  },
  {
    id: 43,
    text: 'As you get closer to the cart, you see a couple arrows stuck in the cart. You take it out to examine the arrows. You hear something in front of you, but you can only make out shadow figures.',
    options: [
      {
        text: `Yell out.`,
        nextText: 44
      },
      {
        text: `Wait to meet.`,
        nextText: 45
      },
      {
        text: `Hide.`,
        nextText: 47
      }
    ],
  },
  {
    id: 44, //talking
    text: 'Jack: "Hey, do you know what happened here?"',
    options: [
      {
        text: `Wait for Response.`,
        nextText: 45
      }
    ],
  },
  {
    id: 45, //talking
    text: 'You see them run at you, you prepare to take out your weapon you first think of warning them, but they are too quick. It only looks like two of them so you might have a chance',
    options: [
      {
        text: `Take out weapon.`,
        nextText: 46
      }
    ],
  },
  {
    id: 46, //stand off
    text: 'You stand there and wait, you continue to examine the cart and you finally get a good look at the people. You realize that they are bandits, luckly there is only two of them so you can probably take them.',
    options: [
      {
        text: `Continue`,
        nextText: 49
      }
    ],
  },
  {
    id: 47, //sneak
    text: 'You get off the road on try to stay out of sight, you may be able to sneak past.',
    options: [
      { //roll dice to see if you can sneak through dex if failed then becomes in combat
        text: `Continue 47`,
        nextText: 48
      }
    ],
    diceRoll: 1
  },
  { //sneak
    id: 48, //succeed on dex roll
    text: 'You were able to sneak past the bandits, they would have been a rough fight for you. You wait for a little bit before contining going.',
    options: [
      {
        text: `Continue 48`,
        nextText: 51
      }
    ],
  },
  { //sneak
    id: 42, //fails on dex roll
    text: 'You start to try to sneak past them but you step some branches. The bandits stop to look at you and they take out their blades. You take out your weapon to get ready to fight, but you can always talk your way out.',
    options: [
      {
        text: `Continue 42`,
        nextText: 49
      }
    ],
  },
  { //combat
    id: 49,
    text: `You get into combat with the two bandits.`,
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
      },
    ],
    startCombat: 1,
  },
  {
    id: 50, //end of combat
    text: 'You have won',
    options: [
      {
        text: `Leave as the victor`,
        nextText: 51
      }
    ],
  },
  { //start after combat
    id: 51,
    text: 'You walk off with a sense of relief, you are happy to be alive but you do not know what you should feel. The dog comes out in from the forest and starts licking your face. ',
    options: [
      {
        text: `Continue`,
        nextText: 52
      }
    ],
  },
  {
    id: 52,
    text: 'You clean yourself and settle for the night. You get some fire wood and try to remeber what your uncle told you, but as you try to remeber the only thoughts that come to mind are the memories of the horror you went threw. You go to bed without a fire, but you are confindent thing will happen.',
    options: [
      {
        text: `Continue`,
        nextText: 53
      }
    ],
  },
  {//wisdom check
    id: 53,
    text: 'You wake up, but not where you remebered you being, the forest is more dense and there is a smell of smoke. You get up thinking that you were about to burn down the forest, but you quickly remeberized that you did not make a fire, so who did? You get up and look for around the dog is nowhere to be seen, but you do see his footprints',
    options: [
      {
        text: `Where is that dog`,
        nextText: 55
      },
      {
        text: `What is that smell?`,
        nextText: 56
      },
      {
        text: `Continue on your path.`,
        nextText: 57
      }
    ],
  },
  {// 
    id: 55,
    text: 'You get up and start to look for the dog, you see its footprints. You start to follow the path and it leads you to a little house in the middle of the forest.',
    options: [
      {
        text: `Continue`,
        nextText: 58
      }
    ],
  },
  {// 
    id: 56,
    text: 'You get up and start to follow your nose, it leads you to a house that has smoke coming from it.',
    options: [
      {
        text: `Continue`,
        nextText: 58
      }
    ],
  },
  {// 
    id: 57,
    text: 'You look around you to see if there is still a path, so you get up and you start to follow the path. The path leads you to a house, you were expecting a town, but the map is old so it maybe have been destoried.',
    options: [
      {
        text: `Continue`,
        nextText: 58
      }
    ],
  },
  {// 
    id: 58,
    text: 'You look around to see if there is anyone, but there does not seem to be anyone making an loud noices.',
    options: [
      {
        text: `Is anyone here?`,
        nextText: 59
      },
      {
        text: `Hello?`,
        nextText: 59
      },
      {
        text: `Hey!`,
        nextText: 59
      }
    ],
  },
  {// 
    id: 59,
    text: 'Marry: "What are you doing on my land!?"',
    options: [
      {
        text: `Sorry`,
        nextText: 60
      },
      {
        text: `Hi`,
        nextText: 60
      },
      {
        text: `*take out weapon`,
        nextText: 65
      }
    ],
  },
  {// diplomatic approach
    id: 60,
    text: 'Marry: "Why are you here?"',
    options: [
      {
        text: `Respond`,
        nextText: 61
      }
    ],
  },
  {// diplomatic approach
    id: 61,
    text: 'Jack: "Hey sorry, I did not mean to intrude on your lands, I come a little village near by that was attacked by a man. Have you heard the name Herny?"',
    options: [
      {
        text: `Continue`,
        nextText: 62
      }
    ],
  },
  {// diplomatic approach
    id: 62,
    text: 'Marry: "I can not say I have ran into a man with that name, so you are not one of those bandits are you?"',
    options: [
      {
        text: `No`,
        nextText: 63
      }
    ],
  },
  {// diplomatic approach
    id: 63,
    text: 'Jack: "I am not a bandit, I actaully saw a couple back there, I dealt with them. I am Jack, may I ask who you are? My uncle used to talk about someone who looks just like you, a weapon smith with a very "large" personilty."',
    options: [
      {
        text: `Continue`,
        nextText: 64
      }
    ],
  },
  {// diplomatic approach
    id: 64,
    text: 'Marry: "I am a weapon smith, I have been here for quite a while. I have not been visted by someone for a long while, why do not you come in?"',
    options: [
      {
        text: `Walk in`,
        nextText: 67
      }
    ],
  },
  {// diplomatic approach
    id: 65,
    text: 'Marry: "Hey, no need for that, who are you?"',
    options: [
      {
        text: `Respond`,
        nextText: 61
      },
      {
        text: `Stay quiet`,
        nextText: 68
      }
    ],
  },
  {// goes with pulling out blade
    id: 66,
    text: 'Marry: "I am Marry, the black smith, if you may not go straight to violence we can both walk out of here alive and better for it."',
    options: [
      {
        text: `What?`,
        nextText: 68
      }
    ],
  },
  {// goes with pulling out blade
    id: 67,
    text: 'You remeber your uncle talking about a blacksmith, this person can be of help.',
    options: [
      {
        text: `Continue`,
        nextText: 63
      }
    ],
  },
  {// 
    id: 68,
    text: 'You walk into her home, it is very cossy, its been a few days since you have been in a functional house. Weapons covered the walls some of spears others of greataxes, she looks like she has been doing this for quite some time. You wonder why she is here alone, but you thought best not to mention that question',
    options: [
      {
        text: `Continue`,
        nextText: 69
      }
    ],
  },
  {// 
    id: 69,
    text: 'Jack: "So why did you think I am a bandit, are they common around these parts?"',
    options: [
      {
        text: `Listen`,
        nextText: 70
      }
    ],
  },
  {// 
    id: 70,
    text: 'Marry: "Yes ever since there has been a change in leadership. They have been here more and more demanding more weapons, I am tired of suppling those idiots. The thing they do not know is that I have been giving them my worst weapons. I would do anything to get rid of those pests."',
    options: [
      {
        text: `Continue`,
        nextText: 71
      }
    ],
  },
  {// 
    id: 71,
    text: 'Marry: "Why did you come out here?"',
    options: [
      {
        text: `Explanation`,
        nextText: 72
      },
    ],
  },
  {// 
    id: 72,
    text: 'Jack: "I am on a junory to find a mentor to help me learn how to get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 73
      }
    ],
  },
  {// 
    id: 73,
    text: 'Marry: "Hmmm, how about this. I will train you and you will help me take care of the bandits, how about it Jack?"',
    options: [
      {
        text: `Yes, thankyou.`,
        nextText: 74
      }
    ],
  },
  {// get to have more of a bonus to skills
    id: 74,
    text: 'You decide to join Marry and help her with the bandits. She losely teaches you how to use your weapons like a real warrior.',
    options: [
      {
        text: `Continue`,
        nextText: 75.1
      }
    ],
  },
  {// 
    id: 75.1,
    text: 'After a year of working for Marry she finally started to teach you how to use a weapon instead of just using you as free labor.',
    options: [
      {
        text: `Continue`,
        nextText: 75.2
      }
    ],
  },
  {// 
    id: 75.2,
    text: 'Marry: "Jack I will tell the basics of how to use your skills:"',
    options: [
      {
        text: `Yes`,
        nextText: 75.3
      }
    ],
  },
  {// 
    id: 75.3,
    text: 'Dex: is used for light attacks like stab and can be used to sneak out of your way out of things.',
    options: [
      {
        text: `mhm`,
        nextText: 75.4,
      }
    ],
  },
  {// 
    id: 75.4,
    text: 'Con: is used for bonus to health and can be used to scare enemies and heal more with potions.',
    options: [
      {
        text: `Okay`,
        nextText: 75.5,
      }
    ],
  },
  {// 
    id: 75.5,
    text: 'Wis: is used for persuading, knowing how to heal more with potions, and getting more benefit from the Pendant of Pain.',
    options: [
      {
        text: `Yep`,
        nextText: 75.6,
      }
    ],
  },
  {// 
    id: 75.6,
    text: 'Str: is used to add damage for slash damage and can scare your enemies.',
    options: [
      {
        text: `Alright`,
        nextText: 75.7,
      }
    ],
  },
  {// 
    id: 75.7,
    text: 'Cha: is used for talking your way out of situations.',
    options: [
      {
        text: `Very cool`,
        nextText: 75.8,
      }
    ],
  },
  {// input buttons for ability score
    id: 75.8,
    text: 'Pick your ability score',
    options: [
      {
        text: `Cha (4)`,
        nextText: 76,
        setPlayer: {cha: 4}
      },
      {
        text: `Dex (3)`,
        nextText: 76,
        setPlayer: {dex: 3}
      },
      {
        text: `Wis (3)`,
        nextText: 76,
        setPlayer: {wis: 3}
      },
      {
        text: `Str (3)`,
        nextText: 76,
        setPlayer: {str: 3}
      },
      {
        text: `Con (3)`,
        nextText: 76,
        setPlayer: {con: 3}
      },
      {
        text: `Back to info`,
        nextText: 76,
      },
    ],
  },
  {// 
    id: 76,
    text: 'Marry: "I think its time we talk about you fighting the bandit leader. I have taught you as much as I could, they have been more involved in recent attacks with the local merchants that support my home. If you go kill the bandit leader I will make a great weapon for you."',
    options: [
      {
        text: `Yes please`,
        nextText: 77
      },
      {
        text: `Gladly`,
        nextText: 78
      },
      {
        text: `Don’t Boss me around`,
        nextText: 79
      }
    ],
  },
  {// 
    id: 77,
    text: 'Jack: "Thank you, Mrs. Marry, I will get the head of the bandit leader, then we can discuss other things afterwards."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {// 
    id: 78,
    text: 'Jack: "I will gladly take out that mut. Its long over due for him to learn his lesson, I will get his head and prove my worth."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {// 
    id: 79,
    text: 'Jack: "I will kill this man and I will get that weapon, then I can finally gey my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {// 
    id: 80,
    text: 'You walk into the forest, you take out your map to see where they could be and you see the perfect place for a camp. You make your way there being a sneaky as possible knowning that one mistake could cost you everything.',
    options: [
      {
        text: `Continue`,
        nextText: 81
      }
    ],
  },
  {// 
    id: 81,
    text: 'You wait till nightfall to attack, beat them at their own game. You get to the camp at dawn but you only see 3 different bandits, two goonies and the leader. You take your change your plan and decide to attack now before anyone else can help.',
    options: [
      {
        text: `Continue`,
        nextText: 82
      }
    ],
  },
  {// conflict
    id: 82,
    text: 'You fight two bandits, and their leader after.',
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
      },
    ],
    startCombat: 2,
  },
  {// end conflict
    id: 83,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 84
      }
    ],
  },
  {// 
    id: 84,
    text: 'You cut threw the bandits, it was a hard fight, but worth it. You have now showen not only to your mentor but to your self that you are ready to avenge your family and find Henry.',
    options: [
      {
        text: `Walk back home`,
        nextText: 85
      }
    ],
  },
  {// 
    id: 85,
    text: 'You walk into Marrys home, she looks at you and smiles. It is the first time you have seen her smile, you drop down your evidence and go out back to get your self clean. ',
    options: [
      {
        text: `Continue`,
        nextText: 86
      }
    ],
  },
  {// 
    id: 86,
    text: 'You remeber the horrors done to your daughts infront fo your sons eyes and what they did to your wife. It fills you with rage, you know its time.',
    options: [
      {
        text: `Continue`,
        nextText: 87
      }
    ],
  },
  {// add a bonus to skillset
    id: 87,
    text: 'The next morning, Marry: "Jack, I present for you, your weapon. I have all night creating this, I hope you use it well. Remeber that even though it may hurt taking out your hate by revengence will just create more death for you and everyone around you."',
    options: [
      {
        text: `Yes, thank you.`,
        nextText: 88
      }
    ],
  },
  {// 
    id: 88,
    text: 'JacK: "Thank you, but you do not understand what I have gone through it is the only way."',
    options: [
      {
        text: `I will see you again after I am finished.`,
        nextText: 89
      },
      {
        text: `We may never see each other again, so thank you... for everything.`,
        nextText: 89
      },
      {
        text: `See you grandma.`,
        nextText: 89
      }
    ],
  },
  {// 
    id: 89,
    text: 'Yes, until we meet again Jack, good luck on your jounry but do not forget yourself in your own rage.',
    options: [
      {
        text: `Goodbye`,
        nextText: 90
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// 
    id: 72,
    text: '',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
]

startGame()