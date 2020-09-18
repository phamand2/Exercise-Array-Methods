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

const numbers = 86375309


const together = (nums)=>{
  const arr = []
  const str = nums.toString()
  for (let i = 0; i < str.length; i++) {
      const element = str[i];
      arr.push(element)
      
  }
  const final = arr.join('-')
  console.log(final)
}
together(numbers)
