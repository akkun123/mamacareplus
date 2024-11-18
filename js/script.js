// Pastikan JavaScript berjalan setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('transparent'); // Tambahkan kelas transparan
        } else {
            navbar.classList.remove('transparent'); // Hapus kelas transparan
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.artikel-slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        // Hapus kelas aktif dari slide dan titik saat ini
        slides[currentSlideIndex].classList.remove('active-slide');
        dots[currentSlideIndex].classList.remove('active-dot');

        // Perbarui indeks slide saat ini
        currentSlideIndex = index;

        // Tambahkan kelas aktif ke slide dan titik yang baru
        slides[currentSlideIndex].classList.add('active-slide');
        dots[currentSlideIndex].classList.add('active-dot');
    }

    // Inisialisasi slide dan titik pertama
    showSlide(0);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
    
        questionButton.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
                if (isOpen) {
                // Jika sedang terbuka, tutup
                answer.style.maxHeight = `${answer.scrollHeight}px`; // Set terlebih dahulu untuk memastikan tidak ada glitch
                requestAnimationFrame(() => {
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0'; // Perlahan memudarkan
                });
                item.classList.remove('active');
                } else {
                // Buka jawaban
                item.classList.add('active');
                answer.style.maxHeight = '0px'; // Set ke 0px terlebih dahulu
                requestAnimationFrame(() => {
                    answer.style.maxHeight = `${answer.scrollHeight}px`; // Lalu buka ke tinggi maksimal
                    answer.style.opacity = '1'; // Tampilkan secara bertahap
                });
            }
        });
    });
});