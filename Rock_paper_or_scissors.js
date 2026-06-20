const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (
        userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors' ||
        userInput === 'bomb'
    ) {
        return userInput;
    } else {
        console.log('Invalid Choice');
    }
};

const getComputerChoice = () => {
    const randomNumber =
        Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === 'bomb') {
        return 'You used the bomb! You win!';
    }

    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper'
            ? 'Computer Won!'
            : 'User Won!';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors'
            ? 'Computer Won!'
            : 'User Won!';
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock'
            ? 'Computer Won!'
            : 'User Won!';
    }
};

const playGame = () => {
    const userChoice =
        getUserChoice('rock');

    const computerChoice =
        getComputerChoice();

    console.log('User:', userChoice);
    console.log('Computer:', computerChoice);

    console.log(
        determineWinner(
            userChoice,
            computerChoice
        )
    );
};

playGame();