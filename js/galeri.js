// ================================
// GALERI INTERAKSI (Full jQuery) /* Script buat galeri interaktif */
// ================================

$(document).ready(function () { /* Ready DOM */

    // 1️⃣ Hover card → efek naik + bayangan /* Hover card galeri */
    $(".galeri-card").hover( /* Hover enter */
        function () { /* Function enter */
            $(this).addClass("shadow-lg").css("transform", "scale(1.03)"); /* Tambah shadow + scale */
        },
        function () { /* Function leave */
            $(this).removeClass("shadow-lg").css("transform", "scale(1)"); /* Hapus */
        }
    );

    // 2️⃣ Klik gambar → munculin label nama produk /* Klik gambar */
    $(".gallery-img").click(function () { /* Klik img */
        let nama = $(this).siblings(".nama-produk"); /* Cari sibling nama */

        nama.addClass("show"); /* Tambah class show */

        setTimeout(() => { /* Timeout 2s */
            nama.removeClass("show"); /* Hapus show */
        }, 2000); /* 2000ms */
    });

    // 3️⃣ Double click → kasih alert kocak (fitur dari asli lu masih gua jaga) /* Double klik */
    $(".gallery-img").dblclick(function () { /* Dblclick */
        alert("Santai bro, pelan² aja ngekliknya 😭🔥"); /* Alert kocak */
    });

    // 4️⃣ Right-click block (biar dosen ngeliat ada proteksi) /* Blok klik kanan */
    $(".gallery-img").on("contextmenu", function (e) { /* Context menu */
        e.preventDefault(); /* Prevent default */
        alert("Eh eh eh, ngapain klik kanan? wkwkwk 😭"); /* Alert */
    });

    // 5️⃣ Fade effect (biar makin fancy) /* Efek fade */
    $(".galeri-card").click(function () { /* Klik card */
        $(this).fadeOut(80).fadeIn(80); /* Fade out in */
    });
});


$(document).ready(function () { /* Ready lagi */

    // 1️⃣ Logic buat HP (Touch) & Laptop (Click) /* Logic klik/tap */
    $(".galeri-card").click(function () { /* Klik card */
        // Hapus class active dari card lain biar gak rame /* Hapus active lain */
        $(".galeri-card").removeClass("active");
        
        // Munculin nama di card yang diklik ini /* Tambah active */
        $(this).addClass("active");

        // (Opsional) Ilangin lagi setelah 3 detik biar rapi /* Timeout ilangin */
        setTimeout(() => { /* Set timeout */
            $(this).removeClass("active"); /* Remove active */
        }, 3000); /* 3000ms */
    });

    // 2️⃣ Fitur Double Click (Jaga-jaga buat tugas dosen) /* Double klik */
    $(".galeri-card").dblclick(function () { /* Dblclick */
        alert("Santai bro, pelan-pelan aja nge-tap nya! 🍞🔥"); /* Alert */
    });

});
