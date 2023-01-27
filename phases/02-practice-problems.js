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
  //splice out i
  // check if spliced arr includes i
  let arr2 = arr.slice()
  const set = new Set(arr)
  let res = []
  for(let i = arr2.length-1; i >= 0; i--){
    let thisNum = arr2.pop()
    if (set.has(thisNum)) {
      return thisNum
    }
  }
  

}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
