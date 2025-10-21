document.addEventListener('DOMContentLoaded', () => {
    // --- Application Data ---
    const scheduleData = {
         senin: {
            title: "Senin",
            subtitle: "Hari Fokus Belajar Mandiri",
            color: "senin",
            tasks: [ { time: '05:00 - 05:10', desc: 'Bangun tidur dan stretching ringan.' }, { time: '05:10 - 05:30', desc: 'Membersihkan kamar (merapikan tempat tidur, dll).', breakdown: true }, { time: '05:30 - 06:00', desc: 'Meditasi atau latihan pernapasan (mindfulness).' }, { time: '06:00 - 06:30', desc: 'Olahraga ringan (lari pagi, yoga, atau stretching).' }, { time: '06:30 - 07:00', desc: 'Mandi dan persiapan pagi.' }, { time: '07:00 - 07:30', desc: 'Sarapan sehat.' }, { time: '07:30 - 09:30', desc: 'Belajar mandiri (review materi atau belajar topik baru).', breakdown: true }, { time: '09:30 - 09:45', desc: 'Istirahat sejenak (berjalan kaki, minum air).' }, { time: '09:45 - 11:45', desc: 'Membaca buku (pengembangan diri atau bidang yang diminati).', breakdown: true }, { time: '11:45 - 12:30', desc: 'Makan siang.' }, { time: '12:30 - 13:00', desc: 'Waktu untuk merapikan lingkungan kerja atau rumah.' }, { time: '13:00 - 15:00', desc: 'Kerjakan tugas kuliah atau proyek pribadi.', breakdown: true }, { time: '15:00 - 15:30', desc: 'Istirahat (snack atau teh/herbal drink).' }, { time: '15:30 - 17:00', desc: 'Fokus pada keterampilan tambahan (kursus online).', breakdown: true }, { time: '17:00 - 17:30', desc: 'Refleksi harian (tulis jurnal atau evaluasi progres).' }, { time: '17:30 - 18:00', desc: 'Waktu untuk keluarga atau teman.' }, { time: '18:00 - 19:00', desc: 'Makan malam.' }, { time: '19:00 - 19:30', desc: 'Santai (nonton film pendek atau mendengarkan podcast).' }, { time: '19:30 - 20:00', desc: 'Review dan persiapkan rencana untuk hari berikutnya.' }, { time: '20:00 - 21:00', desc: 'Aktivitas ringan & persiapan tidur.' }, { time: '21:00 - 21:30', desc: 'Tidur.' } ]
                },
                selasa: {
                    title: "Selasa",
                    subtitle: "Hari Kuliah",
                    color: "selasa",
                    tasks: [ { time: '05:00 - 05:30', desc: 'Bangun, stretching, dan membersihkan kamar.' }, { time: '05:30 - 06:00', desc: 'Meditasi atau pernapasan dalam.' }, { time: '06:00 - 06:30', desc: 'Olahraga ringan.' }, { time: '06:30 - 07:30', desc: 'Mandi, persiapan, dan sarapan.' }, { time: '07:30 - 08:00', desc: 'Perjalanan ke kampus.' }, { time: '08:00 - 12:30', desc: 'Belajar mandiri atau review materi kuliah.', breakdown: true }, { time: '12:30 - 13:00', desc: 'Makan siang ringan.' }, { time: '13:00 - 15:00', desc: 'Kuliah Logika Matematika.' }, { time: '15:00 - 16:00', desc: 'Kuliah Agama.' }, { time: '16:00 - 16:30', desc: 'Istirahat sejenak.' }, { time: '16:30 - 17:00', desc: 'Review materi kuliah hari ini.', breakdown: true }, { time: '17:00 - 18:00', desc: 'Waktu untuk keluarga atau teman.' }, { time: '18:00 - 19:00', desc: 'Makan malam.' }, { time: '19:00 - 20:00', desc: 'Self-improvement dan persiapan kuliah besok.' }, { time: '20:00 - 21:00', desc: 'Bersantai, hobi, dan persiapan tidur.' }, { time: '21:00 - 21:30', desc: 'Tidur.' } ]
                },
                rabu: {
                    title: "Rabu",
                    subtitle: "Hari Fokus Tugas & Proyek",
                    color: "rabu",
                    tasks: [ { time: '05:00 - 05:30', desc: 'Bangun, stretching, dan membersihkan kamar.' }, { time: '05:30 - 06:30', desc: 'Meditasi dan olahraga ringan.' }, { time: '06:30 - 07:30', desc: 'Mandi, persiapan, dan sarapan.' }, { time: '07:30 - 09:30', desc: 'Belajar mandiri (fokus topik sulit).', breakdown: true }, { time: '09:30 - 09:45', desc: 'Istirahat.' }, { time: '09:45 - 11:45', desc: 'Mengerjakan tugas kuliah atau proyek pribadi.', breakdown: true }, { time: '11:45 - 12:30', desc: 'Makan siang.' }, { time: '12:30 - 13:00', desc: 'Refleksi harian (jurnal).' }, { time: '13:00 - 15:00', desc: 'Fokus pada pengembangan diri (buku, kursus online).', breakdown: true }, { time: '15:00 - 17:00', desc: 'Kerjakan proyek atau tugas kuliah yang mendesak.', breakdown: true }, { time: '17:00 - 18:00', desc: 'Waktu untuk keluarga atau teman.' }, { time: '18:00 - 19:00', desc: 'Makan malam.' }, { time: '19:00 - 20:00', desc: 'Santai dan review materi minggu ini.' }, { time: '20:00 - 21:00', desc: 'Aktivitas ringan & persiapan tidur.' }, { time: '21:00 - 21:30', desc: 'Tidur.' } ]
                },
                kamis: {
                    title: "Kamis",
                    subtitle: "Hari Kuliah",
                    color: "kamis",
                    tasks: [ { time: '05:00 - 05:30', desc: 'Bangun, stretching, dan membersihkan kamar.' }, { time: '05:30 - 06:30', desc: 'Meditasi dan olahraga ringan.' }, { time: '06:30 - 07:30', desc: 'Mandi, persiapan, dan sarapan.' }, { time: '07:30 - 08:00', desc: 'Perjalanan ke kampus.' }, { time: '08:00 - 12:30', desc: 'Belajar mandiri atau review materi.', breakdown: true }, { time: '12:30 - 13:00', desc: 'Makan siang.' }, { time: '13:00 - 15:15', desc: 'Kuliah Pancasila.' }, { time: '15:15 - 15:45', desc: 'Istirahat / Jeda.' }, { time: '15:45 - 17:15', desc: 'Kuliah Pengantar Teknologi Informasi.' }, { time: '17:15 - 17:45', desc: 'Refleksi harian dan review materi kuliah.' }, { time: '17:45 - 18:15', desc: 'Bersosialisasi dengan teman.' }, { time: '18:15 - 19:00', desc: 'Makan malam.' }, { time: '19:00 - 20:00', desc: 'Self-improvement dan persiapan kuliah besok.' }, { time: '20:00 - 21:00', desc: 'Hobi, santai, & persiapan tidur.' }, { time: '21:00 - 21:30', desc: 'Tidur.' } ]
                },
                jumat: {
                    title: "Jumat",
                    subtitle: "Hari Kuliah & Pengembangan Diri",
                    color: "jumat",
                    tasks: [ { time: '05:00 - 05:30', desc: 'Bangun, stretching, dan membersihkan kamar.' }, { time: '05:30 - 06:30', desc: 'Meditasi dan olahraga ringan.' }, { time: '06:30 - 07:30', desc: 'Mandi, persiapan, dan sarapan.' }, { time: '07:30 - 08:00', desc: 'Perjalanan ke kampus.' }, { time: '08:00 - 09:30', desc: 'Kuliah Sistem Operasi.' }, { time: '09:30 - 10:00', desc: 'Istirahat / Jeda.' }, { time: '10:00 - 11:30', desc: 'Kuliah Algoritma dan Struktur Data.' }, { time: '11:30 - 12:00', desc: 'Makan siang.' }, { time: '12:00 - 14:00', desc: 'Review materi kuliah atau kerjakan tugas.', breakdown: true }, { time: '14:00 - 16:00', desc: 'Fokus pada pengembangan diri (coding, dll).', breakdown: true }, { time: '16:00 - 18:00', desc: 'Kerjakan tugas atau proyek kuliah.', breakdown: true }, { time: '18:00 - 19:00', desc: 'Makan malam.' }, { time: '19:00 - 19:30', desc: 'Review dan persiapan materi untuk minggu depan.' }, { time: '19:30 - 20:30', desc: 'Aktivitas santai & persiapan tidur.' }, { time: '20:30 - 21:00', desc: 'Tidur.' } ]
                },
                sabtu: {
                    title: "Sabtu",
                    subtitle: "Review Mingguan & Waktu Hobi",
                    color: "sabtu",
                    tasks: [ { time: '06:00 - 06:30', desc: 'Bangun & stretching.' }, { time: '06:30 - 07:30', desc: 'Olahraga ringan dan sarapan santai.' }, { time: '07:30 - 09:00', desc: 'Membersihkan kamar/rumah secara menyeluruh.' }, { time: '09:00 - 11:00', desc: 'Review mingguan & perencanaan untuk minggu depan.', breakdown: true }, { time: '11:00 - 12:30', desc: 'Waktu luang atau hobi.' }, { time: '12:30 - 13:30', desc: 'Makan siang.' }, { time: '13:30 - 17:00', desc: 'Fokus pada proyek pribadi atau bersosialisasi dengan teman.' }, { time: '17:00 - 18:00', desc: 'Istirahat sore.' }, { time: '18:00 - 19:30', desc: 'Makan malam bersama keluarga/teman.' }, { time: '19:30 - 21:30', desc: 'Hiburan (nonton film, main game, baca buku fiksi).' }, { time: '21:30 - 22:00', desc: 'Persiapan tidur.' } ]
                },
                minggu: {
                    title: "Minggu",
                    subtitle: "Istirahat & Persiapan",
                    color: "minggu",
                    tasks: [ { time: '07:00 - 08:00', desc: 'Bangun santai & sarapan.' }, { time: '08:00 - 11:00', desc: 'Waktu berkualitas bersama keluarga atau teman.' }, { time: '11:00 - 12:00', desc: 'Membaca atau aktivitas menenangkan lainnya.' }, { time: '12:00 - 13:00', desc: 'Makan siang.' }, { time: '13:00 - 16:00', desc: 'Istirahat total, tidur siang, atau hobi ringan.' }, { time: '16:00 - 17:30', desc: 'Olahraga sore (jalan santai, bersepeda).' }, { time: '17:30 - 18:30', desc: 'Mandi dan persiapan malam.' }, { time: '18:30 - 19:30', desc: 'Makan malam.' }, { time: '19:30 - 20:30', desc: 'Siapkan semua untuk hari Senin (buku, pakaian, dll).', breakdown: true }, { time: '20:30 - 21:00', desc: 'Relaksasi sebelum tidur (tanpa gadget).' }, { time: '21:00 - 21:30', desc: 'Tidur lebih awal.' } ]
                }
            };

            const STORAGE_KEY = 'dailySchedulerState';
            let activeDay = '';
            const mainContainer = document.getElementById('schedule-container');

            // -- New: Notifikasi Functionality --

            // Fungsi untuk meminta izin notifikasi
            function mintaIzinNotifikasi() {
    if (!("Notification" in window)) {
        alert("Browser Anda tidak mendukung notifikasi.");
        return;
    }

    if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
            // Jika pengguna memberikan izin
            if (permission === "granted") {
                console.log("Izin notifikasi diberikan.");
                // Anda bisa memanggil fungsi untuk mengatur notifikasi terjadwal di sini
            } else {
                console.log("Izin notifikasi ditolak.  Cek apakah Anda mengizinkan notifikasi di browser.");
            }
             console.log("Notification.permission:", Notification.permission); // Tambahkan ini
        });
    } else {
       console.log("Notification.permission sudah:", Notification.permission); // Tambahkan ini
    }
}

            // Fungsi untuk menampilkan notifikasi
            function tampilkanNotifikasi(judul, opsi) {
                if (Notification.permission === "granted") {
                    new Notification(judul, opsi);
                }
            }

            // Fungsi untuk memeriksa waktu dan menampilkan notifikasi jika perlu
            function cekJadwalNotifikasi() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentDay = new Date().getDay(); // 0 (Minggu) hingga 6 (Sabtu)
    const dayMap = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    const currentDayKey = dayMap[currentDay];

    console.log("Current Day Key:", currentDayKey); // Debugging: Lihat nilai currentDayKey

    if (scheduleData[currentDayKey]) {
        console.log("Schedule Data for this day:", scheduleData[currentDayKey]); // Debugging: Lihat data jadwal untuk hari ini
        scheduleData[currentDayKey].tasks.forEach(task => {
            const [hour, minute] = task.time.split('-')[0].split(':').map(Number); // Ambil waktu mulai saja
            if (currentHour === hour && currentMinute === minute) {
                tampilkanNotifikasi("Pengingat Jadwal", {
                    body: task.desc,
                    icon: "path/to/your/icon.png" // Ganti dengan path ikon Anda
                });
            }
        });
    } else {
        console.log("Tidak ada jadwal untuk hari ini:", currentDayKey); // Debugging jika tidak ada jadwal
    }
}

            // Inisialisasi saat halaman dimuat
            document.addEventListener("DOMContentLoaded", () => {
                // --  Load and Set Up Day Cards  --
                function createDayCard(dayKey) {
                    const dayData = scheduleData[dayKey];
                    const card = document.createElement('div');
                    card.id = dayKey;
                    card.className = 'day-card';
                    
                    card.innerHTML = `
                        <div class="day-card-header">
                            <div>
                                <h2 style="color: var(--color-${dayData.color}); text-shadow: 0 0 10px var(--color-${dayData.color})70;">${dayData.title}</h2>
                                <p>${dayData.subtitle}</p>
                            </div>
                            <span class="progress-text">0% Selesai</span>
                        </div>
                        <div class="progress-container">
                             <div class="progress-bar-fill" style="background-color: var(--color-${dayData.color}); box-shadow: 0 0 10px var(--color-${dayData.color})90;"></div>
                        </div>
                    `;
                    
                    const taskList = document.createElement('ul');
                    taskList.className = 'task-list';
                    dayData.tasks.forEach(task => {
                        const li = document.createElement('li');
                        li.className = 'task-item';
                        li.dataset.time = task.time.replace(/\s/g, '');
                        const dayColorVar = `var(--color-${dayData.color})`;

                        li.innerHTML = `
                            <input type="checkbox" class="task-checkbox" style="accent-color: ${dayColorVar};">
                            <div class="task-details">
                                <p class="time">${task.time}</p>
                                <p class="desc">${task.desc}</p>
                            </div>
                            ${task.breakdown ? `<button class="breakdown-btn" style="color: ${dayColorVar};">✨ Pecah Tugas</button>` : ''}
                        `;
                        taskList.appendChild(li);
                    });
                    
                    card.appendChild(taskList);
                    mainContainer.appendChild(card);
                }
                
                function setActiveDay(day) {
                    activeDay = day;
                    const activeDayColor = `var(--color-${scheduleData[day].color})`;

                    document.querySelectorAll('.day-tab').forEach(tab => {
                        const tabDayColor = `var(--color-${scheduleData[tab.dataset.day].color})`;
                        tab.classList.toggle('active', tab.dataset.day === day);
                        if(tab.dataset.day === day) {
                            tab.style.backgroundColor = activeDayColor;
                            tab.style.color = 'var(--bg-deep-blue)';
                            tab.style.boxShadow = `0 2px 10px ${activeDayColor}50`;
                        } else {
                            tab.style.backgroundColor = 'transparent';
                            tab.style.color = 'var(--text-color-muted)';
                            tab.style.boxShadow = 'none';
                        }
                    });

                    document.querySelectorAll('.day-card').forEach(card => {
                        card.style.display = card.id === day ? 'block' : 'none';
                    });
                    updateProgressBar(document.getElementById(day));
                    highlightCurrentTask();
                }

                function highlightCurrentTask() {
                    const now = new Date();
                    const currentDayCard = document.getElementById(activeDay);
                    document.querySelectorAll('.current-task').forEach(el => {
                        el.classList.remove('current-task');
                        el.style.borderColor = 'var(--border-color)';
                        el.style.boxShadow = 'none';
                    });

                    if(currentDayCard && currentDayCard.style.display !== 'none') {
                        const dayColor = `var(--color-${scheduleData[activeDay].color})`;
                        const currentTime = now.getHours() * 100 + now.getMinutes();
                        const tasks = currentDayCard.querySelectorAll('.task-item');
                        
                        for (const task of tasks) {
                            const timeParts = task.dataset.time.split('-');
                            if (timeParts.length === 2) {
                                try {
                                    const startTime = parseInt(timeParts[0].replace(':', ''), 10);
                                    const endTime = parseInt(timeParts[1].replace(':', ''), 10);
                                    if (!isNaN(startTime) && !isNaN(endTime) && currentTime >= startTime && currentTime < endTime) {
                                        task.classList.add('current-task');
                                        task.style.borderColor = dayColor;
                                        task.style.boxShadow = `0 0 15px ${dayColor}50`;
                                        task.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        break;
                                    }
                                } catch(e) { console.error("Could not parse time for task", task.dataset.time); }
                            }
                        }
                    }
                }

                // --- State Management, API Calls, and Other Logic ---
                function saveState() {
                    const state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
                    const activeCard = document.getElementById(activeDay);
                    if (activeCard) {
                        const checkboxes = activeCard.querySelectorAll('.task-checkbox');
                        state[activeDay] = Array.from(checkboxes).map(cb => cb.checked);
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                    }
                }

                function loadState() {
                    const state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
                    Object.keys(state).forEach(dayKey => {
                        const card = document.getElementById(dayKey);
                        if (card && state[dayKey]) {
                            const checkboxes = card.querySelectorAll('.task-checkbox');
                            checkboxes.forEach((cb, index) => {
                                cb.checked = state[dayKey][index] || false;
                                updateTaskStyle(cb);
                            });
                            updateProgressBar(card);
                        }
                    }
                });
                }

                function updateTaskStyle(checkbox) {
                    checkbox.closest('.task-item').classList.toggle('completed', checkbox.checked);
                }

                function updateProgressBar(card) {
                    if (!card) return;
                    const checkboxes = card.querySelectorAll('.task-checkbox');
                    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
                    const totalTasks = checkboxes.length;
                    const percentage = totalTasks > 0 ? (checkedCount / totalTasks) * 100 : 0;
                    
                    card.querySelector('.progress-bar-fill').style.width = `${percentage}%`;
                    card.querySelector('.progress-text').textContent = `${Math.round(percentage)}% Selesai`;
                }

                // --- Function to initialize and start the app ---
                function initializeApp() {
                    Object.keys(scheduleData).forEach(createDayCard);
                    const today = new Date().getDay();
                    const dayMap = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
                    setActiveDay(dayMap[today]);
                    document.getElementById('currentDate').textContent = new Date().toLocaleString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                    loadState();
                    setupEventListeners();
                    // -- Start the notification check interval after initialization --
                    mintaIzinNotifikasi(); // Get notification permission
                    setInterval(cekJadwalNotifikasi, 60000); // Periksa setiap 60 detik (1 menit)
                }

                initializeApp(); // Panggil fungsi inisialisasi
            });
