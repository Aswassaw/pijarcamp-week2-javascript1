const mtk = 80,
  bahasaIndonesia = 90,
  bahasaInggris = 89,
  ipa = 69;

// validasi nilai harus diisi
if (mtk && bahasaIndonesia && bahasaInggris && ipa) {
  // validasi tipe data harus number
  if (
    typeof mtk === "number" &&
    typeof bahasaIndonesia === "number" &&
    typeof bahasaInggris === "number" &&
    typeof ipa === "number"
  ) {
    // validasi validitas nilai
    if (
      mtk <= 100 &&
      mtk >= 0 &&
      bahasaIndonesia <= 100 &&
      bahasaIndonesia >= 0 &&
      bahasaInggris <= 100 &&
      bahasaInggris >= 0 &&
      ipa <= 100 &&
      ipa >= 0
    ) {
      const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

      console.log(`Rata-rata = ${average}`);
      if (average >= 90) {
        console.log("Grade = A");
      } else if (average >= 80 && average < 90) {
        console.log("Grade = B");
      } else if (average >= 70 && average < 80) {
        console.log("Grade = C");
      } else if (average >= 60 && average < 70) {
        console.log("Grade = D");
      } else if (average >= 0 && average < 60) {
        console.log("Grade = E");
      }
    } else {
      console.error("Semua nilai yang diinput tidak boleh lebih dari 100 dan kurang dari 0!");
    }
  } else {
    console.error("Semua nilai yang diinput harus bertipe number!");
  }
} else {
  console.error("Semua nilai mata pelajaran harus diinput!");
}
