document.addEventListener('DOMContentLoaded', () => {
    const participantesInput = document.getElementById('input-participante');
    const addButton = document.getElementById('btn-adicionar');
    const participantesList = document.getElementById('lista-participantes');
    const sorteioButton = document.getElementById('btn-sorteio');
    const resultadoContainer = document.getElementById('resultado');
    const resultadoList = document.getElementById('resultado-lista');
    let participantes = [];

    // Adicionar participante à lista
    function adicionarParticipante() {
        const nome = participantesInput.value.trim();
        if (nome === '' || participantes.includes(nome)) {
            alert('Nome inválido ou já adicionado.');
            return;
        }
        participantes.push(nome);
        const li = document.createElement('li');
        li.textContent = nome;
        participantesList.appendChild(li);
        participantesInput.value = ''; 
    }

    // Realizar sorteio de amigos secretos
    function sortearAmigosSecretos() {
        if (participantes.length < 2) {
            alert('Adicione pelo menos dois participantes.');
            return;
        }

        let sorteio = [...participantes];
        let resultado = [];

        for (let i = 0; i < participantes.length; i++) {
            let sorteadoIndex = Math.floor(Math.random() * sorteio.length);
            while (sorteio[sorteadoIndex] === participantes[i]) {
                sorteadoIndex = Math.floor(Math.random() * sorteio.length);
            }
            resultado.push({ amigo: participantes[i], sorteado: sorteio[sorteadoIndex] });
            sorteio.splice(sorteadoIndex, 1);
        }

        // Exibir resultado
        resultadoList.innerHTML = '';
        resultado.forEach(par => {
            const li = document.createElement('li');
            li.textContent = `${par.amigo} → ${par.sorteado}`;
            resultadoList.appendChild(li);
        });

        resultadoContainer.style.display = 'block';
    }

    // Eventos
    addButton.addEventListener('click', adicionarParticipante);
    participantesInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') adicionarParticipante();
    });
    sorteioButton.addEventListener('click', sortearAmigosSecretos);
});