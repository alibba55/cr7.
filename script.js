// Video editleri
const edits = [
    {
        id: 1,
        title: "Real Madrid - Muhteşem Edit",
        videoUrl: "https://www.youtube.com/embed/YoBcN-7ZdQs",
        thumbnail: "https://i.ytimg.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Ronaldo - Öfkeli Anlar",
        videoUrl: "https://www.youtube.com/embed/DLRHDsdatMc",
        thumbnail: "https://i.ytimg.com/vi/DLRHDsdatMc/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Real Madrid - Güzel Anlar",
        videoUrl: "https://www.youtube.com/embed/OMODHFlw8Is",
        thumbnail: "https://i.ytimg.com/vi/OMODHFlw8Is/maxresdefault.jpg"
    }
];

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('edits-container');
    if (!container) {
        console.error('Edits container not found!');
        return;
    }

    // Container'ı temizle
    container.innerHTML = '';

    // İlk 3 editi göster
    edits.slice(0, 3).forEach(edit => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${edit.thumbnail}" class="card-img-top" alt="${edit.title}" 
                     onerror="this.src='https://via.placeholder.com/400x225?text=Video+Thumbnail'">
                <div class="card-body">
                    <h5 class="card-title">${edit.title}</h5>
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
    if (!tableBody) {
        console.error('Edits table body not found!');
        return;
    }

    // Tabloyu temizle
    tableBody.innerHTML = '';

    edits.forEach((edit, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${edit.thumbnail}" alt="${edit.title}" class="table-thumbnail"
                     onerror="this.src='https://via.placeholder.com/100x60?text=Thumbnail'">
            </td>
            <td>${edit.title}</td>
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
    
    if (!modal || !modalTitle || !modalIframe) {
        console.error('Video modal elements not found!');
        return;
    }

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
    console.log('DOM loaded, initializing...');
    loadFeaturedEdits();
    loadEditsTable();
    setupVideoModal();
});
