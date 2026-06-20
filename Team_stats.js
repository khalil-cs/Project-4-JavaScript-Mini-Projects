const team = {

  _players: [
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 25
    },
    {
      firstName: 'Mike',
      lastName: 'Jordan',
      age: 28
    },
    {
      firstName: 'Alex',
      lastName: 'Brown',
      age: 22
    }
  ],

  _games: [
    {
      opponent: 'Sharks',
      teamPoints: 110,
      opponentPoints: 105
    },
    {
      opponent: 'Eagles',
      teamPoints: 95,
      opponentPoints: 90
    },
    {
      opponent: 'Lions',
      teamPoints: 120,
      opponentPoints: 115
    }
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {

    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    this._players.push(player);

  },

  addGame(newOpponent,
          newTeamPoints,
          newOpponentPoints) {

    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    this._games.push(game);

  }

};

team.addPlayer(
  'Bugs',
  'Bunny',
  76
);

console.log(team.players);

team.addGame(
  'Titans',
  100,
  98
);

console.log(team.games);