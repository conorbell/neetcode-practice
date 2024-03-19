//Given an integer array nums,
//return true if any value appears at least twice in the array,
//and return false if every element is distinct.
/**
 * @param array - input array
 * @return boolean if any value appears at least twice
 */
function dupe(array) {
    var set = new Set(array);
    return array.length !== set.size;
}
var arr = [1, 2, 2, 4, 5]; //true 
var art = [1, 2, 4, 2]; //true
var arr1 = ['cat', 'cat', 'pig']; //true 
var arr2 = [0, 1, 2, 3]; //false 
dupe(arr);
dupe(art);
dupe(arr1);
dupe(arr2);
