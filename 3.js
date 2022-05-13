// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

function digitAngka(str) {
  let angka = 1234567890;
  let output = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < angka.length; j++) {
      if (str[i] == angka[j]) {
        output += str[i];
      }
    }
  }
  return output;
}
console.log(digitAngka("9.86-A5.321"));
