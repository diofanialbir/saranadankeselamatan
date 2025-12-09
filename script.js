function startWebsite() {
    // Animasi transisi halaman
    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';
     const video = document.querySelector('.bg-video');
    if (video) 
        video.pause();         // hentikan video

    setTimeout(() => {
        // Di sini bisa redirect ke halaman selanjutnya atau load konten utama
        alert('Website akan memuat konten utama...\n\nLangkah selanjutnya: Buat halaman navigasi dan konten!');
        // window.location.href = 'main.html'; // Uncomment untuk redirect
    }, 800);
}

// Efek parallax pada background
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const rotateX = (mouseY - 0.5) * 5;
    const rotateY = (mouseX - 0.5) * -5;
    
    document.querySelector('.container').style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
});

// Reset transform saat mouse leave
document.addEventListener('mouseleave', () => {
    document.querySelector('.container').style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
});
function startWebsite() {
    const video = document.querySelector('.bg-video');
    if (video) video.pause();

    document.body.style.transition = 'opacity 0.8s ease-out';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'index-main.html';   // pindah ke halaman utama
    }, 800);
}
