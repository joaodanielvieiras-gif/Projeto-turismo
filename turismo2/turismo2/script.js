const cards = document.querySelectorAll('.card');
const areaConteudo = document.querySelector('#painel .vazio');
const botaoSaberMais = document.querySelector('.Sabermais');

let chaleSelecionado = '';

cards.forEach(card => {
    card.addEventListener('click', () => {
        const caminhoImagem = card.querySelector('.foto img').getAttribute('src');
        const titulo = card.querySelector('.titulo')?.innerText || '';
        
        // Guarda o nome do chalé clicado
        chaleSelecionado = titulo;

        areaConteudo.innerHTML = `
            <div class="detalhes-painel">
                <img src="${caminhoImagem}" alt="${titulo}">
                <h2>${titulo}</h2>
            </div>
        `;

        // Faz o botão aparecer abaixo da imagem
        botaoSaberMais.style.display = 'block';
    });
});

// Ação ao clicar no botão "Quero saber mais"
botaoSaberMais.addEventListener('click', () => {
    alert(`Você escolheu: ${chaleSelecionado}`);
});