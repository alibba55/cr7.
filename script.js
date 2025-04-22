// Video verileri
const edits = [
    {
        id: 1,
        title: "RONALDO EDIT 1",
        videoUrl: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "RONALDO EDIT 2",
        videoUrl: "https://www.youtube.com/embed/DLRHDsdatMc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/DLRHDsdatMc/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "RONALDO EDIT 3",
        videoUrl: "https://www.youtube.com/embed/OMODHFlw8Is?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/OMODHFlw8Is/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "RONALDO EDIT 4",
        videoUrl: "https://www.youtube.com/embed/7Ht9jkWxwUQ?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/7Ht9jkWxwUQ/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "RONALDO EDIT 5",
        videoUrl: "https://www.youtube.com/embed/9GvXKXq4QqY?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/9GvXKXq4QqY/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "RONALDO EDIT 6",
        videoUrl: "https://www.youtube.com/embed/3P1CnWI62Ik?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/3P1CnWI62Ik/maxresdefault.jpg"
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
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('videos.html')) {
        loadAllEdits();
    } else {
        loadFeaturedEdits();
    }
});
