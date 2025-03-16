document.addEventListener('DOMContentLoaded', () => {
    const participantesInput = document.getElementById('input-participante');
    const participantesList = document.getElementById('lista-participantes');
    const sorteioButton = document.getElementById('btn-sorteio');
    const resultadoContainer = document.getElementById('resultado');
    const resultadoList = document.getElementById('resultado-lista');
    const participantes = [];

    // Função para adicionar participantes
    function adicionarParticipante(nome) {
        if (nome && !participantes.includes(nome)) {
            participantes.push(nome);
            const li = document.createElement('li');
            li.textContent = nome;
            participantesList.appendChild(li);
            participantesInput.value = ''; // Limpar campo de input
        }
    }

    // Função para sortear os amigos secretos
    function sortearAmigosSecretos() {
        if (participantes.length < 2) {
            alert('Adicione pelo menos dois participantes para fazer o sorteio!');
            return;
        }

        const sorteio = [...participantes];
        const pares = [];

        // Realizando o sorteio
        for (let i = 0; i < participantes.length; i++) {
            const sorteado = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
            pares.push({ amigo: participantes[i], sorteado: sorteado });
        }

        // Exibindo os resultados
        mostrarResultados(pares);
    }

    // Função para mostrar os resultados
    function mostrarResultados(pares) {
        resultadoList.innerHTML = ''; // Limpar resultados anteriores
        pares.forEach(par => {
            const li = document.createElement('li');
            li.textContent = `${par.amigo} tirou ${par.sorteado}`;
            resultadoList.appendChild(li);
        });
        resultadoContainer.style.display = 'block';
    }

    // Adicionando evento para o botão de adicionar participantes
    participantesInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarParticipante(participantesInput.value.trim());
        }
    });

    // Adicionando evento para o botão de sorteio
    sorteioButton.addEventListener('click', sortearAmigosSecretos);
});