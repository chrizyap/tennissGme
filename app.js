const prompts = require('prompts');

const questions = [
  {
    type: 'number',
    name: 'Points',
    message: ' PlayerOne: 40 PlayerTwo: 30... Who Wins the next Point?',
  },
  {
    type: (prev) => (prev == 1 ? 'number' : null),
    name: 'Points',
    message: 'Player One Wins!!!!',
  },
  {
    type: (prev) => (prev == 2 ? 'number' : null),
    name: 'Points',
    message: 'Deuce!!!! Who wins next point?',
  },
  {
    type: (val) => (val == 2 ? 'number' : null),
    name: 'Points',
    message: 'Adavantage Player 2, Who wins next point?',
  },
  {
    type: (prev) => (prev == 2 ? 'number' : null),
    name: 'Points',
    message: 'Adavantage Player 1, Who wins next point?',
  },
  {
    type: (prev) => (prev == 2 ? 'number' : null),
    name: 'Points',
    message: 'Player Two Wins!!!',
  },

  {
    type: (prev) => (prev == 1 ? 'number' : null),
    name: 'Points',
    message: 'Deuce!!!! Who wins next point?',
  },

  {
    type: (val) => (val == 1 ? 'number' : null),
    name: 'Points',
    message: 'Adavantage Player 1, Who wins next point?',
  },

  {
    type: (prev) => (prev == 2 ? 'number' : null),
    name: 'Points',
    message: 'Advantage Player One, Who wins next point? ',
  },

  {
    type: (prev, value) => (prev == 1 && value == 1 ? 'number' : null),
    name: 'Points',
    message: 'Player One Wins!!!',
  },

  {
    type: (prev, value) => (prev == 2 && value == 2 ? 'number' : null),
    name: 'Points',
    message: 'Player Two Wins!!!',
  },

  {
    type: (prev) => (prev == 1 ? 'number' : null),
    name: 'Points',
    message: 'Player One Wins!!!',
  },
];

(async () => {
  const response = await prompts(questions);
})();
