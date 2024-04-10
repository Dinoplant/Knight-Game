
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btnOptions');

let player = {}

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

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  player = Object.assign(player, option.setPlayer)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: `Welcome to our Knight text adventure, click Play to start`,
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
        text: `Credits`,
        nextText: 3
      }
    ],
  },
  {
    id: 2,
    text: `This is a text adventure made for our CART lab. This was made in just about 6 week from planning to coding. There are lots of paths for you to take and many endings. Along with a combat system, Have Fun!`,
    options: [
      {
        text: `Back`,
        nextText: 1
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
    text: `Made by: Angel Delgado Jimenez (Lead Coder)
    Loghan Hornor (Lead Story & Art Direction)
    Gavin Stetson (Lead Feedbacker)`,
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
    text: `Placeholder`,
    options: [
      {
        text: `More Info`,
        nextText: 2
      },
      {
        text: `More Info`,
        nextText: 2
      },
      {
        text: `More Info`,
        nextText: 2
      },
      {
        text: `More Info`,
        nextText: 2
      },
      {
        text: `More Info`,
        nextText: 2
      }
    ]


  }
]

// while (textNodeIndex != 1 || 2) {
//   let inv = player

// document.getElementById(`invText`).innerText = inv
// }

startGame()

