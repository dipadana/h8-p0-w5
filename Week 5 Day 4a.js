// Hapus Simbol
function hapusSimbol(str) {
    return str.match(/[abcdefghijklmnopqrstuvwxyz0123456789]+/gi).join('');
}

  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100
