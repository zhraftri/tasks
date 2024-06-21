let karyawan = {
    nama: 'Arsyanda Gauri',
    usia: 17,
    member: true,
    salary: 750000
}

let annual = karyawan.salary * 12;
bonus = karyawan.usia > 30 && karyawan.member;

console.log(`Nama: ${karyawan.nama}`);
console.log(`Usia: ${karyawan.usia}`);
console.log(`Gaji Bulanan: ${karyawan.salary}`);
console.log(`Gaji Tahunan: ${annual}`);
console.log(`Status Karyawan: ${karyawan.member}`);
console.log(`Bonus: ${bonus}`);