const data = new Date();
let jam = data.getHours();
let menit = data.getMinutes();
let detik = data.getSeconds();
const textnya = document.getElementById("textDiatasJam");


function systemJam(){
    
    // Logika untuk menambahkan teks "Pagi", "Siang", atau "Malam"
    // Format jam, menit, dan detik agar selalu dua digit
    if(jam < 10){
        jam = "0" + jam;
    }
    if(menit < 10){
        menit = "0" + menit;
    }
    if(detik < 10){
        detik = "0" + detik;
    }
    
    // Gabungkan menjadi format jam:menit:detik
    const hasilnya = jam + ":" + menit + ":" + detik;
    
    // Tampilkan hasil di elemen dengan id "jam"
    document.getElementById("jam").textContent = hasilnya;
}


// Jalankan fungsi setiap 1 detik
setInterval(systemJam, 1000);
systemJam();
if(jam < 12){
    textnya.textContent = "Waktu saat ini: Pagi";
}else if(jam >= 12 && jam < 18){
    textnya.textContent = "Waktu saat ini: Siang";
}else{
    textnya.textContent = "Waktu saat ini: Malam";
}