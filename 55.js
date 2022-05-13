let output = "";
let int = 41;
let number = int.toString();

for (let i = 0; i <= number.length; i++) {
  if (number[i] == 1) {
    output += "satu";
  } else if (number[i] == 2) {
    output += "dua";
  } else if (number[i] == 3) {
    output += "tiga";
  } else if (number[i] == 4) {
    output += "empat";
  }
  continue;
  for (let i = 0; i <= number.length; i++) {
    if (number[i] == 1)
      if (number.length < 0) {
        output += "puluh";
      }
  }
}
console.log(output);
