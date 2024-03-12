document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "pzGlN0UjZb7Ftvyl5m0AG45m5nPx7cPnzt9mEYKTEimjqa9DyWD5yNc3";
    const apiUrl = "https://api.pexels.com/v1/search?query=cloud";
    const photoGallery = document.getElementById("photoGallery");

    function loadImages() {
        fetch(apiUrl, {
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
         
            clearImages();

            data.photos.forEach(photo => {
                const card = document.createElement("div");
                card.classList.add("col-md-4", "mb-4");

                card.innerHTML = `
                    <div class="card">
                        <img src="${photo.src.large}" class="card-img-top" alt="${photo.photographer}">
                        <div class="card-body">
                            <h5 class="card-title">${photo.photographer}</h5>
                            <p class="card-text">Photographer: ${photo.photographer}</p>
                            <a href="${photo.src.original}" class="btn btn-primary" target="_blank">View Full Size</a>
                        </div>
                    </div>
                `;

                photoGallery.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching photos:", error);
        });
    }

    function clearImages() {
        photoGallery.innerHTML = "";
    }

    
    document.getElementById("loadImagesBtn").addEventListener("click", loadImages);
    document.getElementById("clearImagesBtn").addEventListener("click", clearImages);
});