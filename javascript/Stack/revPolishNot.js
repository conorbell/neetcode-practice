/*You are given an array of strings tokens 
that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer. */

/* 
tokens - ["2","1","+","3","*"]
stack - [+,1,2]

*/

const evalRPN = function (tokens) {
  //i: array of strings
  //o: int
  console.log(tokens);

  //approach-stack
  //how do stacks work? first in last out
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i];

    if (char === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (char === '-') {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(b - a);
    } else if (char === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (char === '/') {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push((b / a) | 0);
    } else {
      stack.push(char * 1);
    }
  }
  return stack.pop();
};
console.log(evalRPN(['2', '1', '+', '3', '*'])); //9
console.log(evalRPN(['4', '13', '5', '/', '+'])); //6
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
); //22
