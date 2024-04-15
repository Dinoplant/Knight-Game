
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btnOptions');
let inventoryElement = document.getElementById(`invText`)
let d4one = 0
let d4two = 0
let d6one = 0
let d6two = 0
let d12 = 0
let d20 = 0


let playerHp = 100
let player = {
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

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.startCombat == 1) {
    startCombat(true, 20, 0, false, 0, 0, false, 0, 0)
    console.log('combat mode engaged');
  } else {
    console.log('no violence = sad pandas');
  }





  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))

if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}
else if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}
else if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}
else if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}
else if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}
else if (option ===  textNode.options[0]){
  button.addEventListener('click', () => slash())
}


      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredPlayer == null || option.requiredPlayer(player)
}

function update() {
  inventoryElement.innerText = player
  console.log(`neato`)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  player = Object.assign(player, option.setPlayer)
  update()
  showTextNode(nextTextNodeId)
}

function slash() {  console.log(`it works`)}

function startCombat(enemy1, enemy1Hp, enemy1Peace, enemy2, enemy2Hp, enemy2Peace, enemy3, enemy3Hp, enemy3Peace,) {


  if (player.con >= 9) {
    playerHp = 150
  }

  else if (player.con >= 6) {
    playerHp = 125
  }
  else if (player.con >= 3) {
    playerHp = 110
  }
  else { playerHp = 100 }





 


  function endCombat() {

  }
}
  

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
    startCombat: 1
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
        nextText: 4
      },
    ],

  },
  {
    id: 6,
    text: `Choose who you want to attack.`,
    options: [
      {
        text: `name`,
        nextText: 7
      },
      {
        text: `name2`,
        nextText: 7
      },
      {
        text: `name23`,
        nextText: 7
      },
    ],
  },
  {
    id: 7,
    text: `Slash did 4 damage, the Enemy has 3 HP left. The enemy did 3 damage to you, you have --16 HP-- left.`,
    options: [
      {
        text: `Ok`,
        nextText: 4
      }
    ],

  },
]

startGame()

