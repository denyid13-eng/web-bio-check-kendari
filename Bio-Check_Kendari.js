function bukaMenu() {
    document.getElementById("sidebar-menu").classList.add("active");
    document.getElementById("overlay").style.display = "block";
}

function tutupMenu() {
    document.getElementById("sidebar-menu").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
}
function hitungRisiko() {
    
    let data = document.querySelectorAll("select");

    
    let air = parseInt(data[0].value);
    let sanitasi = parseInt(data[1].value);
    let sampah = parseInt(data[2].value);
    let drainase = parseInt(data[3].value);
    let ventilasi = parseInt(data[4].value);

    
    if (isNaN(air) || isNaN(sanitasi) || isNaN(sampah) || isNaN(drainase) || isNaN(ventilasi)) {
        alert("Mohon lengkapi semua pilihan evaluasi terlebih dahulu!");
        return; 
    }

    
    let rataRata = (air + sanitasi + sampah + drainase + ventilasi) / 5;

    
    let risiko = 100 - rataRata;

    let kategori = "";
    let alertBox = document.querySelector(".perhatian");

    
    document.querySelector(".result-box").innerHTML = risiko.toFixed(1);

    
    if (risiko <= 29) {
        kategori = "Risiko Tinggi";
        alertBox.className = "alert alert-danger perhatian";
        alertBox.innerHTML = "Risiko tinggi bagi kesehatan! Segera lakukan tindakan perbaikan.";
    } 
    else if (risiko <= 59) {
        kategori = "Risiko Sedang";
        alertBox.className = "alert alert-warning perhatian";
        alertBox.innerHTML = "Lingkungan cukup berisiko, perlu beberapa perbaikan.";
    } 
    else {
        kategori = "Risiko Rendah";
        alertBox.className = "alert alert-success perhatian";
        alertBox.innerHTML = "Lingkungan dalam kondisi baik dan aman.";
    }

    
    document.querySelector("h5").innerHTML = kategori;
}
function bukaMenu() {
    document.getElementById("sidebar-menu").classList.add("active");
    document.getElementById("overlay").style.display = "block";
}

function tutupMenu() {
    document.getElementById("sidebar-menu").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
}