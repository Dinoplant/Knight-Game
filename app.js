
const textElement = document.getElementById('text'); //gets the ids from the html to change the text for the story
const optionButtonsElement = document.getElementById('btnOptions');
let inventoryElement = document.getElementById(`invText`)
let d4one = 0
let d4two = 0
let d6one = 0
let d6two = 0
let d12 = 0
let d20 = 0
let pendant = 1
let combatQuestion = false
let continueCombat = false
let playerHp = 150
let damage = 0
let attack = false
let enemy1 = false
let enemy1Name = `none`
let enemy1Hp = 0
let enemy1Peace = 0
let enemy2 = false
let enemy2Name = `none`
let enemy2Hp = 0
let enemy2Peace = 0
let enemy3 = false
let enemy3Name = `none`
let enemy3Hp = 0
let enemy3Peace = 0
let enemyd20 = 0







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
    healPot: 0,
    jade: 0,
  }
  showTextNode(1)

}

function showTextNode(textNodeIndex) { // goes through tthe text nodes checks what I put for the text and changes the text in the HTML
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.startCombat == 1) { //just checks is a paramantor to see if combat starts
    startCombat(true, `Man`, 20, 0, false, `none`, 0, 0, false, `none`, 0, 0)
    console.log('combat mode engaged');
    combatQuestion = true
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
      }
      else if (option === textNode.options[1]) {
        button.addEventListener('click', () => slash())
      }
      else if (option === textNode.options[2]) {
        button.addEventListener('click', () => slash())
      }
      else if (option === textNode.options[3]) {
        button.addEventListener('click', () => slash())
      }
      else if (option === textNode.options[4]) {
        button.addEventListener('click', () => slash())
      }
      else if (option === textNode.options[5]) {
        button.addEventListener('click', () => slash())
      }


      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) { //sho2ws the opitions if they have a certain item and such
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


function slash() { //combat function only works if the combat funation is true and will only work if combat is on going or started 

  if (combatQuestion === true || continueCombat === true) {
    console.log(`Yooooooooooooooooooooooo`)
    d12 = Math.floor(Math.random() * (13 - 1) + 1)
    damage = d12
  }
  else {
    console.log(`na man`)
  }


  if (player.greatAxe >= 0 && player.str >= 7) {
    damage += 5
  }
  else if (player.str >= 9) {
    damage += 4
  }
  else if (player.str >= 6) {
    damage += 2
  }
  else if (player.str >= 3) {
    damage += 1
  }

  if (player.bow >= 1 && player.wis >= 5) {
    damage += 3
  }
damage = damage * 1.5
  attack = true
  startCombat(enemy1, enemy1Name, enemy1Hp, enemy1Peace, enemy2, enemy2Name, enemy2Hp, enemy2Peace, enemy3, enemy3Name, enemy3Hp, enemy3Peace,)
}

// comstumizable combat system, it has evrything needed
function startCombat(enemy1, enemy1Name, enemy1Hp, enemy1Peace, enemy2, enemy2Name, enemy2Hp, enemy2Peace, enemy3, enemy3Name, enemy3Hp, enemy3Peace,) { 


  if (player.con >= 9 && combatQuestion === true) {
    playerHp = 200
  } else if (player.con >= 6) {
    playerHp = 175
  } else if (player.con >= 3) {
    playerHp = 160
  } else { playerHp = 150 }

 
 

if(attack === true && enemy1Hp >= 1){

enemy1Hp -= damage

 enemyd20 = Math.floor(Math.random() * (21 - 1) + 1)

 console.log(`hey this is the damage`, enemyd20)
// if (){} for extra high rolls like bosses, checks enemyName

enemyd20 = enemyd20 * 1.7

playerHp -= enemyd20
console.log(`You did`, damage, `damage to the`, enemy1Name, `whhich leave them with`, enemy1Hp, `HP left.`, `The`, enemy1Name, `did`, enemyd20, `damage, leaving you with`, playerHp, `HP left.`)
textElement.innerText = (`You did`, damage, `damage to the`, enemy1Name, `whhich leave them with--`, enemy1Hp, `--HP left.`, `The`, enemy1Name, `did`, enemyd20, `damage, leaving you with--`, playerHp, `--HP left.`)
}
else {console.log(`did not work`)}
//console.log(`You did`, damage, `damage to the`, enemy1Name, `whhich leave them with`, enemy1Hp, `HP left.`, `The`, enemy1Name, `did`, enemyd20, `damage, leaving you with`, playerHp, `HP left.`)



}

function endCombat() {

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
  // {
  //   id: 0,
  //   text: `Our story begins in 40 AD on the newly conquered island of Britannia. Our protagonist is in a small village that seemed almost unaffected by the Roman invasion until one night when everything changed.`,
  //   options: [
  //     {
  //       text: `More Info`,
  //       nextText: 1
  //     },
  //     {
  //       text: `Continue`,
  //       nextText: 4
  //     },
  //     {
  //       text: `Credits`,
  //       nextText: 3
  //     }
  //   ],
  // },
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
        nextText: 2
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
    text: `Slash did 4 damage, the Enemy has 3 HP left. The enemy did 3 damage to you, you have --16 HP-- left.`,
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
        nextText: 2
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
]
startGame()

