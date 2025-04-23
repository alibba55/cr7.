// Edit verileri
const edits = [
    {
        id: 1,
        title: "Ronaldo Vs Courtois",
        videoUrl: "https://youtube.com/shorts/4oQu18t8uQc?si=p5C1ERJTA23O8Jkx",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "2008 Ronaldo",
        videoUrl: "https://youtube.com/shorts/tR8y7HV4xBk?si=wsPIiSOoRTh0hFgw",
        thumbnail: "https://img.youtube.com/vi/DLRHDsdatMc/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Real Comeback",
        videoUrl: "https://youtube.com/shorts/YoBcN-7ZdQs?si=GbJV5vE3199vTJ_l",
        thumbnail: "https://img.youtube.com/vi/OMODHFlw8Is/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Reactions",
        videoUrl: "https://youtube.com/shorts/XHakxaH3zrk?si=TEtg-1SPnn3ThlRU",
        thumbnail: "https://img.youtube.com/vi/7Ht9jkWxwUQ/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "1%...",
        videoUrl: "https://youtube.com/shorts/cggHq5SYhY0?si=zRASSi6LgoucwS99",
        thumbnail: "https://img.youtube.com/vi/9GvXKXq4QqY/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "Ronaldo :/",
        videoUrl: "https://youtube.com/shorts/Yq1GaIMUbHs?si=OU37iyV7znOm6DBB",
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

// Ana sayfadaki editleri yükle
function loadEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Sadece ilk 3 edit'i göster
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
                    <p>${edit.description}</p>
                </div>
            </div>
        `;
        
        // Video kartına tıklandığında modalı aç
        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });
        
        container.appendChild(col);
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

// Videolar sayfasındaki editleri yükle
function loadAllEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
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
                    <p>${edit.description}</p>
                </div>
            </div>
        `;
        
        // Video kartına tıklandığında modalı aç
        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });
        
        container.appendChild(col);
    });
}

// Sayfa yüklendiğinde uygun fonksiyonu çağır
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('edits-container')) {
        if (window.location.pathname.includes('videos.html')) {
            loadAllEdits();
        } else {
            loadEdits();
        }
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
