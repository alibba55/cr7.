// Edit verileri
const edits = [
    {
        title: "REAL MADRİD",
        video: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Muhteşem bir S7NSEIV editi",
        link: "https://www.youtube.com/watch?v=YoBcN-7ZdQs",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/mqdefault.jpg"
    },
    {
        title: "RONALDO ANGRY",
        video: "https://www.youtube.com/embed/DLRHDsdatMc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Harika bir S7NSEIV editi",
        link: "https://www.youtube.com/watch?v=DLRHDsdatMc",
        thumbnail: "https://img.youtube.com/vi/DLRHDsdatMc/mqdefault.jpg"
    },
    {
        title: "REAL MADRID BEAUTIFUL",
        video: "https://www.youtube.com/embed/OMODHFlw8Is?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Etkileyici bir S7NSEIV editi",
        link: "https://www.youtube.com/watch?v=OMODHFlw8Is",
        thumbnail: "https://img.youtube.com/vi/OMODHFlw8Is/mqdefault.jpg"
    },
    {
        title: "RONALDO",
        video: "https://www.youtube.com/embed/VjdvK97NiEM?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "S7NSEIV'in Yeni Kısa Editi",
        link: "https://www.youtube.com/shorts/VjdvK97NiEM",
        thumbnail: "https://img.youtube.com/vi/VjdvK97NiEM/mqdefault.jpg"
    },
    {
        title: "REAL MADRID CHAMPIONS",
        video: "https://www.youtube.com/embed/-HbWOqnxcns?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "S7NSEIV'in En Yeni Shorts Editi",
        link: "https://www.youtube.com/shorts/-HbWOqnxcns",
        thumbnail: "https://img.youtube.com/vi/-HbWOqnxcns/mqdefault.jpg"
    },
    {
        title: "BALLON D'OR",
        video: "https://www.youtube.com/embed/kqiQa1rXcr8?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "S7NSEIV'in Efsane Anları",
        link: "https://www.youtube.com/shorts/kqiQa1rXcr8",
        thumbnail: "https://img.youtube.com/vi/kqiQa1rXcr8/mqdefault.jpg"
    },
    {
        title: "FATIH TERIM REACTIONS",
        video: "https://www.youtube.com/embed/P9St_ULxWcs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "İmparator'un Unutulmaz Anları",
        link: "https://www.youtube.com/shorts/P9St_ULxWcs",
        thumbnail: "https://img.youtube.com/vi/P9St_ULxWcs/mqdefault.jpg"
    },
    {
        title: "S7NSEIV SHORTS",
        video: "https://www.youtube.com/embed/S2vFaiscy1s?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "S7NSEIV'in yeni shorts videosu",
        link: "https://www.youtube.com/shorts/S2vFaiscy1s",
        thumbnail: "https://img.youtube.com/vi/S2vFaiscy1s/mqdefault.jpg"
    },
    {
        title: "ANCELOTTİ REACTİONS",
        video: "https://www.youtube.com/embed/O2nG3YoCGKE?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Ronaldo'nun muhteşem performansı",
        link: "https://www.youtube.com/shorts/O2nG3YoCGKE",
        thumbnail: "https://img.youtube.com/vi/O2nG3YoCGKE/mqdefault.jpg"
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

// Edit kartı oluştur
function createEditCard(edit) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    
    col.innerHTML = `
        <div class="edit-card">
            <div class="video-container">
                <img src="${edit.thumbnail}" alt="${edit.title}" class="video-thumbnail">
            </div>
            <div class="edit-info">
                <h3>${edit.title}</h3>
                <p>${edit.description}</p>
                <button class="btn-watch" onclick="openVideoModal('${edit.video}', '${edit.title}')">
                    <i class="fas fa-play"></i> İzle
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Ana sayfadaki editleri yükle
function loadEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Sadece ilk 3 edit'i göster
    const firstThreeEdits = edits.slice(0, 3);
    
    firstThreeEdits.forEach(edit => {
        container.appendChild(createEditCard(edit));
    });

    // "Daha Fazla" butonu ekle
    if (edits.length > 3) {
        const moreButton = document.createElement('div');
        moreButton.className = 'col-12 text-center mt-4';
        moreButton.innerHTML = `
            <a href="videos.html" class="btn btn-primary btn-lg">
                Daha Fazla Edit İzle
            </a>
        `;
        container.appendChild(moreButton);
    }
}

// Tüm editleri yükle
function loadAllEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    edits.forEach(edit => {
        container.appendChild(createEditCard(edit));
    });
}

// Video modalını aç
function openVideoModal(videoUrl, title) {
    videoModalTitle.textContent = title;
    videoModalIframe.src = videoUrl;
    new bootstrap.Modal(videoModal).show();
}

// Sayfa yüklendiğinde uygun fonksiyonu çağır
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('videos.html')) {
        loadAllEdits();
    } else {
        loadEdits();
    }
});

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
