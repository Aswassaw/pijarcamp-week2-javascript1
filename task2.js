const countAverage = ({ math, indonesian, english, science }) => {
  // validasi nilai harus diisi
  if (math && indonesian && english && science) {
    // validasi tipe data harus number
    if (
      typeof math === "number" &&
      typeof indonesian === "number" &&
      typeof english === "number" &&
      typeof science === "number"
    ) {
      // validasi validitas nilai
      if (
        math <= 100 &&
        math >= 0 &&
        indonesian <= 100 &&
        indonesian >= 0 &&
        english <= 100 &&
        english >= 0 &&
        science <= 100 &&
        science >= 0
      ) {
        const average = (math + indonesian + english + science) / 4;

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
        console.log("Semua nilai yang diinput tidak boleh lebih dari 100 dan kurang dari 0!");
      }
    } else {
      console.log("Semua nilai yang diinput harus bertipe number!");
    }
  } else {
    console.log("Semua nilai mata pelajaran harus diinput!");
  }
};

countAverage({ math: 80, indonesian: 90, english: 89, science: 69 });
