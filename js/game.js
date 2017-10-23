/*
'Game Investasi'

Bermain game ini kita dapat memprediksi nilai investasi sehingga pensiun bahagia.

'Pseudocode'

SIMPAN :
Nama
Tahun lahir
Pemasukan saat ini
Pengeluaran saat ini
Anggaran investasi dari sisa dana (0 - 100%)
Istrumen investasi [Saham, Obligasi, Tabungan, Deposito, Emas, Mata Uang]
Usia pensiun

HITUNG :
Lama investasi = Usia pensiun - Usia saat ini
Anggaran investasi = Anggaran investasi dari sisa dana (0 - 100%) * (Pemasukan saat ini - Pengeluaran saat ini)
Return investasi = [15%, 10%, 3%, 6%, 7.5%, 5%] (berurutan sesuai pilihan investasi)
inflasi = 0-10%

ULANGI :
index1 = 0 (tahun)
aset = number
(index1, index1 <= lama investasi, index1++){
    aset += anggaran investasi * (1 + pilihan investasi)
}

index2 = 0 (tahun)
kebutuhan = number
(index2, index2 <= lama investasi, index2++){
    kebutuhan += pengeluaran * (1 + inflasi)
}

TULISKAN :
IF (aset>kebutuhan)
    THEN (Selamat Tuan 'Nama', hasil investasi anda selama 'lama investasi' telah berbuah manis, nikmati kebahagian di masa pensiun anda )
    ELSE (Maaf Tuan 'Nama', sepertinya hasil investasi anda saat ini belum cukup untuk memenuhi kebutuhan pensiun anda nanti, tetap semangat dan naikkan pendapatan dan anggaran investasi anda)
*/

var nama, tahunLahir, pemasukanBulananSaatini, pengeluaranBulananSaatini, anggaranInvestasiBulanan, pilihanInvestasi, usiaPensiun, myButton;

nama = document.getElementById('name').value;
tahunLahir = document.getElementById('tahun-lahir').value;
pemasukanBulananSaatini = document.getElementById('pemasukan').value;
pengeluaranBulananSaatini = document.getElementById('pengeluaran').value;
anggaranInvestasiBulanan = document.getElementById('anggaran').value / 100;
pilihanInvestasi = document.getElementById('instrumen').value;
usiaPensiun = document.getElementById('usia').value;
myButton = document.querySelector('button');

var lamaInvestasi, anggaranInvestasiTahunan, pengeluaranTahunan, returnInvestasi, inflasi;


lamaInvestasi = 2017 - tahunLahir;
anggaranInvestasiTahunan = anggaranInvestasiBulanan * (pemasukanBulananSaatini - pengeluaranBulananSaatini) * 12;
pengeluaranTahunan = pengeluaranBulananSaatini * 12;
returnInvestasi = 0;

switch (pilihanInvestasi) {
    case 'Saham':
        returnInvestasi = 0.15;
        break;
    case 'Obligasi':
        returnInvestasi = 0.10;
        break;
    case 'Tabungan':
        returnInvestasi = 0.03;
        break;
    case 'Deposito':
        returnInvestasi = 0.06;
        break;
    case 'Emas':
        returnInvestasi = 0.075;
        break;
    case 'Mata Uang':
        returnInvestasi = 0.05;
        break;
    default:
        'Mohon pilih instrumen investasi';
        break;
}

inflasi = 0.10;

var index, kenaikanInflasi, kenaikanInvestasi;

index = 0;
kenaikanInflasi = (1 + inflasi);
kenaikanInvestasi = (1 + returnInvestasi);

for (index; index <= lamaInvestasi; index++) {
    anggaranInvestasiTahunan = anggaranInvestasiTahunan * kenaikanInvestasi;
    pengeluaranTahunan = pengeluaranTahunan * kenaikanInflasi;
}

function toRp(a, b, c, d, e) {
    e = function (f) {
        return f.split('').reverse().join('');
    };
    b = e(parseInt(a, 10).toString());
    for (c = 0, d = ''; c < b.length; c++) {
        d += b[c];
        if ((c + 1) % 3 === 0 && c !== (b.length - 1)) {
            d += '.';
        }
    } return 'Rp. ' + e(d) + ',00';
}

var angka1 = Math.round(pengeluaranTahunan);
var rp1 = toRp(angka1);

var angka2 = Math.round(anggaranInvestasiTahunan);
var rp2 = toRp(angka2);

var angka3 = Math.round(pengeluaranTahunan - anggaranInvestasiTahunan);
var rp3 = toRp(angka3);

function hitung() {
    if (anggaranInvestasiTahunan > pengeluaranTahunan) {
        console.log('Selamat Tuan ' + nama + ', proyeksi hasil investasi Anda selama ' + lamaInvestasi + ' tahun adalah ' + rp2 + ',- dengan pengeluaran Anda adalah sekitar ' + rp1 + ',-, nikmati kebahagian di masa pensiun Anda.');
    } else {
        console.log('Maaf Tuan ' + nama + ', sepertinya proyeksi hasil investasi Anda selama ' + lamaInvestasi + ' tahun saat ini baru senilai ' + rp2 + ',- belum cukup untuk memenuhi kebutuhan pensiun Anda karena pengeluaran Anda di saat pensiun adalah sekitar ' + rp1 + ',- sehingga butuh tambahanan dana sekitar ' + rp3 + ',- agar Anda dapat bahagia di masa pensiun Anda.');
    }
}