// new Set([1, 1, 2, 2, 3, 4]);


// Set(4) {1, 2, 3, 4}

// [...new Set("referee")].join("")

// [ref]

// let m = new Map();

// m.set([1,2,3], true);
// m.set([1,2,3], false);

// {Array(3) => true}
// key:(3) [1, 2, 3]
// value:true

// {Array(3) => false}
// key:(3) [1, 2, 3]
// value:false
// size:2

// function hasDuplicates(arr){
//     const g = new Set(arr)
//  if(g.size === arr.length){
//     return false;
//  }else{
//     return true;
//  }
// };

// function isVowel(char){
//     return 'aeiou'.includes(char)
// }

// function vowelCount(str){
//     const vowelMap = new Map();
//     for(let char of str){
//       let lowerCaseChar = char.toLowerCase()
//       if(isVowel(lowerCaseChar)){
//         if(vowelMap.has(lowerCaseChar)){
//           vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//         } else {
//           vowelMap.set(lowerCaseChar, 1);
//         }
//       }
//     }
//     return vowelMap;
// }