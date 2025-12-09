// Data contoh dasar hukum per tugas.
// Nanti Anda bisa mengganti teks dalam array ini dengan regulasi yang sebenarnya.
const legalDataByTask = {
    1: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Perkeretaapian",
            ringkas: "Mengatur kewenangan pemerintah dalam perencanaan jaringan dan standar prasarana kereta api."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Standar Teknis Prasarana",
            ringkas: "Menetapkan persyaratan teknis minimum untuk konstruksi dan operasi prasarana perkeretaapian."
        }
    ],
    2: [
        {
            jenis: "Peraturan Pemerintah",
            judul: "PP tentang Penyelenggaraan Perkeretaapian",
            ringkas: "Memuat ketentuan pengujian dan inspeksi berkala terhadap prasarana dan sarana."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Sertifikasi Kelaikan",
            ringkas: "Mengatur tata cara sertifikasi kelaikan prasarana dan sistem keselamatan."
        }
    ],
    3: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Lalu Lintas dan Angkutan Kereta Api",
            ringkas: "Menetapkan prinsip operasi pelayanan yang selamat, aman, dan tertib."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Manajemen Keselamatan Perkeretaapian",
            ringkas: "Mengatur sistem manajemen keselamatan dan kewajiban operator."
        }
    ],
    4: [
        {
            jenis: "Peraturan Pemerintah",
            judul: "PP tentang Pengelolaan Aset Perkeretaapian",
            ringkas: "Mengatur pengadaan, pemanfaatan, dan penghapusan aset prasarana."
        }
    ],
    5: [
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Penanganan Gangguan dan Kedaruratan",
            ringkas: "Mengatur prosedur penanganan kecelakaan, gangguan operasi, serta pemulihan layanan."
        }
    ],
    6: [
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Pembinaan dan Pengawasan Penyelenggara",
            ringkas: "Memberi dasar hukum pembinaan, audit keselamatan, dan sanksi administratif."
        }
    ],
    7: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Perencanaan Pembangunan Nasional",
            ringkas: "Menjadi rujukan penyusunan kebijakan, program, dan pelaporan sektor perkeretaapian."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Monitoring dan Evaluasi Kinerja",
            ringkas: "Mengatur indikator, pelaporan, dan evaluasi kinerja prasarana dan keselamatan."
        }
    ]
};

// Inisialisasi interaksi setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
    const taskButtons = document.querySelectorAll(".task-card");
    const legalContainer = document.getElementById("legal-container");
    const legalSubtitle = document.querySelector(".legal-subtitle");

    function renderLegalForTask(taskId) {
        const items = legalDataByTask[taskId] || [];
        legalContainer.innerHTML = "";

        if (items.length === 0) {
            legalContainer.innerHTML = "<p>Belum ada dasar hukum yang diinput untuk tugas ini.</p>";
            return;
        }

         items.forEach(item => {
            const card = document.createElement("article");
            card.className = "reg-card";

            const badge = document.createElement("span");
            badge.className = "badge";
            badge.textContent = item.jenis;

            const title = document.createElement("h3");
            title.textContent = item.judul;

            const desc = document.createElement("p");
            desc.textContent = item.ringkas;

            card.appendChild(badge);
            card.appendChild(title);
            card.appendChild(desc);

            legalContainer.appendChild(card);
        });
    }

    // event listener untuk setiap tombol tugas
    taskButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const taskId = btn.getAttribute("data-task");

            // reset kelas aktif
            taskButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // update subtitle
            if (legalSubtitle) {
                legalSubtitle.textContent =
                    "Dasar hukum yang menaungi " + btn.textContent + ".";
            }

            // render dasar hukum
            renderLegalForTask(taskId);
        });
    });
});
