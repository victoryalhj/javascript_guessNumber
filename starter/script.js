'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//random number
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', 
  function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  //when player no input
  if(!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

  //when player win
  }else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


  //when guess is wrong
  } else if (guess !== secretNumber) {
    if(score > 1) {
      // document.querySelector('.message').textContent 
      // = guess > secretNumber ? 'Too high': 'Too low';
      displayMessage(guess > secretNumber ? 'Too high': 'Too low')
      score--;
      document.querySelector('.score').textContent = score;
    }else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});


  //when guess is too high
  // } else if (guess > secretNumber) {
  //   if(score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }else {
  //     document.querySelector('.message').textContent = 'You lost the game';   
  //     document.querySelector('.score').textContent = 0;
  //   }

  //when guess is too low
//   }else if (guess < secretNumber){
//     if(score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }else {
//       document.querySelector('.message').textContent = 'You lost the game';   
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

//again
document.querySelector('.again').addEventListener('click',
  function() {
    //restore initial value of the score and secretNumber
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
