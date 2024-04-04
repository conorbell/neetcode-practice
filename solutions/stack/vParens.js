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
