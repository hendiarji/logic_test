// let output = "";
// let int = 41;
// let number = int.toString();

// for (let i = 0; i <= number.length; i++) {
//   if (number[0]) {
//     if (number[i] == 1) {
//       output += "satu";
//     } else if (number[i] == 2) {
//       output += "dua";
//     } else if (number[i] == 3) {
//       output += "tiga";
//     } else if (number[i] == 4) {
//       output += "empat";
//     }
//   }
//   if (number[1]) {
//     if (number[i] == 1) {
//       output += " puluh satu";
//     } else if (number[i] == 2) {
//       output += " puluh dua";
//     } else if (number[i] == 3) {
//       output += " puluh tiga";
//     } else if (number[i] == 4) {
//       output += " puluh empat";
//     } else {
//       output += " puluh";
//     }
//   }
// }
// console.log(output);

let output = "";
let int = 4;
let number = int.toString();

if (number[0] == 1 && int !== 100) {
  if (number[0] == 1 && int !== 100) {
    output += "satu";
  } else if (number[0] == 2) {
    output += "dua";
  } else if (number[0] == 3) {
    output += "tiga";
  } else if (number[0] == 4) {
    output += "empat";
  } else if (number[0] == 5) {
    output += "lima";
  } else if (number[0] == 6) {
    output += "enam";
  } else if (number[0] == 7) {
    output += "tujuh";
  } else if (number[0] == 8) {
    output += "delapan";
  } else if (number[0] == 9) {
    output += "sembilan";
  } else if (number[0] == 0) {
    output += "enol";
  }
}

if (number[1] == 1 && int !== 100) {
  if (number[1] == 1 && int !== 100) {
    output += " puluh satu";
  } else if (number[1] == 2) {
    output += " puluh dua";
  } else if (number[1] == 3) {
    output += " puluh tiga";
  } else if (number[1] == 4) {
    output += " puluh empat";
  } else if (number[1] == 5) {
    output += " puluh lima";
  } else if (number[1] == 6) {
    output += " puluh enam";
  } else if (number[1] == 7) {
    output += " puluh tujuh";
  } else if (number[1] == 8) {
    output += " puluh delapan";
  } else if (number[1] == 9) {
    output += " puluh sembilan";
  } else {
    output += " puluh";
  }
}

if (int == 100) {
  output = "seratus";
} else if (int >= 100) {
  output = "silahkan masukkan bilangan 1-100";
}
console.log(output);
