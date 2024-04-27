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
let Bandit2 = new Enemy(`Josh the Bandit`, 30, 0, 50, 0, 0)//5
let Bandit3 = new Enemy(`Steven the Bandit`, 20, 5, 50, 0, 0)//6
let Bandit4 = new Enemy(`Johnson the Bandit`, 40, 0, 35, 0, 0) //7
let Bandit5 = new Enemy(`Nick the Bandit`, 30, 10, 80, 0, 0)//8
let BanditGen1 = new Enemy(`The Bandit`, 35, 10, 40, 0, 0) //9
let BanditGen2 = new Enemy(`The Bandit`, 20, 0, 50, 0, 0) // 10
let BanditGen3 = new Enemy(`The Bandit`, 50, 20, 100, 0, 0) //11
let BanditGen4 = new Enemy(`The Bandit`, 25, 0, 55, 0, 0) //12
let LeadBandit = new Enemy(`Bandit Leader`, 50, 0, 100, 10, 0) //13


let Guard1 = new Enemy(`Eligh the Guard`, 70, 10, 120, 4, 2) //14
let Guard2 = new Enemy(`Guston the Guard`, 60, 0, 70, 3, 1) //15
let Guard3 = new Enemy(`Duke the Guard`, 90, 0, 100, 3, 0) //16
let Guard4 = new Enemy(`Brandon the Guard`, 80, 0, 110, 2, 0) //17
let Guard5 = new Enemy(`Matthew the Guard`, 70, 0, 90, 0, 3) //18
let GuardGen1 = new Enemy(`The Guard`, 70, 0, 100, 7, 0) //19
let GuardGen2 = new Enemy(`The Guard`, 75, 12, 120, 1, 2) //20
let GuardGen3 = new Enemy(`The Guard`, 80, 0, 100, 4, 0) //21
let GuardGen4 = new Enemy(`The Guard`, 90, 5, 90, 3, 0) //22


let Archer1 = new Enemy(`Noah the Archer`, 35, 0, 90, 9, 4)  //23
let Archer2 = new Enemy(`Ezekiel the Archer`, 40, 0, 65, 5, 5) // 24
let ArcherGen1 = new Enemy(`The Archer`, 45, 0, 90, 4, 4) //25
let ArcherGen2 = new Enemy(`The Archer`, 35, 0, 50, 7, 5)//26


let General = new Enemy(`The General`, 100, 0, 100, 10, 5)//27


let Bear1 = new Enemy(`The Brown Bear`, 60, 0, 70, 7, 0)//28
let Bear2 = new Enemy(`The Black Bear`, 50, 0, 60, 0, 3)//29
let Wolf1 = new Enemy(`The Gray Wolf`, 40, 0, 70, 10, 1)//30
let Wolf2 = new Enemy(`The Silver Wolf`, 45, 0, 80, 7, 3)//31
let Dragon = new Enemy(`The Dragon`, 300, 0, 350, 10, 10)//32
let AlphaWolf = new Enemy(`The Alpha Wolf`, 70, -20, 90, 5, 5)//33
let FirstHenry = new Enemy(`Henry`, 400, 0, 700, 15, 10)//34
let SecondHenry = new Enemy(`Henry`, 250, 0, 300, 10, 7)//35
let Yourself = new Enemy(`Yourself`, 1000, 0, 3000, 0, 0)//36
let Jin = new Enemy('Jin', 100, 0, -1, 20, 10)//37

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
let neededDeath = false




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
  map: 0,
  jade: 0,
  haveDog: 0,
  followDog: 0,
  noDog: 0,
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


function showTextNode(textNodeIndex) { // goes through the text nodes checks what I put for the text and changes the text in the HTML
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text


  if (textNode.checkDog === 1) {
    console.log(`check dog work`)
    if (player.hasDog === true) {
      console.log(`check dog  has`)
      showTextNode(51)
    }
    else if (player.followDog === true) {
      console.log(`check dog follow`)
      showTextNode(51)
    }
    else if (player.noDog === true) {
      console.log(`check dog no`)
      showTextNode(651)
    }
  } else if (textNode.imageIndex === 2) {
    console.log(`image index 2`)
    imageClassScreen.classList.remove(firstChild)
    imageClassScreen.classList.add(`marryForge`)
  } else if (textNode.checkDog === 2) {
    console.log(`check dog work`)
    if (player.hasDog === true) {
      console.log(`check dog  has`)
      showTextNode(203)
    }
    else if (player.followDog === true) {
      console.log(`check dog follow`)
      showTextNode(203)
    }
    else if (player.noDog === true) {
      console.log(`check dog no`)
      showTextNode(703)
    }
  } else if (textNode.imageIndex === 3) {
    console.log(`image index 2`)
    imageClassScreen.classList.remove(firstChild)
    imageClassScreen.classList.add(`marryForge`)
  } else if (textNode.checkDog === 3) {
    console.log(`check dog work`)
    if (player.hasDog === true) {
      console.log(`check dog  has`)
      showTextNode(204)
    }
    else if (player.followDog === true) {
      console.log(`check dog follow`)
      showTextNode(404)
    }
  } else if (textNode.checkDog === 4) {
    console.log(`check dog work`)
    if (player.hasDog === true) {
      console.log(`check dog  has`)
      showTextNode(253)
    }
    else if (player.followDog === true) {
      console.log(`check dog follow`)
      showTextNode(453)
    }
    else if (player.noDog === true) {
      console.log(`check dog no`)
      showTextNode(753)
    }




    if (textNode.startCombat === 1 && combatEnded === false) { //starts the combat first
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 50;
      startCombat();
      combat(6, 7, 1); //ending id
    } else if (textNode.startCombat === 2 && combatEnded === false) { //starts the combat 2nd WRONG
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 83; //WHAT
      startCombat();
      combat(5, 10, 13); //ending id
    } else if (textNode.startCombat === 3 && combatEnded === false) { //starts the combat third
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 99;
      startCombat();
      combat(18, 1, 2); //ending id
    } else if (textNode.startCombat === 4 && combatEnded === false) { //starts the combat 4 WRONG
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 110; //WHAT
      startCombat();
      combat(19, 23, 2); //ending id
    } else if (textNode.startCombat === 5 && combatEnded === false) { //starts the combat 5
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 124;
      neededDeath = true
      startCombat();
      combat(34, 1, 2); //ending id
    } else if (textNode.startCombat === 6 && combatEnded === false) { //starts the combat 6
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 189.9;
      startCombat();
      combat(15, 22, 2); //ending id
    } else if (textNode.startCombat === 7 && combatEnded === false) { //starts the combat 7
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 189.91;
      startCombat();
      combat(15, 22, 2); //ending id
    } else if (textNode.startCombat === 8 && combatEnded === false) { //starts the combat 8
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 190.9;
      startCombat();
      combat(21, 22, 2); //ending id
    } else if (textNode.startCombat === 9 && combatEnded === false) { //starts the combat 9
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 190.15;
      startCombat();
      combat(37, 1, 2); //ending id
    }
    else if (textNode.startCombat === 10 && combatEnded === false) { //starts the combat 10
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 191.24;
      startCombat();
      combat(25, 26, 2); //ending id
    } else if (textNode.startCombat === 11 && combatEnded === false) { //starts the combat 10
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 191.12;
      startCombat();
      combat(21, 1, 2); //ending id
    } else if (textNode.startCombat === 12 && combatEnded === false) { //starts the combat 11
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 191.19;
      startCombat();
      combat(21, 23, 2); //ending id
    } else if (textNode.startCombat === 13 && combatEnded === false) { //starts the combat 12
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 197;
      startCombat();
      combat(28, 1, 2); //ending id
    } else if (textNode.startCombat === 14 && combatEnded === false) { //starts the combat 13
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 233;
      startCombat();
      combat(17, 16, 2); //ending id
    } else if (textNode.startCombat === 15 && combatEnded === false) { //starts the combat 14
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 238;
      startCombat();
      combat(27, 23, 24); //ending id
    } else if (textNode.startCombat === 16 && combatEnded === false) { //starts the combat 15
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 252;
      startCombat();
      combat(35, 1, 2); //ending id
    } else if (textNode.startCombat === 17 && combatEnded === false) { //starts the combat 10
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 433;
      startCombat();
      combat(17, 16, 2); //ending id
    } else if (textNode.startCombat === 18 && combatEnded === false) { //starts the combat 10
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 650;
      startCombat();
      combat(6, 7, 2); //ending id
    } else if (textNode.startCombat === 19 && combatEnded === false) { //starts the combat 10
      console.log('combat mode engaged');
      combatQuestion = false;
      endingNode = 761;
      startCombat();
      combat(5, 10, 13); //ending id
    }
    else if (textNode.continueCombat === true) { //checks if you are continue combat
      console.log('combat mode cont');
      combatQuestion = true
    }
    else {
      console.log('no violence = sad pandas');
      combatQuestion = false
    }
  }
  if (textNode.dogFollow === true && player.followDog === true) {
    showTextNode()
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
      console.log(`the if in dice roll is running`)
      return showTextNode(48)
    } else if (d20 <= 13) {
      return showTextNode(42)
    }
  } else if (textNode.diceRoll === 2) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something


    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.wis >= 9) {
      d20 += 4
    } else if (player.wis >= 6) {
      d20 += 2
    } else if (player.wis >= 3) {
      d20 += 1
    }
    console.log(d20)
    if (d20 >= 15) {
      return showTextNode(103)
    } else if (d20 <= 14) {
      return showTextNode(105)
    }
  } else if (textNode.diceRoll === 3) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.cha >= 10) {
      d20 += 5
    } else if (player.cha >= 7) {
      d20 += 3
    } else if (player.cha >= 4) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 15) {
      return showTextNode(111)
    } else if (d20 <= 14) {
      return showTextNode(112)
    }
  } else if (textNode.diceRoll === 4) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.wis >= 9) {
      d20 += 4
    } else if (player.wis >= 6) {
      d20 += 2
    } else if (player.wis >= 3) {
      d20 += 1
    }
    console.log(d20)
    if (d20 >= 15) {
      return showTextNode(139.1)
    } else if (d20 <= 14) {
      return showTextNode(143)
    }
  } else if (textNode.diceRoll === 5) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.con >= 9) {
      d20 += 4
    } else if (player.con >= 6) {
      d20 += 2
    } else if (player.con >= 3) {
      d20 += 1
    }
    console.log(d20)
    if (d20 >= 16) {
      return showTextNode(136)
    } else if (d20 <= 15) {
      return showTextNode(137)
    }
  } else if (textNode.diceRoll === 6) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.cha >= 10) {
      d20 += 5
    } else if (player.cha >= 7) {
      d20 += 3
    } else if (player.cha >= 4) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(190.19)
    } else if (d20 <= 9) {
      return showTextNode(190.22)
    }
  } else if (textNode.diceRoll === 7) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.cha >= 10) {
      d20 += 5
    } else if (player.cha >= 7) {
      d20 += 3
    } else if (player.cha >= 4) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(190.19)
    } else if (d20 <= 9) {
      return showTextNode(190.22)
    }
  } else if (textNode.diceRoll === 8) {
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
    if (d20 >= 10) {
      return showTextNode(191.7)
    } else if (d20 <= 9) {
      return showTextNode(191.8)
    }
  } else if (textNode.diceRoll === 9) {
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
    if (d20 >= 12) {
      return showTextNode(191.22)
    } else if (d20 <= 11) {
      return showTextNode(192.18)
    }
  } else if (textNode.diceRoll === 10) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.con >= 9) {
      d20 += 4
    } else if (player.con >= 6) {
      d20 += 2
    } else if (player.con >= 3) {
      d20 += 1
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(759)
    } else if (d20 <= 9) {
      return showTextNode(758)
    }
  }



  while (optionButtonsElement.firstChild) { //removes buttons for combat, deletes the buttons but then adds new buttons
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }




  textNode.options.forEach(option => { //makes the options by checking the option premature see how many options there are
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      if (option === textNode.options[0] && textNode.heal !== true && textNode.scare !== true && textNode.pendant !== true && textNode.stab !== true && textNode.persuade !== true && textNode.none !== true) {
        button.addEventListener('click', () => slash(),) //checking certain buttons and adding the combat function according to each one
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
function showOption(option) { //shows the options if they have a certain item and such
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
  Map: ${player.map}
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
function selectOption(option) { //detect if button is clicked with a set player demator, and does what it is told to do
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
    if (player.cha >= 10) {
      d20 += 5
    } else if (player.cha >= 7) {
      d20 += 3
    } else if (player.cha >= 4) {
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


function slash() { //combat function only works if the combat function is true and will only work if combat is on going or started
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
// customizable combat system, it has everything needed
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
      enemy1 = General
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
    case 37:
      enemy1 = Jin
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
      enemy2 = General
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
    case 37:
      enemy2 = Jin
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
      enemy1 = General
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
    case 37:
      enemy1 = Jin
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
          newText = `${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you successfully convinced the enemy to leave the battle.`
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
              newText = `You tried to scare the enemy, but you accidentally had a voice crack mid sentence. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to scare the enemy, but you didn't even make eye contact. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to scare the enemy, but since you don't look scary, they thought you were a two year old. Then the ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tried to persuade the enemy, but you ended up rambling about how the election is corrupt. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to persuade the enemy, but you didn't even have five cited sources. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tried to persuade the enemy, but ${enemy1.enemyName} had both earbuds in. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to persuade the enemy, but you forgot your key points. Then ${enemy1.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
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
          newText = `The ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you successfully convinced the enemy to leave the battle.`
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
              newText = `You tried to scare the enemy, but you accidentally had a voice crack mid sentence. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to scare the enemy, but you didn't even make eye contact. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to scare the enemy, but since you don't look scary, they thought you were a two year old. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tried to persuade the enemy, but you ended up rambling about how the election is corrupt. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to persuade the enemy, but you didn't even have five cited sources. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tried to persuade the enemy, but the ${enemy2.enemyName} had both earbuds in. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to persuade the enemy, but you forgot your key points. Then ${enemy2.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
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
          newText = `${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>> left, but on the bright side you successfully convinced the enemy to leave the battle.`
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
              newText = `You tried to scare the enemy, but you accidentally had a voice crack mid sentence. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to scare the enemy, but you didn't even make eye contact. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You scare the enemy, but you were day dreaming so nothing actually happened. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to scare the enemy, but since you don't look scary, they thought you were a two year old. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            default:
          }
        }
        else if (type === `per`) {
          switch (d4one) {
            case 1:
              newText = `You tried to persuade the enemy, but you ended up rambling about how the election is corrupt. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 2:
              newText = `You tried to persuade the enemy, but you didn't even have five cited sources. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 3:
              newText = `You tried to persuade the enemy, but the ${enemy3.enemyName} had both earbuds in. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
              break;
            case 4:
              newText = `You tried to persuade the enemy, but you forgot your key points. Then ${enemy3.enemyName} attacked you dealing ${enemyD20} damage leaving you with <<${playerHp} HP>>`;
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
  if (neededDeath === true) {
    combatEnded = true
    combatQuestion = true
    console.log(`needed death ended is true now`)
  }

  if (enemy1.enemyHp <= 0 && enemy2.enemyHp <= 0 && enemy3.enemyHp <= 0) {
    combatEnded = true
    console.log(`combat ended is true now`)
  }


  if (playerHp <= 0 && neededDeath !== true) {
    newText = `You have been killed and won't be missed`
    showTextNode(13)
    playerHp = 175
  } else if (combatQuestion === true && combatEnded === true && neededDeath === true) {
    attack = false
    console.log(`this did go in the end winning combat`)
    neededDeath = false
    combatQuestion = false
    playerHp = 175
    newText = `You have failed, and lost to Henry`
    showTextNode(endingNode)
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
    text: `Welcome to our Knight text adventure, click Play to start`, //text was is visible first
    options: [ //creates the options
      { //to set something: setPlayer: {},
        //to require player: requiredPlayer: {element boolien element},
        text: `More Info`, //text was is visible first
        nextText: 2, //brings it to the next id
      }, // make sure to add commas
      {
        text: `PLAY`,
        //text was is visible first
        nextText: 14 //brings it to the next id
      }, // make sure to add commas
      {
        text: `Credits`, //text was being visible first
        nextText: 3//brings it to the next id
      },
    ], // make sure to add commas
  },
  {
    id: 2,
    text: `This is a text adventure made for our CART lab. This was made in just about 6 weeks from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system, Have Fun!`,
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
    text: `Made by: Angel Delgado Jimenez (Lead Programmer)
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
    startCombat: 1 //depending on the number combat will change enemies or allies
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
    text: `You have been killed and won't be missed.`,
    options: [
      {
        text: `Restart`,
        nextText: -1
      }
    ],
  },
  {
    id: 14,
    text: `You must redeem yourself and finish your mission.`,
    options: [
      {
        text: `Next`,
        nextText: 15
      }
    ],
  },
  {
    id: 15,
    text: `Revenge will make you whole.`,
    options: [
      {
        text: `Next`,
        nextText: 16
      }
    ],
  },
  {
    id: 16,
    text: `Our story begins in a small village, Lüdingfeld, near the capital of Etair. The village is an important part of the Etair due to its access to fresh water and a salt mine that is incredibly valuable for trade. A war broke out between the two Empires near Lüdingfeld, Etair and Bani. `,
    options: [
      {
        text: `Continue`,
        nextText: 17
      },
      {
        text: `Skip Prologue`,
        nextText: 26
      }
    ],
  },
  {
    id: 17,
    text: 'Even though the conflict has been around for about a year, Lüdingfeld has not changed its style of living and has not been very affected by the war, but the Bani lord, Henry Williams,  has set his sights on the little village, but their environment has taken a hit due to the war. ',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {
    id: 18,
    text: 'There were great beasts that used to roam the lands, but ever since the first war many of the beasts have been hunted and killed. Now they are merely legends. None have seen any for over a century. There are rumours that they may be disguised as other animals to avoid being hunted. Nobody really knows yet, until now.',
    options: [
      {
        text: `Continue`,
        nextText: 19
      }
    ],
  },
  {
    id: 19,
    text: 'Dragon: "There was a time where this land was isolated and seemed to be at peace, but after some time many other countries became more anxious to conquer the world. After the failed revolution in the west, the sea demons turned their attention to the east. The land’s government wanted to stay in solitude and tried to obtain their ancient ways, but it was only a matter of time until the evil would come."',
    options: [
      {
        text: `Continue`,
        nextText: 20
      }
    ],
  },
  {
    id: 20,
    text: 'Dragon: "During the War, this land would be reborn for the greedy. The usage of their guns and other unholy technology won them the land. Instead of just taking the land over they decided to create new forms of free labour to gather the land’s natural treasures. As time went on more and more of the ancient Gods left these lands in search of more prosperous peoples. Even I was about to leave until I met a man who goes by the name of Jack."',
    options: [
      {
        text: `Continue`,
        nextText: 21
      }
    ],
  },
  {
    id: 21,
    text: 'Jack: "Before it all changed I used to live a peaceful life with my family, *sigh. My wife, the pride of the house. The one that kept everything whole. She was the only constant in my life. My two daughters, Victoria and Cami. Victoria was the loud, popular one who always found herself out of trouble. While Cami was the quiet one, she always was blamed for her sister’s wrongs, I should have been in their life more."',
    options: [
      {
        text: `Continue`,
        nextText: 22
      }
    ],
  },
  {
    id: 22,
    text: 'Jack: "My only son, the age of 2. He was going to be the successor of our family’s land. He loved playing with the flowers and enjoying time with his mother. I only wished I had more time with him."',
    options: [
      {
        text: `Continue`,
        nextText: 23
      }
    ],
  },
  {
    id: 23,
    text: 'Jack: "I remember it like yesterday, the day when my greatest pride became my greatest failure. My daughters got mixed up with the wrong crowd, mostly Victoria. She met a man from the sea that promised her treasures if she stayed with him for a night. She accepted the gold, but never went to meet him. The man turned out to be a rich demon of a person. Nights went by but nothing happened, until one night when the moon was fullest he came with his troops."',
    options: [
      {
        text: `Continue`,
        nextText: 24
      }
    ],
  },
  {
    id: 24,
    text: 'Jack: "After pillaging the town, he made it to my home. At this time, I had no clue about what my daughter did, but it was far too late. They were too quick, there was no time to defend our town or loved ones. He killed them then mercilessly. After hours of horror, he let them die, but he didn’t share the same kindness with me. He left me with only his name Henry."',
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
    text: 'You first wake up in a burnt house surrounded by ash and taste of misery. You remember what happened to your family and one name rings constantly: Henry. As you get up you feel nothing even though you were beaten, bloodied, and battered. You look around and pick up your weapon and armor.', options: [
      {
        text: `Continue`,
        nextText: 26.1
      }
    ],
  },
  {
    id: 26.1,
    text: `Tutorial: Sometimes combat will be engaged so you need to be ready for anything. Some weapons with the right number of a stat can give big bonus.`,
    options: [
      {
        text: `OK, back to story`,
        nextText: 26.2
      }
    ],
  },
  // pick weapon
  {
    id: 26.2,
    text: `While going through your house, you find some left over weapons around .`,
    options: [
      {
        text: `Bow left by your Uncle
    	(Best while using Shoot)`,
        nextText: 27,
        setPlayer: { bow: 1 }
      },
      {
        text: `Great Axe left by your Father
    	(Best while using Slash)`,
        nextText: 27,
        setPlayer: { greatAxe: 1 }
      },
      {
        text: `Rapier left in a supply chest
    	(Best while using Stab)`,
        nextText: 27,
        setPlayer: { rapier: 1 }
      },
      {
        text: `Short Sword left by the Guards
    	(Best while using Stab)`,
        nextText: 27,
        setPlayer: { shortSword: 1 }
      },
      {
        text: `Spear left by the Guards
    	(Best whilst having more HP)`,
        nextText: 27,
        setPlayer: { spear: 1 }
      },
    ],
  },
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
        nextText: 29,
        setPlayer: { map: 1 }
      },
      {
        text: `Leave house`,
        nextText: 31
      }
    ],
  },
  { // gives the player 2 healing potions
    id: 28,
    text: 'You enter the kitchen, you do not know what you were expecting. Everything is burnt or broken. The place that you once ate at is now nothing but a place to grieve. You do find some of your healing potions in the chest under the table.',
    options: [
      {
        text: `Back`,
        nextText: 27,
      },
      {
        text: `Your Room`,
        nextText: 29,
        setPlayer: { map: 1 }
      },
      {
        text: `Leave house`,
        nextText: 30
      }
    ],
  },
  {
    id: 29,
    text: 'Your room is still intact but it\'s been cut through. You look through your chests and drawers, but you couldn’t find anything that can be helpful. You then look towards the wall to see the map that your Grandpa made when he travelled. You take it off the wall and put in your bag you find next to the bed.',
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
        text: `Leave house`,
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
        nextText: 29,
        setPlayer: { map: 1 }
      },
      {
        text: `Back`,
        nextText: 27
      },
      {
        text: `Leave house`,
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
        nextText: 32,
        setplayer: { con: 1 }
      },
      {
        text: `Mourn  then get on the road`,
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
    text: 'You spend a day at the town\'s church and pray for a safe passage through the afterlife. You spend one more night in your broken home.',
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
    text: 'You look around the town to see if there is anyone still alive. You can’t find anyone, you just pray that one of your friends gets out. You yell out "Is there anyone!?" None answers, you make your way to the road that leads to forest, seeing the burnt town full of ash and debris. You then hear a dog.',
    options: [
      {
        text: `Continue`,
        nextText: 36
      }
    ],
  },
  {
    id: 36,
    text: 'Dog: "Bark". The Dog looks at you and tilts its head, looking at your bag. It seems very skinny for a dog, you have never seen this dog before. <<Important Choice>>',
    options: [
      {
        text: `Help the dog.`,
        setplayer: { hasDog: true },
        nextText: 37,
      },
      {
        text: `Do not interact with the dog.`,
        nextText: 338,
        setplayer: { followDog: true }
      },
      {
        text: `Tell the dog to go away.`,
        nextText: 639,
        setplayer: { noDog: true }
      }
    ],
  },
  //
  //
  //help dog
  //endregio
  //
  //
  {
    id: 37,
    text: 'You take out some of your bread and tear a little piece and give it to the dog. You tell it let to follow and it seems to sort of understand and starts to follow you down the road.',
    options: [
      {
        text: `Continue`,
        nextText: 40
      }
    ],
  },
  //keep dog
  {
    id: 40,
    text: 'You start walking into the forest, you have heard many stories about what lurks within, but you are unsure what could be true. What is true is that they are words of bandits having a great influence over the region. You should tread carefully from now on, but lucky you are not alone.',
    options: [
      {
        text: `Continue`,
        nextText: 41
      }
    ],
  },
  {
    id: 41,
    text: 'You feel like you have been walking for days, the dog stops for a second and starts to growl. You look around and you see a merchant caravan, you get closer to see what has happened, but the dog is not moving with you.',
    options: [
      {
        text: `Investigate`,
        nextText: 41.1
      }
    ],
  },
  {
    id: 41.1,
    text: `Tutorial: This is what combat looks like. Left side is damaging attacks, while the right side is talking options. Middle is a special option. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 41.2
      },
      {
        text: `Heal Potions`,
        nextText: 41.2
      },
      {
        text: `Scare`,
        nextText: 41.2
      },
      {
        text: `Stab`,
        nextText: 41.2
      },
      {
        text: `Pendant of Pain`,
        nextText: 41.2
      },
      {
        text: `Persuade`,
        nextText: 41.2
      },
    ],
  },
  {
    id: 41.2,
    text: `Tutorial: These are attacking options. These roll a dice (EX: d12 or d4) and are multiplied by 1.5 to do some damage to the enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 41.3
      },
      {
        text: `Stab`,
        nextText: 41.3
      },
    ],
  },
  {
    id: 41.3,
    text: `Tutorial: These are talking options. These roll a dice (EX: d20) and if it is above a 14 multiply that roll by 2, you will convince the enemy to leave the battle (Same as killing an enemy). (Click any Option to Continue)`,
    options: [
      {
        text: `Persuade`,
        nextText: 41.4
      },
      {
        text: `Scare`,
        nextText: 41.4
      },
    ],
  },
  {
    id: 41.4,
    text: `Tutorial: These are the special options. Heal Potions roll a dice to heal an amount of health with enemies doing less damage but only if you have enough in your inventory (top right). The Pendant of Pain rolls a 4 sided dice (d4) and that is used to multiply your next roll by that amount. (Click any Option to Continue)`,
    options: [
      {
        text: `Heal Potions`,
        nextText: 41.5
      },
      {
        text: `Pendant of Pain`,
        nextText: 41.5
      },
    ],
  },
  {
    id: 41.5,
    text: `Tutorial: Enemies will replace the "Air, Breeze, Wind" after you start using an action. Enemies are in a queue system and one has to be killed or convinced to move onto the next enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Next`,
        nextText: 43
      },
    ],
  },
  {
    id: 41.6,
    text: `Tutorial: Some options will roll a d20 and if you get high enough, good things will happen. This is shown if the option has a "[Check]" tag on it. (Click any Option to Continue to Story)`,
    options: [
      //keep/has dog
      {
        text: `Leave Tutorial`,
        nextText: 43,
        requiredPlayer: (currentState) => { currentState.hasDog === true || currentState.followDog === true }
      },
      {
        text: `Try to bust down door
    	[Check]`,
        nextText: 43,
        requiredPlayer: (currentState) => { currentState.hasDog === true || currentState.followDog === true }
      },
      //no dog
      // {

      //   text: `Leave Tutorial no dog`,
      //   nextText: 643,
      // },
    ],
  },
  {
    id: 43,
    text: 'As you get closer to the cart, you see a couple arrows stuck in the cart. You take it out to examine the arrows. You hear something in front of you, but you can only make out some shadowy figures.',
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
        text: `Hide.
    	[Check]`,
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
    text: 'You stand there and wait, you continue to examine the cart and you finally get a good look at the people. You realize that they are bandits, luckily there is only two of them so you can probably take them.',
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
        text: `Continue`,
        nextText: 47
      }
    ],
    diceRoll: 1
  },
  { //sneak
    id: 48, //succeed on dex roll
    text: 'You were able to sneak past the bandits; they would have been a rough fight for you. You wait for a little bit before continuing going.',
    options: [
      {
        text: `Continue`,
        nextText: 51,
      },
      {
        text: `Continue`,
        nextText: 651,
      }
    ],
    checkDog: 1
  },
  { //sneak
    id: 42, //fails on dex roll
    text: 'You start to try to sneak past them but you step on some branches. The bandits stop to look at you and they take out their blades. You take out your weapon to get ready to fight, but you can always talk your way out.',
    options: [
      {
        text: `Continue`,
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
    text: 'You walk off with a sense of relief, you are happy to be alive but you do not know what you should feel. The dog comes out from the forest and starts licking your face. ',
    options: [
      {
        text: `Leave as the victor dog`,
        nextText: 51,
      },
      {
        text: `Leave as the victor no dog`,
        nextText: 651,
      }
    ],
    checkDog: 1
  },
  {
    id: 52,
    text: 'You clean yourself and settle for the night. You get some firewood and try to remember what your uncle told you, but as you try to remember the only thoughts that come to mind are the memories of the horror you went through. You go to bed without a fire, but you are confident thing will happen.',
    options: [
      {
        text: `Continue`,
        nextText: 53
      }
    ],
  },
  {
    id: 53,
    text: 'You wake up, but not where you remembered you being, the forest is more dense and there is a smell of smoke. You get up thinking that you were about to burn down the forest, but you quickly remembered that you did not make a fire, so who did? You get up and look for around the dog that is nowhere to be seen, but you do see his footprints.',
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
    text: 'You look around you to see that there is still a path, so you get up and you start to follow the path. The path leads you to a house, but you were expecting a town. By the looks of it, your map seems to be outdated.',
    options: [
      {
        text: `Continue`,
        nextText: 58
      }
    ],
  }, // dog do not stay with you
  {//
    id: 58,
    text: 'You look around to see if there is anyone, but there does not seem to be anyone making an loud noises.',
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
    text: 'Jack: "Hey sorry, I didn\'t mean to intrude on your lands, I came to a little village nearby that was attacked by a man. Have you heard the name Henry?"',
    options: [
      {
        text: `Continue`,
        nextText: 62
      }
    ],
  },
  {// diplomatic approach
    id: 62,
    text: 'Marry: "I cannot say I have run into a man with that name, so you are not one of those bandits are you?"',
    options: [
      {
        text: `No`,
        nextText: 63
      }
    ],
  },
  {// diplomatic approach
    id: 63,
    text: 'Jack: "I am not a bandit, I actually saw a couple back there, I dealt with them. I am Jack, may I ask who you are? My uncle used to talk about someone who looks just like you, a weapon smith with a very "large" personality."',
    options: [
      {
        text: `Continue`,
        nextText: 64
      }
    ],
  },
  {// diplomatic approach
    id: 64,
    text: 'Marry: "I am a weapon smith; I have been here for quite a while. I have not been visited by someone for a long while, why do not you come in?"',
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
        nextText: 66
      }
    ],
  },
  {// goes with pulling out blade
    id: 66,
    text: 'Marry: "I am Marry, the black smith, if you may not go straight to violence we can both walk out of here alive and better for it."',
    options: [
      {
        text: `What?`,
        nextText: 67
      }
    ],
  },
  {// goes with pulling out blade
    id: 67,
    text: 'You remember your uncle talking about a blacksmith, this person can be of help.',
    options: [
      {
        text: `Continue`,
        nextText: 68
      }
    ],
  },
  {//
    id: 68,
    text: 'You walk into her home, it is very cosy, it\'s been a few days since you have been in a functional house. Weapons covered the walls, some of them spears others are Great Axes, she looks like she has been doing this for quite some time. You wonder why she is here alone, but you thought best not to mention that question.',
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
    text: 'Marry: "Yes ever since there has been a change in leadership. They are demanding more and more weapons; I am tired of supplying those idiots. The thing is, they do not know that I have been giving them my worst weapons. I would do anything to get rid of those pests."',
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
    text: 'Jack: "I am on a mission to find a mentor to train me so I can get my revenge."',
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
        text: `Yes, Thank You.`,
        nextText: 74
      },
      {
        text: `If I have too.`,
        nextText: 74
      }
    ],
  },
  {// get to have more of a bonus to skills
    id: 74,
    text: 'You decide to join Marry and help her with the bandits. She loosely teaches you how to use your weapons and hone your skills.',
    options: [
      {
        text: `Continue`,
        nextText: 75.1
      }
    ],
  },
  {//
    id: 75.1,
    text: 'After a year of working for Marry she finally started to teach you how to use a weapon instead of just using you as free labour.',
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
    text: 'Dexterity: is used for light attacks like stab and can be used to sneak out of your way out of things. Also best while using a Rapier.',
    options: [
      {
        text: `mhm`,
        nextText: 75.4,
      }
    ],
  },
  {//
    id: 75.4,
    text: 'Constitution: is used for bonus to health and can be used to scare enemies and you heal more with potions. Also best while using a Short Sword.',
    options: [
      {
        text: `Okay`,
        nextText: 75.5,
      }
    ],
  },
  {//
    id: 75.5,
    text: 'Wisdom: is used for persuading, knowing how to heal more with potions, and getting more benefit from the Pendant of Pain. Also best while using a Bow.',
    options: [
      {
        text: `Yep`,
        nextText: 75.6,
      }
    ],
  },
  {//
    id: 75.6,
    text: 'Strength: is used to add damage for slash damage and can scare your enemies. Also best while using a Great Axe',
    options: [
      {
        text: `Alright`,
        nextText: 75.7,
      }
    ],
  },
  {//
    id: 75.7,
    text: 'Charisma: is used for persuading your way out of situations. It gets more benefit than other skills',
    options: [
      {
        text: `Very cool`,
        nextText: 75.8,
      }
    ],
  },
  {
    id: 75.8,
    text: 'Every skill gives you a benefit every 3 of a skill you have (EX: 3 strength = +1 on your roll while using slash, then 6 for +2, and 9 for +4). [Checks] will also display which skill benefits it (EX: "[Check (Dex)]"',

    options: [
      {
        text: `Very good to know`,
        nextText: 75.9,
      }
    ],
  },
  {
    id: 75.9,
    text: 'Pick your ability score',
    options: [
      {
        text: `Cha (4)`,
        nextText: 76,
        setPlayer: { cha: 4 }
      },
      {
        text: `Dex (3)`,
        nextText: 76,
        setPlayer: { dex: 4 }
      },
      {
        text: `Wis (3)`,
        nextText: 76,
        setPlayer: { wis: 3 }
      },
      {
        text: `Str (3)`,
        nextText: 76,
        setPlayer: { str: 3 }
      },
      {
        text: `Con (3)`,
        nextText: 76,
        setPlayer: { con: 3 }
      },
      {
        text: `Back to info`,
        nextText: 75.1,
      },
    ],
  },
  {//
    id: 76,
    text: 'Marry: "I think it\'s time we talk about you fighting the bandit leader. I have taught you as much as I could, they have been more involved in recent attacks with the local merchants than my home. If you go kill the bandit leader I will make a great weapon for you."',
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
        text: `Don\’t Boss me around`,
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
    text: 'Jack: "I will gladly take out that mutt. Its long overdue for him to learn his lesson, I will get his head and prove my worth."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {//
    id: 79,
    text: 'Jack: "I will kill this man and I will get that weapon, then I can finally get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {//
    id: 80,
    text: 'You walk into the forest, you take out your map to see where they could be and you see the perfect place for a camp. You make your way there being a sneaky as possible knowing that one mistake could cost you everything.',
    options: [
      {
        text: `Continue`,
        nextText: 81
      }
    ],
  },
  {//
    id: 81,
    text: 'You wait till nightfall to attack, beat them at their own game. You get to the camp at dawn but you only see 3 different bandits, two goonies and the leader. You have to change your plan and decide to attack now before anyone else can help.',
    options: [
      {
        text: `Continue`,
        nextText: 82
      }
    ],
  },
  {// conflict
    id: 82,
    text: 'You are fighting two bandits, and their leader after.',
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
    text: 'You defeated the bandits.',
    options: [
      {
        text: `Continue`,
        nextText: 84
      }
    ],
  },
  {//
    id: 84,
    text: 'You cut through the bandits, it was a hard fight, but worth it. You have now shown not only to your mentor, but to yourself that you are ready to avenge your family and find Henry.',
    options: [
      {
        text: `Walk back home`,
        nextText: 85
      }
    ],
  },
  {//
    id: 85,
    text: 'You walk into Marrys home, she looks at you and smiles. It is the first time you have seen her smile, you drop down your evidence and go out back to get yourself clean. ',
    options: [
      {
        text: `Continue`,
        nextText: 86
      }
    ],
  },
  {//
    id: 86,
    text: 'You remember the horrors done to your daughters in front of your son\'s eyes and what they did to your wife. It fills you with rage, you know it\'s time.',
    options: [
      {
        text: `Continue`,
        nextText: 87
      }
    ],
  },
  {// add a bonus to skill set
    id: 87,
    text: 'The next morning, Marry: "Jack, I present for you, your new fixed, and clean weapon along with some potions. I spent all night fixing it and buying some potions for you to have, I hope you use it well. Remember that even though it may feel as justice to you and your whatever, hate by revenge will just create more death for you and everyone around you."',
    options: [
      {
        text: `Yes, thank you.`,
        nextText: 88,
        setplayer: { healpot: 3 }
      }
    ],
  },
  {//
    id: 88,
    text: 'Jack: "Thank you, but you do not understand what I have gone through it is the only way."',
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
        nextText: 88.1
      }
    ],
  },
  {//
    id: 88.1,
    text: 'Marry: "Excuse me?"',
    options: [
      {
        text: `I said, Thank You`,
        nextText: 89
      },
    ],
  },
  {//
    id: 89,
    text: 'Yes, until we meet again Jack, good luck on your mission, but do not forget yourself in your own rage.',
    options: [
      {
        text: `Goodbye`,
        nextText: 92
      }
    ],
  },
  {// end of mentor 1
    id: 91,
    text: 'You walk out of the home, you turn around to get one more look at it and remember all the good times you had, you know that this will be the last moments of "fun" in your life.',
    options: [
      {
        text: `Continue Walking`,
        nextText: 92
      }
    ],
  },
  {//
    id: 92,
    text: 'You run into some other travellers and see if they know a Henry, but none of them know where he lives.',
    options: [
      {
        text: `Question More`,
        nextText: 93
      }
    ],
  },
  {//
    id: 93,
    text: 'You finally find a guard on patrol.',
    options: [
      {
        text: `Do you a man named Henry?`,
        nextText: 94
      },
      {
        text: `Is there a lord in this area?`,
        nextText: 95
      },
      {
        text: `Tell me about Henry!?`,
        nextText: 96
      }
    ],
  },
  {//
    id: 94,
    text: 'Guard: "Lord Williams? He is the lord around here, he lives near here."',
    options: [
      {
        text: `What, really?`,
        nextText: 95.5
      }
    ],
  },
  {//
    id: 95,
    text: 'Guard: "Yes, there is a lord named Lord Williams. He lives around here."',
    options: [
      {
        text: `What, really?`,
        nextText: 95.5
      }
    ],
  },
  {//
    id: 95.5,
    text: 'Guard: "Yes, he lives right here" He pulls out his map and points at a spot to show you were Henry\'s home is.',
    options: [
      {
        text: `Thank you.`,
        nextText: 102
      }
    ],
  },
  {//
    id: 96,
    text: 'Guard: "I do not like your tone of your voice young man."',
    options: [
      {
        text: `Sorry, is there a lord?`,
        nextText: 94
      },
      {
        text: `You heard me.`,
        nextText: 98
      }
    ],
  },
  {// Conflict
    id: 98,
    text: 'The guard takes out his blade and swings.',
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
    startCombat: 3,
  },
  {// end conflict
    id: 99,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 100
      }
    ],
  },
  {//
    id: 100,
    text: 'You loot his body and find a note by Lord Williams. It seems that the guard has been hired by Henry, which leads you to believe that Henry lives somewhere near here. You take out his map of the area to see if there is a manor or castle.',
    options: [
      {
        text: `Walk to Henry/'s home`,
        nextText: 101
      }
    ],
  },
  {//
    id: 101,
    text: 'You went to the spot of the map that looked the most important. As you walk down the road you see a large house on top of a little hill.',
    options: [
      {
        text: `Continue`,
        nextText: 102
      }
    ],
  },
  {// roll a wisdom 15
    id: 102,
    text: 'You look at the home and see if there is a possible entrance through the home.',
    options: [
      {
        text: `Continue
    	[Check (Wis)]`,
        nextText: 103.1
      }
    ],

  },
  {// wisdom succeeds (ws)
    id: 103.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Continue`,
        nextText: 113
      }
    ],
    diceRoll: 2
  },
  {// wisdom succeeds (ws)
    id: 103,
    text: 'You can see there is an entrance below in the sewers, if you enter there are no guards that will be able to find you.',
    options: [
      {
        text: `Continue`,
        nextText: 113
      }
    ],
  },
  {// wisdom fails (wf)
    id: 105,
    text: 'You can only see one way in, the front door. It may cause some chaos in the manor though. You can try to convince the guards to let you in to talk but it may fail.',
    options: [
      {
        text: `Continue`,
        nextText: 106
      }
    ],
  },
  {// wf
    id: 106,
    text: 'You walk up to the front gates and look towards the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 108
      }
    ],
  },
  {// wf
    id: 108,
    text: 'Matthew: "What are you doing here?"',
    options: [
      { //charisma check
        text: `I here to see Henry
    	[Check (Cha)]`,
        nextText: 108.1
      },
      {
        text: `Start Conflict`,
        nextText: 109
      },
    ],
  },
  {// wf
    id: 108.1,
    text: 'Blank due to dice roll"',
    options: [
      { //charisma check
        text: `I here to see Henry
    	[Check (Cha)]`,
        nextText: 111
      },
    ],
    diceRoll: 3
  },
  {// Conflict
    id: 109,
    text: 'The guard takes out his blade and swings.',
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
    startCombat: 4,
  },
  {// end conflict
    id: 110,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 116.1
      }
    ],
  },
  {// charisma succeeds
    id: 111,
    text: 'Matthew: "Oh, I remember you, you are the new maid right?"',
    options: [
      {
        text: `Uh Yes Sir`,
        nextText: 111.1
      }
    ],
  },
  {//
    id: 111,
    text: 'Matthew: "Where are my manners, go right ahead."',
    options: [
      {
        text: `Thank You`,
        nextText: 116
      }
    ],
  },
  {// charisma fails
    id: 112,
    text: 'Matthew: "GET HIM!"',
    options: [
      {
        text: `Continue`,
        nextText: 109
      }
    ],
  },
  {// ws
    id: 113,
    text: 'You sneak into the sewer and walk in. You are pretty sure this will work and you continue down. ',
    options: [
      {
        text: `Continue`,
        nextText: 114
      }
    ],
  },
  {// ws
    id: 114,
    text: 'You make it to the end and you can see the kitchen above you. You climb up the ladder and try to make the least amount of noise as possible. You do not see anyone so, if you did make noise none will be the wiser.',
    options: [
      {
        text: `Continue`,
        nextText: 116
      }
    ],
  },
  {//
    id: 116,
    text: 'You open up the kitchen door to see the dining room, you unexpectedly walk into Henry having lunch with his family. You see 2 little boys enjoying a large bowl of rice and you lock eyes with the man who ruined everything.',
    options: [
      {
        text: `Continue`,
        nextText: 117
      }
    ],
  },
  {//
    id: 116.1,
    text: 'You make your way inside the gates and see his family having lunch in the dining room.',
    options: [
      {
        text: `WALK IN`,
        nextText: 117
      }
    ],
  },
  {//
    id: 117,
    text: 'Henry: "Oh, I wasn’t expecting a visitor today. Henry! What did I say about eating with your mouth open? Sigh. What are you doing here and who are you? Oh wait, sorry where my manners are, please sit over there."',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 118
      }
    ],
  },
  {//
    id: 118,
    text: 'Henry: "No need to be so loud you don’t want the kids to be scared?"',
    options: [
      {
        text: `Examine the room`,
        nextText: 119
      }
    ],
  },
  {//
    id: 119,
    text: 'The first kid runs to his mom, but the one named James just sat there eating, staring into your soul. Distracted by memories you didn’t realise that Henry had pulled out his sword.',
    options: [
      {
        text: `Look back at Henry`,
        nextText: 120
      }
    ],
  },
  {//
    id: 120,
    text: 'Jack: "Why did you do it? You could have done it any other way, why? Why did you leave me alive with these memories!"',
    options: [
      {
        text: `Grip your weapon`,
        nextText: 122
      }
    ],
  },
  {//
    id: 122,
    text: 'Henry: "Okay this is enough, get the kids out. This should not be to long, we can finish our meal later tonight."',
    options: [
      {
        text: `Contain your anger`,
        nextText: 123
      }
    ],
  },
  {// Conflict
    id: 123,
    text: 'This is your chance, get your revenge!',
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
    startCombat: 5,
  },
  {// end conflict
    id: 124,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 125
      }
    ],
  },
  {//
    id: 125,
    text: 'You get a couple of good shots in, but Henry is just too strong. You take a moment to catch your breath and by the time you get your mind back in the battle, he jumps onto you with the dull end of his blade. Your vision got dark and the last thing you remember were the kids eyes.',
    options: [
      {
        text: `...........`,
        nextText: 126
      }
    ],
  },
  {//
    id: 126,
    text: 'What do you expect? Did you expect that you would come out on top? You’re in my home, since this blade has enough of your kinds’ filth on it, I will spare you. Guards escort our friend to the prison in the south, but I am curious who you are?',
    options: [
      {
        text: `...........`,
        nextText: 127
      }
    ],
  },
  {//
    id: 127,
    text: 'You wake up in a chain, the only thing you can sense is iron. As you try to get up you realise you are locked up in chains in a room. You thought your eyes were closed but then you see a little bit of light.',
    options: [
      {
        text: `Continue`,
        nextText: 128
      }
    ],
  },
  {//
    id: 128,
    text: 'Guard: "Feeding Time!"',
    options: [
      {
        text: `Get up`,
        nextText: 129
      }
    ],
  },
  {// wisdom check
    id: 129,
    text: 'You try to get yourself to your feet, but it feels like you are tied down. You look at the surroundings in the room to see where you are at.',
    options: [
      {
        text: `Continue`,
        nextText: 130
      }
    ],
    diceRoll: 6
  },
  {// wisdom succeed
    id: 130,
    text: 'You focus on',
    options: [
      {
        text: `Door`,
        nextText: 130.1
      },
      {
        text: `Figure 1`,
        nextText: 130.2
      },
      {
        text: `Figure 2`,
        nextText: 130.3
      },
      {
        text: `The plate`,
        nextText: 130.4
      },
    ],
  },
  {// door
    id: 130.1,
    text: 'You see a faint light; it appears that there are some guards watching over. It looks like it\'s made out of wood, you might be able to break it. You then see marks on the door, like someone has had the same idea, but it appears none has made it out like that.',
    options: [
      {
        text: `Door`,
        nextText: 130.1
      },
      {
        text: `Figure 1`,
        nextText: 130.2
      },
      {
        text: `Figure 2`,
        nextText: 130.3
      },
      {
        text: `The plate`,
        nextText: 130.4
      },
      {
        text: `"Hello?"`,
        nextText: 132.4
      }
    ],
  },
  {// figure 1
    id: 130.2,
    text: 'You see a man in the room staring at the door, he appears to be tall and skinny with long black hair.',
    options: [
      {
        text: `Door`,
        nextText: 130.1
      },
      {
        text: `Figure 1`,
        nextText: 130.2
      },
      {
        text: `Figure 2`,
        nextText: 130.3
      },
      {
        text: `The plate`,
        nextText: 130.4
      },
      {
        text: `"Hello?"`,
        nextText: 132
      }
    ],
  },
  {// figure 2
    id: 130.3,
    text: 'There is a man in the right corner that seems to be the average height, you cannot make out any other features. He maybe wearing some type of cloak.',
    options: [
      {
        text: `Door`,
        nextText: 130.1
      },
      {
        text: `Figure 1`,
        nextText: 130.2
      },
      {
        text: `Figure 2`,
        nextText: 130.3
      },
      {
        text: `The plate`,
        nextText: 130.4
      },
      {
        text: `"Hello?"`,
        nextText: 132
      }
    ],
  },
  {// plate
    id: 130.4,
    text: 'You focus on the plate that was just thrown into the room. You mostly hear things, the room is almost pitch black, but you do see a large man run towards the plate. You hear a gulp then some more shuffling. You can make out that he is much more fit compared to the other two and pretty tall, does not look like someone to mess with.',
    options: [
      {
        text: `Door`,
        nextText: 130.1
      },
      {
        text: `Figure 1`,
        nextText: 130.2
      },
      {
        text: `Figure 2`,
        nextText: 130.3
      },
      {
        text: `The plate`,
        nextText: 130.4
      },
      {
        text: `"Hello?"`,
        nextText: 132
      },
    ],
  },
  { // fails wisdom
    id: 130.5,
    text: 'You try to see if you can make out anything, but you can only see black. The room is pitch black and your senses are still shout after that fight.',
    options: [
      {
        text: `Continue`,
        nextText: 132
      }
    ],
  },
  {//
    id: 132,
    text: 'You try to at least sit up, you now hear chains jangle. Jack: "Where am I?"',
    options: [
      {
        text: `Continue`,
        nextText: 133
      }
    ],
  },
  {//
    id: 133,
    text: '?: "heLLo? whAt do you think, hmm." Just hearing this guy makes you feel uneasy. ?: "Shut it… Sorry, who are you?" It\'s the same voice but a different tone and is much more clear.',
    options: [
      {
        text: `I am Jack, where are we?`,
        nextText: 134
      },
      {
        text: `"Who are you, are there two of you?"`,
        nextText: 135
      },
      {
        text: `"Do not respond?"`,
        nextText: 136
      }
    ],
  },
  {//
    id: 134,
    text: 'Jin: "We are nowhere, but you will soon learn. I am Jin by the way."',
    options: [
      {
        text: `What?`,
        nextText: 137
      }
    ],
  },
  {//
    id: 135,
    text: 'Jin: "I am Jin, it\'s rude to ask people about their personal life, hmm?"',
    options: [
      {
        text: `What?`,
        nextText: 137
      }
    ],
  },
  {//
    id: 136,
    text: 'Jin: "I am Jin, it rude to just stare, hahahaha!"',
    options: [
      {
        text: `...`,
        nextText: 137
      }
    ],
  },
  {//
    id: 137,
    text: '?: "Jin, be quiet." A different voice from the right side of the room, it\'s more deep and shallow. Jin: "Oh Frank, please I am just trying to make a new friend, are you jealous?" It seems like the man\'s name is Frank, what a weird name.',
    options: [
      {
        text: `Hey, what is this place?`,
        nextText: 138
      },
      {
        text: `A friend?`,
        nextText: 138
      },
      {
        text: `...`,
        nextText: 138
      }
    ],
  },
  {//
    id: 138,
    text: 'Guard: "Shut it in there!"',
    options: [
      {
        text: `Listen`,
        nextText: 139
      }
    ],
  },
  {// wisdom or dex check
    id: 139,
    text: 'Everything becomes silent again, expect for the faint noise of the guards talking.',
    options: [
      {
        text: `Focus on the voices
        [Check (Wis)]`,
        nextText: 139.1
      }
    ],
  },
  {// wisdom or dex check
    id: 139.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Focus on the voices`,
        nextText: 140
      }
    ],
    diceRoll: 4
  },
  {// succeeds
    id: 139.1,
    text: 'Guard 1: "Hey Guston, you hear the news?" The first guard seems to be on the older side. Guston: "You mean how Henry is promoting guards to his new home?" Guston seems to be a lot younger. You hear a loud slap Guard1: "Call him Lord Williams, but yes. He moved to that old burnt down farming village next to the river. Hopefully he promotes me, hahaha." Guston: "Fat chance of that."',
    options: [
      {
        text: `Continue`,
        nextText: 141
      }
    ],
  },
  {// succeeds
    id: 141,
    text: 'The voices get quieter. You remember your old home; would he really live on the graves of his victims? At least you now know where he will be when you get out of here.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 144
      }
    ],
  },
  {// fails
    id: 143,
    text: 'You cannot make out anything, so you decide to sleep.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 144
      }
    ],
  },
  {//
    id: 144,
    text: 'You get woken to a bright light from the door being open. Guston: "Get out, it\'s time for work." From what you know of prisons, they will probably make you mine for salt.',
    options: [
      {
        text: `Get up and follow.`,
        nextText: 145
      }
    ],
  },
  {// con check
    id: 145,
    text: 'You spend the day getting your grip on reality. You pick the pickaxe near you and start to get mining, but you feel weak like your arms are about to break.',
    options: [
      {
        text: `Mine the Rock
        [Check (con)]`,
        nextText: 145.1
      }
    ],
  },
  {// con check
    id: 145.1,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Continue`,
        nextText: 146
      }
    ],
    diceRoll: 5
  },
  {// succeeds
    id: 136,
    text: 'You continue even though your arms feel like noodles, you see Frank and Jin looking impressed. You also see the other man, a huge man with bright red hair. He is laughing at your attempt to be "strong". He takes your pick and starts to show you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 178
      }
    ],
  },
  {// fails
    id: 137,
    text: 'You drop the pickaxe and see Frank and Jin walk away from you. You can finally see the last guy, a huge name with bright red hair. He looks like is about to help when you see a guard approach.',
    options: [
      {
        text: `Continue`,
        nextText: 137.1
      }
    ],
  },
  {// fails
    id: 137.1,
    text: 'You try to pick off the pickaxe before they notice, but it\'s too late. They pick you up and then beat you for what feels like hours. Afterwards they throw you back into the mines. This time the big man is there holding your pickaxe, he shows you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 178
      }
    ],
  },
  {//
    id: 178,
    text: 'Brian: "Weak boy, let Brian help, he\'s big and strong." He is almost twice your size, he hits one rock and it breaks in half.',
    options: [
      {
        text: `How have you been here?`,
        nextText: 178.1
      },
      {
        text: `What are you in here for?`,
        nextText: 178.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 178.3
      },
    ],
  },
  {//
    id: 178.1,
    text: 'Brian: "Been here very long, lost count. You will understand one day little man."',
    options: [
      {
        text: `What are you in here for?`,
        nextText: 178.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 178.3
      },
    ],
  },
  {//
    id: 178.2,
    text: 'Brian: "Drunk fighting, he did not say sorry, killed the ant. They put me here."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 178.1
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 178.3
      },
    ],
  },
  {//
    id: 178.3,
    text: 'Brian: "Does not know what you mean?"',
    options: [
      {
        text: `Oh come on you know what I mean.`,
        nextText: 178.31
      },
    ],
  },
  {//
    id: 178.31,
    text: 'Brian: "If Jack keeps talking I will be angry; Jack does not want Brian angry." You might be able to get him angry and start a mass fight, it could be good distraction.',
    options: [
      {
        text: `Sorry, thank you for your help.`,
        nextText: 179
      }
    ],
  },
  {//
    id: 179,
    text: 'You walk up to Jin to see what he is up to, you try to make it seem like you are still working, but you know if you swing one more time your arms will just fall off.',
    options: [
      {
        text: `Hey`,
        nextText: 180
      }
    ],
  },
  {//
    id: 180,
    text: 'Jin: "yEs? SHHH" ... Jin: "Yes, what do you want?"',
    options: [
      {
        text: `How have you been here?`,
        nextText: 180.1
      },
      {
        text: `Are you alright?`,
        nextText: 180.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 180.3
      },
    ],
  },
  {//
    id: 180.1,
    text: 'Jin: "They think of me crazy, so they put me in prison. I also often lied about who I was to get what I want."',
    options: [
      {
        text: `Are you alright?`,
        nextText: 180.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 180.3
      },
    ],
  },
  {//
    id: 180.2,
    text: 'Jin "I am doing as fine as someone can be in prison."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 180.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 180.3
      },
    ],
  },
  {//
    id: 180.3,
    text: 'Jin: "yES, wE wait FOR moments of TImE." The other voice came back. Jin: "SHUT IT, well yes I do know a way, but it takes time and it\'s not time yet. I may let you in depending on if I like you later, HAHAHAHA." Guard2:"GET BACK TO WORK!"',
    options: [
      {
        text: `Thank you, talk to you later.`,
        nextText: 181
      }
    ],
  },
  {//
    id: 181,
    text: 'You walk towards Frank, but he meets you in the middle, much smaller than the other two, but around the same size as you if not a little shorter. He is wearing a cloak to cover his face, you wonder how he is allowed to have that, but he also does not seem to be from this area.',
    options: [
      {
        text: `Hey`,
        nextText: 182
      }
    ],
  },
  {//
    id: 182,
    text: 'Frank: "Jack?"',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 182.1
      },
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 182.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 182.3
      },
    ],
  },
  {//
    id: 182.1,
    text: 'Frank: "Sorry, but you do not get to know why, just know that I am someone that can get anywhere they want."',
    options: [
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 182.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 182.3
      },
    ],
  },
  {//
    id: 182.2,
    text: 'Frank: "Yes I come from Bani."',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 182.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 182.3
      },
    ],
  },
  {//
    id: 182.3,
    text: 'Frank: "Maybe what is in it for me?"',
    options: [
      {
        text: `Well it seems like you can't do it yourself, so you will be able to get out.`,
        nextText: 182.31
      },
    ],
  },
  {//
    id: 182.31,
    text: 'HAHAHA, okay then. We will talk more about this in further detail later.',
    options: [
      {
        text: `Alright see you later`,
        nextText: 183
      }
    ],
  }, {//
    id: 183,
    text: 'You have more energy left and so you start to mine again. You spend another hour or two before hearing the church bell. They take you to the church to pay for your sins, a costume from Bina culture. You spend an hour in the church before being thrown back into your cell.',
    options: [
      {
        text: `Continue`,
        nextText: 184
      }
    ],
  },
  {//
    id: 184,
    text: 'Like the other night a plate gets thrown in, but this time none goes for it except Jin. It appears like they are taking turns with the food. You remember them talking about it while you were mining. You wonder when it will be your turn to eat and drink. You do not know how long it has been since your break in, but you do know that you are starving.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 185
      }
    ],
  },
  {//
    id: 185,
    text: 'You drift into sleep with nightmares of what happened. Jack: "I am sorry; I am so sorry! Please I will..." You wake up and Frank is pointing to the food in front of you.',
    options: [
      {
        text: `Thank you`,
        nextText: 186
      }
    ],
  },
  {//
    id: 186,
    text: 'You pick it up and take a bite out of what looks like bread, but turns out to be rice. It surprises you, but you really are not in a position to complain about the food. You eat all of it before being called back out to work where you mine again.',
    options: [
      {
        text: `5 Years Later`,
        nextText: 187
      }
    ],
  },
  {//
    id: 187,
    text: 'You have been doing the same thing for about 5 years now counting each week on your wall. Nothing new with Henry, but you have become good friends with the people in your cell. The nightmares are still there, but you have a good feeling.',
    options: [
      {
        text: `Eat the rice bread`,
        nextText: 188
      }
    ],
  },
  {// how to break out of prison
    id: 188,
    text: 'You take a bite of the rice bread, everyone else is looking at it. Maybe if you help one of them more than the others they can help you escape.',
    options: [
      {//breaks out with Brian (bb)
        text: `Give some to Brian `, //increases strength or con by 1
        nextText: 189.1,
        setPlayer: { str: 4 }
      },
      {//breaks out with Jin (bj) //increases charisma or wisdom by 1
        text: `Give some to Jin`,
        nextText: 190.1,
        setPlayer: { wis: 4 }
      },
      {//breaks out with Frank (bf) //increases dex or charisma by 1
        text: `Give some to Frank`,
        nextText: 191.1,
        setPlayer: { dex: 4 }
      }
    ],
  },
  {// bb
    id: 189.1,
    text: 'You hand the rest to Brian, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Brian to start a fight. You can get both Brian and yourself out.',
    options: [
      {
        text: `Hey`,
        nextText: 189.2
      }
    ],
  },
  {// bb
    id: 189.2,
    text: 'Jack: "Brian, I have a plan to get us out of the dump. You want to hear about it? You want to be able to see your kids again?" It may be a bit much bringing up his kids, but you need to get out so the ends justify the means.',
    options: [
      {
        text: `Continue`,
        nextText: 189.3
      }
    ],
  },
  {// bb
    id: 189.3,
    text: 'Brian: "Yes Brian wants to leave. How do Brian and friends leave?"',
    options: [
      {
        text: `Respond with the plan`,
        nextText: 189.4
      }
    ],
  },
  {// bb
    id: 189.4,
    text: 'Brian: "Sounds Good" He walks away, you realise that you forgot to tell him when you will be doing this, but before you can tell him he pushes one of the other inmates down. The inmate gets up then throws a punch. You see as a crowd starts to gather. The guards are nowhere to be seen, it looks like they are under maned today, lucky.',
    options: [
      {
        text: `Watch`,
        nextText: 189.5
      }
    ],
  },
  {// bb
    id: 189.5,
    text: 'You see as another fight breaks out, until there is not a single person that is not in a fight. You escape and see Brian look for you.',
    options: [
      {
        text: `Call for Brian`, // leave with Brian (lb)
        nextText: 189.6
      },
      {
        text: 'Run without Brian', // leave without Brian (wb)
        nextText: 189.61
      }
    ],
  },
  {// wb
    id: 189.6,
    text: 'You call out to Brian and he runs towards you. You start to burst out laughing, Jack: "We might just be able to get out, good job Brian." Brian smiles and picks you up. You guys make your way to the armoury where you find your old blade, it appears to have been used, but it\'s not in bad shape. Brian picks up a large great axe.',
    options: [
      {
        text: `Let's get out of here!`,
        nextText: 189.7
      }
    ],
  },
  {// lb
    id: 189.61,
    text: 'You look at Brian and think about if you really need him. You decide to run off to the armoury and get your old sword, it appears to have been used, but it\'s still in good shape. You run out and make your way out.',
    options: [
      {
        text: `Continue`,
        nextText: 189.71
      }
    ],
  },
  {// wb
    id: 189.7,
    text: 'You run into some guards, only two of them look tough, but you are ready for them. Brian takes one of them, so it only leaves you with one.',
    options: [
      {
        text: `Continue`,
        nextText: 189.8
      }
    ],
  },
  {// lb
    id: 189.71,
    text: 'You run into some guards, only two of them they look tough, but you are ready for them.',
    options: [
      {
        text: `Continue`,
        nextText: 189.81
      }
    ],
  },
  {// Conflict wb
    id: 189.8,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 6,
  },
  {// Conflict lb
    id: 189.81,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 7,
  },
  {// end conflict wb
    id: 189.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 189.11
      }
    ],
  },
  {// end conflict lb
    id: 189.91,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 189.111
      }
    ],
  },
  {// wb
    id: 189.11,
    text: 'You finish your guard just in time to see Brian get stabbed in the chest. He swings down his axe and kills the guard, but the wound is deep, a healing potion will not heal this one.',
    options: [
      {
        text: `Brian!`,
        nextText: 189.13
      },
      {
        text: `Will you be okay?`,
        nextText: 189.13
      },
      {
        text: `Come on we are too close.`,
        nextText: 189.16
      },
    ],
  },
  {// lb end
    id: 189.111,
    text: 'You take out the guards and make a dash for the exit. You think about taking out your anger and all the guards, but you are not dumb.',
    options: [
      {
        text: `Freedom!`,
        nextText: 193
      }
    ],
  },
  {// wb
    id: 189.13,
    text: 'Brian: "Jack, thank you for helping Brian. I am okay with this, go do not waste your freedom on me..." Brian\'s eyes close and he takes a breath out, he\'s not died but he is pretending to be to try to get you to leave.',
    options: [
      {
        text: `Help`,
        nextText: 189.14
      },
      {
        text: `Leave`,
        nextText: 189.1
      },
    ],
  },
  {// help wb
    id: 189.14,
    text: 'Jack: "Come on Brian I know you are still alive, let\'s go. You will be able to make."',
    options: [
      {
        text: `Try to help him up`,
        nextText: 189.15
      }
    ],
  },
  {// help wb
    id: 189.15,
    text: 'Brian: "No I am dead. Go without Brian, it’s okay, I want this."',
    options: [
      {
        text: `leave`,
        nextText: 189.16
      }
    ],
  },
  {// wb end
    id: 189.6,
    text: 'You decide to listen to Brian and leave him, it hurts you but you know that he will face a worse death outside of this prison. At least he gets to die on his own terms. You hand him one of the swords that the guards have, and walk out the door holding back your rage to kill everyone in that prison.',
    options: [
      {
        text: `Freedom`,
        nextText: 192
      }
    ],
  },
  {// bj
    id: 190.1,
    text: 'You hand the rest to Jin, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Jin to be able to enter the armoury. Maybe he can make us seem like guards. You can get both Jin and yourself out.',
    options: [
      {
        text: `Talk to Jin`,
        nextText: 18
      }
    ],
  },
  {// bj
    id: 190.2,
    text: 'Jack: "Jin, I have a plan to get us out of the dump. You want to hear about it?',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {// bj
    id: 190.3,
    text: 'Jin: "I am listening."',
    options: [
      {
        text: `Explain him the plan`,
        nextText: 190.4
      }
    ],
  },
  {// bj
    id: 190.4,
    text: 'Jin: "Hmm, that is my type of crazy. I will not lie, hahaha. Sure, let\'s try it. There is a day where most of the guards will be gone because Lord Williams is holding a party and needs sore guards. So we will strike then."',
    options: [
      {
        text: `Okay`,
        nextText: 190.5
      }
    ],
  },
  {// bj
    id: 190.5,
    text: 'You wait for Jin to talk to you again, a few weeks go by and you start to notice that most of the guards are out. Right now there is only like 10 of them.',
    options: [
      {
        text: `Wait for Jin`,
        nextText: 190.6
      }
    ],
  },
  {// bj
    id: 190.6,
    text: 'Jin: "Jack, today is the day, say your goodbyes we are leaving!" Jin: "LEAvinG, yes... yEs." You get a weird feeling about it, but you are too far into it now to just back out.',
    options: [
      {
        text: `Continue`,
        nextText: 190.7
      }
    ],
  },
  {// bj
    id: 190.7,
    text: 'You say your goodbyes and you and Jin wait for the moment to attack. You see an opportunity to steal some weapons and take it. 2 guards see you, you will have to take them out, Jin is useless in combat.',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 190.8
      }
    ],
  },
  {// bj
    id: 190.8,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 8,
  },
  {//bj
    id: 190.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 190.11
      }
    ],
  },
  {// bj
    id: 190.11,
    text: 'You hide their bodies in some bushes and make your way with Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 190.12
      }
    ],
  },
  {// bj
    id: 190.12,
    text: 'You reach the armoury and take some armour, for some reason Jin has not said a word to you since you took out the guards. You are getting a weird feeling so you keep your weapon near you.',
    options: [
      {
        text: `Are we ready?`,
        nextText: 190.13
      }
    ],
  },
  {// bj
    id: 190.13,
    text: 'Jin looks at you and then swings his blade in your direction, you manage to dodge at the last second',
    options: [
      {
        text: `Continue`,
        nextText: 190.14
      }
    ],
  },
  {// bj combat
    id: 190.14,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 9,
  },
  {//bj combat finish
    id: 190.15,
    text: 'You defeat Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 190.16
      }
    ],
  },
  {// bj
    id: 190.16,
    text: 'You stab Jin right in the chest and push him off you. Hey stumbles back before he falls into some crates. You do not really know why Jin would do that but you also knew that he was probably the most unstable out of the three inmates. You get up clean your weapon and walk straight through the gates but then.',
    options: [
      {
        text: `Guard: "Hey"!`,
        nextText: 190.17
      }
    ],
  },
  {// bj
    id: 190.17,
    text: 'Guard: "Where do you think you are going?"',
    options: [
      {
        text: `Attack`,
        nextText: 190.22
      },
      {
        text: `Talk`,
        nextText: 190.18
      }
    ],
  },
  {//charisma check 10 bj
    id: 190.18,
    text: 'Jack: "Sorry, I need to go to the general. An inmate has killed a fellow inmate in the armoury and I do not know where that inmate is."',
    options: [
      {
        text: `Continue
        [Check (cha)]`,
        nextText: 190.181
      }
    ],
    diceRoll: 7
  },
  {//charisma check 10 bj
    id: 190.181,
    text: 'Blank due too dice roll."',
    options: [
      {
        text: `Continue`,
        nextText: 190.19
      }
    ],
    diceRoll: 6
  },
  {// succeeds bj
    id: 190.19,
    text: 'Guard: "Yes, I see go find him he is in Lord Williams manor just west of here in the town of Lüdingfeld."',
    options: [
      {
        text: `Thank you, I will go immediately.`,
        nextText: 190.21
      }
    ],
  },
  {// fails bj
    id: 190.22,
    text: 'Get him!',
    options: [
      {
        text: `Continue`,
        nextText: 190.23
      }
    ],
  },
  {// bj combat
    id: 190.23,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 10,
  },
  {//bj
    id: 190.24,
    text: 'You defeat Guards.',
    options: [
      {
        text: `Continue`,
        nextText: 192.25
      }
    ],
  },
  {// bj
    id: 190.25,
    text: 'You run out looking around what to do next',
    options: [
      {
        text: `Continue`,
        nextText: 192
      }
    ],
  },
  {// bf
    id: 191.2,
    text: 'You hand the rest to Frank, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Frank to escape with you. He knows the fort much better than you and he can help you sneak through the fort.',
    options: [
      {
        text: `Find Frank`,
        nextText: 191.3
      }
    ],
  },
  {// bf
    id: 191.3,
    text: 'Jack: "Hey Frank, how would you like it if we got out of here?"',
    options: [
      {
        text: `Continue`,
        nextText: 191.4
      }
    ],
  },
  {// bf
    id: 191.4,
    text: 'Frank: "You mean escape the fort. It\'s possible but you need to be sneaky to travel with me or at least know how fight."',
    options: [
      {
        text: `Explain the plan.`,
        nextText: 191.5
      }
    ],
  },
  {// bf
    id: 191.5,
    text: 'Frank: "Interesting... This could work, let\'s wait for tonight. There will be less guards tonight, Lord Williams is holding a party and they need more guards. Meet me at the armoury."',
    options: [
      {
        text: `Alright I will meet you there`,
        nextText: 191.6
      }
    ],
  },
  {// dex check 10 bf
    id: 191.6,
    text: 'While you are walking back from mining you try to sneak away from the group.',
    options: [
      {
        text: `Make it for the Armoury`,
        nextText: 191.61
      }
    ],
  },
  {// dex check 10 bf
    id: 191.61,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Make it for the Armoury`,
        nextText: 191.7
      }
    ],
    diceRoll: 8
  },
  {// succeeds bf
    id: 191.7,
    text: 'You make it in the armoury without being seen.',
    options: [
      {
        text: `Look for Frank`,
        nextText: 192.14
      }
    ],
  },
  {// fails bf
    id: 191.8,
    text: 'You try to sneak off, but you get caught by a guard. Guard: "Hey!" You pick up a shovel',
    options: [
      {
        text: `Start combat`,
        nextText: 191.9
      }
    ],
  },
  {// combat, fails bf
    id: 191.9,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 11,
  },
  {//end combat, fails bf
    id: 191.12,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 191.13
      }
    ],
  },
  {// fails bf
    id: 191.13,
    text: 'You rush to the armoury trying not to get caught by any more guards.',
    options: [
      {
        text: `Continue`,
        nextText: 191.14
      }
    ],
  },
  {// bf
    id: 192.14,
    text: 'You see Frank in the back, he seems like he has been here for a bit. Frank: "Took you long enough, let\'s get going." He starts walking towards a secret passage and waves for you to follow.',
    options: [
      {
        text: `Follow Frank`,
        nextText: 192.15
      }
    ],
  },
  {// bf
    id: 192.15,
    text: 'You go into the passage; you realise that you are actually walking the walls. You can see everyone, some things you wished you didn\'t see. ',
    options: [
      {
        text: `Where are we going?`,
        nextText: 192.16
      },
      {
        text: `Are you sure we are going the right way?`,
        nextText: 192.16
      },
      {
        text: `Do not say anything, continue walking.`,
        nextText: 192.17
      }
    ],
  },
  {// bf
    id: 192.16,
    text: 'Frank: "Stay quiet, they can still hear us."',
    options: [
      {
        text: `Continue following Frank.`,
        nextText: 192.17
      }
    ],
  },
  {// dex check 12 bf
    id: 192.17,
    text: 'You make it to the end of the passage, but there are three guards right in front of the door. You try to sneak past with Frank.',
    options: [
      {
        text: `Sneak off`,
        nextText: 192.171
      }
    ],
  },
  {// dex check 12 bf
    id: 192.171,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Sneak off`,
        nextText: 192.22
      }
    ],
    diceRoll: 9
  },
  {// fail bf
    id: 192.18,
    text: 'Guard: "Stop right there!"',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 192.185
      }
    ],
  },
  {// combat, fails bf
    id: 191.185,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 12,
  },
  {//end combat, fails bf
    id: 191.19,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 191.21
      }
    ],
  },
  {// fail bf
    id: 191.21,
    text: 'You look around you to see where Frank is, but you can\'t find him. You do not have the time to stay around so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 192
      }
    ],
  },
  {// succeed bf
    id: 191.22,
    text: 'You stay close to the shadows and when you reach the shrubs, you start to crawl away. You try searching for Frank, but he is nowhere to be seen. You do not have the time to look so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 192
      }
    ],
  },
  {// dragon mentor
    id: 192,
    text: 'You run out of the fort, you keep on running for as long as you can until you reach a spot where you can rest. You turn around to see if anyone is following you, but you see none.',
    options: [
      {
        text: `Sleep`,
        nextText: 193
      },
      {
        text: `Continue Running`,
        nextText: 192
      }
    ],
  },
  {// sleep
    id: 193,
    text: 'You stop running and start looking for a place to sleep for the night. You find an area that has a small amount of rocks and as soon as you lay down you just go to sleep.',
    options: [
      {
        text: `Continue`,
        nextText: 194
      }
    ],
  },
  {// sleep
    id: 194,
    text: 'You wake up to the sunlight, the first time in over 5 years, but even though you want to just bask in the sun you know that you need to keep going so none finds you.',
    options: [
      {
        text: `Continue`,
        nextText: 199
      }
    ],
  },
  {// running
    id: 195,
    text: 'You start to walk around the forest, you have no clue where anything is or where you are so you continue just going straight. You walk until the sun goes down and some farther. You hear something in the bushes, but before you can react they jump you.',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 196
      }
    ],
  },
  {// combat, runs
    id: 196,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 12,
  },
  {//end combat, runs
    id: 197,
    text: 'Defeated Bear.',
    options: [
      {
        text: `Continue`,
        nextText: 198
      }
    ],
  },
  {//
    id: 198,
    text: 'You stab the bear in its neck and it falls over. You are completely exhausted and you fall over.',
    options: [
      {
        text: `Continue`,
        nextText: 194
      }
    ],
  },
  {//
    id: 199,
    text: 'You start to look for the main road, everything right now looks the same. Each tree is so tall and so similar that it is almost impossible to know where you are going, but after several hours of searching you run into a road. You decide to follow the road to see where it leads.',
    options: [
      {
        text: `Follow the road`,
        nextText: 200
      }
    ],
  },
  {//
    id: 200,
    text: 'You run into a merchant, at this point you are starving and tired. You have not gotten to eat or have an okay sleep since you left the fort. You walk up to the merchant:',
    options: [
      { //talk
        text: `Excuse me, can I catch a ride to the town of Lüdingfeld?`,
        nextText: 201
      },
      { //scare
        text: `Take out your weapon`,
        nextText: 202
      },
    ],
  },
  {// talk
    id: 201,
    text: 'Merchant: "Sure, I am actually going that way."',
    options: [
      {
        text: `Thank you, I am...Peirce.`,
        nextText: 203
      }
    ],
  },
  {// scare
    id: 202,
    text: 'Jack: "Take me to Lüdingfeld!" Merchant: "Please! Do not hurt, I will please."',
    options: [
      {
        text: `Good.`,
        nextText: 203,
      },
      {
        text: `Good.`,
        nextText: 703,

      }
    ],
    checkDog: 2
  },
  //
  //this is where the story would switch if they did not do anything with the dog
  //
  {//
    id: 203,
    text: 'You make it to Lüdingfeld, lucky you do not encounter any guards. You jump out of the cart before the merchant could notice. You do not want him to know where you are going or who you are.',
    options: [
      {
        text: `Rush to Marrys home. `,
        nextText: 204,
      },
      {
        text: `Rush to Marrys home. `,
        nextText: 404,
      },
      {
        text: `Rush to Marrys home. `,
        nextText: 704,
        requiredPlayer: (currentState) => { currentState.noDog === true }
      }
    ],
    checkDog: 3
  },
  {//
    id: 204,
    text: 'You find the dog, he looks at you, and wines. It looks more skinny, even more skinny than the first time you meet it. The home is completely dead. Something is off.',
    options: [
      {
        text: `Walk in `,
        nextText: 205
      }
    ],
  },
  {//
    id: 205,
    text: 'You run into the home looking for Marry. You find her dead in the centre of the room surrounded by bandits. As you go to investigate her body you see her necklace with a weird glowing jade. Last time you saw her, she had nothing of the sort. You take it off her neck to try to further understand why this happened. The bandits weren/’t ever this aggressive and only stuck to the roads.',
    options: [
      {
        text: `Continue`,
        nextText: 206
      }
    ],
  },
  {//
    text: 'You Look for more clues. You see a note next to her bed, a picture on the wall to the left of the door, and she has something on her desk. You see that she has something in her hands, it looks like a jade.',
    options: [
      {
        text: `Note`,
        nextText: 207
      },
      {
        text: `Painting`,
        nextText: 208
      },
      {
        text: `Desk`,
        nextText: 209
      },
      {
        text: `Jade`,
        nextText: 211
      }
    ],
  },
  {//
    id: 207,
    text: 'Marrys Note: "The ‘Lung Jade’ is a very rare item only found in the caves of a dragon’s den. I once thought it was just something told to children to stay out of trouble, but now… The powers of the jade can only be fully used by a dragon. From what I understand you can still use it by using it like any other metal, but something this rare and beautiful shouldn’t be used on a weapon of man."',
    options: [
      {
        text: `Examine`,
        nextText: 208
      }
    ],
  },
  {//
    id: 208,
    text: 'Jack: "I have heard of these beasts. They were thought to be the protectors of the lands, Gods that used ‘mortal’ bodies. They were said to ask for tributes and give great rewards to people that they deemed worthy. Unfortunately, after the first invasion many of them left the island. This was the first sign of the end of the war. I always assumed it was legends and just stories to tell, never did I think that it could be reality. The power that someone can possess with just one of these is unimaginable."',
    options: [
      {
        text: `Painting`,
        nextText: 209
      },
      {
        text: `Desk`,
        nextText: 210
      },
      {
        text: `Jade`,
        nextText: 211
      }
    ],
  },
  {//
    id: 209,
    text: 'You go towards the painting on the wall. It shows a man handing the jade to a dragon. Beautiful, but doesn’t tell you very much about what it does or how to use it.',
    options: [
      {
        text: `Note`,
        nextText: 207
      },
      {
        text: `Desk`,
        nextText: 210
      },
      {
        text: `Jade`,
        nextText: 211
      }
    ],
  },
  {//
    id: 210,
    text: 'Marry: "I should have never taken this jade. To whoever reads this, please take the stone to the mountain in the west. This power is too powerful for one person. If you do use this jade, nothing but bad luck will follow you. Goodluck. PS: if you run into a man named Jack tell him what happened here."',
    options: [
      {
        text: `Note`,
        nextText: 207
      },
      {
        text: `Painting`,
        nextText: 208
      },
      {
        text: `Jade`,
        nextText: 211
      }
    ],
  },
  {//
    id: 211,
    text: 'You look down and grab the jade. You walk to the entrance of the house to get some fresh air. When you squat down the dog snatches the jade, before you have a chance to get the jade back the dog starts to shake. It transforms...',
    options: [
      {
        text: `Buddy ? `,
        nextText: 212
      }
    ],
  },
  {//
    id: 213,
    text: 'Dragon: "Hello Jack. Thank you for your kindness. I know what you seek, I can help you in your journey. I know this must be a lot to process. I’ll explain."',
    options: [
      {
        text: `Continue`,
        nextText: 214
      }
    ],
  },
  {//
    id: 214,
    text: 'Dragon: "I am one of the only remaining Gods in this land and have been trapped in a dog\'s body for trying to support your kin. I have been searching for a way to be released from that prison. I was on my way to the capital to see if I could find a way in another land, but then I met you. I then followed you around, waited for you to make your way across the jade. You see, I couldn’t get myself. I needed a human with the feeling of revenge to bring it to me. Your mentor was too light hearted and couldn’t hold its hatred. She sadly fell to the jade’s curse."',
    options: [
      {
        text: `What? So that means you were the dog ? `,
        nextText: 215
      }
    ],
  },
  {//
    id: 215,
    text: 'Dragon: "Come with me and I will be able to train you to be able to enact your revenge."',
    options: [
      {
        text: `Okay, it does not seem like I have anyone else`,
        nextText: 216
      }
    ],
  },
  {//
    id: 216,
    text: 'Dragon: "Come along." You see as the dragon raises its wings and starts to fly up.',
    options: [
      {
        text: `Follow`,
        nextText: 217
      }
    ],
  },
  {//
    id: 217,
    text: 'You follow the dragon the best you can, you travel through a part of the forest you have never seen before. You think about asking where you were going but you thought better. As you continue through the path seems to be never ending, it feels like you have been walking in circles. Every tree looks the same, the only changing aspect of the path was you and the dragon.',
    options: [
      {
        text: `Keep up`,
        nextText: 218
      }
    ],
  },
  {//
    id: 218,
    text: 'You finally make it out of the forest to the foot of a mountain. It’s known for being almost impossible to climb and none has been here since before the war, or at least that’s what you’ve been told.',
    options: [
      {
        text: `Okay now what ? `,
        nextText: 219
      }
    ],
  },
  {//
    id: 219,
    text: 'Dragon: "Get on my back and I will fly you up the mountain." The dragon bends its wing to allow you to climb on top of it. Then it spreads its wings then takes you up the mountain. When you get on top the dragon tells of what training you will go through, surprisingly you cannot seem to remember much of what it said, but understood the task.',
    options: [
      {
        text: `Train`,
        nextText: 220
      }
    ],
  },
  {// ability score improvement
    id: 220,
    text: 'Dragon: "Let it begin" He makes you practise fighting sprites and he teaches you meditation. You train with it, for what feels like months, but the daylight cycle did not change, it confuses you but at least you now have the training to defeat Henry.',
    options: [
      {
        text: `Train`,
        nextText: 221
      }
    ],
  },
  {//
    id: 221,
    text: 'Dragon: "It\'s time for you to go for round two against Henry. You are ready, just remember this. If you do decide to go through with your revenge you will not survive to live in your glory."',
    options: [
      {
        text: `Thank you will I take that to mind`,
        nextText: 222
      }
    ],
  },
  {//
    id: 222,
    text: 'Dragon: "I will help you on your feat. I can distract the archers and gun men while you find Henry and take your revenge."',
    options: [
      {
        text: `Hmmm, this could work.`,
        nextText: 223
      },
      {
        text: `Thank you for your help.`,
        nextText: 223
      }
    ],
  },
  {//
    id: 224,
    text: 'The dragon lets you ride on his back again, but this time you fly over lands that you recognized. You turn around but the mountain you were at is completely gone, you have time to worry about something like that. This will be your last attempt at getting your revenge. You have learnt so much and done so much to get here, it is time to use everything you have learnt.',
    options: [
      {
        text: `Prepare`,
        nextText: 225
      }
    ],
  },
  {//
    id: 225,
    text: 'The dragon lands in the entrance of your once great town of Lüdingfeld. The last time you were here it was freshly burnt with smoke and ash everywhere, but now it\'s overgrown with weeds and looks like old ruins. You remember all the good times.',
    options: [
      {
        text: `Continue`,
        nextText: 226
      }
    ],
  },
  {//
    id: 226,
    text: 'You walk past the training area. You remember how you were first taught how to use a sword by your dad here, he made me fight for hours until I could everyone there. You were going to train your son the same way, but you never got that chance... that right.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 227
      }
    ],
  },
  {//
    id: 227,
    text: 'You look at the market area, the place that you spent most of your time in town being in your adulthood. You remember the day that you met your wife, Jessy, it was a rainy day and she was by herself. I offered my coat and walked her home. It was a beautiful, or at least to you it was.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 228
      }
    ],
  },
  {//
    id: 228,
    text: 'You walk past your home. The place that you felt the safest at, it\'s ironic that it is also the place that killed everything you loved. You continue forward, you have no time to mourn. If you get out of this alive you will bring flowers to their graves.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 229
      }
    ],
  },
  {//
    id: 229,
    text: 'You get into vision of the manor. Jack: "Okay here is the plan you start flying to get their attention and try to keep it."',
    options: [
      {
        text: `Thank you for everything.`,
        nextText: 230
      },
      {
        text: `Until we meet again.`,
        nextText: 230
      },
    ],
  },
  {//
    id: 230,
    text: 'The dragon starts to rise, and starts to fly towards the manor. You can hear the screams from all the way across the valley. You make your way to the manor by foot, it is not too different from his other home, but it is bigger and does not have the garden.',
    options: [
      {
        text: `Confront guards`,
        nextText: 231
      }
    ],
  },
  {//
    id: 231,
    text: 'Guard1: "Wait who are you, is that with you?" Guard2: "He\'s a demon, GET HIM!" You see as the first guard is terrified and there was a third but he ran back inside the manor to support the other men.',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 232
      }
    ],
  },
  {// combat
    id: 232,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 14,
  },
  {//end combat
    id: 233,
    text: 'Defeated guards.',
    options: [
      {
        text: `Continue`,
        nextText: 234
      }
    ],
  },
  {//
    id: 234,
    text: 'You strike down the guards, you see a picture fall out of one of their pockets.',
    options: [
      {
        text: `Push forward`,
        nextText: 236
      },
      {
        text: `Investigate the picture`,
        nextText: 235
      }
    ],
  },
  {//
    id: 235,
    text: 'You look closer at the picture, it\'s a drawing of the guards\' kids. You are taken back a little, maybe this isn\'t worth taking revenge on everyone. You then snap out of it remembering what happened to you.',
    options: [
      {
        text: `Continue pushing forward`,
        nextText: 236
      }
    ],
  },
  {//
    id: 236,
    text: 'You walk over the dead guards, with everyone so focused on the dragon none pays attention to you, you kick open the doors to the manor, you walk into another fight, but these seems like the hardest one yet.',
    options: [
      {
        text: `pull out your weapon`,
        nextText: 237
      }
    ],
  },
  {// combat
    id: 237,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 14,
  },
  {// end combat
    id: 238,
    text: 'You cut through the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 239
      }
    ],
  },
  {//
    id: 239,
    text: 'You are feeling hurt, but you still have a job to finish. You run up the stairs to look for where Henry is.',
    options: [
      {
        text: `Library`,
        nextText: 240
      },
      {
        text: `Kitchen`,
        nextText: 244
      },
      {
        text: `Guest Room`,
        nextText: 245
      }
    ],
  },
  {// library
    id: 240,
    text: 'You walk into the library, it\'s a large room with enough books to suffocate someone with. You see someone sitting next to the fireplace. You remember this boy from Henry\'s dinner, it\'s his son Johnny.',
    options: [
      {
        text: `Hey, Johnny is it ? `,
        nextText: 241
      },
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 242
      },
      {
        text: `Leave quietly`,
        nextText: 243
      }
    ],
  },
  {// library
    id: 241,
    text: 'Jack: "Johnny, I have business with your dad, do you know where he is?" The boy looks at you with the same terror from last time, he does not seem like he can form a sentence.',
    options: [
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 242
      },
      {
        text: `Leave quietly`,
        nextText: 243
      }
    ],
  },
  {//
    id: 242,
    text: 'Johnny: "PLEASE! Please, please, please, please... it\'s just a nightmare, please" The boy can not say anything no matter what you do.',
    options: [
      {
        text: `Leave quietly`,
        nextText: 243
      }
    ],
  },
  {// library
    id: 243,
    text: 'You decide to walk out, but that boy’s eyes will haunt you for a bit.',
    options: [
      {
        text: `Kitchen`,
        nextText: 244
      },
      {
        text: `Guest Room`,
        nextText: 245
      },
      {
        text: `Stairs`,
        nextText: 246
      },
    ],
  },
  {//
    id: 244,
    text: 'You walk into the kitchen, there is nothing but cooks that are huddled in a corner, you pair your head around the door to see if someone is eating, but there is no sign of Henry.',
    options: [
      {
        text: `Library`,
        nextText: 240
      },
      {
        text: `Guest Room`,
        nextText: 245
      },
      {
        text: `Stairs`,
        nextText: 246
      },
    ],
  },
  {//
    id: 245,
    text: 'You walk into a room with only one bed. It appears to be pretty empty and there is no sign of anything in here.',
    options: [
      {
        text: `Library`,
        nextText: 240
      },
      {
        text: `Kitchen`,
        nextText: 244
      },
      {
        text: `Stairs`,
        nextText: 246
      },
    ],
  },
  {//
    id: 246,
    text: 'You walk back to the stair from before, you see Henry at the bottom. You cannot contain yourself, but you keep enough to control to not run at him.',
    options: [
      {
        text: `Continue`,
        nextText: 247
      }
    ],
  },
  {//
    id: 247,
    text: 'Henry: "JACK! WHAT HAVE YOU DONE!? WHAT DID I DO!?"',
    options: [
      {
        text: `You destroyed everything, I will give you the same fate!`,
        nextText: 248
      },
      {
        text: `You burned down my town… my home… my life.`,
        nextText: 249
      },
      {
        text: `Stay silent.`,
        nextText: 250
      }
    ],
  },
  {//
    id: 248,
    text: 'Henry: "What?"',
    options: [
      {
        text: `You want to lie then? So be it.`,
        nextText: 251
      }
    ],
  },
  {//
    id: 249,
    text: 'I’m sorry I don’t remember that, are you sure it was me?',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 251
      }
    ],
  },
  {//
    id: 250,
    text: 'Swings at you.',
    options: [
      {
        text: `Swing at him`,
        nextText: 251
      }
    ],
  },
  {// combat
    id: 251,
    text: 'This is the final showdown, make it count.',
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
    startCombat: 15,
  },
  {// end combat
    id: 252,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 253, //0-2 with dog
      },
      {
        text: `What will you do? `,
        nextText: 453, // following dogs 3 and 4
      },
      {
        text: `What will you do? `,
        nextText: 753,
      }
    ],
    checkDog: 4
  },
  {//
    id: 253,
    text: 'You look at Henry, this is your chance take your revenge or do what you know is right.',
    options: [
      {
        text: `Kill`,
        nextText: 254
      },
      {
        text: `Spare`,
        nextText: 256
      }
    ],
  },
  {// kill
    id: 254,
    text: 'You look at Henry, you try to find a reason to keep him alive, but nothing comes to mind. You lift your weapon above your head and get hitting him with it until he is died.',
    options: [
      {
        text: `What now ? `,
        nextText: 255
      }
    ],
  },
  {// killing, bad end
    id: 255,
    text: 'You do not feel like anything changed, was this really the right path? Before you can think about what just happened you feel a sharp pain in your upper chest. You turn around to see Johnny, your vision becomes blurred until it reaches pitch black.',
    options: [
      {
        text: `Continue`,
        nextText: -1
      }
    ],
  },
  {// spare
    id: 256,
    text: 'You remember his son; do you really want to be the same monster as him? You throw your blade in front of Henry and run out to get out.',
    options: [
      {
        text: `Exit`,
        nextText: 257
      }
    ],
  },
  {// spare
    id: 247,
    text: 'You run outside to see fire everywhere, the dragon is still distracting the guards. You run into the forest, some arrows heading towards you, but you are too far for them to have good aim. The dragon still fought on.',
    options: [
      {
        text: `Catch your breath`,
        nextText: 192
      }
    ],
  },
  {// spare
    id: 248,
    text: 'You pick up some flowers from the weeds near your home and put them on top of your family\'s grave. Ties come across your face, you fall to the floor and moan.',
    options: [
      {
        text: `...`,
        nextText: 192
      }
    ],
  },
  {// spare
    id: 248,
    text: 'You get enough strength to get up and move on, tell them goodbye and start to take over Mary\'s business and become a blacksmith. You know one day someone will come after you, but at least you can live these days in peace.',
    options: [
      {
        text: `Continue`,
        nextText: 192
      }
    ],
  },
  {// good ending
    id: 248,
    text: 'THE END',
    options: [
      {
        text: `GOOOD ENDING`,
        nextText: -1
      }
    ],
  },
  // 
  // 
  // ADD region later 
  // do not do anything with dog
  // keep dog parts until the end
  // 
  //
  {
    id: 338,
    text: 'You look at it and continue down the path, you see as it starts to follow you. You let it follow, but you have an uneasy feeling.',
    options: [
      {
        text: `Continue`,
        nextText: 40,
      }
    ],
  },
  //skip line
  {//
    id: 403,
    text: 'You make it to Lüdingfeld, lucky you do not encounter any guards. You jump out of the cart before the merchant could notice. You do not want him to know where you are going or who you are.',
    options: [
      {
        text: `Rush to Marrys home. `,
        nextText: 404
      }
    ],
  },
  {//
    id: 404,
    text: 'You find no dog and the house seems so empty. You expected a greeting form Marry, but it does not seem like she\'s here. The home is completely dead. Something is off.',
    options: [
      {
        text: `Walk in `,
        nextText: 405
      }
    ],
  },
  {//
    id: 405,
    text: 'You run into the home looking for Marry. You find her dead in the centre of the room surrounded by bandits. As you go to investigate her body you see her necklace with a weird glowing Jade. Last time you saw her, she had nothing of the sort. You take it off her neck to try to further understand why this happened. The bandits weren/’t ever this aggressive and only stuck to the roads.',
    options: [
      {
        text: `Continue`,
        nextText: 406
      }
    ],
  },
  {//
    text: 'You look for more clues. You see a note next to her bed, a picture on the wall to the left of the door, and she has something on her desk. You ',
    options: [
      {
        text: `Note`,
        nextText: 407
      },
      {
        text: `Painting`,
        nextText: 408
      },
      {
        text: `Desk`,
        nextText: 409
      },
      {
        text: `Jade`,
        nextText: 411
      }
    ],
  },
  {//
    id: 407,
    text: 'Marrys Note: "The ‘Lung Jade’ is a very rare item only found in the caves of a dragon’s den. I once thought it was just something told to children to stay out of trouble, but now… The powers of the jade can only be fully used by a dragon. From what I understand you can still use it by using it like any other metal, but something this rare and beautiful shouldn’t be used on a weapon of man."',
    options: [
      {
        text: `Examine`,
        nextText: 408
      }
    ],
  },
  {//
    id: 408,
    text: 'Jack: "I have heard of these beasts. They were thought to be the protectors of the lands, Gods that used ‘mortal’ bodies. They were said to ask for tributes and give great rewards to people that they deemed worthy. Unfortunately, after the first invasion many of them left the island. This was the first sign of the end of the war. I always assumed it was legends and just stories to tell, never did I think that it could be reality. The power that someone can possess with just one of these is unimaginable."',
    options: [
      {
        text: `Painting`,
        nextText: 409
      },
      {
        text: `Desk`,
        nextText: 410
      },
      {
        text: `Jade`,
        nextText: 411
      }
    ],
  },
  {//
    id: 409,
    text: 'You go towards the painting on the wall. It shows a man handing the jade to a dragon. Beautiful, but doesn’t tell you very much about what it does or how to use it.',
    options: [
      {
        text: `Note`,
        nextText: 407
      },
      {
        text: `Desk`,
        nextText: 410
      },
      {
        text: `Jade`,
        nextText: 411
      }
    ],
  },
  {//
    id: 410,
    text: 'Marry: "I should have never taken this jade. To whoever reads this, please take the stone to the mountain in the west. This power is too powerful for one person. If you do use this jade, nothing but bad luck will follow you. Good luck. PS: if you run into a man named Jack tell him what happened here."',
    options: [
      {
        text: `Note`,
        nextText: 407
      },
      {
        text: `Painting`,
        nextText: 408
      },
      {
        text: `Jade`,
        nextText: 411
      }
    ],
  },
  {//
    id: 411,
    text: 'You look down and grab the little chain that seems like there was something attached to it. You think that whoever came here got what they wanted and stole the jade from her. When you are finished with Henry you will avenge her death as well.',
    options: [
      {
        text: `Go to bed for the night`,
        nextText: 412
      }
    ],
  },
  {//
    id: 413,
    text: 'You go into the master bed room and lay on the bed, you have never felt this before, this comfort. You almost immediately fall asleep without a second thought.',
    options: [
      {
        text: `Wake up`,
        nextText: 414
      }
    ],
  },
  {//
    id: 414,
    text: 'You get up to having a bit of the light pear from the window, you walk outside. The one thing you could have slept without was that smell, but it doesn\'t matter.',
    options: [
      {
        text: `Investigate the home`,
        nextText: 415
      }
    ],
  },
  {//increase con to max
    id: 415,
    text: 'Your renter the home to look for something can help you in your journey, you go into the armoury to see if she had any good armour. Looks like she has just made new armour, you take it.',
    options: [
      {
        text: `Put on armour`,
        nextText: 416
      }
    ],
  },
  {//
    id: 416,
    text: 'You feel ready, you feel like you can take any hit in this armour, it’s amazing. You can do without the noise, but isn\'t a huge deal. You start walking towards your old town.',
    options: [
      {
        text: `Follow`,
        nextText: 417
      }
    ],
  },
  {//
    id: 417,
    text: 'You enter the village, you are used to it been burnt, but now it\'s just overgrown. You start walking around to try to spot the manor.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 426
      }
    ],
  },
  {//
    id: 426,
    text: 'You walk past the training area. You remember how you were first taught how to use a sword by your dad here, he made me fight for hours until I could everyone there. You were going to train your son the same way, but you never got that chance... that right.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 427
      }
    ],
  },
  {//
    id: 427,
    text: 'You look at the market area, the place that you spent most of your time in town being in your adulthood. You remember the day that you met your wife, Jessy, it was a rainy day and she was by herself. I offered my coat and walked her home. It was a beautiful, or at least to you it was.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 428
      }
    ],
  },
  {//
    id: 428,
    text: 'You walk past your home. The place that you felt the safest at, it\'s ironic that it is also the place that killed everything you loved. You continue forward, you have no time to mourn. If you get out of this alive you will bring flowers to their graves.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 429
      }
    ],
  },
  {//
    id: 429,
    text: 'You get into vision of the manor. You stay out of sight for the most part, they cannot really see you from where you are at. The manor across the valley, you just need to cross',
    options: [
      {
        text: `Cross valley`,
        nextText: 430
      },
    ],
  },
  {//
    id: 431,
    text: 'Guard 1: "Wait who are you, is that with you?" Guard2: "He\'s an intruder, GET HIM!" They pull out their swords',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 432
      }
    ],
  },
  {// combat
    id: 432,
    text: 'You have been waiting to get some angry out',
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
    startCombat: 14,
  },
  {//end combat
    id: 433,
    text: 'Defeated the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 434
      }
    ],
  },
  {//
    id: 434,
    text: 'You strike down the guards, you see a picture fall out of one of their pockets.',
    options: [
      {
        text: `Push forward`,
        nextText: 436
      },
      {
        text: `Investigate the picture`,
        nextText: 435
      }
    ],
  },
  {//
    id: 435,
    text: 'You look closer at the picture, it\'s a drawing of the guards\' kids. You are taken back a little, maybe this isn\'t worth taking revenge on everyone. You then snap out of it remembering what happened to you.',
    options: [
      {
        text: `Continue pushing forward`,
        nextText: 436
      }
    ],
  },
  {//
    id: 436,
    text: 'You walk over the dead guards; you try to stick to the walls to keep out of distance. When you make it near the front door, you slowly open it and slide right in. You turn around to see three different guards, they pull out their weapons.',
    options: [
      {
        text: `pull out your weapon`,
        nextText: 237
      }
    ],
  },
  //skip scene
  {// end combat
    id: 452,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 453
      }
    ],
  },
  {//
    id: 453,
    text: 'You look at Henry, you try to find a reason to keep him alive, but nothing comes to mind. You lift your weapon above your head and get hitting him with it until he is died.',
    options: [
      {
        text: `Kill`,
        nextText: 455
      },
    ],
  },
  {// killing, bad end
    id: 455,
    text: 'You do not feel like anything changed, was this really the right path? Before you can think about what just happened you feel a sharp pain in your upper chest. You turn around to see Johnny, your vision becomes blurred until it reaches pitch black.',
    options: [
      {
        text: `Continue`,
        nextText: 1
      }
    ],
  },
  //  
  // 
  // ADD region later 
  // Without the dog
  // 650 1, 733 2, 737 3, 752 4, 761 5,
  // 
  // 
  {
    id: 638,
    text: 'You look at the dog. Jack: "Go away", you see as the dog starts to walk away. Could it really understand you that well? Well it’s too late now, you continue down the road by yourself, but this is where you should begin to be more cautious.',
    options: [
      {
        text: `Continue`,
        nextText: 640,
      }
    ],
  },// this is what happens if you do not have dog following
  {
    id: 640,
    text: 'You start walking into the forest, you have heard many stories about what lurks within, but you are unsure what could be true. What is true is that they are words of bandits having a great influence over the region. You should tread carefully from now on.',
    options: [
      {
        text: `Continue`,
        nextText: 641
      }
    ],
  },
  {
    id: 641,
    text: 'You feel like you have been walking for days, you feel an uneasy chill up your spine. You look around and you see a merchant caravan, you get closer to see what has happened, it feels like everything has gone quiet.',
    options: [
      {
        text: `Investigate`,
        nextText: 41.1
      }
    ],
  },
  {
    id: 643,
    text: 'As you get closer to the cart, you see a couple arrows stuck in the cart. You take it out to examine the arrows. You hear something in front of you, but you can only make out some shadowy figures.',
    options: [
      {
        text: `Yell out.`,
        nextText: 644
      },
      {
        text: `Wait to meet.`,
        nextText: 645
      },
      {
        text: `Hide.
    	[Check]`,
        nextText: 647
      }
    ],
  },
  {
    id: 644, //talking
    text: 'Jack: "Hey, do you know what happened here?"',
    options: [
      {
        text: `Wait for Response.`,
        nextText: 645
      }
    ],
  },
  {
    id: 645, //talking
    text: 'You see them run at you, you prepare to take out your weapon you first think of warning them, but they are too quick. It only looks like two of them so you might have a chance',
    options: [
      {
        text: `Take out weapon.`,
        nextText: 646
      }
    ],
  },
  {
    id: 646, //stand off
    text: 'You stand there and wait, you continue to examine the cart and you finally get a good look at the people. You realise that they are bandits, luckily there is only two of them so you can probably take them.',
    options: [
      {
        text: `Continue`,
        nextText: 649
      }
    ],
  },
  {
    id: 647, //sneak
    text: 'You get off the road on try to stay out of sight, you may be able to sneak past.',
    options: [
      { //roll dice to see if you can sneak through dex if failed then becomes in combat
        text: `Continue`,
        nextText: 647
      }
    ],
    diceRoll: 10
  },
  { //sneak
    id: 648, //succeed on dex roll
    text: 'You were able to sneak past the bandits; they would have been a rough fight for you. You wait for a little bit before continuing going.',
    options: [
      {
        text: `Continue`,
        nextText: 651
      }
    ],
  },
  { //sneak
    id: 642, //fails on dex roll
    text: 'You start to try to sneak past them but you step on some branches. The bandits stop to look at you and they take out their blades. You take out your weapon to get ready to fight, but you can always talk your way out.',
    options: [
      {
        text: `Continue`,
        nextText: 649
      }
    ],
  },
  { //combat
    id: 649,
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
    id: 650, //end of combat
    text: 'You have won',
    options: [
      {
        text: `Leave as the victor`,
        nextText: 651
      }
    ],
  },
  { //start after combat
    id: 651,
    text: 'You walk off with a sense of relief, you are happy to be alive but you do not know what you should feel. You just killed two people, you shake off the feeling and continue on your path, you have to get used it... you know there is more to come.',
    options: [
      {
        text: `Continue on the Path`,
        nextText: 652
      }
    ],
  },
  {
    id: 652,
    text: 'You clean yourself and settle for the night. You get some firewood and try to remember what your uncle told you, but as you try to remember the only thoughts that come to mind are the memories of the horror you went through. You go to bed without a fire, but you are confident thing will happen.',
    options: [
      {
        text: `Continue`,
        nextText: 653
      }
    ],
  },
  {
    id: 653,
    text: 'You wake up, but not where you remembered you being, the forest is denser and there is a smell of smoke. You get up thinking that you were about to burn down the forest, but you quickly remembered that you did not make a fire, so who did? You get up, you can see that the smoke is coming from an area not too far from here, but you also smell something.',
    options: [
      {
        text: `What is that smell?`,
        nextText: 656
      },
      {
        text: `Continue on your path.`,
        nextText: 657
      }
    ],
  },
  {//
    id: 656,
    text: 'You get up and start to follow your nose, it leads you to a house that has smoke coming from it.',
    options: [
      {
        text: `Continue`,
        nextText: 658
      }
    ],
  },
  {//
    id: 657,
    text: 'You look around you to see that there is still a path, so you get up and you start to follow the path. The path leads you to a house, but you were expecting a town. By the looks of it, your map seems to be outdated.',
    options: [
      {
        text: `Continue`,
        nextText: 58
      }
    ],
  },

  //
  //skips line from Marry all the way to the prison till the prison break out.
  //
  {//
    id: 703,
    text: 'You make it to Lüdingfeld, lucky you do not encounter any guards. You jump out of the cart before the merchant could notice. You do not want him to know where you are going or who you are.',
    options: [
      {
        text: `Rush to Marrys home. `,
        nextText: 704,
      }
    ],
  },
  {//
    id: 704,
    text: 'You find nothing, not a single sign of life, the house feels so empty. You expected a greeting form Marry, but it does not seem like she\'s here. The home is completely dead. Something is off.',
    options: [
      {
        text: `Walk in `,
        nextText: 705
      }
    ],
  },
  {//
    id: 705,
    text: 'You run into the home looking for Marry. You find her dead in the centre of the room surrounded by bandits. As you go to investigate her body you see her necklace with a weird glowing jade. Last time you saw her, she had nothing of the sort. You take it off her neck to try to further understand why this happened. The bandits weren/’t ever this aggressive and only stuck to the roads.',
    options: [
      {
        text: `Continue`,
        nextText: 706
      }
    ],
  },
  {//
    text: 'You look for more clues. You see a note next to her bed, a picture on the wall to the left of the door, and she has something on her desk. You ',
    options: [
      {
        text: `Note`,
        nextText: 707
      },
      {
        text: `Painting`,
        nextText: 709
      },
      {
        text: `Desk`,
        nextText: 710
      },
      {
        text: `Jade`,
        nextText: 711
      }
    ],
  },
  {//
    id: 707,
    text: 'Marrys Note: "The ‘Lung Jade’ is a very rare item only found in the caves of a dragon’s den. I once thought it was just something told to children to stay out of trouble, but now… The powers of the jade can only be fully used by a dragon. From what I understand you can still use it by using it like any other metal, but something this rare and beautiful shouldn’t be used on a weapon of man."',
    options: [
      {
        text: `Examine`,
        nextText: 709
      }
    ],
  },
  {//
    id: 708,
    text: 'Jack: "I have heard of these beasts. They were thought to be the protectors of the lands, Gods that used ‘mortal’ bodies. They were said to ask for tributes and give great rewards to people that they deemed worthy. Unfortunately, after the first invasion many of them left the island. This was the first sign of the end of the war. I always assumed it was legends and just stories to tell, never did I think that it could be reality. The power that someone can possess with just one of these is unimaginable."',
    options: [
      {
        text: `Painting`,
        nextText: 709
      },
      {
        text: `Desk`,
        nextText: 710
      },
      {
        text: `Jade`,
        nextText: 711
      }
    ],
  },
  {//
    id: 709,
    text: 'You go towards the painting on the wall. It shows a man handing the jade to a dragon. Beautiful, but doesn’t tell you very much about what it does or how to use it.',
    options: [
      {
        text: `Note`,
        nextText: 707
      },
      {
        text: `Desk`,
        nextText: 710
      },
      {
        text: `Jade`,
        nextText: 711
      }
    ],
  },
  {//
    id: 710,
    text: 'Marry: "I should have never taken this jade. To whoever reads this, please take the stone to the mountain in the west. This power is too powerful for one person. If you do use this jade, nothing but bad luck will follow you. Good luck. PS: if you run into a man named Jack tell him what happened here."',
    options: [
      {
        text: `Note`,
        nextText: 707
      },
      {
        text: `Painting`,
        nextText: 709
      },
      {
        text: `Jade`,
        nextText: 711
      }
    ],
  },
  {//
    id: 711,
    text: 'You look at her hand to see that she is holding the jade. You pick it up and inspect it. You read that these jewels can be infused with weapons to make them more powerful, but they often can consume the person using it. You do not care for the consequences, no matter the cost you will get your revenge.',
    options: [
      {
        text: `Walk to the smithy`,
        nextText: 713
      }
    ],
  },
  {//
    id: 713,
    text: 'You walk outside, you didn\'t realize it until now, but the smell in that house was horrible. You start up the smithy like how Mary taught you, you grab a bucket and put in the jade into it. You then put the bucket into the smithy and let it smelt down the jade.',
    options: [
      {
        text: `Wait`,
        nextText: 714
      }
    ],
  },
  {// 
    id: 714,
    text: 'You make the iron cast of your weapon, you had to melt down the weapon, but you know that this blade will be even better.',
    options: [
      {
        text: `Wait`,
        nextText: 715
      }
    ],
  },
  {//increase an ability score to max twice
    id: 715,
    text: 'You take out the molten jade and pour it into the iron cast. You then start the process of cooling it and forming it to make your weapon.',
    options: [
      {
        text: `Forge`,
        nextText: 716
      }
    ],
  },
  {//
    id: 716,
    text: 'You can feel the power from the weapon, it’s almost too much, but you get a grip. You know that you are ready to defeat everything that comes your way. This time you will be sure that you can get your revenge.',
    options: [
      {
        text: `Go to your old home`,
        nextText: 417
      }
    ],
  },
  //
  //
  {// end combat
    id: 752,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 753
      }
    ],
  },
  {//
    id: 753,
    text: 'You look at Henry, you try to find a reason to keep him alive, but nothing comes to mind. You lift your weapon above your head and get hitting him with it until he is died.',
    options: [
      {
        text: `Kill`,
        nextText: 755
      },
    ],
  },
  //
  //
  {// this is where you have to return to this story
    id: 755,
    text: 'You pull back your weapon, but you yearn for more, this is not normal. You have only killed when you had to, but you have the urge to kill everything in the home. You lose control.',
    options: [
      {
        text: `Stop the urge`,
        nextText: 756
      }
    ],
  },
  {// 
    id: 756,
    text: 'You walk up the stairs were you found the library and you set it ablaze, you block each door and to make sure they cannot escape you block the hallway as well. You then start to walk out of the house.',
    options: [
      {
        text: `Stop the urge`,
        nextText: 757
      }
    ],
  },
  {// Roll con save of 10
    id: 757,
    text: 'Before you make it out to meet your fate to the guards, you stumble on one of Henry\'s sons. You sit there, you desperately trying to muster enough strength to walk past, but you have that itch again. Was this from that jade?',
    options: [
      {
        text: `STOP!
        [Check (con)]`,
        nextText: 759
      }
    ],
  },
  {// Roll con save of 10
    id: 757,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `STOP!`,
        nextText: 759
      }
    ],
    diceRoll: 10
  },
  {// fails, END 
    id: 758,
    text: 'You cannot stop it, you lose control. You blackout and wake up to the horrid sight. You fall to your knees, you try throwing the blade away, but your hand doesn\'t listen. Your hand lifts, you feel a brief sharp pain, then nothing.',
    options: [
      {
        text: `Bad Ending`,
        nextText: -1
      }
    ],
  },
  {// Succeeds
    id: 759,
    text: 'You pull yourself together and watch as the boy trembles with fear, before running away. What have you turned into, your worse than Henry. You open up the door to see an army of guards.',
    options: [
      {
        text: `Ready yourself`,
        nextText: 760
      }
    ],
  },
  {// succeeds
    id: 760,
    text: 'This is your last stand, your last action.',
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
    startCombat: 15,
  },
  {// end combat, END GAME
    id: 761,
    text: 'You will not see this, if you do then wow. How did you do it?',
    options: [
      {
        text: `What will you do? `,
        nextText: 762
      }
    ],
  },
  {// killing, should have died ending
    id: 762,
    text: 'Well congrats on winning the most rigged part of the game. Did you enjoy it? Well I\'ll just give the button to leave back the beginning. You should have kept the dog; this is one of the worse endings. There will be more to come though so stay tuned.',
    options: [
      {
        text: `Congrats, you live.`,
        nextText: -1
      }
    ],
  },
]
startGame()