/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.


*/

var lengthOfLongestSubstring = function (s) {};

// console.log(lengthOfLongestSubstring('abcabcbb')); //3
// console.log(lengthOfLongestSubstring('bbbbb')); //1
// console.log(lengthOfLongestSubstring('pwwkew')); //3

module.exports = { lengthOfLongestSubstring };

/* 
s: 'abcabcbb'
Current Position: 0
Current Character: a
Adding character a to the set
Current Longest Substring Length: 1
Character Set: [ 'a' ]

  while ( 0 < 8) {
  
    if (characterSet.has(s[0)) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size(1));

    }

  }
}
------------------
s: 'abcabcbb'
Current Position: 1
Current Character: b
Adding character b to the set
Current Longest Substring Length: 2
Character Set: [ 'a', 'b' ]

  while ( 1 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: 'abcabcbb'
Current Position: 2
Current Character: c
Adding character c to the set
Current Longest Substring Length: 3
Character Set: [ 'a', 'b', 'c' ]

  while ( 2 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {

      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: 'abcabcbb'
Current Position: 3
Current Character: a
Character a already exists in the set
Removing character a from the set
Character Set: [ 'b', 'c' ]

  while ( 3 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: 'abcabcbb'
Current Position: 3
Current Character: a
Adding character a to the set
Current Longest Substring Length: 3
Character Set: [ 'b', 'c', 'a' ]

  while ( 3 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: 'abcabcbb'
Current Position: 4
Current Character: b
Character b already exists in the set
Removing character b from the set
Character Set: [ 'c', 'a' ]

  while ( 4 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: '[0: a, 1: b, 2:c, 3:a, 4:b, 5:c , 6:b, 7:b]'
Current Position: 4
Current Character: b
Adding character b to the set
Current Longest Substring Length: 3
Character Set: [ 'c', 'a', 'b' ]

  while ( 4 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: '[0: a, 1: b, 2:c, 3:a, 4:b, 5:c , 6:b, 7:b]'
Current Position: 5
Current Character: c
Character c already exists in the set
Removing character c from the set
Character Set: [ 'a', 'b' ]

  while ( 5 < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);


      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
s: '[0: a, 1: b, 2:c, 3:a, 4:b, 5:c , 6:b, 7:b]'
Current Position: 5
Current Character: c
Adding character c to the set
Current Longest Substring Length: 3
Character Set: [ 'a', 'b', 'c' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 6
Current Character: b
Character b already exists in the set
Removing character a from the set
Character Set: [ 'b', 'c' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 6
Current Character: b
Character b already exists in the set
Removing character b from the set
Character Set: [ 'c' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 6
Current Character: b
Adding character b to the set
Current Longest Substring Length: 3
Character Set: [ 'c', 'b' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 7
Current Character: b
Character b already exists in the set
Removing character c from the set
Character Set: [ 'b' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 7
Current Character: b
Character b already exists in the set
Removing character b from the set
Character Set: []

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
Current Position: 7
Current Character: b
Adding character b to the set
Current Longest Substring Length: 3
Character Set: [ 'b' ]

  while ( < 8) {
  
    if (characterSet.has(s[currentPosition])) {
     
      characterSet.delete(s[startOfWindow++]);
    } else {


      characterSet.add(s[currentPosition++]);

      longestStringLength = Math.max(longestStringLength, characterSet.size);

    }

  }
}
------------------
3


*/
