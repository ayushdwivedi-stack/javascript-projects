const randomNumber = parseInt(Math.random() * 100 + 1);
 const submitButton = document.querySelector('#submit');
 const userInput = document.querySelector('#guessField');
 const guessSlot = document.querySelector('.guesses');
 const remaining  = document.querySelector('.remaining  ');
 const lowOrHi = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');
 const p = document.createElement('p');
    let previousGuesses = []; 
    let numGuesses = 1;
    let playGame = true;
    if (playGame){
        submitButton.addEventListener('click', function(e){
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        });
    }
    function validateGuess(guess){
        if(isNaN(guess))
        {alert('pleasae enter an valid number')
        }
        else if (guess < 1 || guess > 100){
            alert('pleasae enter a number between 1 and 100')
        }
        else{
            previousGuesses.push(guess);
            if (numGuesses === 11){
                displayGuesses(guess);
                displayMessage(`Game Over! The number was ${randomNumber}`);
                endGame();
            }
            else{
                displayGuesses(guess);
                checkGuess(guess);
            }
            }

    }
    function checkGuess(guess){
        if (guess === randomNumber){
            displayMessage('Congratulations! You guessed the number!');
            endGame();
        }
        else if (guess < randomNumber){
            displayMessage(' Number is Too low! Try again.');
        }   
        else if (guess > randomNumber){
            displayMessage(' Number is Too high! Try again.');
        }


    }
    function displayGuesses(guess){
        userInput.value = '';
        guessSlot.innerHTML += `${guess} , `;
         remaining.innerHTML = `${11 - numGuesses}  Guesses left`;
         numGuesses++;
         


    }
    function displayMessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`;

    }
       function endGame(){
        userInput.value = ''; 
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
        startOver.appendChild(p);
        playGame = false;
         
        newGame();
    }
     
    function newGame(){
     const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function(){
             let randomNumber = parseInt(Math.random() * 100 + 1);
            previousGuesses = [];
            numGuesses = 1;
            guessSlot.innerHTML = '';
            remaining.innerHTML = '10 Guesses left';
            lowOrHi.innerHTML = '';
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true; 

    })
}

 