
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btnOptions');
let inventoryElement = document.getElementById(`invText`)

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
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredPlayer == null || option.requiredPlayer(player)
}

function update(){
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

function slash(){}

console.log(`it works`)
  document.getElementById(`slash`).onclick = slash()


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
        setPlayer: { con: 5 },
        nextText: 2, //brings it to the next id 
        combatName: `none`
      }, // make sure to add commas
      {
        text: `PLAY`,
        //text was is visable first
        nextText: 4 //brings it to the next id 
      }, // make sure to add commas
      {
        text: `Credits`, //text was is visable first
        nextText: 3 //brings it to the next id 
      }
    ], // make sure to add commas
  },
  {
    id: 2,
    text: `This is a text adventure made for our CART lab. This was made in just about 6 week from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system, Have Fun!`,
    options: [
      {
        text: `Back`,
        nextText: 1,
        combatName: `none`
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
    Loghan Hornor (Lead Writer & Art Direction)
    Lily Sanchez(Lead Artist & Editor)`,
    options: [
      {
        text: `More Info`,
        combatName: `none`,
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
    text: `Combat`,
    options: [
      {
        text: `Slash`,
        nextText: 2
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

if (textNodes[3].id == 0) {
  startCombat(true, 50, 0, false, 0, 0, false, 0, 0)
  console.log(`it work 2.0`)
}




console.log(textNodes[4])
startGame()

