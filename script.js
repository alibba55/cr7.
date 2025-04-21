// Video editleri
const edits = [
    {
        id: 1,
        title: "REAL MADRID",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        description: "Muhteşem bir S7NSEİV editi",
        thumbnail: "thumbnails/edit1.jpg"
    },
    {
        id: 2,
        title: "RONALDO ANGRY",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        description: "Harika bir S7NSEİV editi",
        thumbnail: "thumbnails/edit2.jpg"
    },
    {
        id: 3,
        title: "REAL MADRID BEAUTIFUL",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        description: "Etkileyici bir S7NSEİV editi",
        thumbnail: "thumbnails/edit3.jpg"
    }
];

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;

    edits.forEach(edit => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="edit-card">
                <img src="${edit.thumbnail}" alt="${edit.title}">
                <div class="card-body">
                    <h3>${edit.title}</h3>
                    <p>${edit.description}</p>
                    <button class="watch-btn" data-video-url="${edit.videoUrl}" data-video-title="${edit.title}">
                        İzle
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });

    // Video izleme butonlarına tıklama olayı ekle
    const watchButtons = document.querySelectorAll('.watch-btn');
    watchButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoUrl = button.dataset.videoUrl;
            const videoTitle = button.dataset.videoTitle;
            openVideoModal(videoUrl, videoTitle);
        });
    });
}

// Video modalını aç
function openVideoModal(videoUrl, videoTitle) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('videoModalTitle');
    const modalIframe = document.getElementById('videoModalIframe');
    
    modalTitle.textContent = videoTitle;
    modalIframe.src = videoUrl;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Modal kapandığında videoyu durdur
    modal.addEventListener('hidden.bs.modal', () => {
        modalIframe.src = '';
    });
}

// Videolar sayfasındaki tabloyu yükle
function loadEditsTable() {
    const tableBody = document.getElementById('editsTableBody');
    if (!tableBody) return;

    edits.forEach(edit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${edit.thumbnail}" alt="${edit.title}" class="table-thumbnail">
            </td>
            <td>${edit.title}</td>
            <td>${edit.description}</td>
            <td>
                <button class="watch-btn" data-video-url="${edit.videoUrl}" data-video-title="${edit.title}">
                    İzle
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Tablo video butonlarına tıklama olayı ekle
    const watchButtons = document.querySelectorAll('.watch-btn');
    watchButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoUrl = button.dataset.videoUrl;
            const videoTitle = button.dataset.videoTitle;
            openVideoModal(videoUrl, videoTitle);
        });
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedEdits();
    loadEditsTable();
});
