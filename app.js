
// will find a way soon

// DONT FORGET TO LINK THEM TOGETHER THIS TIME 

// const playerInv = {
//     item: 0,
// }


var questions = {
    'buy sword': 'here you go',
    'sell fish': 'thank you'
  }
  function askNPC(question){
    if(typeof questions[question] !== "undefined"){
      return questions[question];
    } else {
      return 'Did not understand you question!';
    }
  }
  
  var answer = askNPC('buy sword');
  var answer = askNPC('sell fish');

console.log(askNPC)



