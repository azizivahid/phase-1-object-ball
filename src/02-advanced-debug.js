let strArray = [];
console.log('Advanced debugging example running.')
//debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
     // debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.players
      if (teamKey === "players")
      {
        doesLongNameStealATon (data);
          for (let key in data) {
            debugger
            numPointsScored(data, key);
            shoeSize(data, key);
            playerNumbers(data, key);
            debugger
            playerStats(data,key)
            strArray.push (key.toString())
        debugger
        }
        debugger
      } else if (teamKey === "teamName"){
        let teamdata = teamObj.teamName
          teamNames(teamdata);
      } else if (teamKey === "colors"){
        let teamcolors = teamObj.colors
        teamColors(teamcolors);

      }

      
    }
  }
}

// then, call the function so it runs!
goodPractices();
doesLongNameStealATon (strArray);

function numPointsScored (obj ,player) {
//debugger
  let game = obj ;
  console.log (`${player}'s points :  `+ game[player].points)
}

function shoeSize (obj ,player) {
  //debugger
    let game = obj ;
    console.log (`${player}'s shoe size :  `+ game[player].shoe)
  };

  function teamColors (obj ) {
    debugger
      
      console.log (`Team Colors:  ` + obj)
    };

    function teamNames (obj) {
      debugger
        
        console.log (`Team Name  :  `+ obj)
      };

      function playerNumbers (obj ,player) {
        //debugger
          let game = obj ;
          console.log (`${player}'s Number:  `+ game[player].number)
        }
        function playerStats (obj,key ) {
          //debugger
            let game = obj ;
            console.log (game[key])
          }

          function doesLongNameStealATon(arrykey) {
      
            let maxLength = 0;
            let strM = ''

            for (var i = 0, length = arrykey.length; i < length; i++) {
              maxLength = Math.max(maxLength, arrykey[i].length);
            }
            if (maxLength ===0){
              strM = 'false'
            }else {
              strM = 'true'
            }
              console.log (""+  strM)
             

          }