// Apabila terdapat sebuah data :
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput [4,7,9,12]

let arr = [1, 4, 7, 9, 12];
let low = 2;
let high = 15;
let output = [];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > low && arr[i] < high) {
    output.push(arr[i]);
  }
}
console.log(output);

//done
