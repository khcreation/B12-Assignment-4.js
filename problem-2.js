function  onlyCharacter( str ) {
    if(str !== "string"){
        return "Invalid"
    }

  let character = str.split(" ").join("").toUpperCase(" ");

  return character;
}
console.log(onlyCharacter(["hack", "me"]));

