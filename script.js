// Edit verileri
const edits = [
    {
        title: "Ronaldo Edit 1",
        video: "https://www.youtube.com/embed/YoBcN-7ZdQs?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=0&mute=0&enablejsapi=1&origin=http://localhost",
        description: "Muhteşem bir Ronaldo edit",
        link: "https://www.youtube.com/watch?v=YoBcN-7ZdQs"
    },
    {
        title: "Ronaldo Edit 2",
        video: "https://www.youtube.com/embed/DLRHDsdatMc?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=0&mute=0&enablejsapi=1&origin=http://localhost",
        description: "Harika bir Ronaldo edit",
        link: "https://www.youtube.com/watch?v=DLRHDsdatMc"
    },
    {
        title: "Ronaldo Edit 3",
        video: "https://www.youtube.com/embed/OMODHFlw8Is?controls=1&modestbranding=1&rel=0&vq=hd1080&autoplay=0&mute=0&enablejsapi=1&origin=http://localhost",
        description: "Etkileyici bir Ronaldo edit",
        link: "https://www.youtube.com/watch?v=OMODHFlw8Is"
    }
];

// Editleri tabloya yükle
function loadEdits() {
    const tableBody = document.getElementById('edits-table');
    if (!tableBody) return;
    
    // Eğer editler zaten yüklüyse tekrar yükleme
    if (tableBody.children.length > 0) return;
    
    edits.forEach((edit, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${edit.title}</td>
            <td>${edit.description}</td>
            <td>
                <a href="${edit.link}" target="_blank" class="btn btn-primary btn-sm">İzle</a>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Sayfa yüklendiğinde editleri yükle
document.addEventListener('DOMContentLoaded', loadEdits);

// Her 5 saniyede bir editleri kontrol et
setInterval(() => {
    const tableBody = document.getElementById('edits-table');
    if (tableBody && tableBody.children.length === 0) {
        loadEdits();
    }
}, 5000);
