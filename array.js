// Question 1
// let arr = [10, 20, 30, 40]

// const checkArray = () => {
//   if (Array.isArray(arr)) {
//     return true
//   } else {
//     return false
//   }

//   }

// console.log(checkArray())





// Question 2

// let arr1 = ['apple', 'cheese', 'milk']


// const getFirstn = (n) => {
//   let firstElement = arr1.slice(0,n)
//   console.log(firstElement)

// }

// getFirstn(1)

// Question 3

// let arr2 = [1,2,3,4,5]

// const joinArray = (x) => {
//   const joinIndex = x.join(' ')
//   return joinIndex
// }

// console.log(joinArray(arr2))

// Question 4

// const numbers = 86375309


// const together = (nums)=>{
//   const arr = []
//   const str = nums.toString()
//   for (let i = 0; i < str.length; i++) {
//       const element = str[i];
//       arr.push(element)
      
//   }
//   const final = arr.join('-')
//   console.log(final)
// }
// together(numbers)

// Question 5

// const sortItem = (arr) => {
//   return arr.sort()
// }

// console.log(sortItem([4,1,3,5]))

// Question 7

// const swapCase = (inputString) => {
//   let outputString = ' ';
//   inputString.split().forEach(character => {
//     if (character == character.toUpperCase()) {
//       outputString += character.toLowerCase();
//     } else if (character == character.toLowerCase()) {
//       outputString += character.toUpperCase();
//     }  
//   });
//   return outputString
// }

// console.log(swapCase('The Quick Brown Fox'))

// Question 8

const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

const printNestedArray = (array) => {
  array.forEach(element => {
    element.forEach(nestedElement => {
      console.log(nestedElement)
    })
    
  });
}

printNestedArray(arr)