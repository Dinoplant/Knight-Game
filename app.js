
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('btnOptions');
const isOverFlown = ({ clientHeight, scrollHeight}) => scrollHeight > clientHeight;

const resizeText = ({element, parent}) => {
  let i = 40
  let overFlow = false
  const maxsize = 150

  while (!overFlow && i < maxsize) {
element.style.fontsize = `${i}px`
overFlow = isOverFlown(parent)
  }

  element.style.fontsize = `${i - 1}px`
}

resizeText({
  element: document.querySelector(`.text`),
  parent: document.querySelector(`.textdisplay`)
})



let player = {}
console.log(textElement)
console.log(optionButtonsElement)

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
  return option.requiredState == null || option.requiredState(state)
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
    text: `There was a time where this land was isolated and seemed to be at peace, but after a time many other countries became more anxious to conquer the world. After the failed revolution in the west, the sea demons turned their attention to the east. The land’s government wanted to stay in solitude and tried to obtain their ancient ways, but it was only a matter of time until the demons would come.`,
    options: [
      {
        text: `Next`,
        setPlayer: {str: 2,},
        nextText: 2
      }
    ],
  },  
  {  
    id: 2,
    text: `hey`,
    options: [
      {
        text: `hope`,
        setPlayer: {str: 2,},
        nextText: 3
      },
      {
        text: `neat`,
        setPlayer: {wis: 2,},
        nextText: 3
      },
      {
        text: `neat oh`,
        setPlayer: {wis: 2,},
        nextText: 3
      },
      {
        text: `neat oh`,
        setPlayer: {wis: 2,},
        nextText: 3
      },
      {
        text: `neat oh`,
        setPlayer: {wis: 2,},
        nextText: 3
      },
      {
        text: `neat oh`,
        setPlayer: {wis: 2,},
        nextText: 3
      }
    ]

  }

]






startGame()

