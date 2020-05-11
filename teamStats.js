cconst team = {
    _players:[
      {
        firstname:'Pablo',
        lastName: 'Wheeeler',
        age:54
        },
  
        {
        firstname:'Kieth',
        lastName: 'Daniels',
        age:64
        },
  
        {
        firstname:'Kevin',
        lastName: 'Daniels',
        age:60
        },
      ],
    _games:[
    {
     opponent: 'Broncos',
     teamPoints: 42,
     opponentPoints: 27
     },
    {
    opponent: 'Giants',
    teamPoints: 24,
    opponentPoints: 27
    },
    {
    opponent: 'Falcons',
    teamPoints: 22,
    opponentPoints: 17
    }
    ],
  
    get players(){
     return this._players;
  },
  
    get games(){
     return this._games;
  },
  
  addPlayer(firstName,lastName,age){
       let player={
         firstName:firstName,
         lastName:lastName,
         age:age
       }
      this.players.push(player)
  
  },
      addGame(opponent,teamPoints,opponentPoints){
        let game={
          opponent:opponent,
          teamPoints:teamPoints,
          opponentPoints:opponentPoints
        }
     this.games.push(game)
      }
  }
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
   console.log(team.players)
  
  team.addGame('Redskins',44,28);
  team.addGame('Cowboys',20,44);
  team.addGame('Seahawks',15,10);
  
  console.log(team.games)
  
  
  
  
  
  