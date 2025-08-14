function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return "Invalid"; 
  }
  const character = str.split(' ').join('').toUpperCase();
  return character;
}

console.log (onlyCharacter ( "Cy   bar- At  tac k  "


 ));

 console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));

 console.log(onlyCharacter(["hack", "me"]));

 console.log(onlyCharacter(true));