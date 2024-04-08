
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('btnOptions')

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
}

function showTextNode(index) {
  const textNode = textNodes.find(textNode => textNode.id === index)
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
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
{
  id:1,
  text: `hello`,
  options: [
    {
      text: `heelllooo`,
      setplayer: {str: 2,},
      nextText: 2
    }
    {
      text: `byeeee`,
      setplayer: {wis: 2,},
      nextText: 2
    }
  ]
}

]






startGame ()