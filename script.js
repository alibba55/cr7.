// Video verileri
const edits = [
    {
        id: 1,
        title: "Ronaldo - The GOAT",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_1/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Ronaldo Skills 2024",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_2/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Ronaldo Goals Compilation",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_3/maxresdefault.jpg"
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

// Ana sayfadaki öne çıkan videoları yükle
function loadFeaturedEdits() {
    const editsContainer = document.getElementById('edits-container');
    if (!editsContainer) return;

    editsContainer.innerHTML = '';
    const firstThreeEdits = edits.slice(0, 3);

    firstThreeEdits.forEach(edit => {
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
            videoModalIframe.src = edit.videoUrl; // videoUrl olarak güncellendi
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
            videoModalIframe.src = edit.videoUrl; // videoUrl olarak güncellendi
            new bootstrap.Modal(videoModal).show();
        });

        editsContainer.appendChild(col);
    });
}


// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('videos.html')) {
        loadAllEdits();
    } else {
        loadFeaturedEdits();
    }
});

// Her 5 saniyede bir kontrol etme kısmı gereksiz, kaldırıldı.
