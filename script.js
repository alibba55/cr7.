// Video editleri
const edits = [
    {
        id: 1,
        title: "Real Madrid Muhteşem Edit",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_1/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Real Madrid Özel Performans",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_2/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Real Madrid Klasik Anlar",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_3/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Real Madrid Gol Şovu",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_4/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "Real Madrid Şampiyonluk Anları",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_5/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "Real Madrid Efsane Maçlar",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_6/maxresdefault.jpg"
    }
];

// Video modal elementi
const videoModal = document.getElementById('videoModal');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalIframe = document.getElementById('videoModalIframe');

// Modal kapatıldığında videoyu durdur
videoModal.addEventListener('hidden.bs.modal', () => {
    videoModalIframe.src = '';
});

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;

    // Sadece ilk 3 edit'i göster
    const firstThreeEdits = edits.slice(0, 3);
    
    firstThreeEdits.forEach(edit => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="edit-card">
                <img src="${edit.thumbnail}" alt="${edit.title}">
                <div class="edit-info">
                    <h3>${edit.title}</h3>
                    <button class="watch-btn" data-video-url="${edit.videoUrl}" data-title="${edit.title}">
                        İzle
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Videolar sayfasındaki tabloyu yükle
function loadEditsTable() {
    const tableBody = document.getElementById('editsTableBody');
    if (!tableBody) return;

    edits.forEach(edit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${edit.thumbnail}" alt="${edit.title}" style="width: 120px; height: 67.5px; object-fit: cover;"></td>
            <td>${edit.title}</td>
            <td>
                <button class="watch-btn" data-video-url="${edit.videoUrl}" data-title="${edit.title}">
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
    if (!modal) return;

    const modalTitle = modal.querySelector('.modal-title');
    const iframe = modal.querySelector('iframe');
    const modalInstance = new bootstrap.Modal(modal);

    // Video butonlarına tıklama olayı ekle
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('watch-btn')) {
            const videoUrl = e.target.dataset.videoUrl;
            const title = e.target.dataset.title;
            
            modalTitle.textContent = title;
            iframe.src = videoUrl;
            modalInstance.show();
        }
    });

    // Modal kapandığında videoyu durdur
    modal.addEventListener('hidden.bs.modal', function() {
        iframe.src = '';
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedEdits();
    loadEditsTable();
    setupVideoModal();
});

// Videolar sayfasındaki tüm videoları yükle
function loadAllEdits() {
    const editsContainer = document.getElementById('edits-container');
    if (!editsContainer) return;

    editsContainer.innerHTML = '';

    edits.forEach(edit => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        col.innerHTML = `
            <div class="edit-card">
                <div class="video-container">
                    <img src="${edit.thumbnail}" alt="${edit.title}" class="video-thumbnail">
                </div>
                <div class="edit-info">
                    <h3>${edit.title}</h3>
                </div>
            </div>
        `;

        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });

        editsContainer.appendChild(col);
    });

    // "Daha Fazla" butonu ekle (Ana sayfada)
    if (edits.length > 3 && !window.location.pathname.includes('videos.html')) {
        const moreButton = document.createElement('div');
        moreButton.className = 'col-12 text-center mt-4';
        moreButton.innerHTML = `
            <a href="videos.html" class="btn btn-primary btn-lg">
                Daha Fazla Edit İzle
            </a>
        `;
        editsContainer.appendChild(moreButton);
    }
}

// Her 5 saniyede bir kontrol et
setInterval(() => {
    const container = document.getElementById('edits-container');
    
    if (container && container.children.length === 0) {
        if (window.location.pathname.includes('videos.html')) {
            loadAllEdits();
        } else {
            loadEdits();
        }
    }
}, 5000); 
