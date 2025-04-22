// Video editleri
const edits = [
    {
        id: 1,
        title: "S7NSEİV - Muhteşem Edit",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        description: "En yeni ve en iyi editlerden biri. Özel efektler ve müzik seçimiyle dikkat çeken bir çalışma.",
        thumbnail: "images/thumbnail1.jpg"
    },
    {
        id: 2,
        title: "S7NSEİV - Özel Performans",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        description: "Benzersiz bir performans sergileyen muhteşem anların derlemesi.",
        thumbnail: "images/thumbnail2.jpg"
    },
    {
        id: 3,
        title: "S7NSEİV - Klasik Anlar",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        description: "Unutulmaz anların özel bir derlemesi. En iyi performanslar ve özel efektler.",
        thumbnail: "images/thumbnail3.jpg"
    }
];

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('featuredEdits');
    if (!container) return;

    // İlk 3 editi göster
    edits.slice(0, 3).forEach(edit => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${edit.thumbnail}" class="card-img-top" alt="${edit.title}">
                <div class="card-body">
                    <h5 class="card-title">${edit.title}</h5>
                    <p class="card-text">${edit.description}</p>
                    <button class="btn btn-primary watch-video" data-video-url="${edit.videoUrl}" 
                            data-video-title="${edit.title}">
                        İzle
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Videolar sayfasındaki tabloyu yükle
function loadEditsTable() {
    const tableBody = document.getElementById('editsTableBody');
    if (!tableBody) return;

    edits.forEach((edit, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${edit.thumbnail}" alt="${edit.title}" class="table-thumbnail">
            </td>
            <td>${edit.title}</td>
            <td>${edit.description}</td>
            <td>
                <button class="btn btn-primary watch-video" data-video-url="${edit.videoUrl}" 
                        data-video-title="${edit.title}">
                    İzle
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Video modalını ayarla
function setupVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('videoModalTitle');
    const modalIframe = document.getElementById('videoModalIframe');
    
    if (!modal || !modalTitle || !modalIframe) return;

    // Modal kapatıldığında videoyu durdur
    modal.addEventListener('hidden.bs.modal', () => {
        modalIframe.src = '';
    });

    // Tüm video butonlarına tıklama olayı ekle
    document.querySelectorAll('.watch-video').forEach(button => {
        button.addEventListener('click', () => {
            const videoUrl = button.dataset.videoUrl;
            const videoTitle = button.dataset.videoTitle;
            
            modalTitle.textContent = videoTitle;
            modalIframe.src = videoUrl;
            
            // Bootstrap 5 modal'ı aç
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        });
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedEdits();
    loadEditsTable();
    setupVideoModal();
});
