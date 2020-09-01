describe('game', () => {
  let playerOne = 0;
  let playerTwo = 0;

  function addPointsB() {}

  function deuce() {}
  beforeEach(() => {});

  it('Player 1 should win next point', () => {
    playerOne = 40;
    playerTwo = 0;

    gameWonbyA = false;

    if (playerOne == 0) {
      playerOne + 15;
      console.log(playerOne);
    } else if ((playerOne = 15 < 30)) {
      playerOne + 15;
      console.log(playerOne);
    } else if ((playerOne = 30 < 40)) {
      playerOne + 10;
      console.log(playerOne);
    } else {
      gameWonbyA = true;
      console.log('Game won by A');
    }
  });
  it('Player 2 should win next point', () => {
    playerOne = 0;
    playerTwo = 40;
    gameWonbyA = false;

    if (playerTwo == 0) {
      playerTwo + 15;
      console.log(playerTwo);
    } else if ((playerTwo = 15 < 30)) {
      playerTwo + 15;
      console.log(playerTwo);
    } else if ((playerTwo = 30 < 40)) {
      playerTwo + 10;
    } else {
      gameWonbyA = true;
      console.log('Game won by Player B ');
    }
  });

  it('Should handle deuce', () => {
    playerOne = 40;
    playerTwo = 40;

    if (playerOne == 40 && playerTwo == 40) {
      console.log('Duece');
    }
  });

  it('should handle advantage', () => {
    playerOne = 40;
    playerTwo = 40;

    playerOne + 10;

    console.log('Player on has advantage');
  });
  //     match.pointWonBy(playerOne);
  //     expect(match.score()).toEqual(`0-0, Advantage ${playerOne}`);
  //     match.pointWonBy(playerTwo);
  //     expect(match.score()).toEqual('0-0, Deuce');
  //     match.pointWonBy(playerTwo);
  //     expect(match.score()).toEqual(`0-0, Advantage ${playerTwo}`);
  //   });

  //   it('should handle player win the game in non-deuce game', () => {
  //     for (let i = 0; i < 4; i = i + 1) {
  //       match.pointWonBy(playerOne);
  //     }
  //     expect(match.score()).toEqual('1-0');
  //   });

  //   it('should handle player win the game in deuce game', () => {
  //     for (let i = 0; i < 3; i = i + 1) {
  //       match.pointWonBy(playerOne);
  //       match.pointWonBy(playerTwo);
  //     }
  //     match.pointWonBy(playerOne);
  //     match.pointWonBy(playerOne);
  //     expect(match.score()).toEqual('1-0');
  //   });
});
