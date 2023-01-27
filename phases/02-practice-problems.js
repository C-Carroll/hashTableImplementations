function anagrams(str1, str2) {
  let one = str1.split('').sort()
  let two = str2.split('').sort()
  if (one.join('') === two.join('')){
    return true
  }
  return false
}


function commonElements(arr1, arr2) {
  const set = new Set(arr1)
  let res = []
  for(let i = 0; i < arr2.length; i++){
    if (set.has(arr2[i])){
      res.push(arr2[i])
    }
  }
  return res;
}


function duplicate(arr) {
 let count = {}
 for (let i = 0; i < arr.length; i ++){
  if (count[arr[i]]) return arr[i]
  else count[arr[i]] = 1
 }

}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
