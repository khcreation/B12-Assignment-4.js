function totalFine( fare ) { 
    if(fare <=0 || typeof fare !== "number"){
        return "Invalid"
    }
let fine = fare + (fare * 0.2) + 30;
return fine;
}
console.log (totalFine(552));


