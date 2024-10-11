document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('infoForm');
    const infoList = document.getElementById('infoList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Captura os valores dos campos de input
        const title = document.getElementById('infoTitle').value;
        const link = document.getElementById('infoLink').value;
        const imageUrl = document.getElementById('infoImage').value;
        
        // Cria um novo item da lista
        const li = document.createElement('li');
        
        // Verifica se há uma URL de imagem
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = title;
            img.onclick = () => window.open(link, '_blank');
            li.appendChild(img);
        }
        
        // Adiciona o título como link
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.textContent = title;
        li.appendChild(anchor);
        
        // Adiciona o item à lista
        infoList.appendChild(li);
        
        // Limpa o formulário
        form.reset();
    });
});

function loadIframe(page) {
    var iframe = document.getElementById('content-frame');
    var overlay = document.getElementById('overlay');

    if (page === 'home') {
        iframe.style.display = 'none';  // Oculta o iframe
        overlay.style.display = 'none';  // Oculta o overlay
    } else if (page === 'projetos') {
        iframe.src = 'projetos.html';  // Carrega a página dos projetos no iframe
        iframe.style.display = 'block';  // Mostra o iframe
        overlay.style.display = 'block';  // Mostra o overlay
    } else if (page === 'sobre') {
        iframe.src = 'sobre.html';  // Carrega a página "Sobre" no iframe
        iframe.style.display = 'block';  // Mostra o iframe
        overlay.style.display = 'block';  // Mostra o overlay
    }
}

// Função para fechar o iframe quando o usuário clicar fora dele
function closeIframe() {
    var iframe = document.getElementById('content-frame');
    var overlay = document.getElementById('overlay');
    iframe.style.display = 'none';  // Oculta o iframe
    overlay.style.display = 'none';  // Oculta o overlay
}
