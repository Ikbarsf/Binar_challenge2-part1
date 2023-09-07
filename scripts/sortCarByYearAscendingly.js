function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // membuat perulangan dengan variabel i, panjang index dari variabel result dikurangi 1, karena perbandingan dilakukan sebanyak jumlah data dikurangi 1
  for(let i = 0; i < result.length - 1; i++){
    // membuat perulangan dengan variabel j untuk membandingkan dan menukar posisi dua elemen yang berdekatan dalam array. kemudian panjang dari index result dikurangi variabel i kemudian dikurangi 1, kode ini dijalankan agar tidak mengulangi perbandingan elemen yang telah dibandingkan sebelumnya
    for(let j = 0; j < result.length - i - 1; j++){
      // melakukan perbandingan antara tahun mobil index 0 > index 1, jika true maka akan ditukar tempatnya. terus begitu sampai index teraktih 
      if(result[j].year > result[j + 1].year){
        // buat variabel dengan nama output untuk menampung nilai variabel sementara sebelum ditukar
        let output = result[j];
        result[j] = result[j + 1];
        result[j + 1] = output;
      }
    }
  }
  // untuk mengembalikan nilai
  return result;
}