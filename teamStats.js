const team = {
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
    get _Players(){
    return this._players;
  },
  
  get _games(){
     return this._games;
  }
  
  addPlayer(firstName,lastName,age){
       
  }
  }