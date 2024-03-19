//Given an integer array nums,
//return true if any value appears at least twice in the array,
//and return false if every element is distinct.

/**
 * @param array - input array
 * @return boolean if any value appears at least twice 
 */

function dupe<Type>(array: Type[]): boolean {

    const set = new Set<Type>(array)

    return array.length !== set.size; 
}
const arr = [1, 2, 2, 4, 5] //true 
const art = [1, 2, 4, 2] //true
const arr1 = ['cat', 'cat', 'pig'] //true 
const arr2 = [0,1,2,3] //false 

dupe(arr)
dupe(art)
dupe(arr1)
dupe(arr2)