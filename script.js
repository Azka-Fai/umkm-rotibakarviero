//  SCRIPT GLOBAL ROTI BAKAR VIERO (jQuery Edition) /* Script utama website, pake jQuery */

function showToast(msg) { /* Fungsi buat nampilin toast notif */
    $("#toastText").text(msg); /* Masukin teks ke toast */
    const toast = new bootstrap.Toast(document.getElementById("mainToast")); /* Buat objek toast */
    toast.show(); /* Tampilin toast */
}


$(document).ready(function () { /* Jalankan pas DOM ready */

    // 1️⃣ WELCOME ALERT MODERN /* Notif welcome */
    
    setTimeout(() => { /* Tunggu 800ms */
        let welcome = ` Selamat datang di <b>Roti Bakar Viero!</b><br>
                        Nikmati kelezatan roti bakar kami 🍞🔥`;

        $("#toastText").html(welcome); /* Masukin HTML ke toast */
        $("#mainToast").toast("show"); /* Show toast */
    }, 800); /* Delay 800ms */



    // ==============================
    // 2️⃣ VARIABLE DASAR (versi lama kamu tetap dipakai) /* Variabel dasar */
    // ==============================
    const namaUMKM = "Roti Bakar Viero"; /* Nama UMKM */

    let jumlahProduk = 9; /* Jumlah produk awal */
    let rotiCoklat = 3; /* Jumlah roti coklat */
    let rotiKeju   = 4; /* Jumlah roti keju */
    let rotiKacang = 4; /* Jumlah roti kacang */

    let totalProdukRoti = rotiCoklat + rotiKeju + rotiKacang; /* Total semua roti */



    // ==============================
    // 3️⃣ TAMPILKAN INFO KE WEBSITE /* Tampilin info ke HTML */
    // ==============================
    $(".produk-count").text(jumlahProduk); /* Update jumlah produk */
    $(".total-roti").text(totalProdukRoti); /* Update total roti */



    // ==============================
    // 4️⃣ EVENT: TAMBAH PRODUK (DEMO) /* Event klik tambah produk */
    // ==============================
    $("#btnTambahProduk").click(function () { /* Klik tombol tambah */
        jumlahProduk++; /* Naikin jumlah */
        $(".produk-count").text(jumlahProduk); /* Update teks */

        $("#toastText").text("Produk baru berhasil ditambahkan!"); /* Pesan toast */
        $("#mainToast").toast("show"); /* Show toast */
    });



    // ==============================
    // 5️⃣ EVENT: HOVER GAMBAR (preview rasa) /* Hover gambar preview */
    // ==============================
    $(".preview-rasa").hover( /* Hover enter */
        function () { /* Function enter */
            $(this).addClass("shadow-lg").css("transform", "scale(1.05)"); /* Tambah shadow + scale */
        },
        function () { /* Function leave */
            $(this).removeClass("shadow-lg").css("transform", "scale(1)"); /* Hapus shadow + scale */
        }
    );



    // ==============================
    // 6️⃣ EVENT: GANTI FOTO RASA /* Event ganti foto rasa */
    // ==============================
    $("#pilihRasa").change(function () { /* Change select */
        let rasa = $(this).val(); /* Ambil value */
        
        if (rasa !== "") { /* Kalau ada value */
            $("#fotoRasa").attr("src", `images/${rasa}.jpg`); /* Ganti src gambar */

            $("#toastText").text(`Rasa diubah ke: ${rasa}`); /* Pesan toast */
            $("#mainToast").toast("show"); /* Show toast */
        }
    });

});
