document.addEventListener("DOMContentLoaded", function() {
    // Selecionando o wrapper das imagens
    const wrapper = document.querySelector('.port-itens-wrapper');

    // Selecionar todas as imagens dentro do wrapper
    const imagens = wrapper.querySelectorAll('img');

    // Número de repetições
    const numeroDeRepeticoes = 100; //Quantas vezes repetir as imagens

    // Função para duplicar as imagens
    function duplicarImagens() {
        for (let i = 0; i < numeroDeRepeticoes - 1; i++) { // -1 porque já temos a primeira repetição
            imagens.forEach(img => {
                const clone = img.cloneNode(true); // Clonando a imagem
                wrapper.appendChild(clone); // Adicionando o clone ao final do wrapper
            });
        }
    }

    duplicarImagens(); // Chama a função para duplicar as imagens
});
