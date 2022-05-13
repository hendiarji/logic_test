// Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

function angka(int) {
  let output = "";

  for (let i = 0; i <= int.length; i++) {
    if (int[i] == 1) {
      output += "satu";
    } else if (int[i] == 2) {
      output += "dua";
    } else if (int[i] == 3) {
      output += "tiga";
    } else if (int[i] == 4) {
      output += "empat";
    } else {
      output += "xx";
    }
  }
  return output;
}
console.log(angka("4"));
