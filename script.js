document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Daftar kata-kata romantis (Bisa kamu tambah atau ubah)
    const phrases = [
        "only you",
        "you mean everything",
        "always with you",
        "stay with me",
        "my safe place",
        "love u more",
        "forever",
        "my favorite person",
        "always on my mind",
        "I miss you",
        "i always love you so much more than anything",
        "cipaaaaaaa",
        "your mine"
    ];

    // PENTING: Ganti dengan nama file fotomu yang ada di folder yang sama
    // Misalnya foto kamu namanya 'ayang.jpg', ubah di bawah ini
    const images = [
        "IMG-20260918-WA0025.jpg", 
        "IMG-20260918-WA0013.jpg", 
        "IMG-20260918-WA0016.jpg",
        "1df2fa3c502d46a3a9f94ddc58d9c56e.jpg",
        "5db6544efdec434881963eb72f4f3537.jpg",
        "83ada175342c4cfb9b005af7a0773d86.jpg",
        "IMG_20260911_204538_362.jpg",
        "IMG-20260918-WA0018.jpg"
    ];

    // Proses Loading Screen (Menunggu 3.5 detik)
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Memudarkan loading
        setTimeout(() => {
            loadingScreen.classList.add("hidden"); // Hilangkan dari layar
            mainContent.classList.remove("hidden"); // Tampilkan layar utama
            startFloatingMemories(); // Mulai animasi
        }, 1000);
    }, 3500);

    // Fungsi untuk memulai animasi melayang
    function startFloatingMemories() {
        // Munculkan teks baru setiap 0.7 detik (700ms)
        setInterval(createFloatingText, 700);
        
        // Munculkan gambar baru setiap 2.5 detik (2500ms)
        setInterval(createFloatingImage, 2500);
    }

    // Fungsi membuat teks melayang
    function createFloatingText() {
        const el = document.createElement("div");
        el.classList.add("floating-item", "floating-text");
        
        // Ambil kata acak dari array 'phrases'
        el.innerText = phrases[Math.floor(Math.random() * phrases.length)];
        
        // Posisi Kiri-Kanan (X) acak antara 5% - 85% layar
        el.style.left = Math.floor(Math.random() * 80 + 5) + "%";
        
        // Kecepatan melayang acak (7 hingga 12 detik)
        const duration = Math.random() * 5 + 7; 
        el.style.animationDuration = `${duration}s`;

        mainContent.appendChild(el);

        // Hapus elemen setelah selesai agar HP tidak lemot (lag)
        setTimeout(() => { el.remove(); }, duration * 1000);
    }

    // Fungsi membuat gambar melayang
    function createFloatingImage() {
        if (images.length === 0) return; // Kalau tidak ada gambar, lewati

        const img = document.createElement("img");
        img.classList.add("floating-item", "floating-img");
        
        // Ambil gambar acak dari array 'images'
        img.src = images[Math.floor(Math.random() * images.length)];
        
        // Posisi Kiri-Kanan (X) acak
        img.style.left = Math.floor(Math.random() * 70 + 10) + "%";
        
        // Kecepatan melayang gambar (8 hingga 14 detik)
        const duration = Math.random() * 6 + 8; 
        img.style.animationDuration = `${duration}s`;

        mainContent.appendChild(img);

        // Hapus elemen setelah selesai
        setTimeout(() => { img.remove(); }, duration * 1000);
    }
});
