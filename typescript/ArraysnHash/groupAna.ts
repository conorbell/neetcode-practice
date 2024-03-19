/**
 * Given an array of strings, group the anagrams together. Order doesn't matter
 * @param {array} arr - Array of strings
 * @return {array}
 */

function groupAna(arr: string[]): string[][]{

    //create map obj 
    const map = new Map<string, string[]>();

    for(let string of arr){
        let sort = string.split('').sort().join('')
        console.log(sort)
        if (!map.has(sort)){
            map.set(sort, [string])
        } else{
            map.get(sort)?.push(string)
        }
    }

    return [...map.values()]




}

console.log(groupAna(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAna(['']));
console.log(groupAna(['a']));