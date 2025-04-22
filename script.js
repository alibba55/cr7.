// Video editleri
const edits = [
    {
        id: 1,
        title: "RONALDO - GOAT",
        videoUrl: "https://www.youtube.com/embed/YoBcN-7ZdQs",
        description: "Muhteşem bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "RONALDO - LEGEND",
        videoUrl: "https://www.youtube.com/embed/DLRHDsdatMc",
        description: "Harika bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/DLRHDsdatMc/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "RONALDO - KING",
        videoUrl: "https://www.youtube.com/embed/OMODHFlw8Is",
        description: "Etkileyici bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/OMODHFlw8Is/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "RONALDO - SKILLS",
        videoUrl: "https://www.youtube.com/embed/YoBcN-7ZdQs",
        description: "Yeni bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "RONALDO - GOALS",
        videoUrl: "https://www.youtube.com/embed/DLRHDsdatMc",
        description: "Özel bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/DLRHDsdatMc/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "RONALDO - BEST",
        videoUrl: "https://www.youtube.com/embed/OMODHFlw8Is",
        description: "Benzersiz bir S7NSEİV editi",
        thumbnail: "https://i.ytimg.com/vi/OMODHFlw8Is/maxresdefault.jpg"
    }
];

// Ana sayfadaki öne çıkan editleri yükle
function loadFeaturedEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;

    // İlk 3 editi göster
    edits.slice(0, 3).forEach(edit => {
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

    // Daha fazla butonu ekle
    const moreCol = document.createElement('div');
    moreCol.className = 'col-12 text-center mt-4';
    moreCol.innerHTML = `
        <a href="videos.html" class="more-btn">Daha Fazla Edit</a>
    `;
    container.appendChild(moreCol);

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
