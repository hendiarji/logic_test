// let kata = "abcde";
// let reverse = "";
// for (let i = kata.length - 1; i >= 0; i--) {
//   reverse += kata[i];
// }
// console.log(reverse);

function reverse(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverse("abcde"));
