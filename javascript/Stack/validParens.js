// // /*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// // An input string is valid if:

// // Open brackets must be closed by the same type of brackets.
// // Open brackets must be closed in the correct order.
// // Every close bracket has a corresponding open bracket of the same type. */

// // //declare func 'isValid'
// // const isValid = (s) => {
// //   //string
// //   //boolean

// //   //   if(str.length % 2 !== 0) return false;
// //   //   //create stack
// //   //   let stack = [];
// //   //   //create map, with key value pairs of openers and closers
// //   //   const map = new Map([
// //   //     ['(', ')'],
// //   //     ['[', ']'],
// //   //     ['{', '}'],
// //   //   ]);
// //   //   //iterate through string
// //   //   for(let i = 0; i < str.length; i++){
// //   //     //if map has key of current element
// //   //     if(map.has(str[i])){
// //   //         //push that value onto our stack
// //   //         stack.push(map.get(str[i]))
// //   //         console.log(str[i])
// //   //         //if our current index doesn't match last element of stack return false
// //   //     } else if(str[i] !== stack.pop()){
// //   //         console.log(str[i])
// //   //         return false;
// //   //     }
// //   //   }
// //   //   console.log(stack)
// //   //   return stack.length === 0;

// //   const stack = [];

// //   for (let i = 0; i < s.length; i++) {
// //     let c = s.charAt(i);
// //     switch (c) {
// //       case "(":
// //         stack.push(")");
// //         break;
// //       case "[":
// //         stack.push("]");
// //         break;
// //       case "{":
// //         stack.push("}");
// //         break;
// //       default:
// //         if (c !== stack.pop()) {
// //           return false;
// //         }
// //     }
// //   }

// //   return stack.length === 0;
// // };
// // console.log(isValid("()"));
// // console.log(isValid("()[]{}"));
// // console.log(isValid("(]"));

// /*
// how do stacks work?
// first in last out or last in first out

// */

// const isValid = (s) => {
//   //i: string
//   //o: boolean

//   //edge case
//   if (s.length % 2 !== 0) return false;

//   //create a stack - first in last out
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     //get current character
//     let c = s[i];

//     switch (c) {
//       case '(':
//         stack.push(')');
//         break;
//       case '[':
//         stack.push(']');
//         break;
//       case '{':
//         stack.push('}');
//         break;
//       default:
//         if (c !== stack.pop()) return false;
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isValid('()')); //t
// console.log(isValid('()[]{}')); //t
// console.log(isValid('(]')); //f

const isValid = (s) => {
  //i: string
  //o: boolean

  const stack = [];

  //iterate through the string
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (s[i] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid('()')); //t
console.log(isValid('()[]{}')); //t
console.log(isValid('(]')); //f
module.exports = { isValid };
