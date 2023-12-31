const divA = document.getElementById('pageNumberOne');
const divB = document.getElementById('pageNumberTow');
const divC = document.getElementById('winer');
const divD = document.getElementById('over');
const divE = document.getElementById('info');
const winMusic = new Audio('./music/winnerMusic.mp3');
const loserMusic = new Audio('./music/loserMusic.mp3');

divB.style.display = 'none';
divC.style.display = 'none';
divD.style.display = 'none';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader--hidden');

  loader('.loader').addEventListener('transitionend', () => {
    document.body.removeChild(loader('.loader'));
  });
});

let score = 10;

function checkInput() {
  const inputField = document.getElementById('ferstNumber');
  const errorTag = document.getElementById('errorTag');

  const enteredValue = inputField.value;

  if (enteredValue === '') {
    errorTag.textContent = 'Please Enter at one number.';
  } else {
    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 100) {
      errorTag.textContent = 'Please enter a number between 1 and 100.';
      inputField.value = '';
    } else {
      errorTag.textContent = '';
    }
  }
}
function setTheNumber() {
  const enteredValue = parseInt(document.getElementById('ferstNumber').value);

  if (!isNaN(enteredValue) && enteredValue >= 1 && enteredValue <= 100) {
    divA.style.display = 'none';
    divE.style.display = 'none';
    divB.style.display = 'flex';
  } else {
    console.log('Please enter a number between 1 and 100.');
  }
}
function maxinput() {
  const inputField = document.getElementById('guessNumber');
  const errorTag = document.getElementById('ErrorPage');

  const enteredValue = inputField.value;

  if (enteredValue === '') {
    errorTag.textContent = 'Please Enter at one number.';
  } else {
    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 100) {
      errorTag.textContent = 'Please enter a number between 1 and 100.';
      inputField.value = '';
    } else {
      errorTag.textContent = '';
    }
  }
}
function buttonGuees() {
  const guessValue = parseInt(document.getElementById('guessNumber').value);
  const firstValue = parseInt(document.getElementById('ferstNumber').value);

  if (guessValue === firstValue) {
    divB.style.display = 'none';
    divC.style.display = 'flex';
    winMusic.play();
  } else {
    score--;
    document.getElementById('score').textContent = `Your Score: ${score}`;
  }

  if (score == 0) {
    divB.style.display = 'none';
    divD.style.display = 'flex';
    loserMusic.play();
  }

  const difference = Math.abs(firstValue - guessValue);
  if (difference <= 10) {
    if (guessValue > firstValue) {
      document.getElementById('Hint').textContent = "You're close, but try a smaller number.";
    } else if (guessValue < firstValue) {
      document.getElementById('Hint').textContent = "You're close, but try a larger number.";
    } else {
      document.getElementById('Hint').textContent = "You're very close! Try a slightly different number.";
    }
  } else {
    if (guessValue > firstValue) {
      document.getElementById('Hint').textContent = "You're quite far away. Try a smaller number.";
    } else {
      document.getElementById('Hint').textContent = "You're quite far away. Try a larger number.";
    }
  }
}
function backToPage() {
  window.open('../../index.html', '_self');
}
