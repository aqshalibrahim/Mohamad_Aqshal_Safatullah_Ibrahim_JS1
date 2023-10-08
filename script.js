// if, elfe, nested if
var nilai = 75;

if (nilai >= 90) {
    console.log("Nilai Anda A");
} else if (nilai >= 80) {
    console.log("Nilai Anda B");
} else if (nilai >= 70) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
}

// Switch Case
var hari = "Selasa";

switch (hari) {
    case "Senin":
        console.log("Hari ini Senin.");
        break;
    case "Selasa":
        console.log("Hari ini Selasa.");
        break;
    case "Rabu":
        console.log("Hari ini Rabu.");
        break;
    default:
        console.log("Hari ini bukan Senin, Selasa, atau Rabu.");
}

// for statement
for (var i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// while, do while
var angka = 1;

while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}

do {
    console.log("Angka: " + angka);
    angka++;
} while (angka <= 5);

// function
function hitungLuasLingkaran(jariJari) {
    var luas = Math.PI * Math.pow(jariJari, 2);
    return luas;
}

var jariJariLingkaran = 5;
var luasLingkaran = hitungLuasLingkaran(jariJariLingkaran);
console.log("Luas lingkaran dengan jari-jari " + jariJariLingkaran + " adalah " + luasLingkaran);


