import fs from 'fs';

const decode = () => {
  //create message variable
  //access content in message file
  const message = fs.readFileSync('./coding_qual_input.txt', 'utf-8');
  //create an array of messages
  const messageArray = message.split('\r\n');
  //create cache
  const cache = {};

  messageArray.forEach((el) => {
    let arr = el.split(' ');
    //add numbers as key on cache
    //assign strings to value if its not undefined
    if (arr[1]) {
      cache[arr[0]] = arr[1];
    }
  });

  //create result string
  let result = '';

  //index
  let dex = 0;

  //iterate through cache
  //i will track the length of each row, added to dex on each iteration to find next index.
  for (let i = 1; cache[dex + i]; i++) {
    result = result.concat(cache[dex + i] + ' ');
    dex += i;
  }

  return result;
};

console.log(decode());
