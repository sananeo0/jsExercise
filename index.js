//exercise 1
// let numbers = [ 10, -5, 20, 15, -7, 4, 8, 12, 3];

// console.log(numbers.sort((a,b)=>(a-b)));



//exercise 2
// function union(arr1,arr2){

//     const arr3=[...new Set([...arr1,...arr2])]

//     arr3.sort((a,b)=>(a-b));

//     return arr3;
// }

// console.log(union([1, 2, 3], [100, 2, 1, 10]));





//exercise 3 

// function filter(arr) {
//     return arr.filter(element => Boolean(element) === true)
//   }

//   console.log(filter([NaN, 0, 15, false, -22, '',undefined, 47, null]));




//exercise 4 

// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
// ];

// console.log(library.sort((a, b) => a.title.localeCompare(b.title)));





//exercise 5 

// function chainOrNot(numbers) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//       const currentNumber = numbers[i];
//       const nextNumber = numbers[i + 1];
//       if (nextNumber % currentNumber !== 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   let numbers=[2, 4, 8, 16, 32]

//   console.log(chainOrNot(numbers));
  