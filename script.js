// Edit verileri
const edits = [
    {
        title: "RONALDO EDIT 1",
        video: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=YoBcN-7ZdQs",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 2",
        video: "https://www.youtube.com/embed/DLRHDsdatMc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=DLRHDsdatMc",
        thumbnail: "https://img.youtube.com/vi/DLRHDsdatMc/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 3",
        video: "https://www.youtube.com/embed/OMODHFlw8Is?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=OMODHFlw8Is",
        thumbnail: "https://img.youtube.com/vi/OMODHFlw8Is/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 4",
        video: "https://www.youtube.com/embed/7Ht9jkWxwUQ?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=7Ht9jkWxwUQ",
        thumbnail: "https://img.youtube.com/vi/7Ht9jkWxwUQ/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 5",
        video: "https://www.youtube.com/embed/9GvXKXq4QqY?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=9GvXKXq4QqY",
        thumbnail: "https://img.youtube.com/vi/9GvXKXq4QqY/mqdefault.jpg"
    },
    {
        title: "RONALDO EDIT 6",
        video: "https://www.youtube.com/embed/3P1CnWI62Ik?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        link: "https://www.youtube.com/watch?v=3P1CnWI62Ik",
        thumbnail: "https://img.youtube.com/vi/3P1CnWI62Ik/mqdefault.jpg"
    }
];

// ... existing code ...

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
                </div>
            </div>
        `;
        
        // Video kartına tıklandığında modalı aç
        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.video;
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
                </div>
            </div>
        `;
        
        // Video kartına tıklandığında modalı aç
        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.video;
            new bootstrap.Modal(videoModal).show();
        });
        
        container.appendChild(col);
    });
}

// ... existing code ...
