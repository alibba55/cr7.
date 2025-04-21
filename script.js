// Video verileri
const edits = [
    {
        title: "RONALDO EDIT 1",
        video: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Muhteşem bir Ronaldo editi",
        link: "https://www.youtube.com/watch?v=YoBcN-7ZdQs",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 2",
        video: "https://www.youtube.com/embed/DLRHDsdatMc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Harika bir Ronadlo editi",
        link: "https://www.youtube.com/watch?v=DLRHDsdatMc",
        thumbnail: "https://img.youtube.com/vi/DLRHDsdatMc/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 3",
        video: "https://www.youtube.com/embed/OMODHFlw8Is?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Etkileyici bir Ronaldo editi",
        link: "https://www.youtube.com/watch?v=OMODHFlw8Is",
        thumbnail: "https://img.youtube.com/vi/OMODHFlw8Is/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 4",
        video: "https://www.youtube.com/embed/7Ht9jkWxwUQ?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Efsanevi Ronaldo editi",
        link: "https://www.youtube.com/watch?v=7Ht9jkWxwUQ",
        thumbnail: "https://img.youtube.com/vi/7Ht9jkWxwUQ/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 5",
        video: "https://www.youtube.com/embed/9GvXKXq4QqY?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Büyüleyici Ronaldo editi",
        link: "https://www.youtube.com/watch?v=9GvXKXq4QqY",
        thumbnail: "https://img.youtube.com/vi/9GvXKXq4QqY/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 6",
        video: "https://www.youtube.com/embed/3P1CnWI62Ik?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        description: "Unutulmaz Ronaldo editi",
        link: "https://www.youtube.com/watch?v=3P1CnWI62Ik",
        thumbnail: "https://img.youtube.com/vi/3P1CnWI62Ik/mqdefault.jpg"
    }
];

// Editleri yükle (hem ana sayfa hem de videolar sayfası için)
function loadEdits(showAll = false) {
    const container = document.getElementById('edits-container');
    if (!container) return;

    container.innerHTML = '';
    
    // Gösterilecek editleri belirle
    const editsToShow = showAll ? edits : edits.slice(0, 3);
    
    editsToShow.forEach(edit => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        col.innerHTML = `
            <div class="card bg-dark text-white h-100">
                <img src="${edit.thumbnail}" class="card-img-top" alt="${edit.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${edit.title}</h5>
                    <p class="card-text">${edit.description}</p>
                    <button class="btn btn-primary mt-auto w-100">İzle</button>
                </div>
            </div>
        `;
        
        // Karta tıklandığında modalı aç
        col.querySelector('.btn').addEventListener('click', () => {
            const videoModal = document.getElementById('videoModal');
            const videoModalTitle = document.getElementById('videoModalTitle');
            const videoModalIframe = document.getElementById('videoModalIframe');
            
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.video;
            new bootstrap.Modal(videoModal).show();
        });
        
        container.appendChild(col);
    });

    // Ana sayfada "Daha Fazla" butonu ekle
    if (!showAll && edits.length > 3) {
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

// Modal kapatıldığında videoyu durdur
document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('videoModalIframe').src = '';
});

// Sayfa yüklendiğinde uygun fonksiyonu çağır
document.addEventListener('DOMContentLoaded', () => {
    const isVideosPage = window.location.pathname.includes('videos.html');
    loadEdits(isVideosPage);
});
