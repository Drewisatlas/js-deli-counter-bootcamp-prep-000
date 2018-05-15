var katzDeli = [];
var katzDeliLine = [] ;

function takeANumber(katzDeliLine) {
  
  [...katzDeliLine, katzDeliLine];
  return  `Welcome. You are number ${i+1}.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
  return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
  return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var lineup = []
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++){
      lineup.push(` ${i + 1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:${lineup}`;
    } else {
      return "The line is currently empty.";
    }
}

console.log(takeANumber(katzDeliLine));
console.log(takeANumber(katzDeliLine, 'Peggy'));
console.log(takeANumber(katzDeliLine, 'Hank'));
console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine));
console.log(currentLine(katzDeliLine));
