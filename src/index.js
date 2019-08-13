import readlineSync from 'readline-sync';

const CORRECT_TIMES = 3;

const success = () => {
  console.log('Correct!');
};

const askQuestion = (context) => {
  console.log(`Question: ${context}`);
};

const fail = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

const final = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default (data, instruction) => {
  console.log('Welcome to the Brain Games!\n');
  const name = getName();
  console.log(instruction);
  let correct = 0;

  while (correct < CORRECT_TIMES) {
    const { question, correctAnswer } = data();
    askQuestion(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      correct += 1;
      success();
    } else {
      fail(userAnswer, correctAnswer, name);
      return;
    }
  }

  final(name);
};
