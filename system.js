function systemJam(){
    const waktu = new Date();
    let jam = waktu.getHours();
    let menit = waktu.getMinutes();
    let detik = waktu.getSeconds();


    if( jam < 10) {
        jam = "0" + jam;
    }
    if( menit < 10) {
        menit = "0"+ menit;
    }
    if( detik < 10) {
        detik = "0" + detik;
    }
    
    const hasil = jam + ":" + menit + ":" + detik;
    document.getElementById("jam").innerHTML = hasil;
}

setInterval(systemJam, 1000);
systemJam();
