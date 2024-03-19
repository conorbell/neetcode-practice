//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

const generateParenthesis = (n) => {
  //i: num
  //o: array

  //create array to store combos in
  const result = [];
  //function to recursively generate combos
  const generate = (str, l, r) => {
    //i: str, two numbers
    //o: none

    //base case if r is 0
    if (r === 0) {
      console.log(str);
      //push str into result
      result.push(str);
      //return
      return;
    }
    //recursive calls
    //if l is greater than 0, invoke func passing in str + '(' decrement l
    if (l > 0) generate(str + '(', l - 1, r);
    //if l is less than r
    //invoke func passing in str + ')' decrement r
    if (l < r) generate(str + ')', l, r - 1);
  };
  generate('', n, n);
  return result;
};

console.log(generateParenthesis(3));
// console.log(generateParenthesis(1));
