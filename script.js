// Video verileri
const edits = [
    {
        id: 1,
        title: "Ronaldo Vs Courtois",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        thumbnail: "path/to/thumbnail1.jpg"
    },
    {
        id: 2,
        title: "2008 Ronaldo",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        thumbnail: "path/to/thumbnail2.jpg"
    },
    {
        id: 3,
        title: "Real Comeback",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        thumbnail: "path/to/thumbnail3.jpg"
    }
];

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('featuredEdits');
    if (!container) return;

    edits.forEach(edit => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="${edit.thumbnail}" alt="${edit.title}" class="video-thumbnail">
            <h3 class="video-title">${edit.title}</h3>
        `;
        
        card.addEventListener('click', () => openVideoModal(edit));
        container.appendChild(card);
    });
}

// Tüm editleri tabloya yükle
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
            <td>
                <button class="watch-btn" onclick="openVideoModal(${JSON.stringify(edit).replace(/"/g, '&quot;')})">
                    <i class="fas fa-play"></i> Watch
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Video modalını aç
function openVideoModal(edit) {
    const modal = new bootstrap.Modal(document.getElementById('videoModal'));
    document.getElementById('videoModalTitle').textContent = edit.title;
    document.getElementById('videoModalIframe').src = edit.videoUrl;
    modal.show();

    // Modal kapandığında videoyu durdur
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
        document.getElementById('videoModalIframe').src = '';
    });
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedEdits();
    loadEditsTable();
});
