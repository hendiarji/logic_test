// kelipatan 3 = edu
// kelipatan 5 = Work
// kelipatan 4 & 5 = eduwork

let int = 15;
let output = "";

for (let i = 1; i <= int; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    output += "eduwork \n";
  } else if (i % 3 == 0) {
    output += "edu \n";
  } else if (i % 5 == 0) {
    output += "work \n";
  } else {
    output += i + "\n";
  }
}
console.log(output);

//done
