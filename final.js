//**Problem-1 */
function totalFine( fare ) { 
    if(fare <=0 || typeof fare !== "number"){
        return "Invalid"
    }
let fine = fare + (fare * 0.2) + 30;
return fine;
}


//**Problem-2 */

function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return "Invalid"; 
  }
  const character = str.split(' ').join('').toUpperCase();
  return character;
}

// **Problem-3*/

function  bestTeam( player1, player2 ) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null  ) {
        return "Invalid";
    }
    let team1 = player1.foul + player1.cardY +player1.cardR;
     let team2 = player2.foul + player2.cardY +player2.cardR;

    if (team1 < team2) {
        return player1.name;
    } else if (team2 < team1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

// **Problem-4*/

function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid"
    }
 if (arr1.length !== arr2.length){
    return false;
 }
 for(let i =0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
        return false;
    }
 }
 return true;
}


// **Problem-5*/

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let totalScore = 0;
  let pass = 0;
  let fail = 0;

  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  for (const mark of marks) {
    totalScore = totalScore + mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  const average = totalScore / marks.length;
  const roundedAverage = Math.round(average);

  return {
    finalScore: roundedAverage,
    pass: pass,
    fail: fail,
  };
}