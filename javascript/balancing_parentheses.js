function balancingParentheses(string) {
  // type your code here
  let openCount = 0;
  let closeCount = 0;
  values = string.split("");
  for(i in values){
    if(values[i] == "("){
      openCount ++;
    } else if (values[i] == ")"){
      if (openCount > 0){
        openCount --
      } else{
        closeCount ++
      }
    }
  }
  return openCount + closeCount
}

////I lowkey like my way better but doesn't pass test of accounting for strings that start w closing or end w opening paren


// function balancingParentheses(string) {
//   // type your code here
//   let balance = 0;
//   values = string.split("");
//   for(i in values){
//     if(values[i] == "("){
//       balance ++;
//     } else{
//       balance --;
//     }
//   }
//   return Math.abs(balance)
// }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
