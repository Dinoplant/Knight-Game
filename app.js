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
const screen = document.getElementById(`screen`)
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

  // have dog
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
  } else if (textNode.startCombat === 10 && combatEnded === false) { //starts the combat 10
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
  }
  else if (textNode.startCombat === 16 && combatEnded === false) { //starts the combat 15
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 252;
    startCombat();
    combat(35, 1, 2); //ending id
  }
  //follow dog
  if (textNode.startCombat === 17 && combatEnded === false) { //starts the combat first
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 350;
    startCombat();
    combat(6, 7, 1); //ending id
  } else if (textNode.startCombat === 18 && combatEnded === false) { //starts the combat 2nd WRONG
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 383; //WHAT
    startCombat();
    combat(5, 10, 13); //ending id
  } else if (textNode.startCombat === 19 && combatEnded === false) { //starts the combat third
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 399;
    startCombat();
    combat(18, 1, 2); //ending id
  } else if (textNode.startCombat === 19 && combatEnded === false) { //starts the combat 4 WRONG
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 410; //WHAT
    startCombat();
    combat(19, 23, 2); //ending id
  } else if (textNode.startCombat === 20 && combatEnded === false) { //starts the combat 5
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 424;
    neededDeath = true
    startCombat();
    combat(34, 1, 2); //ending id
  } else if (textNode.startCombat === 21 && combatEnded === false) { //starts the combat 6
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 489.9; //leaves with Brain and only fights one gaurd
    startCombat();
    combat(15, 1, 2); //ending id
  } else if (textNode.startCombat === 22 && combatEnded === false) { //starts the combat 7
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 489.91;
    startCombat();
    combat(15, 22, 2); //ending id
  } else if (textNode.startCombat === 23 && combatEnded === false) { //starts the combat 8
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 490.9;
    startCombat();
    combat(21, 22, 2); //ending id
  } else if (textNode.startCombat === 24 && combatEnded === false) { //starts the combat 9
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 490.15;
    startCombat();
    combat(37, 1, 2); //ending id
  } else if (textNode.startCombat === 25 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 490.24;
    startCombat();
    combat(25, 26, 2); //ending id
  } else if (textNode.startCombat === 26 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 491.12;
    startCombat();
    combat(21, 1, 2); //ending id
  } else if (textNode.startCombat === 27 && combatEnded === false) { //starts the combat 11
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 491.19;
    startCombat();
    combat(21, 23, 2); //ending id
  } else if (textNode.startCombat === 28 && combatEnded === false) { //starts the combat 12
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 497;
    startCombat();
    combat(28, 1, 2); //ending id
  } else if (textNode.startCombat === 29 && combatEnded === false) { //starts the combat 13
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 533;
    startCombat();
    combat(17, 16, 2); //ending id
  } else if (textNode.startCombat === 30 && combatEnded === false) { //starts the combat 14
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 538;
    startCombat();
    combat(27, 23, 24); //ending id
  } else if (textNode.startCombat === 47 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged'); //final fight with henry
    combatQuestion = false;
    endingNode = 5522;
    startCombat();
    combat(35, 1, 2); //ending id
  }
  //no dog
  if (textNode.startCombat === 31 && combatEnded === false) { //starts the combat first
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 650;
    startCombat();
    combat(6, 7, 1); //ending id
  } else if (textNode.startCombat === 32 && combatEnded === false) { //starts the combat 2nd WRONG
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 683; //WHAT
    startCombat();
    combat(5, 10, 13); //ending id
  } else if (textNode.startCombat === 33 && combatEnded === false) { //starts the combat third
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 699;
    startCombat();
    combat(18, 1, 2); //ending id
  } else if (textNode.startCombat === 34 && combatEnded === false) { //starts the combat 4 WRONG
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 710; //WHAT
    startCombat();
    combat(19, 23, 2); //ending id
  } else if (textNode.startCombat === 35 && combatEnded === false) { //starts the combat 5
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 724;
    neededDeath = true
    startCombat();
    combat(34, 1, 2); //ending id
  } else if (textNode.startCombat === 36 && combatEnded === false) { //starts the combat 6
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 789.9;
    startCombat();
    combat(15, 22, 2); //ending id
  } else if (textNode.startCombat === 37 && combatEnded === false) { //starts the combat 7
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 789.91;
    startCombat();
    combat(15, 22, 2); //ending id
  } else if (textNode.startCombat === 38 && combatEnded === false) { //starts the combat 8
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 790.9;
    startCombat();
    combat(21, 22, 2); //ending id
  } else if (textNode.startCombat === 39 && combatEnded === false) { //starts the combat 9
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 790.15;
    startCombat();
    combat(37, 1, 2); //ending id
  } else if (textNode.startCombat === 40 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 791.24;
    startCombat();
    combat(25, 26, 2); //ending id
  } else if (textNode.startCombat === 41 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 791.12;
    startCombat();
    combat(21, 1, 2); //ending id
  } else if (textNode.startCombat === 42 && combatEnded === false) { //starts the combat 11
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 791.19;
    startCombat();
    combat(21, 23, 2); //ending id
  } else if (textNode.startCombat === 43 && combatEnded === false) { //starts the combat 12
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 797;
    startCombat();
    combat(28, 1, 2); //ending id
  } else if (textNode.startCombat === 44 && combatEnded === false) { //starts the combat 13
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 833;
    startCombat();
    combat(17, 16, 2); //ending id
  } else if (textNode.startCombat === 45 && combatEnded === false) { //starts the combat 14
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 838;
    startCombat();
    combat(27, 23, 24); //ending id
  } else if (textNode.startCombat === 46 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 852;
    startCombat();
    combat(35, 2, 2); //ending id
  } else if (textNode.startCombat === 47 && combatEnded === false) { //starts the combat 10
    console.log('combat mode engaged');
    combatQuestion = false;
    endingNode = 861;
    startCombat();
    combat(22, 27, 21); //ending id
  }
  else if (textNode.continueCombat === true) { //checks if you are continue combat
    console.log('combat mode cont');
    combatQuestion = true
  }
  else {
    console.log('no violence = sad pandas');
    combatQuestion = false
  }


  if (textNode.imageCheck === 0) {
    screen.className = ``
    screen.classList.add(`startPage`);
  }
  else if (textNode.imageCheck === 1) {
    screen.className = ``
    screen.classList.add(`startVillage`);
  }
  else if (textNode.imageCheck === 2) {
    screen.className = ``
    screen.classList.add(`livingroomJack`);
  }
  else if (textNode.imageCheck === 3) {
    screen.className = ``
    screen.classList.add(`kitchenPosion`);
  }
  else if (textNode.imageCheck === 4) {
    screen.className = ``
    screen.classList.add(`mapJackBedroom`);
  }
  else if (textNode.imageCheck === 5) {
    screen.className = ``
    screen.classList.add(`jackFindsDog`);
  }
  else if (textNode.imageCheck === 6) {
    screen.className = ``
    screen.classList.add(`forestRoadDog`);
  }
  else if (textNode.imageCheck === 7) {
    screen.className = ``
    screen.classList.add(`forestRoadMerchant`);
  }
  else if (textNode.imageCheck === 8) {
    screen.className = ``
    screen.classList.add(`banditCombat`);
  }
  else if (textNode.imageCheck === 9) {
    screen.className = ``
    screen.classList.add(`jackSneaksBanditLeader`);
  }
  else if (textNode.imageCheck === 10) {
    screen.className = ``
    screen.classList.add(`jackAndMarryAtHerHome`);
  }
  else if (textNode.imageCheck === 11) {
    screen.className = ``
    screen.classList.add(`marryForge`);
  }
  else if (textNode.imageCheck === 12) {
    screen.className = ``
    screen.classList.add(`forestRoad`);
  }
  else if (textNode.imageCheck === 13) {
    screen.className = ``
    screen.classList.add(`jackSneaksBanditLeader`);
  }
  else if (textNode.imageCheck === 14) {
    screen.className = ``
    screen.classList.add(`jackFightsLeaderCombat`);
  }
  else if (textNode.imageCheck === 15) {
    screen.className = ``
    screen.classList.add(`valleyRoadToMansion`);
  }
  else if (textNode.imageCheck === 16) {
    screen.className = ``
    screen.classList.add(`guardAndJackValley`);
  }
  else if (textNode.imageCheck === 17) {
    screen.className = ``
    screen.classList.add(`guardAndJackValleyCombat`);
  }
  else if (textNode.imageCheck === 18) {
    screen.className = ``
    screen.classList.add(`henryManorOutside`);
  }
  else if (textNode.imageCheck === 19) {
    screen.className = ``
    screen.classList.add(`jackAndGaurdFightGate`);
  }
  else if (textNode.imageCheck === 20) {
    screen.className = ``
    screen.classList.add(`jackAndGaurdFightGateCombat`);
  }
  else if (textNode.imageCheck === 21) {
    screen.className = ``
    screen.classList.add(`jackFightHernyManor`);
  }
  else if (textNode.imageCheck === 22) {
    screen.className = ``
    screen.classList.add(`jackFightHernyManorCombat`);
  }
  else if (textNode.imageCheck === 23) {
    screen.className = ``
    screen.classList.add(`henryTakesJack`);
  }
  else if (textNode.imageCheck === 24) {
    screen.className = ``
    screen.classList.add(`jackCell`);
  }
  else if (textNode.imageCheck === 25) {
    screen.className = ``
    screen.classList.add(`jackAndJinCell`);
  }
  else if (textNode.imageCheck === 26) {
    screen.className = ``
    screen.classList.add(`jackFightsGaurdsMine`);
  }
  else if (textNode.imageCheck === 27) {
    screen.className = ``
    screen.classList.add(`jackAndBrianMine`);
  }
  else if (textNode.imageCheck === 28) {
    screen.className = ``
    screen.classList.add(`jackAndJinMine`);
  }
  else if (textNode.imageCheck === 29) {
    screen.className = ``
    screen.classList.add(`jackAndFrankFrank`);
  }
  else if (textNode.imageCheck === 30) {
    screen.className = ``
    screen.classList.add(`fort`);
  }
  else if (textNode.imageCheck === 31) {
    screen.className = ``
    screen.classList.add(`jackFightsGaurdsMineCombat`);
  }
  else if (textNode.imageCheck === 32) {
    screen.className = ``
    screen.classList.add(`jackAndBrianFort`);
  }
  else if (textNode.imageCheck === 33) {
    screen.className = ``
    screen.classList.add(`jackAndJinArmory`);
  }
  else if (textNode.imageCheck === 34) {
    screen.className = ``
    screen.classList.add(`jackAndJinArmoryCombat`);
  }
  else if (textNode.imageCheck === 35) {
    screen.className = ``
    screen.classList.add(`jackInArmory`);
  }
  else if (textNode.imageCheck === 36) {
    screen.className = ``
    screen.classList.add(`jackAndFrankArmory`);
  }
  else if (textNode.imageCheck === 37) {
    screen.className = ``
    screen.classList.add(`jackAndFrankPassage`);
  }
  else if (textNode.imageCheck === 38) {
    screen.className = ``
    screen.classList.add(`bear`);
  }
  else if (textNode.imageCheck === 39) {
    screen.className = ``
    screen.classList.add(`bearCombat`);
  }
  else if (textNode.imageCheck === 40) {
    screen.className = ``
    screen.classList.add(`jackAndDragonMarryHouse`);
  }
  else if (textNode.imageCheck === 41) {
    screen.className = ``
    screen.classList.add(`jackAndDragonMountain`);
  }
  else if (textNode.imageCheck === 42) {
    screen.className = ``
    screen.classList.add(`jackAndDragonShrine`);
  }
  else if (textNode.imageCheck === 43) {
    screen.className = ``
    screen.classList.add(`jackAndDragonShrineArmor`);
  }
  else if (textNode.imageCheck === 44) {
    screen.className = ``
    screen.classList.add(`overgrownVillage`);
  }
  else if (textNode.imageCheck === 45) {
    screen.className = ``
    screen.classList.add(`jackFightsGaurdGateMansion`);
  }
  else if (textNode.imageCheck === 46) {
    screen.className = ``
    screen.classList.add(`jackFightsGaurdGateMansionCombat`);
  }
  else if (textNode.imageCheck === 47) {
    screen.className = ``
    screen.classList.add(`jackStairsMansionFightsGaurd`);
  }
  else if (textNode.imageCheck === 48) {
    screen.className = ``
    screen.classList.add(`jackStairsMansionFightsGaurdCombat`);
  }
  else if (textNode.imageCheck === 49) {
    screen.className = ``
    screen.classList.add(`jackStairsMansion`);
  }
  else if (textNode.imageCheck === 50) {
    screen.className = ``
    screen.classList.add(`halllwayMansion`);
  }
  else if (textNode.imageCheck === 51) {
    screen.className = ``
    screen.classList.add(`libraryMansion`);
  }
  else if (textNode.imageCheck === 52) {
    screen.className = ``
    screen.classList.add(`kitchenJack`);
  }
  else if (textNode.imageCheck === 53) {
    screen.className = ``
    screen.classList.add(`jackBedroom`);
  }
  else if (textNode.imageCheck === 54) {
    screen.className = ``
    screen.classList.add(`jackStairsMansionFightsHenry`);
  }
  else if (textNode.imageCheck === 55) {
    screen.className = ``
    screen.classList.add(`jackStairsMansionFightsHenryCombat`);
  }
  else if (textNode.imageCheck === 56) {
    screen.className = ``
    screen.classList.add(`jackInForge`);
  }
  else if (textNode.imageCheck === 8) {
    screen.className = ``
    screen.classList.add(``);
  }
  else if (textNode.imageCheck === 8) {
    screen.className = ``
    screen.classList.add(``);
  }
  else if (textNode.imageCheck === 7) {
    screen.className = ``
    screen.classList.add(``);
  }
  else if (textNode.imageCheck === 8) {
    screen.className = ``
    screen.classList.add(``);
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
  } else if (textNode.diceRoll === 5) {
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
  } else if (textNode.diceRoll === 6) {
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
      return showTextNode(146)
    } else if (d20 <= 15) {
      return showTextNode(147)
    }
  } else if (textNode.diceRoll === 4) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.wis >= 9) {
      d20 += 5
    } else if (player.wis >= 6) {
      d20 += 3
    } else if (player.wis >= 3) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(130)
    } else if (d20 <= 9) {
      return showTextNode(130.5)
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
  }

  if (textNode.diceRoll === 11) {
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
      return showTextNode(348)
    } else if (d20 <= 13) {
      return showTextNode(342)
    }
  } else if (textNode.diceRoll === 12) {
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
      return showTextNode(403)
    } else if (d20 <= 14) {
      return showTextNode(405)
    }
  } else if (textNode.diceRoll === 13) {
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
      return showTextNode(411)
    } else if (d20 <= 14) {
      return showTextNode(412)
    }
  } else if (textNode.diceRoll === 15) {
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
      return showTextNode(439.1)
    } else if (d20 <= 14) {
      return showTextNode(443)
    }
  } else if (textNode.diceRoll === 16) {
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
      return showTextNode(446)
    } else if (d20 <= 15) {
      return showTextNode(447)
    }
  } else if (textNode.diceRoll === 14) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.wis >= 9) {
      d20 += 5
    } else if (player.wis >= 6) {
      d20 += 3
    } else if (player.wis >= 3) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(430)
    } else if (d20 <= 9) {
      return showTextNode(430.5)
    }
  } else if (textNode.diceRoll === 17) {
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
      return showTextNode(490.19)
    } else if (d20 <= 9) {
      return showTextNode(490.22)
    }
  } else if (textNode.diceRoll === 18) {
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
      return showTextNode(491.7)
    } else if (d20 <= 9) {
      return showTextNode(491.8)
    }
  } else if (textNode.diceRoll === 19) {
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
      return showTextNode(491.22)
    } else if (d20 <= 11) {
      return showTextNode(492.18)
    }
  }

  if (textNode.diceRoll === 21) {
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
      return showTextNode(648)
    } else if (d20 <= 13) {
      return showTextNode(642)
    }
  } else if (textNode.diceRoll === 22) {
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
      return showTextNode(703)
    } else if (d20 <= 14) {
      return showTextNode(705)
    }
  } else if (textNode.diceRoll === 23) {
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
      return showTextNode(711)
    } else if (d20 <= 14) {
      return showTextNode(712)
    }
  } else if (textNode.diceRoll === 25) {
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
      return showTextNode(739.1)
    } else if (d20 <= 14) {
      return showTextNode(743)
    }
  } else if (textNode.diceRoll === 26) {
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
      return showTextNode(746)
    } else if (d20 <= 15) {
      return showTextNode(747)
    }
  } else if (textNode.diceRoll === 24) {
    console.log(`The dice roller is on and did things`) // this is how you roll dice to see if someone does something
    d20 = Math.floor(Math.random() * (21 - 1) + 1)
    if (player.wis >= 9) {
      d20 += 5
    } else if (player.wis >= 6) {
      d20 += 3
    } else if (player.wis >= 3) {
      d20 += 2
    }
    console.log(d20)
    if (d20 >= 10) {
      return showTextNode(730)
    } else if (d20 <= 9) {
      return showTextNode(730.5)
    }
  } else if (textNode.diceRoll === 27) {
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
      return showTextNode(790.19)
    } else if (d20 <= 9) {
      return showTextNode(790.22)
    }
  } else if (textNode.diceRoll === 28) {
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
      return showTextNode(791.7)
    } else if (d20 <= 9) {
      return showTextNode(791.8)
    }
  } else if (textNode.diceRoll === 29) {
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
      return showTextNode(791.22)
    } else if (d20 <= 11) {
      return showTextNode(792.18)
    }
  }
  else if (textNode.diceRoll === 30) {
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
    if (d20 >= 12) {
      return showTextNode(859)
    } else if (d20 <= 11) {
      return showTextNode(858)
    }
  }

  if (textNode.reload === 1) {
    location.replace(location.href);
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
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion you healed ${heal} HP you are at <${afterPotPlayerHp} Hp>.`
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
        newText = `You were at ${beforePotPlayerHp} HP but after drinking your potion you healed ${heal} HP you are at <${afterPotPlayerHp} Hp>.`
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
    attack = false
    talk = false
    neededDeath = false
    combatQuestion = false
    combatEnded = false
    showTextNode(13)
    playerHp = 175
  } else if (combatQuestion === true && combatEnded === true && neededDeath === true) {
    attack = false
    talk = false
    console.log(`this did go in the end winning combat`)
    neededDeath = false
    combatQuestion = false
    combatEnded = false
    playerHp = 175
    newText = `You have failed, and lost to Henry`
    showTextNode(endingNode)
  }
  else if (combatQuestion === true && combatEnded === true) {
    attack = false
    talk = false
    console.log(`this did go in the end winning combat`)
    neededDeath = false
    combatQuestion = false
    combatEnded = false
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
        text: `More Info`, //text was visible first
        nextText: 2, //brings it to the next id
      }, // make sure to add commas
      {
        text: `PLAY`,
        //text was visible first
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
    text: `Text will change based on actions`,
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
    text: `Roll a d4 and that roll is used to multiply the next dice roll that's not the pendant.`,
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
        nextText: 1000
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
        nextText: 16,
      }
    ],
  },
  {
    id: 16,
    text: `Our story begins in a small village, Lüdingfeld, near the capital of Etair. The village is an important part of the Etair due to its access to fresh water and a salt mine that is incredibly valuable for trade. A war broke out between the two Empires near Lüdingfeld, Etair, and Bani. `,
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
    imageCheck: 1
  },
  {
    id: 17,
    text: 'Even though the conflict has been around for about a year, Lüdingfeld has not changed its style of living and has not been very affected by the war, but the Bani lord, Henry Williams,  has set his sights on the little village, but their environment has taken a hit due to the war. ',
    options: [
      {
        text: `Continue`,
        nextText: 18
      }
    ],
  },
  {
    id: 18,
    text: 'There were great beasts that used to roam the lands, but ever since the first war many of the beasts have been hunted and killed. Now they are merely legends. None have seen any for over a century. There are rumors that they may be disguised as other animals to avoid being hunted. Nobody knows yet, until now.',
    options: [
      {
        text: `Continue`,
        nextText: 19
      }
    ],
  },
  {
    id: 19,
    text: 'Dragon: "There was a time when this land was isolated and seemed to be at peace, but after some time many other countries became more anxious to conquer the world. After the failed revolution in the west, the sea demons turned their attention to the east. The land’s government wanted to stay in solitude and tried to obtain their ancient ways, but it was only a matter of time until the evil would come."',
    options: [
      {
        text: `Continue`,
        nextText: 20
      }
    ],
  },
  {
    id: 20,
    text: 'Dragon: "During the War, this land would be reborn for the greedy. The usage of their guns and other unholy technology won them the land. Instead of just taking the land over they decided to create new forms of free labor to gather the land’s natural treasures. As time went on more and more of the ancient Gods left these lands in search of more prosperous peoples. Even I was about to leave until I met a man who goes by the name of Jack."',
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
    text: 'Jack: "I remember it like yesterday, the day when my greatest pride became my greatest failure. My daughters got mixed up with the wrong crowd, mostly Victoria. She met a man from the sea who promised her treasures if she stayed with him for a night. She accepted the gold, but never went to meet him. The man turned out to be a rich demon of a person. Nights went by but nothing happened, until one night when the moon was fullest he came with his troops."',
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
  //Base stats start here
  {
    id: 26,
    text: 'You first wake up in a burnt house surrounded by ash and taste of misery. You remember what happened to your family and one name rings constantly: Henry. As you get up you feel nothing even though you were beaten, bloodied, and battered. You look around and pick up your weapon and armor.', options: [
      {
        text: `Continue`,
        nextText: 26.1
      }
    ],
    imageCheck: 2
  },
  {
    id: 26.1,
    text: `Tutorial: Sometimes combat will be engaged so you need to be ready for anything. Some weapons with the right number of a stat can give a big bonus.`,
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
    text: `While going through your house, you find some leftover weapons around .`,
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
        text: `Leave House`,
        nextText: 31
      }
    ],
    imageCheck: 2
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
        text: `Leave House`,
        nextText: 30
      }
    ],
    imageCheck: 3
  },
  {
    id: 29,
    text: 'Your room is still intact but it\'s been cut through. You look through your chests and drawers, but you can’t find anything that can be helpful. You then look towards the wall to see the map that your Grandpa made when he traveled. You take it off the wall and put it in your bag you find next to the bed.',
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
        text: `Leave House`,
        nextText: 30
      }
    ],
    imageCheck: 4
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
        text: `Leave House`,
        nextText: 31
      }
    ],
    imageCheck: 2
  },
  {
    id: 31,
    text: 'You look around the room for anything else you can grab or keep as a memory. You take your partner’s ring. You then decide to:',
    options: [
      {
        text: `Bury your family`,
        nextText: 32,
        setplayer: { con: 1 }
      },
      {
        text: `Mourn  then get on the road`,
        nextText: 33
      },
      {
        text: `Walk out of the room.`,
        nextText: 34
      }
    ],
    imageCheck: 1
  },
  {
    id: 32,
    text: 'You take the time to little graves and try to hold back the tears. It takes three days, but you feel a little bit better and like they can now cross more comfortably.',
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
    text: 'You look around the town to see if there is anyone still alive. You can’t find anyone, you just pray that one of your friends gets out. You yell out "Is there anyone!?" None answers, you make your way to the road that leads to the forest, seeing the burnt town full of ash and debris. You then hear a dog.',
    options: [
      {
        text: `Continue`,
        nextText: 36
      }
    ],
    imageCheck: 5
  },
  {
    id: 36,
    text: 'Dog: "Bark". The Dog looks at you and tilts its head, looking at your bag. It seems very skinny for a dog, you have never seen this dog before. <<Important Choice>>',
    options: [
      {
        text: `Help the dog.`,
        nextText: 37,
      },
      {
        text: `Do not interact with the dog.`,
        nextText: 337,
      },
      {
        text: `Tell the dog to go away.`,
        nextText: 637,
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
    text: 'You take out some of your bread tear a little piece and give it to the dog. You tell it to follow and it seems to sort of understand and starts to follow you down the road.',
    options: [
      {
        text: `Continue`,
        nextText: 40
      }
    ],
    imageCheck: 5
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
    imageCheck: 6
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
    imageCheck: 7
  },
  {
    id: 41.1,
    text: `Tutorial: This is what combat looks like. The left side is damaging attacks, while the right side is talking about options. Middle is a special option. (Click any Option to Continue)`,
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
    imageCheck: 8
  },
  {
    id: 41.2,
    text: `Tutorial: These are attacking options. These roll a die (EX: d12 or d4) and are multiplied by 1.5 to do some damage to the enemy. (Click any Option to Continue)`,
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
    text: `Tutorial: These are talking options. These roll a die (EX: d20) and if it is above 14 multiply that roll by 2, and you will convince the enemy to leave the battle (Same as killing an enemy). (Click any Option to Continue)`,
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
    text: `Tutorial: These are the special options. Heal Potions roll a dice to heal an amount of health with enemies doing less damage but only if you have enough in your inventory (top right). The Pendant of Pain rolls a 4-sided dice (d4) and that is used to multiply your next roll by that amount. (Click any Option to Continue)`,
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
    text: `Tutorial: Enemies will replace the "Air, Breeze, Wind" after you start using an action. Enemies are in a queue system and one has to be killed or convinced to move on to the next enemy. (Click any Option to Continue)`,
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
      {
        text: `Leave Tutorial`,
        nextText: 43,
      },
      {
        text: `Try to bust down the door
        [Check]`,
        nextText: 43,
      },
    ],
  },
  {
    id: 43,
    text: 'As you get closer to the cart, you see a couple of arrows stuck in the cart. You take it out to examine the arrows. You hear something in front of you, but you can only make out some shadowy figures.',
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
    imageCheck: 7
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
    text: 'You see them run at you, and you prepare to take out your weapon you first think of warning them, but they are too quick. It only looks like two of them so you might have a chance',
    options: [
      {
        text: `Take out your weapon.`,
        nextText: 46
      }
    ],
  },
  {
    id: 46, //stand off
    text: 'You stand there and wait, you continue to examine the cart and you finally get a good look at the people. You realize that they are bandits, luckily there are only two of them so you can probably take them.',
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
    ],
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
    imageCheck: 8,
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
    imageCheck: 6
  },
  { //start after combat
    id: 51,
    text: 'You walk off with a sense of relief, you are happy to be alive but you do not know what you should feel. The dog comes out from the forest and starts licking your face. ',
    options: [
      {
        text: `Leave as the victor`,
        nextText: 52,
      },
    ],
  },
  {
    id: 52,
    text: 'You clean yourself and settle for the night. You get some firewood and try to remember what your uncle told you, but as you try to remember the only thoughts that come to mind are the memories of the horror you went through. You go to bed without a fire, but you are confident things will happen.',
    options: [
      {
        text: `Continue`,
        nextText: 53
      }
    ],
  },
  {
    id: 53,
    text: 'You wake up, but not where you remembered you being, the forest is more dense and there is a smell of smoke. You get up thinking that you are about to burn down the forest, but you quickly remember that you did not make a fire, so who did? You get up and look for around the dog that is nowhere to be seen, but you do see his footprints.',
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
    imageCheck: 12
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
    text: 'You look around to see if there is anyone, but there does not seem to be anyone making a loud noises.',
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
    imageCheck: 10
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
    text: 'Jack: "Hey sorry, I did not mean to intrude on your lands, I came to a little village nearby that was attacked by a man.Have you heard the name Henry?"',
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
    text: 'Jack: "I am not a bandit, I saw a couple back there, and I dealt with them. I am Jack, may I ask who you are? My uncle used to talk about someone who looks just like you, a weapon smith with a very "large" personality."',
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
  {// goes with pulling out the blade
    id: 66,
    text: 'Marry: "I am Marry, the blacksmith, if you may not go straight to violence we can both walk out of here alive and better for it."',
    options: [
      {
        text: `What?`,
        nextText: 67
      }
    ],
  },
  {// goes with pulling out the blade
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
    text: 'You walk into her home, it is very cozy, it is been a few days since you have been in a functional house.Weapons covered the walls, some of them spears others are Great Axes, she looks like she has been doing this for quite some time.You wonder why she is here alone, but you thought it best not to mention that question.',
options: [
      {
        text: `Continue`,
        nextText: 69
      }
    ],
    imageCheck: 11
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
        text: `If I have to.`,
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
    imageCheck: 10
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
    text: 'Dexterity: is used for light attacks like a stab and can be used to sneak out of your way out of things. Also best while using a Rapier.',
    options: [
      {
        text: `mhm`,
        nextText: 75.4,
      }
    ],
  },
  {//
    id: 75.4,
    text: 'Constitution: is used as a bonus to health and can be used to scare enemies and you healing more with potions. Also best while using a Short Sword.',
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
    text: 'Jack: "Thank you, Mrs. Marry, I will get the head of the bandit leader, then we can discuss other things afterward."',
    options: [
      {
        text: `Continue`,
        nextText: 80
      }
    ],
  },
  {//
    id: 78,
    text: 'Jack: "I will gladly take out that mutt. It is long overdue for him to learn his lesson, I will get his head and prove my worth."',
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
    text: 'You walk into the forest, you take out your map to see where they could be and you see the perfect place for a camp. You make your way there being as sneaky as possible knowing that one mistake could cost you everything.',
    options: [
      {
        text: `Continue`,
        nextText: 81
      }
    ],
    imageCheck: 12
  },
  {//
    id: 81,
    text: 'You wait till nightfall to attack, beat them at their own game. You get to the camp at dawn but you only see 3 different bandits, two goonies, and the leader. You have to change your plan and decide to attack now before anyone else can help.',
    options: [
      {
        text: `Continue`,
        nextText: 82
      }
    ],
    imageCheck: 13
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
    imageCheck: 14
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
    text: 'You cut through the bandits, it was a hard fight, but worth it. You have now shown not only to your mentor but to yourself that you are ready to avenge your family and find Henry.',
    options: [
      {
        text: `Walk back home`,
        nextText: 85
      }
    ],
    imageCheck: 12
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
    imageCheck: 10
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
  {// add a bonus to the skill set
    id: 87,
    text: 'The next morning, Marry: "Jack, I present for you, your new fixed, and clean weapon along with some potions. I spent all night fixing it and buying some potions for you to have, I hope you use it well. Remember that even though it may feel like justice to you and your whatever, hate by revenge will just create more death for you and everyone around you."',
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
        text: `See you, grandma.`,
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
    text: 'Yes, until we meet again Jack, good luck on your mission, but do not forget yourself in your rage.',
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
    imageCheck: 12
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
    imageCheck: 15
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
    imageCheck: 16
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
    text: 'Guard: "Yes, he lives right here" He pulls out his map and points at a spot to show you where Henry\'s home is.',
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
    imageCheck: 17
  },
  {// end conflict
    id: 99,
    text: 'Killed Guard',
    options: [
      {
        text: `Continue`,
        nextText: 100
      }
    ],
    imageCheck: 15
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
    imageCheck: 19
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
    imageCheck: 19
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
    imageCheck: 20
  },
  {// end conflict
    id: 110,
    text: 'killed gaurds',
    options: [
      {
        text: `Continue`,
        nextText: 116.1
      }
    ],
    imageCheck: 21
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
    imageCheck: 21
  },
  {//
    id: 111.1,
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
    imageCheck: 21
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
    imageCheck: 22
  },
  {// end conflict
    id: 124,
    text: 'You lost',
    options: [
      {
        text: `Continue`,
        nextText: 125
      }
    ],
    imageCheck: 23
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
  //end of henry
  {//
    id: 127,
    text: 'You wake up in a chain, the only thing you can sense is iron. As you try to get up you realise you are locked up in chains in a room. You thought your eyes were closed but then you see a little bit of light.',
    options: [
      {
        text: `Continue`,
        nextText: 128
      }
    ],
    imageCheck: 24
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
        text: `Look around
        [Check (Wis)]`,
        nextText: 129.1
      }
    ],
  },
  {// wisdom check
    id: 129.1,
    text: 'You try to get yourself to your feet, but it feels like you are tied down. You look at the surroundings in the room to see where you are at.',
    options: [
      {
        text: `Continue`,
        nextText: 130
      }
    ],
    diceRoll: 4
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
    imageCheck: 25
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
    imageCheck: 24
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
    diceRoll: 5
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
    imageCheck: 26
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
    diceRoll: 6
  },
  {// succeeds
    id: 146,
    text: 'You continue even though your arms feel like noodles, you see Frank and Jin looking impressed. You also see the other man, a huge man with bright red hair. He is laughing at your attempt to be "strong". He takes your pick and starts to show you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 178
      }
    ],
  },
  {// fails
    id: 147,
    text: 'You drop the pickaxe and see Frank and Jin walk away from you. You can finally see the last guy, a huge name with bright red hair. He looks like is about to help when you see a guard approach.',
    options: [
      {
        text: `Continue`,
        nextText: 147.1
      }
    ],
  },
  {// fails
    id: 147.1,
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
    imageCheck: 27
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
    imageCheck: 28
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
    imageCheck: 29
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
  },
  {//
    id: 183,
    text: 'You have more energy left and so you start to mine again. You spend another hour or two before hearing the church bell. They take you to the church to pay for your sins, a costume from Bina culture. You spend an hour in the church before being thrown back into your cell.',
    options: [
      {
        text: `Continue`,
        nextText: 184
      }
    ],
    imageCheck: 24
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
    imageCheck: 30
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
        nextText: 191.2,
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
    imageCheck: 27
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
    imageCheck: 31
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
    imageCheck: 31
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
    imageCheck: 30
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
    imageCheck: 32
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
    imageCheck: 30
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
    imageCheck: 30
  },
  //jin
  {// bj
    id: 190.1,
    text: 'You hand the rest to Jin, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Jin to be able to enter the armoury. Maybe he can make us seem like guards. You can get both Jin and yourself out.',
    options: [
      {
        text: `Talk to Jin`,
        nextText: 190.3
      }
    ],
    imageCheck: 28
  },
  {// bj
    id: 190.2,
    text: 'Jack: "Jin, I have a plan to get us out of the dump. You want to hear about it?',
    options: [
      {
        text: `Continue`,
        nextText: 190.3
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
    imageCheck: 31
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
    imageCheck: 33
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
    imageCheck: 34
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
    imageCheck: 35
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
    imageCheck: 26
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
    diceRoll: 7
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
    imageCheck: 30
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
    imageCheck: 31
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
    imageCheck: 30
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
    imageCheck: 30
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
    imageCheck: 29
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
        text: `Make it for the Armoury
        [Check [Dex]]`,
        nextText: 191.61
      }
    ],
    imageCheck: 26
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
    imageCheck: 35
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
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 191.12,
    text: 'Defeat the Gaurds',
    options: [
      {
        text: `Continue`,
        nextText: 191.13
      }
    ],
    imageCheck: 35
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
    imageCheck: 36
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
    imageCheck: 37
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
        text: `Sneak off
        [Check (Dex)]`,
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
    diceRoll: 9,
    imageCheck: 26
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
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 191.19,
    text: 'Defeats Gaurds',
    options: [
      {
        text: `Continue`,
        nextText: 191.21
      }
    ],
    imageCheck: 30
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
    imageCheck: 30
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
    imageCheck: 12
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
    imageCheck: 12
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
    imageCheck: 38
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
    startCombat: 13,
    imageCheck: 39
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
    imageCheck: 12
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
    imageCheck: 7
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
    ],
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
    ],
    imageCheck: 10
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
    imageCheck: 2
  },
  {//
    id: 206,
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
        nextText: 213
      }
    ],
    imageCheck: 6
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
    imageCheck: 40
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
    imageCheck: 41
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
    imageCheck: 42
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
    text: 'Dragon: "I will help you on your feat. I can distract the archers and gun men while you find Henry and take your revenge." He blows on your armor as it turns into dragon iron armor.',
    options: [
      {
        text: `Hmmm, this could work.`,
        nextText: 224
      },
      {
        text: `Thank you for your help.`,
        nextText: 224
      }
    ],
    imageCheck: 43
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
    imageCheck: 41
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
    imageCheck: 44
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
    imageCheck: 45
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
    imageCheck: 46
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
    imageCheck: 45
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
    imageCheck: 47
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
    startCombat: 15,
    imageCheck: 48
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
    imageCheck: 49
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
    imageCheck: 50
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
    imageCheck: 51
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
    imageCheck: 52
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
    imageCheck: 53
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
    imageCheck: 54
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
    startCombat: 16,
    imageCheck: 55
  },
  {// end combat
    id: 252,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 253, //0-2 with dog
      },
    ],
    imageCheck: 54
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
    imageCheck: 51
  },
  {// killing, bad end
    id: 255,
    text: 'You do not feel like anything changed, was this really the right path? Before you can think about what just happened you feel a sharp pain in your upper chest. You turn around to see Johnny, your vision becomes blurred until it reaches pitch black.',
    options: [
      {
        text: `Continue`,
        nextText: 1000
      }
    ],
    imageCheck: 0
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
    imageCheck: 1
  },
  {// spare
    id: 257,
    text: 'You run outside to see fire everywhere, the dragon is still distracting the guards. You run into the forest, some arrows heading towards you, but you are too far for them to have good aim. The dragon still fought on.',
    options: [
      {
        text: `Catch your breath`,
        nextText: 258
      }
    ],
  },
  {// spare
    id: 258,
    text: 'You pick up some flowers from the weeds near your home and put them on top of your family\'s grave. Ties come across your face, you fall to the floor and moan.',
    options: [
      {
        text: `...`,
        nextText: 259
      }
    ],
  },
  {// spare
    id: 259,
    text: 'You get enough strength to get up and move on, tell them goodbye and start to take over Mary\'s business and become a blacksmith. You know one day someone will come after you, but at least you can live these days in peace.',
    options: [
      {
        text: `Continue`,
        nextText: 260
      }
    ],
  },
  {// good ending
    id: 260,
    text: 'THE END',
    options: [
      {
        text: `GOOOD ENDING`,
        nextText: 1000
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
    id: 337,
    text: 'You look at it and continue down the path, you see as it starts to follow you. You let it follow, but you have an uneasy feeling.',
    options: [
      {
        text: `Continue`,
        nextText: 340,
      }
    ],
    imageCheck: 12
  },
  //road to adventure
  {
    id: 340,
    text: 'You start walking into the forest, you have heard many stories about what lurks within, but you are unsure what could be true. What is true is that they are words of bandits having a great influence over the region. You should tread carefully from now on, but lucky you are not alone.',
    options: [
      {
        text: `Continue`,
        nextText: 341
      }
    ],
    imageCheck: 6
  },
  {
    id: 341,
    text: 'You feel like you have been walking for days, the dog stops for a second and starts to growl. You look around and you see a merchant caravan, you get closer to see what has happened, but the dog is not moving with you.',
    options: [
      {
        text: `Investigate`,
        nextText: 341.1
      }
    ],
    imageCheck: 7
  },
  {
    id: 341.1,
    text: `Tutorial: This is what combat looks like. Left side is damaging attacks, while the right side is talking options. Middle is a special option. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 341.2
      },
      {
        text: `Heal Potions`,
        nextText: 341.2
      },
      {
        text: `Scare`,
        nextText: 341.2
      },
      {
        text: `Stab`,
        nextText: 341.2
      },
      {
        text: `Pendant of Pain`,
        nextText: 341.2
      },
      {
        text: `Persuade`,
        nextText: 341.2
      },
    ],
    imageCheck: 8
  },
  {
    id: 341.2,
    text: `Tutorial: These are attacking options. These roll a dice (EX: d12 or d4) and are multiplied by 1.5 to do some damage to the enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 341.3
      },
      {
        text: `Stab`,
        nextText: 341.3
      },
    ],
  },
  {
    id: 341.3,
    text: `Tutorial: These are talking options. These roll a dice (EX: d20) and if it is above a 14 multiply that roll by 2, you will convince the enemy to leave the battle (Same as killing an enemy). (Click any Option to Continue)`,
    options: [
      {
        text: `Persuade`,
        nextText: 341.4
      },
      {
        text: `Scare`,
        nextText: 341.4
      },
    ],
  },
  {
    id: 341.4,
    text: `Tutorial: These are the special options. Heal Potions roll a dice to heal an amount of health with enemies doing less damage but only if you have enough in your inventory (top right). The Pendant of Pain rolls a 4 sided dice (d4) and that is used to multiply your next roll by that amount. (Click any Option to Continue)`,
    options: [
      {
        text: `Heal Potions`,
        nextText: 341.5
      },
      {
        text: `Pendant of Pain`,
        nextText: 341.5
      },
    ],
  },
  {
    id: 341.5,
    text: `Tutorial: Enemies will replace the "Air, Breeze, Wind" after you start using an action. Enemies are in a queue system and one has to be killed or convinced to move onto the next enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Next`,
        nextText: 343
      },
    ],
  },
  {
    id: 341.6,
    text: `Tutorial: Some options will roll a d20 and if you get high enough, good things will happen. This is shown if the option has a "[Check]" tag on it. (Click any Option to Continue to Story)`,
    options: [
      {
        text: `Leave Tutorial`,
        nextText: 343,
      },
    ],
  },
  {
    id: 343,
    text: 'As you get closer to the cart, you see a couple arrows stuck in the cart. You take it out to examine the arrows. You hear something in front of you, but you can only make out some shadowy figures.',
    options: [
      {
        text: `Yell out.`,
        nextText: 344
      },
      {
        text: `Wait to meet.`,
        nextText: 345
      },
      {
        text: `Hide.
    	[Check]`,
        nextText: 347
      }
    ],
    imageCheck: 7
  },
  {
    id: 344, //talking
    text: 'Jack: "Hey, do you know what happened here?"',
    options: [
      {
        text: `Wait for Response.`,
        nextText: 345
      }
    ],
  },
  {
    id: 345, //talking
    text: 'You see them run at you, you prepare to take out your weapon you first think of warning them, but they are too quick. It only looks like two of them so you might have a chance',
    options: [
      {
        text: `Take out weapon.`,
        nextText: 346
      }
    ],
  },
  {
    id: 346, //stand off
    text: 'You stand there and wait, you continue to examine the cart and you finally get a good look at the people. You realize that they are bandits, luckily there is only two of them so you can probably take them.',
    options: [
      {
        text: `Continue`,
        nextText: 349
      }
    ],
  },
  {
    id: 347, //sneak
    text: 'You get off the road on try to stay out of sight, you may be able to sneak past.',
    options: [
      { //roll dice to see if you can sneak through dex if failed then becomes in combat
        text: `Continue`,
        nextText: 347
      }
    ],
    diceRoll: 11
  },
  { //sneak
    id: 348, //succeed on dex roll
    text: 'You were able to sneak past the bandits; they would have been a rough fight for you. You wait for a little bit before continuing going.',
    options: [
      {
        text: `Continue`,
        nextText: 351,
      },
    ],
  },
  { //sneak
    id: 342, //fails on dex roll
    text: 'You start to try to sneak past them but you step on some branches. The bandits stop to look at you and they take out their blades. You take out your weapon to get ready to fight, but you can always talk your way out.',
    options: [
      {
        text: `Continue`,
        nextText: 349
      }
    ],
  },
  { //combat
    id: 349,
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
    startCombat: 17,
    imageCheck: 8
  },
  {
    id: 350, //end of combat
    text: 'You have won',
    options: [
      {
        text: `Leave as the victor`,
        nextText: 51
      }
    ],
    imageCheck: 6
  },
  { //start after combat
    id: 351,
    text: 'You walk off with a sense of relief, you are happy to be alive but you do not know what you should feel. The dog comes out from the forest and starts licking your face. ',
    options: [
      {
        text: `Leave as the victor`,
        nextText: 351,
      },
    ],
  },
  {
    id: 352,
    text: 'You clean yourself and settle for the night. You get some firewood and try to remember what your uncle told you, but as you try to remember the only thoughts that come to mind are the memories of the horror you went through. You go to bed without a fire, but you are confident thing will happen.',
    options: [
      {
        text: `Continue`,
        nextText: 353
      }
    ],
  },
  {
    id: 353,
    text: 'You wake up, but not where you remembered you being, the forest is more dense and there is a smell of smoke. You get up thinking that you were about to burn down the forest, but you quickly remembered that you did not make a fire, so who did? You get up and look for around the dog that is nowhere to be seen, but you do see his footprints.',
    options: [
      {
        text: `Where is that dog`,
        nextText: 355
      },
      {
        text: `What is that smell?`,
        nextText: 356
      },
      {
        text: `Continue on your path.`,
        nextText: 357
      }
    ],
    imageCheck: 12
  },
  {//
    id: 355,
    text: 'You get up and start to look for the dog, you see its footprints. You start to follow the path and it leads you to a little house in the middle of the forest.',
    options: [
      {
        text: `Continue`,
        nextText: 358
      }
    ],
  },
  {//
    id: 356,
    text: 'You get up and start to follow your nose, it leads you to a house that has smoke coming from it.',
    options: [
      {
        text: `Continue`,
        nextText: 358
      }
    ],
  },
  {//
    id: 357,
    text: 'You look around you to see that there is still a path, so you get up and you start to follow the path. The path leads you to a house, but you were expecting a town. By the looks of it, your map seems to be outdated.',
    options: [
      {
        text: `Continue`,
        nextText: 358
      }
    ],
  },
  //mentor
  {//
    id: 358,
    text: 'You look around to see if there is anyone, but there does not seem to be anyone making an loud noises.',
    options: [
      {
        text: `Is anyone here?`,
        nextText: 359
      },
      {
        text: `Hello?`,
        nextText: 359
      },
      {
        text: `Hey!`,
        nextText: 359
      }
    ],
  },
  {//
    id: 359,
    text: 'Marry: "What are you doing on my land!?"',
    options: [
      {
        text: `Sorry`,
        nextText: 360
      },
      {
        text: `Hi`,
        nextText: 360
      },
      {
        text: `*take out weapon`,
        nextText: 365
      }
    ],
    imageCheck: 10
  },
  {// diplomatic approach
    id: 360,
    text: 'Marry: "Why are you here?"',
    options: [
      {
        text: `Respond`,
        nextText: 361
      }
    ],
  },
  {// diplomatic approach
    id: 361,
    text: 'Jack: "Hey sorry, I didn\'t mean to intrude on your lands, I came to a little village nearby that was attacked by a man. Have you heard the name Henry?"',
    options: [
      {
        text: `Continue`,
        nextText: 362
      }
    ],
  },
  {// diplomatic approach
    id: 362,
    text: 'Marry: "I cannot say I have run into a man with that name, so you are not one of those bandits are you?"',
    options: [
      {
        text: `No`,
        nextText: 363
      }
    ],
  },
  {// diplomatic approach
    id: 363,
    text: 'Jack: "I am not a bandit, I actually saw a couple back there, I dealt with them. I am Jack, may I ask who you are? My uncle used to talk about someone who looks just like you, a weapon smith with a very "large" personality."',
    options: [
      {
        text: `Continue`,
        nextText: 364
      }
    ],
  },
  {// diplomatic approach
    id: 364,
    text: 'Marry: "I am a weapon smith; I have been here for quite a while. I have not been visited by someone for a long while, why do not you come in?"',
    options: [
      {
        text: `Walk in`,
        nextText: 367
      }
    ],
  },
  {// diplomatic approach
    id: 365,
    text: 'Marry: "Hey, no need for that, who are you?"',
    options: [
      {
        text: `Respond`,
        nextText: 361
      },
      {
        text: `Stay quiet`,
        nextText: 366
      }
    ],
  },
  {// goes with pulling out blade
    id: 366,
    text: 'Marry: "I am Marry, the black smith, if you may not go straight to violence we can both walk out of here alive and better for it."',
    options: [
      {
        text: `What?`,
        nextText: 367
      }
    ],
  },
  {// goes with pulling out blade
    id: 367,
    text: 'You remember your uncle talking about a blacksmith, this person can be of help.',
    options: [
      {
        text: `Continue`,
        nextText: 368
      }
    ],
    imageCheck: 11
  },
  {//
    id: 368,
    text: 'You walk into her home, it is very cosy, it\'s been a few days since you have been in a functional house. Weapons covered the walls, some of them spears others are Great Axes, she looks like she has been doing this for quite some time. You wonder why she is here alone, but you thought best not to mention that question.',
    options: [
      {
        text: `Continue`,
        nextText: 369
      }
    ],
  },
  {//
    id: 369,
    text: 'Jack: "So why did you think I am a bandit, are they common around these parts?"',
    options: [
      {
        text: `Listen`,
        nextText: 370
      }
    ],
  },
  {//
    id: 370,
    text: 'Marry: "Yes ever since there has been a change in leadership. They are demanding more and more weapons; I am tired of supplying those idiots. The thing is, they do not know that I have been giving them my worst weapons. I would do anything to get rid of those pests."',
    options: [
      {
        text: `Continue`,
        nextText: 371
      }
    ],
  },
  {//
    id: 371,
    text: 'Marry: "Why did you come out here?"',
    options: [
      {
        text: `Explanation`,
        nextText: 372
      },
    ],
  },
  {//
    id: 372,
    text: 'Jack: "I am on a mission to find a mentor to train me so I can get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 373
      }
    ],
  },
  {//
    id: 373,
    text: 'Marry: "Hmmm, how about this. I will train you and you will help me take care of the bandits, how about it Jack?"',
    options: [
      {
        text: `Yes, Thank You.`,
        nextText: 374
      },
      {
        text: `If I have too.`,
        nextText: 374
      }
    ],
  },
  {// get to have more of a bonus to skills
    id: 374,
    text: 'You decide to join Marry and help her with the bandits. She loosely teaches you how to use your weapons and hone your skills.',
    options: [
      {
        text: `Continue`,
        nextText: 375.1
      }
    ],
    imageCheck: 10
  },
  {//
    id: 375.1,
    text: 'After a year of working for Marry she finally started to teach you how to use a weapon instead of just using you as free labour.',
    options: [
      {
        text: `Continue`,
        nextText: 375.2
      }
    ],
  },
  {//
    id: 375.2,
    text: 'Marry: "Jack I will tell the basics of how to use your skills:"',
    options: [
      {
        text: `Yes`,
        nextText: 375.3
      }
    ],
  },
  {//
    id: 375.3,
    text: 'Dexterity: is used for light attacks like stab and can be used to sneak out of your way out of things. Also best while using a Rapier.',
    options: [
      {
        text: `mhm`,
        nextText: 375.4,
      }
    ],
  },
  {//
    id: 375.4,
    text: 'Constitution: is used for bonus to health and can be used to scare enemies and you heal more with potions. Also best while using a Short Sword.',
    options: [
      {
        text: `Okay`,
        nextText: 375.5,
      }
    ],
  },
  {//
    id: 375.5,
    text: 'Wisdom: is used for persuading, knowing how to heal more with potions, and getting more benefit from the Pendant of Pain. Also best while using a Bow.',
    options: [
      {
        text: `Yep`,
        nextText: 375.6,
      }
    ],
  },
  {//
    id: 375.6,
    text: 'Strength: is used to add damage for slash damage and can scare your enemies. Also best while using a Great Axe',
    options: [
      {
        text: `Alright`,
        nextText: 375.7,
      }
    ],
  },
  {//
    id: 375.7,
    text: 'Charisma: is used for persuading your way out of situations. It gets more benefit than other skills',
    options: [
      {
        text: `Very cool`,
        nextText: 375.8,
      }
    ],
  },
  {
    id: 375.8,
    text: 'Every skill gives you a benefit every 3 of a skill you have (EX: 3 strength = +1 on your roll while using slash, then 6 for +2, and 9 for +4). [Checks] will also display which skill benefits it (EX: "[Check (Dex)]"',

    options: [
      {
        text: `Very good to know`,
        nextText: 375.9,
      }
    ],
  },
  {
    id: 375.9,
    text: 'Pick your ability score',
    options: [
      {
        text: `Cha (4)`,
        nextText: 376,
        setPlayer: { cha: 4 }
      },
      {
        text: `Dex (3)`,
        nextText: 376,
        setPlayer: { dex: 4 }
      },
      {
        text: `Wis (3)`,
        nextText: 376,
        setPlayer: { wis: 3 }
      },
      {
        text: `Str (3)`,
        nextText: 376,
        setPlayer: { str: 3 }
      },
      {
        text: `Con (3)`,
        nextText: 376,
        setPlayer: { con: 3 }
      },
      {
        text: `Back to info`,
        nextText: 375.1,
      },
    ],
  },
  {//
    id: 376,
    text: 'Marry: "I think it\'s time we talk about you fighting the bandit leader. I have taught you as much as I could, they have been more involved in recent attacks with the local merchants than my home. If you go kill the bandit leader I will make a great weapon for you."',
    options: [
      {
        text: `Yes please`,
        nextText: 377
      },
      {
        text: `Gladly`,
        nextText: 378
      },
      {
        text: `Don\’t Boss me around`,
        nextText: 379
      }
    ],
  },
  {//
    id: 377,
    text: 'Jack: "Thank you, Mrs. Marry, I will get the head of the bandit leader, then we can discuss other things afterwards."',
    options: [
      {
        text: `Continue`,
        nextText: 380
      }
    ],
  },
  {//
    id: 378,
    text: 'Jack: "I will gladly take out that mutt. Its long overdue for him to learn his lesson, I will get his head and prove my worth."',
    options: [
      {
        text: `Continue`,
        nextText: 380
      }
    ],
  },
  {//
    id: 379,
    text: 'Jack: "I will kill this man and I will get that weapon, then I can finally get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 380
      }
    ],
  },
  {//
    id: 380,
    text: 'You walk into the forest, you take out your map to see where they could be and you see the perfect place for a camp. You make your way there being a sneaky as possible knowing that one mistake could cost you everything.',
    options: [
      {
        text: `Continue`,
        nextText: 381
      }
    ],
    imageCheck: 12
  },
  {//
    id: 381,
    text: 'You wait till nightfall to attack, beat them at their own game. You get to the camp at dawn but you only see 3 different bandits, two goonies and the leader. You have to change your plan and decide to attack now before anyone else can help.',
    options: [
      {
        text: `Continue`,
        nextText: 382
      }
    ],
    imageCheck: 13
  },
  {// conflict
    id: 382,
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
    startCombat: 18,
    imageCheck: 14
  },
  {// end conflict
    id: 383,
    text: 'You defeated the bandits.',
    options: [
      {
        text: `Continue`,
        nextText: 384
      }
    ],
  },
  {//
    id: 384,
    text: 'You cut through the bandits, it was a hard fight, but worth it. You have now shown not only to your mentor, but to yourself that you are ready to avenge your family and find Henry.',
    options: [
      {
        text: `Walk back home`,
        nextText: 385
      }
    ],
    imageCheck: 12
  },
  {//
    id: 385,
    text: 'You walk into Marrys home, she looks at you and smiles. It is the first time you have seen her smile, you drop down your evidence and go out back to get yourself clean. ',
    options: [
      {
        text: `Continue`,
        nextText: 386
      }
    ],
    imageCheck: 10
  },
  {//
    id: 386,
    text: 'You remember the horrors done to your daughters in front of your son\'s eyes and what they did to your wife. It fills you with rage, you know it\'s time.',
    options: [
      {
        text: `Continue`,
        nextText: 387
      }
    ],
  },
  {// add a bonus to skill set
    id: 387,
    text: 'The next morning, Marry: "Jack, I present for you, your new fixed, and clean weapon along with some potions. I spent all night fixing it and buying some potions for you to have, I hope you use it well. Remember that even though it may feel as justice to you and your whatever, hate by revenge will just create more death for you and everyone around you."',
    options: [
      {
        text: `Yes, thank you.`,
        nextText: 388,
        setplayer: { healpot: 3 }
      }
    ],
  },
  {//
    id: 388,
    text: 'Jack: "Thank you, but you do not understand what I have gone through it is the only way."',
    options: [
      {
        text: `I will see you again after I am finished.`,
        nextText: 389
      },
      {
        text: `We may never see each other again, so thank you... for everything.`,
        nextText: 389
      },
      {
        text: `See you grandma.`,
        nextText: 388.1
      }
    ],
  },
  {//
    id: 388.1,
    text: 'Marry: "Excuse me?"',
    options: [
      {
        text: `I said, Thank You`,
        nextText: 389
      },
    ],
  },
  {//
    id: 389,
    text: 'Yes, until we meet again Jack, good luck on your mission, but do not forget yourself in your own rage.',
    options: [
      {
        text: `Goodbye`,
        nextText: 392
      }
    ],
  },
  {// end of mentor 1
    id: 391,
    text: 'You walk out of the home, you turn around to get one more look at it and remember all the good times you had, you know that this will be the last moments of "fun" in your life.',
    options: [
      {
        text: `Continue Walking`,
        nextText: 392
      }
    ],
    imageCheck: 12
  },
  //henry
  {// end of mentor 1
    id: 391,
    text: 'You walk out of the home, you turn around to get one more look at it and remember all the good times you had, you know that this will be the last moments of "fun" in your life.',
    options: [
      {
        text: `Continue Walking`,
        nextText: 392
      }
    ],
  },
  {//
    id: 392,
    text: 'You run into some other travellers and see if they know a Henry, but none of them know where he lives.',
    options: [
      {
        text: `Question More`,
        nextText: 393
      }
    ],
    imageCheck: 15
  },
  {//
    id: 393,
    text: 'You finally find a guard on patrol.',
    options: [
      {
        text: `Do you a man named Henry?`,
        nextText: 394
      },
      {
        text: `Is there a lord in this area?`,
        nextText: 395
      },
      {
        text: `Tell me about Henry!?`,
        nextText: 396
      }
    ],
    imageCheck: 16
  },
  {//
    id: 394,
    text: 'Guard: "Lord Williams? He is the lord around here, he lives near here."',
    options: [
      {
        text: `What, really?`,
        nextText: 395.5
      }
    ],
  },
  {//
    id: 395,
    text: 'Guard: "Yes, there is a lord named Lord Williams. He lives around here."',
    options: [
      {
        text: `What, really?`,
        nextText: 395.5
      }
    ],
  },
  {//
    id: 395.5,
    text: 'Guard: "Yes, he lives right here" He pulls out his map and points at a spot to show you were Henry\'s home is.',
    options: [
      {
        text: `Thank you.`,
        nextText: 402
      }
    ],
  },
  {//
    id: 396,
    text: 'Guard: "I do not like your tone of your voice young man."',
    options: [
      {
        text: `Sorry, is there a lord?`,
        nextText: 394
      },
      {
        text: `You heard me.`,
        nextText: 398
      }
    ],
  },
  {// Conflict
    id: 398,
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
    startCombat: 19,
    imageCheck: 17
  },
  {// end conflict
    id: 399,
    text: 'Killed Gaurd',
    options: [
      {
        text: `Continue`,
        nextText: 400
      }
    ],
    imageCheck: 15,
  },
  {//
    id: 400,
    text: 'You loot his body and find a note by Lord Williams. It seems that the guard has been hired by Henry, which leads you to believe that Henry lives somewhere near here. You take out his map of the area to see if there is a manor or castle.',
    options: [
      {
        text: `Walk to Henry/'s home`,
        nextText: 401
      }
    ],
  },
  {//
    id: 401,
    text: 'You went to the spot of the map that looked the most important. As you walk down the road you see a large house on top of a little hill.',
    options: [
      {
        text: `Continue`,
        nextText: 402
      }
    ],
  },
  {// roll a wisdom 15
    id: 402,
    text: 'You look at the home and see if there is a possible entrance through the home.',
    options: [
      {
        text: `Continue
    	[Check (Wis)]`,
        nextText: 403.1
      }
    ],
    imageCheck: 19
  },
  {// wisdom succeeds (ws)
    id: 403.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Continue`,
        nextText: 413
      }
    ],
    diceRoll: 12
  },
  {// wisdom succeeds (ws)
    id: 403,
    text: 'You can see there is an entrance below in the sewers, if you enter there are no guards that will be able to find you.',
    options: [
      {
        text: `Continue`,
        nextText: 413
      }
    ],
  },
  {// wisdom fails (wf)
    id: 405,
    text: 'You can only see one way in, the front door. It may cause some chaos in the manor though. You can try to convince the guards to let you in to talk but it may fail.',
    options: [
      {
        text: `Continue`,
        nextText: 406
      }
    ],
  },
  {// wf
    id: 406,
    text: 'You walk up to the front gates and look towards the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 408
      }
    ],
    imageCheck: 19
  },
  {// wf
    id: 408,
    text: 'Matthew: "What are you doing here?"',
    options: [
      { //charisma check
        text: `I here to see Henry
    	[Check (Cha)]`,
        nextText: 408.1
      },
      {
        text: `Start Conflict`,
        nextText: 409
      },
    ],
  },
  {// wf
    id: 408.1,
    text: 'Blank due to dice roll"',
    options: [
      { //charisma check
        text: `I here to see Henry
    	[Check (Cha)]`,
        nextText: 411
      },
    ],
    diceRoll: 13
  },
  {// Conflict
    id: 409,
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
    startCombat: 19,
    imageCheck: 20
  },
  {// end conflict
    id: 410,
    text: 'killed gaurds',
    options: [
      {
        text: `Continue`,
        nextText: 416.1
      }
    ],
    imageCheck: 19
  },
  {// charisma succeeds
    id: 411,
    text: 'Matthew: "Oh, I remember you, you are the new maid right?"',
    options: [
      {
        text: `Uh Yes Sir`,
        nextText: 411.1
      }
    ],
    imageCheck: 19
  },
  {//
    id: 411,
    text: 'Matthew: "Where are my manners, go right ahead."',
    options: [
      {
        text: `Thank You`,
        nextText: 416
      }
    ],
  },
  {// charisma fails
    id: 412,
    text: 'Matthew: "GET HIM!"',
    options: [
      {
        text: `Continue`,
        nextText: 409
      }
    ],
  },
  {// ws
    id: 413,
    text: 'You sneak into the sewer and walk in. You are pretty sure this will work and you continue down. ',
    options: [
      {
        text: `Continue`,
        nextText: 414
      }
    ],
  },
  {// ws
    id: 414,
    text: 'You make it to the end and you can see the kitchen above you. You climb up the ladder and try to make the least amount of noise as possible. You do not see anyone so, if you did make noise none will be the wiser.',
    options: [
      {
        text: `Continue`,
        nextText: 416
      }
    ],
    imageCheck: 21
  },
  {//
    id: 416,
    text: 'You open up the kitchen door to see the dining room, you unexpectedly walk into Henry having lunch with his family. You see 2 little boys enjoying a large bowl of rice and you lock eyes with the man who ruined everything.',
    options: [
      {
        text: `Continue`,
        nextText: 417
      }
    ],
  },
  {//
    id: 416.1,
    text: 'You make your way inside the gates and see his family having lunch in the dining room.',
    options: [
      {
        text: `WALK IN`,
        nextText: 417
      }
    ],
  },
  {//
    id: 417,
    text: 'Henry: "Oh, I wasn’t expecting a visitor today. Henry! What did I say about eating with your mouth open? Sigh. What are you doing here and who are you? Oh wait, sorry where my manners are, please sit over there."',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 418
      }
    ],
  },
  {//
    id: 418,
    text: 'Henry: "No need to be so loud you don’t want the kids to be scared?"',
    options: [
      {
        text: `Examine the room`,
        nextText: 419
      }
    ],
  },
  {//
    id: 419,
    text: 'The first kid runs to his mom, but the one named James just sat there eating, staring into your soul. Distracted by memories you didn’t realise that Henry had pulled out his sword.',
    options: [
      {
        text: `Look back at Henry`,
        nextText: 420
      }
    ],
  },
  {//
    id: 420,
    text: 'Jack: "Why did you do it? You could have done it any other way, why? Why did you leave me alive with these memories!"',
    options: [
      {
        text: `Grip your weapon`,
        nextText: 422
      }
    ],
  },
  {//
    id: 422,
    text: 'Henry: "Okay this is enough, get the kids out. This should not be to long, we can finish our meal later tonight."',
    options: [
      {
        text: `Contain your anger`,
        nextText: 423
      }
    ],
  },
  {// Conflict
    id: 423,
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
    startCombat: 20,
    imageCheck: 22
  },
  {// end conflict
    id: 424,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 425
      }
    ],
    imageCheck: 23
  },
  {//
    id: 425,
    text: 'You get a couple of good shots in, but Henry is just too strong. You take a moment to catch your breath and by the time you get your mind back in the battle, he jumps onto you with the dull end of his blade. Your vision got dark and the last thing you remember were the kids eyes.',
    options: [
      {
        text: `...........`,
        nextText: 426
      }
    ],
  },
  {//
    id: 426,
    text: 'What do you expect? Did you expect that you would come out on top? You’re in my home, since this blade has enough of your kinds’ filth on it, I will spare you. Guards escort our friend to the prison in the south, but I am curious who you are?',
    options: [
      {
        text: `...........`,
        nextText: 427
      }
    ],
  },
  //prison
  {//
    id: 427,
    text: 'You wake up in a chain, the only thing you can sense is iron. As you try to get up you realise you are locked up in chains in a room. You thought your eyes were closed but then you see a little bit of light.',
    options: [
      {
        text: `Continue`,
        nextText: 428
      }
    ],
    imageCheck: 24
  },
  {//
    id: 428,
    text: 'Guard: "Feeding Time!"',
    options: [
      {
        text: `Get up and look around
        [Check (Wis)]`,
        nextText: 429
      }
    ],
  },
  {// wisdom check
    id: 429,
    text: 'You try to get yourself to your feet, but it feels like you are tied down. You look at the surroundings in the room to see where you are at.',
    options: [
      {
        text: `Continue`,
        nextText: 430
      }
    ],
    diceRoll: 14
  },
  {// wisdom succeed
    id: 430,
    text: 'You focus on',
    options: [
      {
        text: `Door`,
        nextText: 430.1
      },
      {
        text: `Figure 1`,
        nextText: 430.2
      },
      {
        text: `Figure 2`,
        nextText: 430.3
      },
      {
        text: `The plate`,
        nextText: 430.4
      },
    ],
  },
  {// door
    id: 430.1,
    text: 'You see a faint light; it appears that there are some guards watching over. It looks like it\'s made out of wood, you might be able to break it. You then see marks on the door, like someone has had the same idea, but it appears none has made it out like that.',
    options: [
      {
        text: `Door`,
        nextText: 430.1
      },
      {
        text: `Figure 1`,
        nextText: 430.2
      },
      {
        text: `Figure 2`,
        nextText: 430.3
      },
      {
        text: `The plate`,
        nextText: 430.4
      },
      {
        text: `"Hello?"`,
        nextText: 432
      }
    ],
  },
  {// figure 1
    id: 430.2,
    text: 'You see a man in the room staring at the door, he appears to be tall and skinny with long black hair.',
    options: [
      {
        text: `Door`,
        nextText: 430.1
      },
      {
        text: `Figure 1`,
        nextText: 430.2
      },
      {
        text: `Figure 2`,
        nextText: 430.3
      },
      {
        text: `The plate`,
        nextText: 430.4
      },
      {
        text: `"Hello?"`,
        nextText: 432
      }
    ],
  },
  {// figure 2
    id: 430.3,
    text: 'There is a man in the right corner that seems to be the average height, you cannot make out any other features. He maybe wearing some type of cloak.',
    options: [
      {
        text: `Door`,
        nextText: 430.1
      },
      {
        text: `Figure 1`,
        nextText: 430.2
      },
      {
        text: `Figure 2`,
        nextText: 430.3
      },
      {
        text: `The plate`,
        nextText: 430.4
      },
      {
        text: `"Hello?"`,
        nextText: 432
      }
    ],
  },
  {// plate
    id: 430.4,
    text: 'You focus on the plate that was just thrown into the room. You mostly hear things, the room is almost pitch black, but you do see a large man run towards the plate. You hear a gulp then some more shuffling. You can make out that he is much more fit compared to the other two and pretty tall, does not look like someone to mess with.',
    options: [
      {
        text: `Door`,
        nextText: 430.1
      },
      {
        text: `Figure 1`,
        nextText: 430.2
      },
      {
        text: `Figure 2`,
        nextText: 430.3
      },
      {
        text: `The plate`,
        nextText: 430.4
      },
      {
        text: `"Hello?"`,
        nextText: 432
      },
    ],
  },
  { // fails wisdom
    id: 430.5,
    text: 'You try to see if you can make out anything, but you can only see black. The room is pitch black and your senses are still shout after that fight.',
    options: [
      {
        text: `Continue`,
        nextText: 432
      }
    ],
  },
  {//
    id: 432,
    text: 'You try to at least sit up, you now hear chains jangle. Jack: "Where am I?"',
    options: [
      {
        text: `Continue`,
        nextText: 433
      }
    ],
  },
  {//
    id: 433,
    text: '?: "heLLo? whAt do you think, hmm." Just hearing this guy makes you feel uneasy. ?: "Shut it… Sorry, who are you?" It\'s the same voice but a different tone and is much more clear.',
    options: [
      {
        text: `I am Jack, where are we?`,
        nextText: 434
      },
      {
        text: `"Who are you, are there two of you?"`,
        nextText: 435
      },
      {
        text: `"Do not respond?"`,
        nextText: 436
      }
    ],
  },
  {//
    id: 434,
    text: 'Jin: "We are nowhere, but you will soon learn. I am Jin by the way."',
    options: [
      {
        text: `What?`,
        nextText: 437
      }
    ],
    imageCheck: 25
  },
  {//
    id: 435,
    text: 'Jin: "I am Jin, it\'s rude to ask people about their personal life, hmm?"',
    options: [
      {
        text: `What?`,
        nextText: 437
      }
    ],
  },
  {//
    id: 436,
    text: 'Jin: "I am Jin, it rude to just stare, hahahaha!"',
    options: [
      {
        text: `...`,
        nextText: 437
      }
    ],
  },
  {//
    id: 437,
    text: '?: "Jin, be quiet." A different voice from the right side of the room, it\'s more deep and shallow. Jin: "Oh Frank, please I am just trying to make a new friend, are you jealous?" It seems like the man\'s name is Frank, what a weird name.',
    options: [
      {
        text: `Hey, what is this place?`,
        nextText: 438
      },
      {
        text: `A friend?`,
        nextText: 438
      },
      {
        text: `...`,
        nextText: 438
      }
    ],
  },
  {//
    id: 438,
    text: 'Guard: "Shut it in there!"',
    options: [
      {
        text: `Listen`,
        nextText: 439
      }
    ],
    imageCheck: 24
  },
  {// wisdom or dex check
    id: 439,
    text: 'Everything becomes silent again, expect for the faint noise of the guards talking.',
    options: [
      {
        text: `Focus on the voices
    [Check (Wis)]`,
        nextText: 439.1
      }
    ],
  },
  {// wisdom or dex check
    id: 439.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Focus on the voices`,
        nextText: 440
      }
    ],
    diceRoll: 15
  },
  {// succeeds
    id: 439.1,
    text: 'Guard 1: "Hey Guston, you hear the news?" The first guard seems to be on the older side. Guston: "You mean how Henry is promoting guards to his new home?" Guston seems to be a lot younger. You hear a loud slap Guard1: "Call him Lord Williams, but yes. He moved to that old burnt down farming village next to the river. Hopefully he promotes me, hahaha." Guston: "Fat chance of that."',
    options: [
      {
        text: `Continue`,
        nextText: 441
      }
    ],
  },
  {// succeeds
    id: 441,
    text: 'The voices get quieter. You remember your old home; would he really live on the graves of his victims? At least you now know where he will be when you get out of here.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 444
      }
    ],
  },
  {// fails
    id: 443,
    text: 'You cannot make out anything, so you decide to sleep.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 444
      }
    ],
  },
  {//
    id: 444,
    text: 'You get woken to a bright light from the door being open. Guston: "Get out, it\'s time for work." From what you know of prisons, they will probably make you mine for salt.',
    options: [
      {
        text: `Get up and follow.`,
        nextText: 445
      }
    ],
    imageCheck: 26
  },
  {// con check
    id: 445,
    text: 'You spend the day getting your grip on reality. You pick the pickaxe near you and start to get mining, but you feel weak like your arms are about to break.',
    options: [
      {
        text: `Mine the Rock
    [Check (con)]`,
        nextText: 445.1
      }
    ],
  },
  {// con check
    id: 445.1,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Continue`,
        nextText: 446
      }
    ],
    diceRoll: 16
  },
  {// succeeds
    id: 446,
    text: 'You continue even though your arms feel like noodles, you see Frank and Jin looking impressed. You also see the other man, a huge man with bright red hair. He is laughing at your attempt to be "strong". He takes your pick and starts to show you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 478
      }
    ],
  },
  {// fails
    id: 447,
    text: 'You drop the pickaxe and see Frank and Jin walk away from you. You can finally see the last guy, a huge name with bright red hair. He looks like is about to help when you see a guard approach.',
    options: [
      {
        text: `Continue`,
        nextText: 447.1
      }
    ],
  },
  {// fails
    id: 447.1,
    text: 'You try to pick off the pickaxe before they notice, but it\'s too late. They pick you up and then beat you for what feels like hours. Afterwards they throw you back into the mines. This time the big man is there holding your pickaxe, he shows you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 478
      }
    ],
  },
  {//
    id: 478,
    text: 'Brian: "Weak boy, let Brian help, he\'s big and strong." He is almost twice your size, he hits one rock and it breaks in half.',
    options: [
      {
        text: `How have you been here?`,
        nextText: 478.1
      },
      {
        text: `What are you in here for?`,
        nextText: 478.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 478.3
      },
    ],
    imageCheck: 27
  },
  {//
    id: 478.1,
    text: 'Brian: "Been here very long, lost count. You will understand one day little man."',
    options: [
      {
        text: `What are you in here for?`,
        nextText: 478.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 478.3
      },
    ],
  },
  {//
    id: 478.2,
    text: 'Brian: "Drunk fighting, he did not say sorry, killed the ant. They put me here."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 478.1
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 478.3
      },
    ],
  },
  {//
    id: 478.3,
    text: 'Brian: "Does not know what you mean?"',
    options: [
      {
        text: `Oh come on you know what I mean.`,
        nextText: 478.31
      },
    ],
  },
  {//
    id: 478.31,
    text: 'Brian: "If Jack keeps talking I will be angry; Jack does not want Brian angry." You might be able to get him angry and start a mass fight, it could be good distraction.',
    options: [
      {
        text: `Sorry, thank you for your help.`,
        nextText: 479
      }
    ],
  },
  {//
    id: 479,
    text: 'You walk up to Jin to see what he is up to, you try to make it seem like you are still working, but you know if you swing one more time your arms will just fall off.',
    options: [
      {
        text: `Hey`,
        nextText: 480
      }
    ],
    imageCheck: 28
  },
  {//
    id: 480,
    text: 'Jin: "yEs? SHHH" ... Jin: "Yes, what do you want?"',
    options: [
      {
        text: `How have you been here?`,
        nextText: 480.1
      },
      {
        text: `Are you alright?`,
        nextText: 480.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 480.3
      },
    ],
  },
  {//
    id: 480.1,
    text: 'Jin: "They think of me crazy, so they put me in prison. I also often lied about who I was to get what I want."',
    options: [
      {
        text: `Are you alright?`,
        nextText: 480.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 480.3
      },
    ],
  },
  {//
    id: 480.2,
    text: 'Jin "I am doing as fine as someone can be in prison."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 480.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 480.3
      },
    ],
  },
  {//
    id: 480.3,
    text: 'Jin: "yES, wE wait FOR moments of TImE." The other voice came back. Jin: "SHUT IT, well yes I do know a way, but it takes time and it\'s not time yet. I may let you in depending on if I like you later, HAHAHAHA." Guard2:"GET BACK TO WORK!"',
    options: [
      {
        text: `Thank you, talk to you later.`,
        nextText: 481
      }
    ],
  },
  {//
    id: 481,
    text: 'You walk towards Frank, but he meets you in the middle, much smaller than the other two, but around the same size as you if not a little shorter. He is wearing a cloak to cover his face, you wonder how he is allowed to have that, but he also does not seem to be from this area.',
    options: [
      {
        text: `Hey`,
        nextText: 482
      }
    ],
    imageCheck: 29
  },
  {//
    id: 482,
    text: 'Frank: "Jack?"',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 482.1
      },
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 482.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 482.3
      },
    ],
  },
  {//
    id: 482.1,
    text: 'Frank: "Sorry, but you do not get to know why, just know that I am someone that can get anywhere they want."',
    options: [
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 482.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 482.3
      },
    ],
  },
  {//
    id: 482.2,
    text: 'Frank: "Yes I come from Bani."',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 482.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 482.3
      },
    ],
  },
  {//
    id: 482.3,
    text: 'Frank: "Maybe what is in it for me?"',
    options: [
      {
        text: `Well it seems like you can't do it yourself, so you will be able to get out.`,
        nextText: 482.31
      },
    ],
  },
  {//
    id: 482.31,
    text: 'HAHAHA, okay then. We will talk more about this in further detail later.',
    options: [
      {
        text: `Alright see you later`,
        nextText: 483
      }
    ],
  }, {//
    id: 483,
    text: 'You have more energy left and so you start to mine again. You spend another hour or two before hearing the church bell. They take you to the church to pay for your sins, a costume from Bina culture. You spend an hour in the church before being thrown back into your cell.',
    options: [
      {
        text: `Continue`,
        nextText: 484
      }
    ],
    imageCheck: 24
  },
  {//
    id: 484,
    text: 'Like the other night a plate gets thrown in, but this time none goes for it except Jin. It appears like they are taking turns with the food. You remember them talking about it while you were mining. You wonder when it will be your turn to eat and drink. You do not know how long it has been since your break in, but you do know that you are starving.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 485
      }
    ],
  },
  {//
    id: 485,
    text: 'You drift into sleep with nightmares of what happened. Jack: "I am sorry; I am so sorry! Please I will..." You wake up and Frank is pointing to the food in front of you.',
    options: [
      {
        text: `Thank you`,
        nextText: 486
      }
    ],
  },
  {//
    id: 486,
    text: 'You pick it up and take a bite out of what looks like bread, but turns out to be rice. It surprises you, but you really are not in a position to complain about the food. You eat all of it before being called back out to work where you mine again.',
    options: [
      {
        text: `5 Years Later`,
        nextText: 487
      }
    ],
  },
  {//
    id: 487,
    text: 'You have been doing the same thing for about 5 years now counting each week on your wall. Nothing new with Henry, but you have become good friends with the people in your cell. The nightmares are still there, but you have a good feeling.',
    options: [
      {
        text: `Eat the rice bread`,
        nextText: 488
      }
    ],
    imageCheck: 30
  },
  {// how to break out of prison
    id: 488,
    text: 'You take a bite of the rice bread, everyone else is looking at it. Maybe if you help one of them more than the others they can help you escape.',
    options: [
      {//breaks out with Brian (bb)
        text: `Give some to Brian `, //increases strength or con by 1
        nextText: 489.1,
        setPlayer: { str: 4 }
      },
      {//breaks out with Jin (bj) //increases charisma or wisdom by 1
        text: `Give some to Jin`,
        nextText: 490.1,
        setPlayer: { wis: 4 }
      },
      {//breaks out with Frank (bf) //increases dex or charisma by 1
        text: `Give some to Frank`,
        nextText: 491.2,
        setPlayer: { dex: 4 }
      }
    ],
  },
  {// bb
    id: 489.1,
    text: 'You hand the rest to Brian, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Brian to start a fight. You can get both Brian and yourself out.',
    options: [
      {
        text: `Hey`,
        nextText: 489.2
      }
    ],
    imageCheck: 27
  },
  {// bb
    id: 489.2,
    text: 'Jack: "Brian, I have a plan to get us out of the dump. You want to hear about it? You want to be able to see your kids again?" It may be a bit much bringing up his kids, but you need to get out so the ends justify the means.',
    options: [
      {
        text: `Continue`,
        nextText: 489.3
      }
    ],
  },
  {// bb
    id: 489.3,
    text: 'Brian: "Yes Brian wants to leave. How do Brian and friends leave?"',
    options: [
      {
        text: `Respond with the plan`,
        nextText: 489.4
      }
    ],
  },
  {// bb
    id: 489.4,
    text: 'Brian: "Sounds Good" He walks away, you realise that you forgot to tell him when you will be doing this, but before you can tell him he pushes one of the other inmates down. The inmate gets up then throws a punch. You see as a crowd starts to gather. The guards are nowhere to be seen, it looks like they are under maned today, lucky.',
    options: [
      {
        text: `Watch`,
        nextText: 489.5
      }
    ],
  },
  {// bb
    id: 489.5,
    text: 'You see as another fight breaks out, until there is not a single person that is not in a fight. You escape and see Brian look for you.',
    options: [
      {
        text: `Call for Brian`, // leave with Brian (lb)
        nextText: 489.6
      },
      {
        text: 'Run without Brian', // leave without Brian (wb)
        nextText: 489.61
      }
    ],
  },
  {// wb
    id: 489.6,
    text: 'You call out to Brian and he runs towards you. You start to burst out laughing, Jack: "We might just be able to get out, good job Brian." Brian smiles and picks you up. You guys make your way to the armoury where you find your old blade, it appears to have been used, but it\'s not in bad shape. Brian picks up a large great axe.',
    options: [
      {
        text: `Let's get out of here!`,
        nextText: 489.7
      }
    ],
  },
  {// lb
    id: 489.61,
    text: 'You look at Brian and think about if you really need him. You decide to run off to the armoury and get your old sword, it appears to have been used, but it\'s still in good shape. You run out and make your way out.',
    options: [
      {
        text: `Continue`,
        nextText: 489.71
      }
    ],
  },
  {// wb
    id: 489.7,
    text: 'You run into some guards, only two of them look tough, but you are ready for them. Brian takes one of them, so it only leaves you with one.',
    options: [
      {
        text: `Continue`,
        nextText: 489.8
      }
    ],
  },
  {// lb
    id: 489.71,
    text: 'You run into some guards, only two of them they look tough, but you are ready for them.',
    options: [
      {
        text: `Continue`,
        nextText: 489.81
      }
    ],
  },
  {// Conflict wb
    id: 489.8,
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
    startCombat: 21,
    imageCheck: 31
  },
  {// Conflict lb
    id: 489.81,
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
    startCombat: 22,
    imageCheck: 31
  },
  {// end conflict wb
    id: 489.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 489.11
      }
    ],
    imageCheck: 30
  },
  {// end conflict lb
    id: 489.91,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 489.111
      }
    ],
    imageCheck: 32
  },
  {// wb
    id: 489.11,
    text: 'You finish your guard just in time to see Brian get stabbed in the chest. He swings down his axe and kills the guard, but the wound is deep, a healing potion will not heal this one.',
    options: [
      {
        text: `Brian!`,
        nextText: 489.13
      },
      {
        text: `Will you be okay?`,
        nextText: 489.13
      },
      {
        text: `Come on we are too close.`,
        nextText: 489.16
      },
    ],
  },
  {// lb end
    id: 489.111,
    text: 'You take out the guards and make a dash for the exit. You think about taking out your anger and all the guards, but you are not dumb.',
    options: [
      {
        text: `Freedom!`,
        nextText: 493
      }
    ],
    imageCheck: 30
  },
  {// wb
    id: 489.13,
    text: 'Brian: "Jack, thank you for helping Brian. I am okay with this, go do not waste your freedom on me..." Brian\'s eyes close and he takes a breath out, he\'s not died but he is pretending to be to try to get you to leave.',
    options: [
      {
        text: `Help`,
        nextText: 489.14
      },
      {
        text: `Leave`,
        nextText: 489.1
      },
    ],
  },
  {// help wb
    id: 489.14,
    text: 'Jack: "Come on Brian I know you are still alive, let\'s go. You will be able to make."',
    options: [
      {
        text: `Try to help him up`,
        nextText: 489.15
      }
    ],
  },
  {// help wb
    id: 489.15,
    text: 'Brian: "No I am dead. Go without Brian, it’s okay, I want this."',
    options: [
      {
        text: `leave`,
        nextText: 489.16
      }
    ],
  },
  {// wb end
    id: 489.6,
    text: 'You decide to listen to Brian and leave him, it hurts you but you know that he will face a worse death outside of this prison. At least he gets to die on his own terms. You hand him one of the swords that the guards have, and walk out the door holding back your rage to kill everyone in that prison.',
    options: [
      {
        text: `Freedom`,
        nextText: 492
      }
    ],
    imageCheck: 30
  },
  {// bj
    id: 490.1,
    text: 'You hand the rest to Jin, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Jin to be able to enter the armoury. Maybe he can make us seem like guards. You can get both Jin and yourself out.',
    options: [
      {
        text: `Talk to Jin`,
        nextText: 490.2
      }
    ],
    imageCheck: 28
  },
  {// bj
    id: 490.2,
    text: 'Jack: "Jin, I have a plan to get us out of the dump. You want to hear about it?',
    options: [
      {
        text: `Continue`,
        nextText: 490.3
      }
    ],
  },
  {// bj
    id: 490.3,
    text: 'Jin: "I am listening."',
    options: [
      {
        text: `Explain him the plan`,
        nextText: 490.4
      }
    ],
  },
  {// bj
    id: 490.4,
    text: 'Jin: "Hmm, that is my type of crazy. I will not lie, hahaha. Sure, let\'s try it. There is a day where most of the guards will be gone because Lord Williams is holding a party and needs sore guards. So we will strike then."',
    options: [
      {
        text: `Okay`,
        nextText: 490.5
      }
    ],
  },
  {// bj
    id: 490.5,
    text: 'You wait for Jin to talk to you again, a few weeks go by and you start to notice that most of the guards are out. Right now there is only like 10 of them.',
    options: [
      {
        text: `Wait for Jin`,
        nextText: 490.6
      }
    ],
  },
  {// bj
    id: 490.6,
    text: 'Jin: "Jack, today is the day, say your goodbyes we are leaving!" Jin: "LEAvinG, yes... yEs." You get a weird feeling about it, but you are too far into it now to just back out.',
    options: [
      {
        text: `Continue`,
        nextText: 490.7
      }
    ],
  },
  {// bj
    id: 490.7,
    text: 'You say your goodbyes and you and Jin wait for the moment to attack. You see an opportunity to steal some weapons and take it. 2 guards see you, you will have to take them out, Jin is useless in combat.',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 490.8
      }
    ],
  },
  {// bj
    id: 490.8,
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
    startCombat: 23,
    imageCheck: 31
  },
  {//bj end combat
    id: 490.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 490.11
      }
    ],
    imageCheck: 33
  },
  {// bj
    id: 490.11,
    text: 'You hide their bodies in some bushes and make your way with Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 490.12
      }
    ],
  },
  {// bj
    id: 490.12,
    text: 'You reach the armoury and take some armour, for some reason Jin has not said a word to you since you took out the guards. You are getting a weird feeling so you keep your weapon near you.',
    options: [
      {
        text: `Are we ready?`,
        nextText: 490.13
      }
    ],
  },
  {// bj
    id: 490.13,
    text: 'Jin looks at you and then swings his blade in your direction, you manage to dodge at the last second',
    options: [
      {
        text: `Continue`,
        nextText: 490.14
      }
    ],
  },
  {// bj combat
    id: 490.14,
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
    startCombat: 24,
    imageCheck: 34
  },
  {//bj combat finish
    id: 490.15,
    text: 'You defeat Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 490.16
      }
    ],
    imageCheck: 35
  },
  {// bj
    id: 490.16,
    text: 'You stab Jin right in the chest and push him off you. Hey stumbles back before he falls into some crates. You do not really know why Jin would do that but you also knew that he was probably the most unstable out of the three inmates. You get up clean your weapon and walk straight through the gates but then.',
    options: [
      {
        text: `Guard: "Hey"!`,
        nextText: 490.17
      }
    ],
  },
  {// bj
    id: 490.17,
    text: 'Guard: "Where do you think you are going?"',
    options: [
      {
        text: `Attack`,
        nextText: 490.22
      },
      {
        text: `Talk`,
        nextText: 490.18
      }
    ],
    imageCheck: 26
  },
  {//charisma check 10 bj
    id: 490.18,
    text: 'Jack: "Sorry, I need to go to the general. An inmate has killed a fellow inmate in the armoury and I do not know where that inmate is."',
    options: [
      {
        text: `Continue
    [Check (cha)]`,
        nextText: 490.181
      }
    ],
  },
  {//charisma check 10 bj
    id: 490.181,
    text: 'Blank due too dice roll."',
    options: [
      {
        text: `Continue`,
        nextText: 490.19
      }
    ],
    diceRoll: 17
  },
  {// succeeds bj
    id: 490.19,
    text: 'Guard: "Yes, I see go find him he is in Lord Williams manor just west of here in the town of Lüdingfeld."',
    options: [
      {
        text: `Thank you, I will go immediately.`,
        nextText: 490.21
      }
    ],
    imageCheck: 30
  },
  {// fails bj
    id: 490.22,
    text: 'Get him!',
    options: [
      {
        text: `Continue`,
        nextText: 490.23
      }
    ],
  },
  {// bj combat
    id: 490.23,
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
    startCombat: 25,
    imageCheck: 31
  },
  {//bj conflict end
    id: 490.24,
    text: 'You defeat Guards.',
    options: [
      {
        text: `Continue`,
        nextText: 492.25
      }
    ],
    imageCheck: 30
  },
  {// bj
    id: 490.25,
    text: 'You run out looking around what to do next',
    options: [
      {
        text: `Continue`,
        nextText: 492
      }
    ],
    imageCheck: 30
  },
  {// bf
    id: 491.2,
    text: 'You hand the rest to Frank, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Frank to escape with you. He knows the fort much better than you and he can help you sneak through the fort.',
    options: [
      {
        text: `Find Frank`,
        nextText: 491.3
      }
    ],
    imageCheck: 29
  },
  {// bf
    id: 491.3,
    text: 'Jack: "Hey Frank, how would you like it if we got out of here?"',
    options: [
      {
        text: `Continue`,
        nextText: 491.4
      }
    ],
  },
  {// bf
    id: 491.4,
    text: 'Frank: "You mean escape the fort. It\'s possible but you need to be sneaky to travel with me or at least know how fight."',
    options: [
      {
        text: `Explain the plan.`,
        nextText: 491.5
      }
    ],
  },
  {// bf
    id: 491.5,
    text: 'Frank: "Interesting... This could work, let\'s wait for tonight. There will be less guards tonight, Lord Williams is holding a party and they need more guards. Meet me at the armoury."',
    options: [
      {
        text: `Alright I will meet you there`,
        nextText: 491.6
      }
    ],
  },
  {// dex check 10 bf
    id: 491.6,
    text: 'While you are walking back from mining you try to sneak away from the group.',
    options: [
      {
        text: `Make it for the Armoury
        [Check (Dex)]`,
        nextText: 491.61
      }
    ],
    imageCheck: 26
  },
  {// dex check 10 bf
    id: 491.61,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Make it for the Armoury`,
        nextText: 491.7
      }
    ],
    diceRoll: 18
  },
  {// succeeds bf
    id: 491.7,
    text: 'You make it in the armoury without being seen.',
    options: [
      {
        text: `Look for Frank`,
        nextText: 492.14
      }
    ],
    imageCheck: 35
  },
  {// fails bf
    id: 491.8,
    text: 'You try to sneak off, but you get caught by a guard. Guard: "Hey!" You pick up a shovel',
    options: [
      {
        text: `Start combat`,
        nextText: 491.9
      }
    ],
  },
  {// combat, fails bf
    id: 491.9,
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
    startCombat: 26,
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 491.12,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 491.13
      }
    ],
    imageCheck: 35
  },
  {// fails bf
    id: 491.13,
    text: 'You rush to the armoury trying not to get caught by any more guards.',
    options: [
      {
        text: `Continue`,
        nextText: 491.14
      }
    ],
  },
  {// bf
    id: 492.14,
    text: 'You see Frank in the back, he seems like he has been here for a bit. Frank: "Took you long enough, let\'s get going." He starts walking towards a secret passage and waves for you to follow.',
    options: [
      {
        text: `Follow Frank`,
        nextText: 492.15
      }
    ],
    imageCheck: 36
  },
  {// bf
    id: 492.15,
    text: 'You go into the passage; you realise that you are actually walking the walls. You can see everyone, some things you wished you didn\'t see. ',
    options: [
      {
        text: `Where are we going?`,
        nextText: 492.16
      },
      {
        text: `Are you sure we are going the right way?`,
        nextText: 492.16
      },
      {
        text: `Do not say anything, continue walking.`,
        nextText: 492.17
      }
    ],
    imageCheck: 37
  },
  {// bf
    id: 492.16,
    text: 'Frank: "Stay quiet, they can still hear us."',
    options: [
      {
        text: `Continue following Frank.`,
        nextText: 492.17
      }
    ],
  },
  {// dex check 12 bf
    id: 492.17,
    text: 'You make it to the end of the passage, but there are three guards right in front of the door. You try to sneak past with Frank.',
    options: [
      {
        text: `Sneak off
        [Check (Dex)]`,
        nextText: 492.171
      }
    ],
    imageCheck: 26
  },
  {// dex check 12 bf
    id: 492.171,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Sneak off`,
        nextText: 492.22
      }
    ],
    diceRoll: 19
  },
  {// fail bf
    id: 492.18,
    text: 'Guard: "Stop right there!"',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 492.185
      }
    ],
  },
  {// combat, fails bf
    id: 491.185,
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
    startCombat: 27,
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 491.19,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 491.21
      }
    ],
    imageCheck: 30
  },
  {// fail bf
    id: 491.21,
    text: 'You look around you to see where Frank is, but you can\'t find him. You do not have the time to stay around so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 492
      }
    ],
  },
  {// succeed bf
    id: 491.22,
    text: 'You stay close to the shadows and when you reach the shrubs, you start to crawl away. You try searching for Frank, but he is nowhere to be seen. You do not have the time to look so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 492
      }
    ],
    imageCheck: 30
  },
  {
    id: 492,
    text: 'You run out of the fort, you keep on running for as long as you can until you reach a spot where you can rest. You turn around to see if anyone is following you, but you see none.',
    options: [
      {
        text: `Sleep`,
        nextText: 493
      },
      {
        text: `Continue Running`,
        nextText: 492
      }
    ],
    imageCheck: 12
  },
  {// sleep
    id: 493,
    text: 'You stop running and start looking for a place to sleep for the night. You find an area that has a small amount of rocks and as soon as you lay down you just go to sleep.',
    options: [
      {
        text: `Continue`,
        nextText: 494
      }
    ],
    imageCheck: 12
  },
  {// sleep
    id: 494,
    text: 'You wake up to the sunlight, the first time in over 5 years, but even though you want to just bask in the sun you know that you need to keep going so none finds you.',
    options: [
      {
        text: `Continue`,
        nextText: 499
      }
    ],
  },
  {// running
    id: 495,
    text: 'You start to walk around the forest, you have no clue where anything is or where you are so you continue just going straight. You walk until the sun goes down and some farther. You hear something in the bushes, but before you can react they jump you.',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 496
      }
    ],
    imageCheck: 38
  },
  {// combat, runs
    id: 496,
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
    startCombat: 28,
    imageCheck: 39
  },
  {//end combat, runs
    id: 497,
    text: 'Defeated Bear.',
    options: [
      {
        text: `Continue`,
        nextText: 498
      }
    ],
    imageCheck: 12
  },
  {//
    id: 498,
    text: 'You stab the bear in its neck and it falls over. You are completely exhausted and you fall over.',
    options: [
      {
        text: `Continue`,
        nextText: 494
      }
    ],
  },
  {//
    id: 499,
    text: 'You start to look for the main road, everything right now looks the same. Each tree is so tall and so similar that it is almost impossible to know where you are going, but after several hours of searching you run into a road. You decide to follow the road to see where it leads.',
    options: [
      {
        text: `Follow the road`,
        nextText: 500
      }
    ],
  },
  {//
    id: 500,
    text: 'You run into a merchant, at this point you are starving and tired. You have not gotten to eat or have an okay sleep since you left the fort. You walk up to the merchant:',
    options: [
      { //talk
        text: `Excuse me, can I catch a ride to the town of Lüdingfeld?`,
        nextText: 501
      },
      { //scare
        text: `Take out your weapon`,
        nextText: 502
      },
    ],
    imageCheck: 7
  },
  {// talk
    id: 501,
    text: 'Merchant: "Sure, I am actually going that way."',
    options: [
      {
        text: `Thank you, I am...Peirce.`,
        nextText: 503
      }
    ],
  },
  {// scare
    id: 502,
    text: 'Jack: "Take me to Lüdingfeld!" Merchant: "Please! Do not hurt, I will please."',
    options: [
      {
        text: `Good.`,
        nextText: 503,
      },
    ],
    imageCheck: 10
  },
  //back to the past
  {//
    id: 503,
    text: 'You make it to Lüdingfeld, lucky you do not encounter any guards. You jump out of the cart before the merchant could notice. You do not want him to know where you are going or who you are.',
    options: [
      {
        text: `Rush to Marrys home. `,
        nextText: 504
      }
    ],
  },
  {//
    id: 504,
    text: 'You find no dog and the house seems so empty. You expected a greeting form Marry, but it does not seem like she\'s here. The home is completely dead. Something is off.',
    options: [
      {
        text: `Walk in `,
        nextText: 505
      }
    ],
  },
  {//
    id: 505,
    text: 'You run into the home looking for Marry. You find her dead in the centre of the room surrounded by bandits. As you go to investigate her body you see her necklace with a weird glowing Jade. Last time you saw her, she had nothing of the sort. You take it off her neck to try to further understand why this happened. The bandits weren/’t ever this aggressive and only stuck to the roads.',
    options: [
      {
        text: `Continue`,
        nextText: 506
      }
    ],
    imageCheck: 2
  },
  {//
    text: 'You look for more clues. You see a note next to her bed, a picture on the wall to the left of the door, and she has something on her desk. You ',
    options: [
      {
        text: `Note`,
        nextText: 507
      },
      {
        text: `Painting`,
        nextText: 508
      },
      {
        text: `Desk`,
        nextText: 509
      },
      {
        text: `Jade`,
        nextText: 511
      }
    ],
  },
  {//
    id: 507,
    text: 'Marrys Note: "The ‘Lung Jade’ is a very rare item only found in the caves of a dragon’s den. I once thought it was just something told to children to stay out of trouble, but now… The powers of the jade can only be fully used by a dragon. From what I understand you can still use it by using it like any other metal, but something this rare and beautiful shouldn’t be used on a weapon of man."',
    options: [
      {
        text: `Examine`,
        nextText: 508
      }
    ],
  },
  {//
    id: 508,
    text: 'Jack: "I have heard of these beasts. They were thought to be the protectors of the lands, Gods that used ‘mortal’ bodies. They were said to ask for tributes and give great rewards to people that they deemed worthy. Unfortunately, after the first invasion many of them left the island. This was the first sign of the end of the war. I always assumed it was legends and just stories to tell, never did I think that it could be reality. The power that someone can possess with just one of these is unimaginable."',
    options: [
      {
        text: `Painting`,
        nextText: 509
      },
      {
        text: `Desk`,
        nextText: 510
      },
      {
        text: `Jade`,
        nextText: 511
      }
    ],
  },
  {//
    id: 509,
    text: 'You go towards the painting on the wall. It shows a man handing the jade to a dragon. Beautiful, but doesn’t tell you very much about what it does or how to use it.',
    options: [
      {
        text: `Note`,
        nextText: 507
      },
      {
        text: `Desk`,
        nextText: 510
      },
      {
        text: `Jade`,
        nextText: 511
      }
    ],
  },
  {//
    id: 510,
    text: 'Marry: "I should have never taken this jade. To whoever reads this, please take the stone to the mountain in the west. This power is too powerful for one person. If you do use this jade, nothing but bad luck will follow you. Good luck. PS: if you run into a man named Jack tell him what happened here."',
    options: [
      {
        text: `Note`,
        nextText: 507
      },
      {
        text: `Painting`,
        nextText: 508
      },
      {
        text: `Jade`,
        nextText: 511
      }
    ],
  },
  {//
    id: 511,
    text: 'You look down and grab the little chain that seems like there was something attached to it. You think that whoever came here got what they wanted and stole the jade from her. When you are finished with Henry you will avenge her death as well.',
    options: [
      {
        text: `Go to bed for the night`,
        nextText: 512
      }
    ],
  },
  {//
    id: 513,
    text: 'You go into the master bed room and lay on the bed, you have never felt this before, this comfort. You almost immediately fall asleep without a second thought.',
    options: [
      {
        text: `Wake up`,
        nextText: 514
      }
    ],
  },
  {//
    id: 514,
    text: 'You get up to having a bit of the light pear from the window, you walk outside. The one thing you could have slept without was that smell, but it doesn\'t matter.',
    options: [
      {
        text: `Investigate the home`,
        nextText: 515
      }
    ],
    imageCheck: 56
  },
  {//increase con to max
    id: 515,
    text: 'Your renter the home to look for something can help you in your journey, you go into the armoury to see if she had any good armour. Looks like she has just made new armour, you take it.',
    options: [
      {
        text: `Put on armour`,
        nextText: 516
      }
    ],
  },
  {//
    id: 516,
    text: 'You feel ready, you feel like you can take any hit in this armour, it’s amazing. You can do without the noise, but isn\'t a huge deal. You start walking towards your old town.',
    options: [
      {
        text: `Follow`,
        nextText: 517
      }
    ],
    imageCheck: 12
  },
  {//
    id: 517,
    text: 'You enter the village, you are used to it been burnt, but now it\'s just overgrown. You start walking around to try to spot the manor.',
    options: [
      {
        text: `Walk towards the mansion`,
        nextText: 526
      }
    ],
    imageCheck: 1
  },
  {//
    id: 526,
    text: 'You walk past the training area. You remember how you were first taught how to use a sword by your dad here, he made me fight for hours until I could everyone there. You were going to train your son the same way, but you never got that chance... that right.',
    options: [
      {
        text: `Walk towards the mansion`,
        nextText: 527
      }
    ],
  },
  {//
    id: 527,
    text: 'You look at the market area, the place that you spent most of your time in town being in your adulthood. You remember the day that you met your wife, Jessy, it was a rainy day and she was by herself. I offered my coat and walked her home. It was a beautiful, or at least to you it was.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 528
      }
    ],
  },
  {//
    id: 528,
    text: 'You walk past your home. The place that you felt the safest at, it\'s ironic that it is also the place that killed everything you loved. You continue forward, you have no time to mourn. If you get out of this alive you will bring flowers to their graves.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 529
      }
    ],
  },
  {//
    id: 529,
    text: 'You get into vision of the manor. You stay out of sight for the most part, they cannot really see you from where you are at. The manor across the valley, you just need to cross',
    options: [
      {
        text: `Cross valley`,
        nextText: 530
      },
    ],
  },
  {//
    id: 531,
    text: 'Guard 1: "Wait who are you, is that with you?" Guard2: "He\'s an intruder, GET HIM!" They pull out their swords',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 532
      }
    ],
    imageCheck: 45
  },
  {// combat
    id: 532,
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
    startCombat: 29,
    imageCheck: 46
  },
  {//end combat
    id: 533,
    text: 'Defeated the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 534
      }
    ],
    imageCheck: 45
  },
  {//
    id: 534,
    text: 'You strike down the guards, you see a picture fall out of one of their pockets.',
    options: [
      {
        text: `Push forward`,
        nextText: 536
      },
      {
        text: `Investigate the picture`,
        nextText: 535
      }
    ],
  },
  {//
    id: 535,
    text: 'You look closer at the picture, it\'s a drawing of the guards\' kids. You are taken back a little, maybe this isn\'t worth taking revenge on everyone. You then snap out of it remembering what happened to you.',
    options: [
      {
        text: `Continue pushing forward`,
        nextText: 536
      }
    ],
  },
  {//
    id: 536,
    text: 'You walk over the dead guards; you try to stick to the walls to keep out of distance. When you make it near the front door, you slowly open it and slide right in. You turn around to see three different guards, they pull out their weapons.',
    options: [
      {
        text: `pull out your weapon`,
        nextText: 537
      }
    ],
    imageCheck: 47
  },
  {// combat
    id: 537,
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
    imageCheck: 48,
    startCombat: 30
  },
  {// end combat
    id: 538,
    text: 'You cut through the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 539
      }
    ],
    imageCheck: 49
  },
  {//
    id: 539,
    text: 'You are feeling hurt, but you still have a job to finish. You run up the stairs to look for where Henry is.',
    options: [
      {
        text: `Library`,
        nextText: 540
      },
      {
        text: `Kitchen`,
        nextText: 544
      },
      {
        text: `Guest Room`,
        nextText: 545
      }
    ],
    imageCheck: 50
  },
  {// library
    id: 540,
    text: 'You walk into the library, it\'s a large room with enough books to suffocate someone with. You see someone sitting next to the fireplace. You remember this boy from Henry\'s dinner, it\'s his son Johnny.',
    options: [
      {
        text: `Hey, Johnny is it ? `,
        nextText: 541
      },
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 542
      },
      {
        text: `Leave quietly`,
        nextText: 543
      }
    ],
    imageCheck: 51
  },
  {// library
    id: 541,
    text: 'Jack: "Johnny, I have business with your dad, do you know where he is?" The boy looks at you with the same terror from last time, he does not seem like he can form a sentence.',
    options: [
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 542
      },
      {
        text: `Leave quietly`,
        nextText: 543
      }
    ],
  },
  {//
    id: 542,
    text: 'Johnny: "PLEASE! Please, please, please, please... it\'s just a nightmare, please" The boy can not say anything no matter what you do.',
    options: [
      {
        text: `Leave quietly`,
        nextText: 543
      }
    ],
  },
  {// library
    id: 543,
    text: 'You decide to walk out, but that boy’s eyes will haunt you for a bit.',
    options: [
      {
        text: `Kitchen`,
        nextText: 544
      },
      {
        text: `Guest Room`,
        nextText: 545
      },
      {
        text: `Stairs`,
        nextText: 546
      },
    ],
  },
  {//
    id: 544,
    text: 'You walk into the kitchen, there is nothing but cooks that are huddled in a corner, you pair your head around the door to see if someone is eating, but there is no sign of Henry.',
    options: [
      {
        text: `Library`,
        nextText: 540
      },
      {
        text: `Guest Room`,
        nextText: 545
      },
      {
        text: `Stairs`,
        nextText: 546
      },
    ],
    imageCheck: 52
  },
  {//
    id: 545,
    text: 'You walk into a room with only one bed. It appears to be pretty empty and there is no sign of anything in here.',
    options: [
      {
        text: `Library`,
        nextText: 540
      },
      {
        text: `Kitchen`,
        nextText: 544
      },
      {
        text: `Stairs`,
        nextText: 546
      },
    ],
    imageCheck: 53
  },
  {//
    id: 546,
    text: 'You walk back to the stair from before, you see Henry at the bottom. You cannot contain yourself, but you keep enough to control to not run at him.',
    options: [
      {
        text: `Continue`,
        nextText: 547
      }
    ],
    imageCheck: 54
  },
  {//
    id: 547,
    text: 'Henry: "JACK! WHAT HAVE YOU DONE!? WHAT DID I DO!?"',
    options: [
      {
        text: `You destroyed everything, I will give you the same fate!`,
        nextText: 548
      },
      {
        text: `You burned down my town… my home… my life.`,
        nextText: 549
      },
      {
        text: `Stay silent.`,
        nextText: 550
      }
    ],
  },
  {//
    id: 548,
    text: 'Henry: "What?"',
    options: [
      {
        text: `You want to lie then? So be it.`,
        nextText: 551
      }
    ],
  },
  {//
    id: 549,
    text: 'I’m sorry I don’t remember that, are you sure it was me?',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 551
      }
    ],
  },
  {//
    id: 550,
    text: 'Swings at you.',
    options: [
      {
        text: `Swing at him`,
        nextText: 551
      }
    ],
  },
  {// combat
    id: 551,
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
    startCombat: 47,
    imageCheck: 55
  },
  {// end combat
    id: 552,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 553
      }
    ],
    imageCheck: 54
  },
  {//
    id: 553,
    text: 'You look at Henry, you try to find a reason to keep him alive, but nothing comes to mind. You lift your weapon above your head and get hitting him with it until he is died.',
    options: [
      {
        text: `Kill`,
        nextText: 555
      },
    ],
    imageCheck: 51
  },
  {// killing, bad end
    id: 555,
    text: 'You do not feel like anything changed, was this really the right path? Before you can think about what just happened you feel a sharp pain in your upper chest. You turn around to see Johnny, your vision becomes blurred until it reaches pitch black.',
    options: [
      {
        text: `Continue`,
        nextText: 1000
      }
    ],
    imageCheck: 0
  },
  //  
  // 
  // ADD region later 
  // Without the dog
  // 650 1, 733 2, 737 3, 752 4, 761 5,
  // 
  // 
  {
    id: 637,
    text: 'You look at the dog. Jack: "Go away", you see as the dog starts to walk away. Could it really understand you that well? Well it’s too late now, you continue down the road by yourself, but this is where you should begin to be more cautious.',
    options: [
      {
        text: `Continue`,
        nextText: 640,
      }
    ],
    imageCheck: 5
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
    imageCheck: 6
  },
  {
    id: 641.1,
    text: `Tutorial: This is what combat looks like. Left side is damaging attacks, while the right side is talking options. Middle is a special option. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 641.2
      },
      {
        text: `Heal Potions`,
        nextText: 641.2
      },
      {
        text: `Scare`,
        nextText: 641.2
      },
      {
        text: `Stab`,
        nextText: 641.2
      },
      {
        text: `Pendant of Pain`,
        nextText: 641.2
      },
      {
        text: `Persuade`,
        nextText: 641.2
      },
    ],
    imageCheck: 8
  },
  {
    id: 641.2,
    text: `Tutorial: These are attacking options. These roll a dice (EX: d12 or d4) and are multiplied by 1.5 to do some damage to the enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Slash`,
        nextText: 641.3
      },
      {
        text: `Stab`,
        nextText: 641.3
      },
    ],
  },
  {
    id: 641.3,
    text: `Tutorial: These are talking options. These roll a dice (EX: d20) and if it is above a 14 multiply that roll by 2, you will convince the enemy to leave the battle (Same as killing an enemy). (Click any Option to Continue)`,
    options: [
      {
        text: `Persuade`,
        nextText: 641.4
      },
      {
        text: `Scare`,
        nextText: 641.4
      },
    ],
  },
  {
    id: 641.4,
    text: `Tutorial: These are the special options. Heal Potions roll a dice to heal an amount of health with enemies doing less damage but only if you have enough in your inventory (top right). The Pendant of Pain rolls a 4 sided dice (d4) and that is used to multiply your next roll by that amount. (Click any Option to Continue)`,
    options: [
      {
        text: `Heal Potions`,
        nextText: 641.5
      },
      {
        text: `Pendant of Pain`,
        nextText: 641.5
      },
    ],
  },
  {
    id: 641.5,
    text: `Tutorial: Enemies will replace the "Air, Breeze, Wind" after you start using an action. Enemies are in a queue system and one has to be killed or convinced to move onto the next enemy. (Click any Option to Continue)`,
    options: [
      {
        text: `Next`,
        nextText: 643
      },
    ],
  },
  {
    id: 641.6,
    text: `Tutorial: Some options will roll a d20 and if you get high enough, good things will happen. This is shown if the option has a "[Check]" tag on it. (Click any Option to Continue to Story)`,
    options: [
      {
        text: `Leave Tutorial`,
        nextText: 643,
      },
      {
        text: `Try to bust down door
    	[Check]`,
        nextText: 643,
      },
    ],
  },
  {
    id: 641,
    text: 'You feel like you have been walking for days, you feel an uneasy chill up your spine. You look around and you see a merchant caravan, you get closer to see what has happened, it feels like everything has gone quiet.',
    options: [
      {
        text: `Investigate`,
        nextText: 643
      }
    ],
    imageCheck: 7
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
    diceRoll: 21
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
    startCombat: 31,
    imageCheck: 8
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
    imageCheck: 6
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
    imageCheck: 12
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
        nextText: 658
      }
    ],
  },
  //mentor 
  {
    id: 658,
    text: 'You look around to see if there is anyone, but there does not seem to be anyone making an loud noises.',
    options: [
      {
        text: `Is anyone here?`,
        nextText: 659
      },
      {
        text: `Hello?`,
        nextText: 659
      },
      {
        text: `Hey!`,
        nextText: 659
      }
    ],
  },
  {//
    id: 659,
    text: 'Marry: "What are you doing on my land!?"',
    options: [
      {
        text: `Sorry`,
        nextText: 660
      },
      {
        text: `Hi`,
        nextText: 660
      },
      {
        text: `*take out weapon`,
        nextText: 665
      }
    ],
    imageCheck: 10
  },
  {// diplomatic approach
    id: 660,
    text: 'Marry: "Why are you here?"',
    options: [
      {
        text: `Respond`,
        nextText: 661
      }
    ],
  },
  {// diplomatic approach
    id: 661,
    text: 'Jack: "Hey sorry, I didn\'t mean to intrude on your lands, I came to a little village nearby that was attacked by a man. Have you heard the name Henry?"',
    options: [
      {
        text: `Continue`,
        nextText: 662
      }
    ],
  },
  {// diplomatic approach
    id: 662,
    text: 'Marry: "I cannot say I have run into a man with that name, so you are not one of those bandits are you?"',
    options: [
      {
        text: `No`,
        nextText: 663
      }
    ],
  },
  {// diplomatic approach
    id: 663,
    text: 'Jack: "I am not a bandit, I actually saw a couple back there, I dealt with them. I am Jack, may I ask who you are? My uncle used to talk about someone who looks just like you, a weapon smith with a very "large" personality."',
    options: [
      {
        text: `Continue`,
        nextText: 664
      }
    ],
  },
  {// diplomatic approach
    id: 664,
    text: 'Marry: "I am a weapon smith; I have been here for quite a while. I have not been visited by someone for a long while, why do not you come in?"',
    options: [
      {
        text: `Walk in`,
        nextText: 667
      }
    ],
  },
  {// diplomatic approach
    id: 665,
    text: 'Marry: "Hey, no need for that, who are you?"',
    options: [
      {
        text: `Respond`,
        nextText: 661
      },
      {
        text: `Stay quiet`,
        nextText: 666
      }
    ],
  },
  {// goes with pulling out blade
    id: 666,
    text: 'Marry: "I am Marry, the black smith, if you may not go straight to violence we can both walk out of here alive and better for it."',
    options: [
      {
        text: `What?`,
        nextText: 667
      }
    ],
  },
  {// goes with pulling out blade
    id: 667,
    text: 'You remember your uncle talking about a blacksmith, this person can be of help.',
    options: [
      {
        text: `Continue`,
        nextText: 668
      }
    ],
  },
  {//
    id: 668,
    text: 'You walk into her home, it is very cosy, it\'s been a few days since you have been in a functional house. Weapons covered the walls, some of them spears others are Great Axes, she looks like she has been doing this for quite some time. You wonder why she is here alone, but you thought best not to mention that question.',
    options: [
      {
        text: `Continue`,
        nextText: 669
      }
    ],
  },
  {//
    id: 669,
    text: 'Jack: "So why did you think I am a bandit, are they common around these parts?"',
    options: [
      {
        text: `Listen`,
        nextText: 670
      }
    ],
    imageCheck: 11
  },
  {//
    id: 670,
    text: 'Marry: "Yes ever since there has been a change in leadership. They are demanding more and more weapons; I am tired of supplying those idiots. The thing is, they do not know that I have been giving them my worst weapons. I would do anything to get rid of those pests."',
    options: [
      {
        text: `Continue`,
        nextText: 671
      }
    ],
  },
  {//
    id: 671,
    text: 'Marry: "Why did you come out here?"',
    options: [
      {
        text: `Explanation`,
        nextText: 672
      },
    ],
  },
  {//
    id: 672,
    text: 'Jack: "I am on a mission to find a mentor to train me so I can get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 673
      }
    ],
  },
  {//
    id: 673,
    text: 'Marry: "Hmmm, how about this. I will train you and you will help me take care of the bandits, how about it Jack?"',
    options: [
      {
        text: `Yes, Thank You.`,
        nextText: 674
      },
      {
        text: `If I have too.`,
        nextText: 674
      }
    ],
  },
  {// get to have more of a bonus to skills
    id: 674,
    text: 'You decide to join Marry and help her with the bandits. She loosely teaches you how to use your weapons and hone your skills.',
    options: [
      {
        text: `Continue`,
        nextText: 675.1
      }
    ],
    imageCheck: 10
  },
  {//
    id: 675.1,
    text: 'After a year of working for Marry she finally started to teach you how to use a weapon instead of just using you as free labour.',
    options: [
      {
        text: `Continue`,
        nextText: 675.2
      }
    ],
  },
  {//
    id: 675.2,
    text: 'Marry: "Jack I will tell the basics of how to use your skills:"',
    options: [
      {
        text: `Yes`,
        nextText: 675.3
      }
    ],
  },
  {//
    id: 675.3,
    text: 'Dexterity: is used for light attacks like stab and can be used to sneak out of your way out of things. Also best while using a Rapier.',
    options: [
      {
        text: `mhm`,
        nextText: 675.4,
      }
    ],
  },
  {//
    id: 675.4,
    text: 'Constitution: is used for bonus to health and can be used to scare enemies and you heal more with potions. Also best while using a Short Sword.',
    options: [
      {
        text: `Okay`,
        nextText: 675.5,
      }
    ],
  },
  {//
    id: 675.5,
    text: 'Wisdom: is used for persuading, knowing how to heal more with potions, and getting more benefit from the Pendant of Pain. Also best while using a Bow.',
    options: [
      {
        text: `Yep`,
        nextText: 675.6,
      }
    ],
  },
  {//
    id: 675.6,
    text: 'Strength: is used to add damage for slash damage and can scare your enemies. Also best while using a Great Axe',
    options: [
      {
        text: `Alright`,
        nextText: 675.7,
      }
    ],
  },
  {//
    id: 675.7,
    text: 'Charisma: is used for persuading your way out of situations. It gets more benefit than other skills',
    options: [
      {
        text: `Very cool`,
        nextText: 675.8,
      }
    ],
  },
  {
    id: 675.8,
    text: 'Every skill gives you a benefit every 3 of a skill you have (EX: 6 strength = +1 on your roll while using slash, then 6 for +2, and 9 for +4). [Checks] will also display which skill benefits it (EX: "[Check (Dex)]"',

    options: [
      {
        text: `Very good to know`,
        nextText: 675.9,
      }
    ],
  },
  {
    id: 675.9,
    text: 'Pick your ability score',
    options: [
      {
        text: `Cha (4)`,
        nextText: 676,
        setPlayer: { cha: 4 }
      },
      {
        text: `Dex (3)`,
        nextText: 676,
        setPlayer: { dex: 4 }
      },
      {
        text: `Wis (3)`,
        nextText: 676,
        setPlayer: { wis: 6 }
      },
      {
        text: `Str (3)`,
        nextText: 676,
        setPlayer: { str: 6 }
      },
      {
        text: `Con (3)`,
        nextText: 676,
        setPlayer: { con: 6 }
      },
      {
        text: `Back to info`,
        nextText: 675.1,
      },
    ],
  },
  {//
    id: 676,
    text: 'Marry: "I think it\'s time we talk about you fighting the bandit leader. I have taught you as much as I could, they have been more involved in recent attacks with the local merchants than my home. If you go kill the bandit leader I will make a great weapon for you."',
    options: [
      {
        text: `Yes please`,
        nextText: 677
      },
      {
        text: `Gladly`,
        nextText: 678
      },
      {
        text: `Don\’t Boss me around`,
        nextText: 679
      }
    ],
  },
  {//
    id: 677,
    text: 'Jack: "Thank you, Mrs. Marry, I will get the head of the bandit leader, then we can discuss other things afterwards."',
    options: [
      {
        text: `Continue`,
        nextText: 680
      }
    ],
  },
  {//
    id: 678,
    text: 'Jack: "I will gladly take out that mutt. Its long overdue for him to learn his lesson, I will get his head and prove my worth."',
    options: [
      {
        text: `Continue`,
        nextText: 680
      }
    ],
  },
  {//
    id: 679,
    text: 'Jack: "I will kill this man and I will get that weapon, then I can finally get my revenge."',
    options: [
      {
        text: `Continue`,
        nextText: 680
      }
    ],
  },
  {//
    id: 680,
    text: 'You walk into the forest, you take out your map to see where they could be and you see the perfect place for a camp. You make your way there being a sneaky as possible knowing that one mistake could cost you everything.',
    options: [
      {
        text: `Continue`,
        nextText: 681
      }
    ],
    imageCheck: 12
  },
  {//
    id: 681,
    text: 'You wait till nightfall to attack, beat them at their own game. You get to the camp at dawn but you only see 3 different bandits, two goonies and the leader. You have to change your plan and decide to attack now before anyone else can help.',
    options: [
      {
        text: `Continue`,
        nextText: 682
      }
    ],
    imageCheck: 13
  },
  {// conflict
    id: 682,
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
    startCombat: 32,
    imageCheck: 14
  },
  {// end conflict
    id: 683,
    text: 'You defeated the bandits.',
    options: [
      {
        text: `Continue`,
        nextText: 684
      }
    ],
  },
  {//
    id: 684,
    text: 'You cut through the bandits, it was a hard fight, but worth it. You have now shown not only to your mentor, but to yourself that you are ready to avenge your family and find Henry.',
    options: [
      {
        text: `Walk back home`,
        nextText: 685
      }
    ],
    imageCheck: 12
  },
  {//
    id: 685,
    text: 'You walk into Marrys home, she looks at you and smiles. It is the first time you have seen her smile, you drop down your evidence and go out back to get yourself clean. ',
    options: [
      {
        text: `Continue`,
        nextText: 686
      }
    ],
    imageCheck: 10
  },
  {//
    id: 686,
    text: 'You remember the horrors done to your daughters in front of your son\'s eyes and what they did to your wife. It fills you with rage, you know it\'s time.',
    options: [
      {
        text: `Continue`,
        nextText: 687
      }
    ],
  },
  {// add a bonus to skill set
    id: 687,
    text: 'The next morning, Marry: "Jack, I present for you, your new fixed, and clean weapon along with some potions. I spent all night fixing it and buying some potions for you to have, I hope you use it well. Remember that even though it may feel as justice to you and your whatever, hate by revenge will just create more death for you and everyone around you."',
    options: [
      {
        text: `Yes, thank you.`,
        nextText: 688,
        setplayer: { healpot: 6 }
      }
    ],
  },
  {//
    id: 688,
    text: 'Jack: "Thank you, but you do not understand what I have gone through it is the only way."',
    options: [
      {
        text: `I will see you again after I am finished.`,
        nextText: 689
      },
      {
        text: `We may never see each other again, so thank you... for everything.`,
        nextText: 689
      },
      {
        text: `See you grandma.`,
        nextText: 688.1
      }
    ],
  },
  {//
    id: 688.1,
    text: 'Marry: "Excuse me?"',
    options: [
      {
        text: `I said, Thank You`,
        nextText: 689
      },
    ],
  },
  {//
    id: 689,
    text: 'Yes, until we meet again Jack, good luck on your mission, but do not forget yourself in your own rage.',
    options: [
      {
        text: `Goodbye`,
        nextText: 692
      }
    ],
  },
  {// end of mentor 1
    id: 691,
    text: 'You walk out of the home, you turn around to get one more look at it and remember all the good times you had, you know that this will be the last moments of "fun" in your life.',
    options: [
      {
        text: `Continue Walking`,
        nextText: 692
      }
    ],
    imageCheck: 12
  },
  //henry
  {// end of mentor 1
    id: 691,
    text: 'You walk out of the home, you turn around to get one more look at it and remember all the good times you had, you know that this will be the last moments of "fun" in your life.',
    options: [
      {
        text: `Continue Walking`,
        nextText: 692
      }
    ],
  },
  {//
    id: 692,
    text: 'You run into some other travellers and see if they know a Henry, but none of them know where he lives.',
    options: [
      {
        text: `Question More`,
        nextText: 693
      }
    ],
    imageCheck: 15
  },
  {//
    id: 693,
    text: 'You finally find a guard on patrol.',
    options: [
      {
        text: `Do you a man named Henry?`,
        nextText: 694
      },
      {
        text: `Is there a lord in this area?`,
        nextText: 695
      },
      {
        text: `Tell me about Henry!?`,
        nextText: 696
      }
    ],
    imageCheck: 16
  },
  {//
    id: 694,
    text: 'Guard: "Lord Williams? He is the lord around here, he lives near here."',
    options: [
      {
        text: `What, really?`,
        nextText: 695.5
      }
    ],
  },
  {//
    id: 695,
    text: 'Guard: "Yes, there is a lord named Lord Williams. He lives around here."',
    options: [
      {
        text: `What, really?`,
        nextText: 695.5
      }
    ],
  },
  {//
    id: 695.5,
    text: 'Guard: "Yes, he lives right here" He pulls out his map and points at a spot to show you were Henry\'s home is.',
    options: [
      {
        text: `Thank you.`,
        nextText: 702
      }
    ],
  },
  {//
    id: 696,
    text: 'Guard: "I do not like your tone of your voice young man."',
    options: [
      {
        text: `Sorry, is there a lord?`,
        nextText: 694
      },
      {
        text: `You heard me.`,
        nextText: 698
      }
    ],
  },
  {// Conflict
    id: 698,
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
    startCombat: 33,
    imageCheck: 17
  },
  {// end conflict
    id: 699,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 700
      }
    ],
    imageCheck: 15
  },
  {//
    id: 700,
    text: 'You loot his body and find a note by Lord Williams. It seems that the guard has been hired by Henry, which leads you to believe that Henry lives somewhere near here. You take out his map of the area to see if there is a manor or castle.',
    options: [
      {
        text: `Walk to Henry/'s home`,
        nextText: 701
      }
    ],
  },
  {//
    id: 701,
    text: 'You went to the spot of the map that looked the most important. As you walk down the road you see a large house on top of a little hill.',
    options: [
      {
        text: `Continue`,
        nextText: 702
      }
    ],
  },
  {// roll a wisdom 15
    id: 702,
    text: 'You look at the home and see if there is a possible entrance through the home.',
    options: [
      {
        text: `Continue
        [Check (Wis)]`,
        nextText: 703.1
      }
    ],
    imageCheck: 19
  },
  {// wisdom succeeds (ws)
    id: 703.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Continue`,
        nextText: 713
      }
    ],
    diceRoll: 22
  },
  {// wisdom succeeds (ws)
    id: 703,
    text: 'You can see there is an entrance below in the sewers, if you enter there are no guards that will be able to find you.',
    options: [
      {
        text: `Continue`,
        nextText: 713
      }
    ],
  },
  {// wisdom fails (wf)
    id: 705,
    text: 'You can only see one way in, the front door. It may cause some chaos in the manor though. You can try to convince the guards to let you in to talk but it may fail.',
    options: [
      {
        text: `Continue`,
        nextText: 706
      }
    ],
  },
  {// wf
    id: 706,
    text: 'You walk up to the front gates and look towards the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 708
      }
    ],
    imageCheck: 19
  },
  {// wf
    id: 708,
    text: 'Matthew: "What are you doing here?"',
    options: [
      { //charisma check
        text: `I here to see Henry
        [Check (Cha)]`,
        nextText: 708.1
      },
      {
        text: `Start Conflict`,
        nextText: 709
      },
    ],
  },
  {// wf
    id: 708.1,
    text: 'Blank due to dice roll"',
    options: [
      { //charisma check
        text: `I here to see Henry
        [Check (Cha)]`,
        nextText: 711
      },
    ],
    diceRoll: 23
  },
  {// Conflict
    id: 709,
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
    startCombat: 34,
    imageCheck: 20
  },
  {// end conflict
    id: 710,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 716.1
      }
    ],
    imageCheck: 19
  },
  {// charisma succeeds
    id: 711,
    text: 'Matthew: "Oh, I remember you, you are the new maid right?"',
    options: [
      {
        text: `Uh Yes Sir`,
        nextText: 711.1
      }
    ],
    imageCheck: 19
  },
  {//
    id: 711,
    text: 'Matthew: "Where are my manners, go right ahead."',
    options: [
      {
        text: `Thank You`,
        nextText: 716
      }
    ],
  },
  {// charisma fails
    id: 712,
    text: 'Matthew: "GET HIM!"',
    options: [
      {
        text: `Continue`,
        nextText: 709
      }
    ],
  },
  {// ws
    id: 713,
    text: 'You sneak into the sewer and walk in. You are pretty sure this will work and you continue down. ',
    options: [
      {
        text: `Continue`,
        nextText: 714
      }
    ],
  },
  {// ws
    id: 714,
    text: 'You make it to the end and you can see the kitchen above you. You climb up the ladder and try to make the least amount of noise as possible. You do not see anyone so, if you did make noise none will be the wiser.',
    options: [
      {
        text: `Continue`,
        nextText: 716
      }
    ],
    imageCheck: 21
  },
  {//
    id: 716,
    text: 'You open up the kitchen door to see the dining room, you unexpectedly walk into Henry having lunch with his family. You see 2 little boys enjoying a large bowl of rice and you lock eyes with the man who ruined everything.',
    options: [
      {
        text: `Continue`,
        nextText: 717
      }
    ],
  },
  {//
    id: 716.1,
    text: 'You make your way inside the gates and see his family having lunch in the dining room.',
    options: [
      {
        text: `WALK IN`,
        nextText: 717
      }
    ],
  },
  {//
    id: 717,
    text: 'Henry: "Oh, I wasn’t expecting a visitor today. Henry! What did I say about eating with your mouth open? Sigh. What are you doing here and who are you? Oh wait, sorry where my manners are, please sit over there."',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 718
      }
    ],
  },
  {//
    id: 718,
    text: 'Henry: "No need to be so loud you don’t want the kids to be scared?"',
    options: [
      {
        text: `Examine the room`,
        nextText: 719
      }
    ],
  },
  {//
    id: 719,
    text: 'The first kid runs to his mom, but the one named James just sat there eating, staring into your soul. Distracted by memories you didn’t realise that Henry had pulled out his sword.',
    options: [
      {
        text: `Look back at Henry`,
        nextText: 720
      }
    ],
  },
  {//
    id: 720,
    text: 'Jack: "Why did you do it? You could have done it any other way, why? Why did you leave me alive with these memories!"',
    options: [
      {
        text: `Grip your weapon`,
        nextText: 722
      }
    ],
  },
  {//
    id: 722,
    text: 'Henry: "Okay this is enough, get the kids out. This should not be to long, we can finish our meal later tonight."',
    options: [
      {
        text: `Contain your anger`,
        nextText: 723
      }
    ],
  },
  {// Conflict
    id: 723,
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
    startCombat: 35,
    imageCheck: 22
  },
  {// end conflict
    id: 724,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 725
      }
    ],
    imageCheck: 23
  },
  {//
    id: 725,
    text: 'You get a couple of good shots in, but Henry is just too strong. You take a moment to catch your breath and by the time you get your mind back in the battle, he jumps onto you with the dull end of his blade. Your vision got dark and the last thing you remember were the kids eyes.',
    options: [
      {
        text: `...........`,
        nextText: 726
      }
    ],
  },
  {//
    id: 726,
    text: 'What do you expect? Did you expect that you would come out on top? You’re in my home, since this blade has enough of your kinds’ filth on it, I will spare you. Guards escort our friend to the prison in the south, but I am curious who you are?',
    options: [
      {
        text: `...........`,
        nextText: 727
      }
    ],
  },
  //prison
  {//
    id: 727,
    text: 'You wake up in a chain, the only thing you can sense is iron. As you try to get up you realise you are locked up in chains in a room. You thought your eyes were closed but then you see a little bit of light.',
    options: [
      {
        text: `Continue`,
        nextText: 728
      }
    ],
    imageCheck: 24
  },
  {//
    id: 728,
    text: 'Guard: "Feeding Time!"',
    options: [
      {
        text: `Get up`,
        nextText: 729
      }
    ],
  },
  {// wisdom check
    id: 729,
    text: 'You try to get yourself to your feet, but it feels like you are tied down. You look at the surroundings in the room to see where you are at.',
    options: [
      {
        text: `Continue`,
        nextText: 730
      }
    ],
    diceRoll: 24
  },
  {// wisdom succeed
    id: 730,
    text: 'You focus on',
    options: [
      {
        text: `Door`,
        nextText: 730.1
      },
      {
        text: `Figure 1`,
        nextText: 730.2
      },
      {
        text: `Figure 2`,
        nextText: 730.3
      },
      {
        text: `The plate`,
        nextText: 730.4
      },
    ],
  },
  {// door
    id: 730.1,
    text: 'You see a faint light; it appears that there are some guards watching over. It looks like it\'s made out of wood, you might be able to break it. You then see marks on the door, like someone has had the same idea, but it appears none has made it out like that.',
    options: [
      {
        text: `Door`,
        nextText: 730.1
      },
      {
        text: `Figure 1`,
        nextText: 730.2
      },
      {
        text: `Figure 2`,
        nextText: 730.3
      },
      {
        text: `The plate`,
        nextText: 730.4
      },
      {
        text: `"Hello?"`,
        nextText: 732.4
      }
    ],
  },
  {// figure 1
    id: 730.2,
    text: 'You see a man in the room staring at the door, he appears to be tall and skinny with long black hair.',
    options: [
      {
        text: `Door`,
        nextText: 730.1
      },
      {
        text: `Figure 1`,
        nextText: 730.2
      },
      {
        text: `Figure 2`,
        nextText: 730.3
      },
      {
        text: `The plate`,
        nextText: 730.4
      },
      {
        text: `"Hello?"`,
        nextText: 732
      }
    ],
  },
  {// figure 2
    id: 730.3,
    text: 'There is a man in the right corner that seems to be the average height, you cannot make out any other features. He maybe wearing some type of cloak.',
    options: [
      {
        text: `Door`,
        nextText: 730.1
      },
      {
        text: `Figure 1`,
        nextText: 730.2
      },
      {
        text: `Figure 2`,
        nextText: 730.3
      },
      {
        text: `The plate`,
        nextText: 730.4
      },
      {
        text: `"Hello?"`,
        nextText: 732
      }
    ],
  },
  {// plate
    id: 730.4,
    text: 'You focus on the plate that was just thrown into the room. You mostly hear things, the room is almost pitch black, but you do see a large man run towards the plate. You hear a gulp then some more shuffling. You can make out that he is much more fit compared to the other two and pretty tall, does not look like someone to mess with.',
    options: [
      {
        text: `Door`,
        nextText: 730.1
      },
      {
        text: `Figure 1`,
        nextText: 730.2
      },
      {
        text: `Figure 2`,
        nextText: 730.3
      },
      {
        text: `The plate`,
        nextText: 730.4
      },
      {
        text: `"Hello?"`,
        nextText: 732
      },
    ],
  },
  { // fails wisdom
    id: 730.5,
    text: 'You try to see if you can make out anything, but you can only see black. The room is pitch black and your senses are still shout after that fight.',
    options: [
      {
        text: `Continue`,
        nextText: 732
      }
    ],
  },
  {//
    id: 732,
    text: 'You try to at least sit up, you now hear chains jangle. Jack: "Where am I?"',
    options: [
      {
        text: `Continue`,
        nextText: 733
      }
    ],
  },
  {//
    id: 733,
    text: '?: "heLLo? whAt do you think, hmm." Just hearing this guy makes you feel uneasy. ?: "Shut it… Sorry, who are you?" It\'s the same voice but a different tone and is much more clear.',
    options: [
      {
        text: `I am Jack, where are we?`,
        nextText: 734
      },
      {
        text: `"Who are you, are there two of you?"`,
        nextText: 735
      },
      {
        text: `"Do not respond?"`,
        nextText: 736
      }
    ],
  },
  {//
    id: 734,
    text: 'Jin: "We are nowhere, but you will soon learn. I am Jin by the way."',
    options: [
      {
        text: `What?`,
        nextText: 737
      }
    ],
    imageCheck: 25
  },
  {//
    id: 735,
    text: 'Jin: "I am Jin, it\'s rude to ask people about their personal life, hmm?"',
    options: [
      {
        text: `What?`,
        nextText: 737
      }
    ],
  },
  {//
    id: 736,
    text: 'Jin: "I am Jin, it rude to just stare, hahahaha!"',
    options: [
      {
        text: `...`,
        nextText: 737
      }
    ],
  },
  {//
    id: 737,
    text: '?: "Jin, be quiet." A different voice from the right side of the room, it\'s more deep and shallow. Jin: "Oh Frank, please I am just trying to make a new friend, are you jealous?" It seems like the man\'s name is Frank, what a weird name.',
    options: [
      {
        text: `Hey, what is this place?`,
        nextText: 738
      },
      {
        text: `A friend?`,
        nextText: 738
      },
      {
        text: `...`,
        nextText: 738
      }
    ],
  },
  {//
    id: 738,
    text: 'Guard: "Shut it in there!"',
    options: [
      {
        text: `Listen`,
        nextText: 739
      }
    ],
    imageCheck: 24
  },
  {// wisdom or dex check
    id: 739,
    text: 'Everything becomes silent again, expect for the faint noise of the guards talking.',
    options: [
      {
        text: `Focus on the voices
      [Check (Wis)]`,
        nextText: 739.1
      }
    ],
  },
  {// wisdom or dex check
    id: 739.1,
    text: 'Blank due to dice roll',
    options: [
      {
        text: `Focus on the voices`,
        nextText: 740
      }
    ],
    diceRoll: 25
  },
  {// succeeds
    id: 739.1,
    text: 'Guard 1: "Hey Guston, you hear the news?" The first guard seems to be on the older side. Guston: "You mean how Henry is promoting guards to his new home?" Guston seems to be a lot younger. You hear a loud slap Guard1: "Call him Lord Williams, but yes. He moved to that old burnt down farming village next to the river. Hopefully he promotes me, hahaha." Guston: "Fat chance of that."',
    options: [
      {
        text: `Continue`,
        nextText: 741
      }
    ],
  },
  {// succeeds
    id: 741,
    text: 'The voices get quieter. You remember your old home; would he really live on the graves of his victims? At least you now know where he will be when you get out of here.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 744
      }
    ],
  },
  {// fails
    id: 743,
    text: 'You cannot make out anything, so you decide to sleep.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 744
      }
    ],
  },
  {//
    id: 744,
    text: 'You get woken to a bright light from the door being open. Guston: "Get out, it\'s time for work." From what you know of prisons, they will probably make you mine for salt.',
    options: [
      {
        text: `Get up and follow.`,
        nextText: 745
      }
    ],
    imageCheck: 26
  },
  {// con check
    id: 745,
    text: 'You spend the day getting your grip on reality. You pick the pickaxe near you and start to get mining, but you feel weak like your arms are about to break.',
    options: [
      {
        text: `Mine the Rock
      [Check (con)]`,
        nextText: 745.1
      }
    ],
  },
  {// con check
    id: 745.1,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Continue`,
        nextText: 746
      }
    ],
    diceRoll: 26
  },
  {// succeeds
    id: 746,
    text: 'You continue even though your arms feel like noodles, you see Frank and Jin looking impressed. You also see the other man, a huge man with bright red hair. He is laughing at your attempt to be "strong". He takes your pick and starts to show you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 778
      }
    ],
  },
  {// fails
    id: 747,
    text: 'You drop the pickaxe and see Frank and Jin walk away from you. You can finally see the last guy, a huge name with bright red hair. He looks like is about to help when you see a guard approach.',
    options: [
      {
        text: `Continue`,
        nextText: 747.1
      }
    ],
  },
  {// fails
    id: 747.1,
    text: 'You try to pick off the pickaxe before they notice, but it\'s too late. They pick you up and then beat you for what feels like hours. Afterwards they throw you back into the mines. This time the big man is there holding your pickaxe, he shows you how to work the rock.',
    options: [
      {
        text: `Continue`,
        nextText: 778
      }
    ],
  },
  {//
    id: 778,
    text: 'Brian: "Weak boy, let Brian help, he\'s big and strong." He is almost twice your size, he hits one rock and it breaks in half.',
    options: [
      {
        text: `How have you been here?`,
        nextText: 778.1
      },
      {
        text: `What are you in here for?`,
        nextText: 778.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 778.3
      },
    ],
    imageCheck: 27
  },
  {//
    id: 778.1,
    text: 'Brian: "Been here very long, lost count. You will understand one day little man."',
    options: [
      {
        text: `What are you in here for?`,
        nextText: 778.2
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 778.3
      },
    ],
  },
  {//
    id: 778.2,
    text: 'Brian: "Drunk fighting, he did not say sorry, killed the ant. They put me here."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 778.1
      },
      {
        text: `I’m going to cut to the chase, you know a way out?`,
        nextText: 778.3
      },
    ],
  },
  {//
    id: 778.3,
    text: 'Brian: "Does not know what you mean?"',
    options: [
      {
        text: `Oh come on you know what I mean.`,
        nextText: 778.31
      },
    ],
  },
  {//
    id: 778.31,
    text: 'Brian: "If Jack keeps talking I will be angry; Jack does not want Brian angry." You might be able to get him angry and start a mass fight, it could be good distraction.',
    options: [
      {
        text: `Sorry, thank you for your help.`,
        nextText: 779
      }
    ],
  },
  {//
    id: 779,
    text: 'You walk up to Jin to see what he is up to, you try to make it seem like you are still working, but you know if you swing one more time your arms will just fall off.',
    options: [
      {
        text: `Hey`,
        nextText: 780
      }
    ],
    imageCheck: 28
  },
  {//
    id: 780,
    text: 'Jin: "yEs? SHHH" ... Jin: "Yes, what do you want?"',
    options: [
      {
        text: `How have you been here?`,
        nextText: 780.1
      },
      {
        text: `Are you alright?`,
        nextText: 780.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 780.3
      },
    ],
  },
  {//
    id: 780.1,
    text: 'Jin: "They think of me crazy, so they put me in prison. I also often lied about who I was to get what I want."',
    options: [
      {
        text: `Are you alright?`,
        nextText: 780.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 780.3
      },
    ],
  },
  {//
    id: 780.2,
    text: 'Jin "I am doing as fine as someone can be in prison."',
    options: [
      {
        text: `How have you been here?`,
        nextText: 780.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 780.3
      },
    ],
  },
  {//
    id: 780.3,
    text: 'Jin: "yES, wE wait FOR moments of TImE." The other voice came back. Jin: "SHUT IT, well yes I do know a way, but it takes time and it\'s not time yet. I may let you in depending on if I like you later, HAHAHAHA." Guard2:"GET BACK TO WORK!"',
    options: [
      {
        text: `Thank you, talk to you later.`,
        nextText: 781
      }
    ],
  },
  {//
    id: 781,
    text: 'You walk towards Frank, but he meets you in the middle, much smaller than the other two, but around the same size as you if not a little shorter. He is wearing a cloak to cover his face, you wonder how he is allowed to have that, but he also does not seem to be from this area.',
    options: [
      {
        text: `Hey`,
        nextText: 782
      }
    ],
    imageCheck: 29
  },
  {//
    id: 782,
    text: 'Frank: "Jack?"',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 782.1
      },
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 782.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 782.3
      },
    ],
  },
  {//
    id: 782.1,
    text: 'Frank: "Sorry, but you do not get to know why, just know that I am someone that can get anywhere they want."',
    options: [
      {
        text: `I was wondering where you are from, you look like a foreigner?`,
        nextText: 782.2
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 782.3
      },
    ],
  },
  {//
    id: 782.2,
    text: 'Frank: "Yes I come from Bani."',
    options: [
      {
        text: `How did you get in here?`,
        nextText: 782.1
      },
      {
        text: `Have you got anything that may allow you or us to get out?`,
        nextText: 782.3
      },
    ],
  },
  {//
    id: 782.3,
    text: 'Frank: "Maybe what is in it for me?"',
    options: [
      {
        text: `Well it seems like you can't do it yourself, so you will be able to get out.`,
        nextText: 782.31
      },
    ],
  },
  {//
    id: 782.31,
    text: 'HAHAHA, okay then. We will talk more about this in further detail later.',
    options: [
      {
        text: `Alright see you later`,
        nextText: 783
      }
    ],
    imageCheck: 24
  }, {//
    id: 783,
    text: 'You have more energy left and so you start to mine again. You spend another hour or two before hearing the church bell. They take you to the church to pay for your sins, a costume from Bina culture. You spend an hour in the church before being thrown back into your cell.',
    options: [
      {
        text: `Continue`,
        nextText: 784
      }
    ],
  },
  {//
    id: 784,
    text: 'Like the other night a plate gets thrown in, but this time none goes for it except Jin. It appears like they are taking turns with the food. You remember them talking about it while you were mining. You wonder when it will be your turn to eat and drink. You do not know how long it has been since your break in, but you do know that you are starving.',
    options: [
      {
        text: `Go to sleep`,
        nextText: 785
      }
    ],
  },
  {//
    id: 785,
    text: 'You drift into sleep with nightmares of what happened. Jack: "I am sorry; I am so sorry! Please I will..." You wake up and Frank is pointing to the food in front of you.',
    options: [
      {
        text: `Thank you`,
        nextText: 786
      }
    ],
  },
  {//
    id: 786,
    text: 'You pick it up and take a bite out of what looks like bread, but turns out to be rice. It surprises you, but you really are not in a position to complain about the food. You eat all of it before being called back out to work where you mine again.',
    options: [
      {
        text: `5 Years Later`,
        nextText: 787
      }
    ],
  },
  {//
    id: 787,
    text: 'You have been doing the same thing for about 5 years now counting each week on your wall. Nothing new with Henry, but you have become good friends with the people in your cell. The nightmares are still there, but you have a good feeling.',
    options: [
      {
        text: `Eat the rice bread`,
        nextText: 788
      }
    ],
    imageCheck: 30
  },
  {// how to break out of prison
    id: 788,
    text: 'You take a bite of the rice bread, everyone else is looking at it. Maybe if you help one of them more than the others they can help you escape.',
    options: [
      {//breaks out with Brian (bb)
        text: `Give some to Brian `, //increases strength or con by 1
        nextText: 789.1,
        setPlayer: { str: 7 }
      },
      {//breaks out with Jin (bj) //increases charisma or wisdom by 1
        text: `Give some to Jin`,
        nextText: 790.1,
        setPlayer: { wis: 7 }
      },
      {//breaks out with Frank (bf) //increases dex or charisma by 1
        text: `Give some to Frank`,
        nextText: 791.2,
        setPlayer: { dex: 7 }
      }
    ],
  },
  {// bb
    id: 789.1,
    text: 'You hand the rest to Brian, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Brian to start a fight. You can get both Brian and yourself out.',
    options: [
      {
        text: `Hey`,
        nextText: 789.2
      }
    ],
    imageCheck: 27
  },
  {// bb
    id: 789.2,
    text: 'Jack: "Brian, I have a plan to get us out of the dump. You want to hear about it? You want to be able to see your kids again?" It may be a bit much bringing up his kids, but you need to get out so the ends justify the means.',
    options: [
      {
        text: `Continue`,
        nextText: 789.3
      }
    ],
  },
  {// bb
    id: 789.3,
    text: 'Brian: "Yes Brian wants to leave. How do Brian and friends leave?"',
    options: [
      {
        text: `Respond with the plan`,
        nextText: 789.4
      }
    ],
  },
  {// bb
    id: 789.4,
    text: 'Brian: "Sounds Good" He walks away, you realise that you forgot to tell him when you will be doing this, but before you can tell him he pushes one of the other inmates down. The inmate gets up then throws a punch. You see as a crowd starts to gather. The guards are nowhere to be seen, it looks like they are under maned today, lucky.',
    options: [
      {
        text: `Watch`,
        nextText: 789.5
      }
    ],
  },
  {// bb
    id: 789.5,
    text: 'You see as another fight breaks out, until there is not a single person that is not in a fight. You escape and see Brian look for you.',
    options: [
      {
        text: `Call for Brian`, // leave with Brian (lb)
        nextText: 789.6
      },
      {
        text: 'Run without Brian', // leave without Brian (wb)
        nextText: 789.61
      }
    ],
  },
  {// wb
    id: 789.6,
    text: 'You call out to Brian and he runs towards you. You start to burst out laughing, Jack: "We might just be able to get out, good job Brian." Brian smiles and picks you up. You guys make your way to the armoury where you find your old blade, it appears to have been used, but it\'s not in bad shape. Brian picks up a large great axe.',
    options: [
      {
        text: `Let's get out of here!`,
        nextText: 789.7
      }
    ],
  },
  {// lb
    id: 789.61,
    text: 'You look at Brian and think about if you really need him. You decide to run off to the armoury and get your old sword, it appears to have been used, but it\'s still in good shape. You run out and make your way out.',
    options: [
      {
        text: `Continue`,
        nextText: 789.71
      }
    ],
  },
  {// wb
    id: 789.7,
    text: 'You run into some guards, only two of them look tough, but you are ready for them. Brian takes one of them, so it only leaves you with one.',
    options: [
      {
        text: `Continue`,
        nextText: 789.8
      }
    ],
  },
  {// lb
    id: 789.71,
    text: 'You run into some guards, only two of them they look tough, but you are ready for them.',
    options: [
      {
        text: `Continue`,
        nextText: 789.81
      }
    ],
  },
  {// Conflict wb
    id: 789.8,
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
    startCombat: 36,
    imageCheck: 31
  },
  {// Conflict lb
    id: 789.81,
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
    startCombat: 37,
    imageCheck: 31
  },
  {// end conflict wb
    id: 789.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 789.11
      }
    ],
    imageCheck: 30
  },
  {// end conflict lb
    id: 789.91,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 789.111
      }
    ],
    imageCheck: 32
  },
  {// wb
    id: 789.11,
    text: 'You finish your guard just in time to see Brian get stabbed in the chest. He swings down his axe and kills the guard, but the wound is deep, a healing potion will not heal this one.',
    options: [
      {
        text: `Brian!`,
        nextText: 789.13
      },
      {
        text: `Will you be okay?`,
        nextText: 789.13
      },
      {
        text: `Come on we are too close.`,
        nextText: 789.16
      },
    ],
  },
  {// lb end
    id: 789.111,
    text: 'You take out the guards and make a dash for the exit. You think about taking out your anger and all the guards, but you are not dumb.',
    options: [
      {
        text: `Freedom!`,
        nextText: 793
      }
    ],
    imageCheck: 30
  },
  {// wb
    id: 789.13,
    text: 'Brian: "Jack, thank you for helping Brian. I am okay with this, go do not waste your freedom on me..." Brian\'s eyes close and he takes a breath out, he\'s not died but he is pretending to be to try to get you to leave.',
    options: [
      {
        text: `Help`,
        nextText: 789.14
      },
      {
        text: `Leave`,
        nextText: 789.1
      },
    ],
  },
  {// help wb
    id: 789.14,
    text: 'Jack: "Come on Brian I know you are still alive, let\'s go. You will be able to make."',
    options: [
      {
        text: `Try to help him up`,
        nextText: 789.15
      }
    ],
  },
  {// help wb
    id: 789.15,
    text: 'Brian: "No I am dead. Go without Brian, it’s okay, I want this."',
    options: [
      {
        text: `leave`,
        nextText: 789.16
      }
    ],
  },
  {// wb end
    id: 789.6,
    text: 'You decide to listen to Brian and leave him, it hurts you but you know that he will face a worse death outside of this prison. At least he gets to die on his own terms. You hand him one of the swords that the guards have, and walk out the door holding back your rage to kill everyone in that prison.',
    options: [
      {
        text: `Freedom`,
        nextText: 792
      }
    ],
    imageCheck: 30
  },
  {// bj
    id: 790.1,
    text: 'You hand the rest to Jin, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Jin to be able to enter the armoury. Maybe he can make us seem like guards. You can get both Jin and yourself out.',
    options: [
      {
        text: `Talk to Jin`,
        nextText: 790.2
      }
    ],
    imageCheck: 28
  },
  {// bj
    id: 790.2,
    text: 'Jack: "Jin, I have a plan to get us out of the dump. You want to hear about it?',
    options: [
      {
        text: `Continue`,
        nextText: 790.3
      }
    ],
  },
  {// bj
    id: 790.3,
    text: 'Jin: "I am listening."',
    options: [
      {
        text: `Explain him the plan`,
        nextText: 790.4
      }
    ],
  },
  {// bj
    id: 790.4,
    text: 'Jin: "Hmm, that is my type of crazy. I will not lie, hahaha. Sure, let\'s try it. There is a day where most of the guards will be gone because Lord Williams is holding a party and needs sore guards. So we will strike then."',
    options: [
      {
        text: `Okay`,
        nextText: 790.5
      }
    ],
  },
  {// bj
    id: 790.5,
    text: 'You wait for Jin to talk to you again, a few weeks go by and you start to notice that most of the guards are out. Right now there is only like 10 of them.',
    options: [
      {
        text: `Wait for Jin`,
        nextText: 790.6
      }
    ],
  },
  {// bj
    id: 790.6,
    text: 'Jin: "Jack, today is the day, say your goodbyes we are leaving!" Jin: "LEAvinG, yes... yEs." You get a weird feeling about it, but you are too far into it now to just back out.',
    options: [
      {
        text: `Continue`,
        nextText: 790.7
      }
    ],
  },
  {// bj
    id: 790.7,
    text: 'You say your goodbyes and you and Jin wait for the moment to attack. You see an opportunity to steal some weapons and take it. 2 guards see you, you will have to take them out, Jin is useless in combat.',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 790.8
      }
    ],
  },
  {// bj
    id: 790.8,
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
    startCombat: 38,
    imageCheck: 31
  },
  {//bj
    id: 790.9,
    text: 'Defeat guards',
    options: [
      {
        text: `Continue`,
        nextText: 790.11
      }
    ],
    imageCheck: 33
  },
  {// bj
    id: 790.11,
    text: 'You hide their bodies in some bushes and make your way with Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 790.12
      }
    ],
  },
  {// bj
    id: 790.12,
    text: 'You reach the armoury and take some armour, for some reason Jin has not said a word to you since you took out the guards. You are getting a weird feeling so you keep your weapon near you.',
    options: [
      {
        text: `Are we ready?`,
        nextText: 790.13
      }
    ],
  },
  {// bj
    id: 790.13,
    text: 'Jin looks at you and then swings his blade in your direction, you manage to dodge at the last second',
    options: [
      {
        text: `Continue`,
        nextText: 790.14
      }
    ],
  },
  {// bj combat
    id: 790.14,
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
    startCombat: 39,
    imageCheck: 34
  },
  {//bj combat finish
    id: 790.15,
    text: 'You defeat Jin.',
    options: [
      {
        text: `Continue`,
        nextText: 790.16
      }
    ],
    imageCheck: 35
  },
  {// bj
    id: 790.16,
    text: 'You stab Jin right in the chest and push him off you. Hey stumbles back before he falls into some crates. You do not really know why Jin would do that but you also knew that he was probably the most unstable out of the three inmates. You get up clean your weapon and walk straight through the gates but then.',
    options: [
      {
        text: `Guard: "Hey"!`,
        nextText: 790.17
      }
    ],
  },
  {// bj
    id: 790.17,
    text: 'Guard: "Where do you think you are going?"',
    options: [
      {
        text: `Attack`,
        nextText: 790.22
      },
      {
        text: `Talk`,
        nextText: 790.18
      }
    ],
    imageCheck: 26
  },
  {//charisma check 10 bj
    id: 790.18,
    text: 'Jack: "Sorry, I need to go to the general. An inmate has killed a fellow inmate in the armoury and I do not know where that inmate is."',
    options: [
      {
        text: `Continue
      [Check (cha)]`,
        nextText: 790.181
      }
    ],
  },
  {//charisma check 10 bj
    id: 790.181,
    text: 'Blank due too dice roll."',
    options: [
      {
        text: `Continue`,
        nextText: 790.19
      }
    ],
    diceRoll: 27
  },
  {// succeeds bj
    id: 790.19,
    text: 'Guard: "Yes, I see go find him he is in Lord Williams manor just west of here in the town of Lüdingfeld."',
    options: [
      {
        text: `Thank you, I will go immediately.`,
        nextText: 790.21
      }
    ],
    imageCheck: 30
  },
  {// fails bj
    id: 790.22,
    text: 'Get him!',
    options: [
      {
        text: `Continue`,
        nextText: 790.23
      }
    ],
  },
  {// bj combat
    id: 790.23,
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
    startCombat: 40,
    imageCheck: 31
  },
  {//bj
    id: 790.24,
    text: 'You defeat Guards.',
    options: [
      {
        text: `Continue`,
        nextText: 792.25
      }
    ],
    imageCheck: 30
  },
  {// bj
    id: 790.25,
    text: 'You run out looking around what to do next',
    options: [
      {
        text: `Continue`,
        nextText: 792
      }
    ],
  },
  {// bf
    id: 791.2,
    text: 'You hand the rest to Frank, the other guys look annoyed but do not say anything. Later that day you decide that you are going to try to get Frank to escape with you. He knows the fort much better than you and he can help you sneak through the fort.',
    options: [
      {
        text: `Find Frank`,
        nextText: 791.3
      }
    ],
    imageCheck: 29
  },
  {// bf
    id: 791.3,
    text: 'Jack: "Hey Frank, how would you like it if we got out of here?"',
    options: [
      {
        text: `Continue`,
        nextText: 791.4
      }
    ],
  },
  {// bf
    id: 791.4,
    text: 'Frank: "You mean escape the fort. It\'s possible but you need to be sneaky to travel with me or at least know how fight."',
    options: [
      {
        text: `Explain the plan.`,
        nextText: 791.5
      }
    ],
  },
  {// bf
    id: 791.5,
    text: 'Frank: "Interesting... This could work, let\'s wait for tonight. There will be less guards tonight, Lord Williams is holding a party and they need more guards. Meet me at the armoury."',
    options: [
      {
        text: `Alright I will meet you there`,
        nextText: 791.6
      }
    ],
  },
  {// dex check 10 bf
    id: 791.6,
    text: 'While you are walking back from mining you try to sneak away from the group.',
    options: [
      {
        text: `Make it for the Armoury
        [Check (Dex)]`,
        nextText: 791.61
      }
    ],
    imageCheck: 26
  },
  {// dex check 10 bf
    id: 791.61,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Make it for the Armoury`,
        nextText: 791.7
      }
    ],
    diceRoll: 28
  },
  {// succeeds bf
    id: 791.7,
    text: 'You make it in the armoury without being seen.',
    options: [
      {
        text: `Look for Frank`,
        nextText: 792.14
      }
    ],
    imageCheck: 35
  },
  {// fails bf
    id: 791.8,
    text: 'You try to sneak off, but you get caught by a guard. Guard: "Hey!" You pick up a shovel',
    options: [
      {
        text: `Start combat`,
        nextText: 791.9
      }
    ],
  },
  {// combat, fails bf
    id: 791.9,
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
    startCombat: 41,
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 791.12,
    text: 'blank',
    options: [
      {
        text: `Continue`,
        nextText: 791.13
      }
    ],
    imageCheck: 35
  },
  {// fails bf
    id: 791.13,
    text: 'You rush to the armoury trying not to get caught by any more guards.',
    options: [
      {
        text: `Continue`,
        nextText: 791.14
      }
    ],
  },
  {// bf
    id: 792.14,
    text: 'You see Frank in the back, he seems like he has been here for a bit. Frank: "Took you long enough, let\'s get going." He starts walking towards a secret passage and waves for you to follow.',
    options: [
      {
        text: `Follow Frank`,
        nextText: 792.15
      }
    ],
    imageCheck: 36
  },
  {// bf
    id: 792.15,
    text: 'You go into the passage; you realise that you are actually walking the walls. You can see everyone, some things you wished you didn\'t see. ',
    options: [
      {
        text: `Where are we going?`,
        nextText: 792.16
      },
      {
        text: `Are you sure we are going the right way?`,
        nextText: 792.16
      },
      {
        text: `Do not say anything, continue walking.`,
        nextText: 792.17
      }
    ],
    imageCheck: 37
  },
  {// bf
    id: 792.16,
    text: 'Frank: "Stay quiet, they can still hear us."',
    options: [
      {
        text: `Continue following Frank.`,
        nextText: 792.17
      }
    ],
  },
  {// dex check 12 bf
    id: 792.17,
    text: 'You make it to the end of the passage, but there are three guards right in front of the door. You try to sneak past with Frank.',
    options: [
      {
        text: `Sneak off
        [Check (Dex)]`,
        nextText: 792.171
      }
    ],
  },
  {// dex check 12 bf
    id: 792.171,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `Sneak off`,
        nextText: 792.22
      }
    ],
    diceRoll: 29,
    imageCheck: 26
  },
  {// fail bf
    id: 792.18,
    text: 'Guard: "Stop right there!"',
    options: [
      {
        text: `Pull out your weapon`,
        nextText: 792.185
      }
    ],
  },
  {// combat, fails bf
    id: 791.185,
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
    startCombat: 42,
    imageCheck: 31
  },
  {//end combat, fails bf
    id: 791.19,
    text: 'Defeated Guards',
    options: [
      {
        text: `Continue`,
        nextText: 791.21
      }
    ],
    imageCheck: 30
  },
  {// fail bf
    id: 791.21,
    text: 'You look around you to see where Frank is, but you can\'t find him. You do not have the time to stay around so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 792
      }
    ],
  },
  {// succeed bf
    id: 791.22,
    text: 'You stay close to the shadows and when you reach the shrubs, you start to crawl away. You try searching for Frank, but he is nowhere to be seen. You do not have the time to look so you leave.',
    options: [
      {
        text: `Continue`,
        nextText: 792
      }
    ],
    imageCheck: 30
  },
  {// 
    id: 792,
    text: 'You run out of the fort, you keep on running for as long as you can until you reach a spot where you can rest. You turn around to see if anyone is following you, but you see none.',
    options: [
      {
        text: `Sleep`,
        nextText: 793
      },
      {
        text: `Continue Running`,
        nextText: 792
      }
    ],
    imageCheck: 12
  },
  {// sleep
    id: 793,
    text: 'You stop running and start looking for a place to sleep for the night. You find an area that has a small amount of rocks and as soon as you lay down you just go to sleep.',
    options: [
      {
        text: `Continue`,
        nextText: 794
      }
    ],
  },
  {// sleep
    id: 794,
    text: 'You wake up to the sunlight, the first time in over 5 years, but even though you want to just bask in the sun you know that you need to keep going so none finds you.',
    options: [
      {
        text: `Continue`,
        nextText: 799
      }
    ],
    imageCheck: 12
  },
  {// running
    id: 795,
    text: 'You start to walk around the forest, you have no clue where anything is or where you are so you continue just going straight. You walk until the sun goes down and some farther. You hear something in the bushes, but before you can react they jump you.',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 796
      }
    ],
    text: `Pull out weapon`,
  },
  {// combat, runs
    id: 796,
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
    startCombat: 43,
    imageCheck: 39
  },
  {//end combat, runs
    id: 797,
    text: 'Defeated Bear.',
    options: [
      {
        text: `Continue`,
        nextText: 798
      }
    ],
    imageCheck: 12
  },
  {//
    id: 798,
    text: 'You stab the bear in its neck and it falls over. You are completely exhausted and you fall over.',
    options: [
      {
        text: `Continue`,
        nextText: 794
      }
    ],
  },
  {//
    id: 799,
    text: 'You start to look for the main road, everything right now looks the same. Each tree is so tall and so similar that it is almost impossible to know where you are going, but after several hours of searching you run into a road. You decide to follow the road to see where it leads.',
    options: [
      {
        text: `Follow the road`,
        nextText: 800
      }
    ],
  },
  {//
    id: 800,
    text: 'You run into a merchant, at this point you are starving and tired. You have not gotten to eat or have an okay sleep since you left the fort. You walk up to the merchant:',
    options: [
      { //talk
        text: `Excuse me, can I catch a ride to the town of Lüdingfeld?`,
        nextText: 801
      },
      { //scare
        text: `Take out your weapon`,
        nextText: 802
      },
    ],
    imageCheck: 7
  },
  {// talk
    id: 801,
    text: 'Merchant: "Sure, I am actually going that way."',
    options: [
      {
        text: `Thank you, I am...Peirce.`,
        nextText: 803
      }
    ],
  },
  {// scare
    id: 802,
    text: 'Jack: "Take me to Lüdingfeld!" Merchant: "Please! Do not hurt, I will please."',
    options: [
      {
        text: `Good.`,
        nextText: 803,
      },
    ],
  },

  {//
    id: 803,
    text: 'You make it to Lüdingfeld, lucky you do not encounter any guards. You jump out of the cart before the merchant could notice. You do not want him to know where you are going or who you are.',
    options: [
      {
        text: `Rush to Marrys home. `,
        nextText: 804,
      }
    ],
    imageCheck: 10
  },
  {//
    id: 804,
    text: 'You find nothing, not a single sign of life, the house feels so empty. You expected a greeting form Marry, but it does not seem like she\'s here. The home is completely dead. Something is off.',
    options: [
      {
        text: `Walk in `,
        nextText: 805
      }
    ],
  },
  {//
    id: 805,
    text: 'You run into the home looking for Marry. You find her dead in the centre of the room surrounded by bandits. As you go to investigate her body you see her necklace with a weird glowing jade. Last time you saw her, she had nothing of the sort. You take it off her neck to try to further understand why this happened. The bandits weren/’t ever this aggressive and only stuck to the roads.',
    options: [
      {
        text: `Continue`,
        nextText: 806
      }
    ],
    imageCheck: 2
  },
  {//
    id: 806,
    text: 'You look for more clues. You see a note next to her bed, a picture on the wall to the left of the door, and she has something on her desk. You ',
    options: [
      {
        text: `Note`,
        nextText: 807
      },
      {
        text: `Painting`,
        nextText: 809
      },
      {
        text: `Desk`,
        nextText: 810
      },
      {
        text: `Jade`,
        nextText: 811
      }
    ],
  },
  {//
    id: 807,
    text: 'Marrys Note: "The ‘Lung Jade’ is a very rare item only found in the caves of a dragon’s den. I once thought it was just something told to children to stay out of trouble, but now… The powers of the jade can only be fully used by a dragon. From what I understand you can still use it by using it like any other metal, but something this rare and beautiful shouldn’t be used on a weapon of man."',
    options: [
      {
        text: `Examine`,
        nextText: 809
      }
    ],
  },
  {//
    id: 808,
    text: 'Jack: "I have heard of these beasts. They were thought to be the protectors of the lands, Gods that used ‘mortal’ bodies. They were said to ask for tributes and give great rewards to people that they deemed worthy. Unfortunately, after the first invasion many of them left the island. This was the first sign of the end of the war. I always assumed it was legends and just stories to tell, never did I think that it could be reality. The power that someone can possess with just one of these is unimaginable."',
    options: [
      {
        text: `Painting`,
        nextText: 809
      },
      {
        text: `Desk`,
        nextText: 810
      },
      {
        text: `Jade`,
        nextText: 811
      }
    ],
  },
  {//
    id: 809,
    text: 'You go towards the painting on the wall. It shows a man handing the jade to a dragon. Beautiful, but doesn’t tell you very much about what it does or how to use it.',
    options: [
      {
        text: `Note`,
        nextText: 807
      },
      {
        text: `Desk`,
        nextText: 810
      },
      {
        text: `Jade`,
        nextText: 811
      }
    ],
  },
  {//
    id: 810,
    text: 'Marry: "I should have never taken this jade. To whoever reads this, please take the stone to the mountain in the west. This power is too powerful for one person. If you do use this jade, nothing but bad luck will follow you. Good luck. PS: if you run into a man named Jack tell him what happened here."',
    options: [
      {
        text: `Note`,
        nextText: 807
      },
      {
        text: `Painting`,
        nextText: 809
      },
      {
        text: `Jade`,
        nextText: 811
      }
    ],
  },
  {//
    id: 811,
    text: 'You look at her hand to see that she is holding the jade. You pick it up and inspect it. You read that these jewels can be infused with weapons to make them more powerful, but they often can consume the person using it. You do not care for the consequences, no matter the cost you will get your revenge.',
    options: [
      {
        text: `Walk to the smithy`,
        nextText: 813
      }
    ],
  },
  {//
    id: 813,
    text: 'You walk outside, you didn\'t realize it until now, but the smell in that house was horrible. You start up the smithy like how Mary taught you, you grab a bucket and put in the jade into it. You then put the bucket into the smithy and let it smelt down the jade.',
    options: [
      {
        text: `Wait`,
        nextText: 814
      }
    ],
  },
  {// 
    id: 814,
    text: 'You make the iron cast of your weapon, you had to melt down the weapon, but you know that this blade will be even better.',
    options: [
      {
        text: `Wait`,
        nextText: 815
      }
    ],
  },
  {//increase an ability score to max twice
    id: 815,
    text: 'You take out the molten jade and pour it into the iron cast. You then start the process of cooling it and forming it to make your weapon.',
    options: [
      {
        text: `Forge`,
        nextText: 816
      }
    ],
    imageCheck: 56
  },
  {//
    id: 816,
    text: 'You can feel the power from the weapon, it’s almost too much, but you get a grip. You know that you are ready to defeat everything that comes your way. This time you will be sure that you can get your revenge.',
    options: [
      {
        text: `Go to your old home`,
        nextText: 817
      }
    ],
  },
  //find henry
  {//
    id: 817,
    text: 'You enter the village, you are used to it been burnt, but now it\'s just overgrown. You start walking around to try to spot the manor.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 826
      }
    ],
    imageCheck: 44
  },
  {//
    id: 826,
    text: 'You walk past the training area. You remember how you were first taught how to use a sword by your dad here, he made me fight for hours until I could everyone there. You were going to train your son the same way, but you never got that chance... that right.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 827
      }
    ],
  },
  {//
    id: 827,
    text: 'You look at the market area, the place that you spent most of your time in town being in your adulthood. You remember the day that you met your wife, Jessy, it was a rainy day and she was by herself. I offered my coat and walked her home. It was a beautiful, or at least to you it was.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 828
      }
    ],
  },
  {//
    id: 828,
    text: 'You walk past your home. The place that you felt the safest at, it\'s ironic that it is also the place that killed everything you loved. You continue forward, you have no time to mourn. If you get out of this alive you will bring flowers to their graves.',
    options: [
      {
        text: `Walk towards the manor`,
        nextText: 829
      }
    ],
  },
  {//
    id: 829,
    text: 'You get into vision of the manor. You stay out of sight for the most part, they cannot really see you from where you are at. The manor across the valley, you just need to cross',
    options: [
      {
        text: `Cross valley`,
        nextText: 830
      },
    ],
  },
  {//
    id: 831,
    text: 'Guard 1: "Wait who are you, is that with you?" Guard2: "He\'s an intruder, GET HIM!" They pull out their swords',
    options: [
      {
        text: `Pull out weapon`,
        nextText: 832
      }
    ],
    imageCheck: 45
  },
  {// combat
    id: 832,
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
    startCombat: 44,
    imageCheck: 46
  },
  {//end combat
    id: 833,
    text: 'Defeated the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 834
      }
    ],
    imageCheck: 45
  },
  {//
    id: 834,
    text: 'You strike down the guards, you see a picture fall out of one of their pockets.',
    options: [
      {
        text: `Push forward`,
        nextText: 836
      },
      {
        text: `Investigate the picture`,
        nextText: 835
      }
    ],
  },
  {//
    id: 835,
    text: 'You look closer at the picture, it\'s a drawing of the guards\' kids. You are taken back a little, maybe this isn\'t worth taking revenge on everyone. You then snap out of it remembering what happened to you.',
    options: [
      {
        text: `Continue pushing forward`,
        nextText: 836
      }
    ],
  },
  {//
    id: 836,
    text: 'You walk over the dead guards; you try to stick to the walls to keep out of distance. When you make it near the front door, you slowly open it and slide right in. You turn around to see three different guards, they pull out their weapons.',
    options: [
      {
        text: `pull out your weapon`,
        nextText: 837
      }
    ],
    imageCheck: 47
  },
  {// combat
    id: 837,
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
    startCombat: 45,
    imageCheck: 48
  },
  {// end combat
    id: 838,
    text: 'You cut through the guards.',
    options: [
      {
        text: `Continue`,
        nextText: 839
      }
    ],
    imageCheck: 49
  },
  {//
    id: 839,
    text: 'You are feeling hurt, but you still have a job to finish. You run up the stairs to look for where Henry is.',
    options: [
      {
        text: `Library`,
        nextText: 840
      },
      {
        text: `Kitchen`,
        nextText: 844
      },
      {
        text: `Guest Room`,
        nextText: 845
      }
    ],
    imageCheck: 50
  },
  {// library
    id: 840,
    text: 'You walk into the library, it\'s a large room with enough books to suffocate someone with. You see someone sitting next to the fireplace. You remember this boy from Henry\'s dinner, it\'s his son Johnny.',
    options: [
      {
        text: `Hey, Johnny is it ? `,
        nextText: 841
      },
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 842
      },
      {
        text: `Leave quietly`,
        nextText: 843
      }
    ],
    imageCheck: 51
  },
  {// library
    id: 841,
    text: 'Jack: "Johnny, I have business with your dad, do you know where he is?" The boy looks at you with the same terror from last time, he does not seem like he can form a sentence.',
    options: [
      {
        text: `WHERE IS YOUR FATHER`,
        nextText: 842
      },
      {
        text: `Leave quietly`,
        nextText: 843
      }
    ],
  },
  {//
    id: 842,
    text: 'Johnny: "PLEASE! Please, please, please, please... it\'s just a nightmare, please" The boy can not say anything no matter what you do.',
    options: [
      {
        text: `Leave quietly`,
        nextText: 843
      }
    ],
  },
  {// library
    id: 843,
    text: 'You decide to walk out, but that boy’s eyes will haunt you for a bit.',
    options: [
      {
        text: `Kitchen`,
        nextText: 844
      },
      {
        text: `Guest Room`,
        nextText: 845
      },
      {
        text: `Stairs`,
        nextText: 846
      },
    ],
  },
  {//
    id: 844,
    text: 'You walk into the kitchen, there is nothing but cooks that are huddled in a corner, you pair your head around the door to see if someone is eating, but there is no sign of Henry.',
    options: [
      {
        text: `Library`,
        nextText: 840
      },
      {
        text: `Guest Room`,
        nextText: 845
      },
      {
        text: `Stairs`,
        nextText: 846
      },
    ],
    imageCheck: 52
  },
  {//
    id: 845,
    text: 'You walk into a room with only one bed. It appears to be pretty empty and there is no sign of anything in here.',
    options: [
      {
        text: `Library`,
        nextText: 840
      },
      {
        text: `Kitchen`,
        nextText: 844
      },
      {
        text: `Stairs`,
        nextText: 846
      },
    ],
    imageCheck: 53
  },
  {//
    id: 846,
    text: 'You walk back to the stair from before, you see Henry at the bottom. You cannot contain yourself, but you keep enough to control to not run at him.',
    options: [
      {
        text: `Continue`,
        nextText: 847
      }
    ],
    imageCheck: 54
  },
  {//
    id: 847,
    text: 'Henry: "JACK! WHAT HAVE YOU DONE!? WHAT DID I DO!?"',
    options: [
      {
        text: `You destroyed everything, I will give you the same fate!`,
        nextText: 848
      },
      {
        text: `You burned down my town… my home… my life.`,
        nextText: 49
      },
      {
        text: `Stay silent.`,
        nextText: 850
      }
    ],
  },
  {//
    id: 848,
    text: 'Henry: "What?"',
    options: [
      {
        text: `You want to lie then? So be it.`,
        nextText: 851
      }
    ],
  },
  {//
    id: 849,
    text: 'I’m sorry I don’t remember that, are you sure it was me?',
    options: [
      {
        text: `HOW DARE YOU!`,
        nextText: 851
      }
    ],
  },
  {//
    id: 850,
    text: 'Swings at you.',
    options: [
      {
        text: `Swing at him`,
        nextText: 851
      }
    ],
  },
  {// combat
    id: 851,
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
    startCombat: 46,
    imageCheck: 55
  },
  {// end combat
    id: 852,
    text: 'You are filled with even more rage.',
    options: [
      {
        text: `What will you do? `,
        nextText: 853
      }
    ],
    imageCheck: 54
  },
  {//
    id: 853,
    text: 'You look at Henry, you try to find a reason to keep him alive, but nothing comes to mind. You lift your weapon above your head and get hitting him with it until he is died.',
    options: [
      {
        text: `Kill`,
        nextText: 855
      },
    ],
  },
  {// this is where you have to return to this story
    id: 855,
    text: 'You pull back your weapon, but you yearn for more, this is not normal. You have only killed when you had to, but you have the urge to kill everything in the home. You lose control.',
    options: [
      {
        text: `Stop the urge`,
        nextText: 856
      }
    ],
    imageCheck: 51
  },
  {// 
    id: 856,
    text: 'You walk up the stairs were you found the library and you set it ablaze, you block each door and to make sure they cannot escape you block the hallway as well. You then start to walk out of the house.',
    options: [
      {
        text: `Stop the urge`,
        nextText: 857
      }
    ],
    imageCheck: 0
  },
  {// Roll con save of 10
    id: 857,
    text: 'Before you make it out to meet your fate to the guards, you stumble on one of Henry\'s sons. You sit there, you desperately trying to muster enough strength to walk past, but you have that itch again. Was this from that jade?',
    options: [
      {
        text: `STOP!
          [Check (con)]`,
        nextText: 859
      }
    ],
  },
  {// Roll con save of 10
    id: 857,
    text: 'Blank due to dice roll.',
    options: [
      {
        text: `STOP!`,
        nextText: 859
      }
    ],
    diceRoll: 30
  },
  {// fails, END 
    id: 858,
    text: 'You cannot stop it, you lose control. You blackout and wake up to the horrid sight. You fall to your knees, you try throwing the blade away, but your hand doesn\'t listen. Your hand lifts, you feel a brief sharp pain, then nothing.',
    options: [
      {
        text: `Bad Ending`,
        nextText: 1000
      }
    ],
    imageCheck: 0
  },
  {// Succeeds
    id: 859,
    text: 'You pull yourself together and watch as the boy trembles with fear, before running away. What have you turned into, your worse than Henry. You open up the door to see an army of guards.',
    options: [
      {
        text: `Ready yourself`,
        nextText: 860
      }
    ],
  },
  {// succeeds
    id: 860,
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
    startCombat: 45,
    imageCheck: 46
  },
  {// end combat, END GAME
    id: 861,
    text: 'You will not see this, if you do then wow. How did you do it?',
    options: [
      {
        text: `What will you do? `,
        nextText: 862
      }
    ],
    imageCheck: 1
  },
  {// killing, should have died ending
    id: 862,
    text: 'Well congrats on winning the most rigged part of the game. Did you enjoy it? Well I\'ll just give the button to leave back the beginning. You should have kept the dog; this is one of the worse endings. There will be more to come though so stay tuned.',
    options: [
      {
        text: `Congrats, you live.`,
        nextText: 1000
      }
    ],
  },
  {// killing, should have died ending
    id: 1000,
    text: 'Well congrats on winning the most rigged part of the game. Did you enjoy it? Well I\'ll just give the button to leave back the beginning. You should have kept the dog; this is one of the worse endings. There will be more to come though so stay tuned.',
    options: [
      {
        text: `Congrats, you live.`,
        nextText: 1000
      }
    ],
    reload: 1
  },
]
startGame()