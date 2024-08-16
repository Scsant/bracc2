document.addEventListener('DOMContentLoaded', () => {
    const tollContainer = document.getElementById('toll-container');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    // Function to normalize file names
    const normalizeFileName = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_map.pdf';
    
    // Function to normalize image file names
    const normalizeImageFileName = (name, type) => name.toLowerCase().replace(/[^a-z0-9]/g, '') + type + '.JPG';

    // Function to create tolls
    const createTollElement = (toll) => {
        const mapFileName = normalizeFileName(toll.Column3);
        const imageFileNameIda = normalizeImageFileName(toll.Column3, 'Ida');
        const imageFileNameVolta = normalizeImageFileName(toll.Column3, 'Volta');
        const tollDiv = document.createElement('div');
        tollDiv.className = 'box toll';
        tollDiv.innerHTML = `
            <h2><a href="maps/${mapFileName}" target="_blank">${toll.Column3}</a></h2>
            <div class="toll-details">
                <p><strong>Data de Atualização:</strong> ${toll["BASE DE VALORES DE PEDAGIOS"]}</p>
                <p><strong>Valor por eixo ida:</strong> R$ ${toll.Column4}</p>
                <p><strong>Valor por eixo volta:</strong> R$ ${toll.Column5}</p>
                <p><strong>Valor total ida:</strong> R$ ${toll.Column6}</p>
                <p><strong>Valor total volta:</strong> R$ ${toll.Column7}</p>
                <p><strong>Quantidade de praças ida:</strong> ${toll.Column8}</p>
                <p><strong>Quantidade de praças volta:</strong> ${toll.Column9}</p>
                <p><strong>Observações:</strong> ${toll.Column10 || "N/A"}</p>
            </div>
            <p class="small-link">
                <a href="#" class="image-link" data-image="imagens/${imageFileNameIda}">Praças de pedágio - Ida</a>
                <a href="#" class="image-link" data-image="imagens/${imageFileNameVolta}">Praças de pedágio - Volta</a>
            </p>
        `;
        tollContainer.appendChild(tollDiv);
    };

    // Function to handle image link click
    const handleImageLinkClick = (event) => {
        event.preventDefault();
        modal.style.display = "block";
        modalImg.src = event.currentTarget.getAttribute('data-image');
        captionText.innerText = event.currentTarget.innerText;
    };

    // Function to load toll data
    const loadTollData = async () => {
        try {
            const response = await fetch('tolls.json');
            const data = await response.json();
            const tolls = data.BASE_PEDAGIOS.filter(item => item && item.Column3);
            tollContainer.className = 'container';
            tolls.forEach(createTollElement);
            document.querySelectorAll('.image-link').forEach(link => {
                link.addEventListener('click', handleImageLinkClick);
            });
        } catch (error) {
            console.error('Error loading tolls data:', error);
        }
    };

    // Load toll data on page load
    loadTollData();

    // Close the modal
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close the modal when the user clicks outside of the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
