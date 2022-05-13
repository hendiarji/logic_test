// Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat

// input : 2024
// output : 2024 adalah tahun kabisat

function kabisat(tahun) {
  let output = "";
  if (tahun % 4 == 0) {
    output = tahun + " bukan tahun kabisat";
  } else {
    output = tahun + " adalah tahun kabisat";
  }
  return output;
}
console.log(kabisat(2021));
console.log(kabisat(2024));

//done
