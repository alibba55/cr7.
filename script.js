// Video data
const edits = [
    {
        id: 1,
        title: "Ronaldo Vs Courtois",
        videoUrl: "https://www.youtube.com/embed/4oQu18t8uQc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/4oQu18t8uQc/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "2008 Ronaldo",
        videoUrl: "https://www.youtube.com/embed/tR8y7HV4xBk?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/tR8y7HV4xBk/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Real Comeback",
        videoUrl: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/YoBcN-7ZdQs/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Reactions",
        videoUrl: "https://www.youtube.com/embed/XHakxaH3zrk?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/XHakxaH3zrk/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "1%...",
        videoUrl: "https://www.youtube.com/embed/cggHq5SYhY0?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/cggHq5SYhY0/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "Ronaldo :/",
        videoUrl: "https://www.youtube.com/embed/Yq1GaIMUbHs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=1&mute=0&enablejsapi=1",
        thumbnail: "https://img.youtube.com/vi/Yq1GaIMUbHs/maxresdefault.jpg"
    }
];

// Video modal elements
const videoModal = document.getElementById('videoModal');
const videoModalTitle = document.getElementById('videoModalTitle');
const videoModalIframe = document.getElementById('videoModalIframe');

// Stop video when modal is closed
videoModal.addEventListener('hidden.bs.modal', () => {
    videoModalIframe.src = '';
});

// Load featured edits on homepage
function loadEdits() {
    const container = document.getElementById('edits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Show only first 3 edits
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
        
        // Open modal when video card is clicked
        col.querySelector('.edit-card').addEventListener('click', () => {
            videoModalTitle.textContent = edit.title;
            videoModalIframe.src = edit.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });
        
        container.appendChild(col);
    });

    // Add "More" button
    if (edits.length > 3) {
        const moreButton = document.createElement('div');
        moreButton.className = 'col-12 text-center mt-4';
        moreButton.innerHTML = `
            <a href="videos.html" class="btn btn-primary btn-lg">
                Watch More Edits
            </a>
        `;
        container.appendChild(moreButton);
    }
}

// Load all edits on videos page
function loadAllEdits() {
    const tableBody = document.getElementById('editsTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    edits.forEach(edit => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>
                <img src="${edit.thumbnail}" alt="${edit.title}" class="table-thumbnail" data-video-url="${edit.videoUrl}" data-video-title="${edit.title}">
            </td>
            <td>${edit.title}</td>
            <td>
                <button class="watch-btn" data-video-url="${edit.videoUrl}" data-video-title="${edit.title}">
                    <i class="fas fa-play"></i> Watch
                </button>
            </td>
        `;
        
        // Open modal when thumbnail is clicked
        row.querySelector('.table-thumbnail').addEventListener('click', (e) => {
            const img = e.currentTarget;
            videoModalTitle.textContent = img.dataset.videoTitle;
            videoModalIframe.src = img.dataset.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });
        
        // Open modal when watch button is clicked
        row.querySelector('.watch-btn').addEventListener('click', (e) => {
            const button = e.currentTarget;
            videoModalTitle.textContent = button.dataset.videoTitle;
            videoModalIframe.src = button.dataset.videoUrl;
            new bootstrap.Modal(videoModal).show();
        });
        
        tableBody.appendChild(row);
    });
}

// Call appropriate function when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('videos.html')) {
        loadAllEdits();
    } else if (document.getElementById('edits-container')) {
        loadEdits();
    }
}); 
