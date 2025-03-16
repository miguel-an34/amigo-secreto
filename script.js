let participantes = [];

function adicionarNome() {
    let nome = document.getElementById('nome').value.trim();
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        document.getElementById('nome').value = '';
    } else {
        alert('Nome inválido ou já adicionado!');
    }
}

function atualizarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    participantes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (participantes.length < 2) {
        alert('Adicione pelo menos 2 participantes!');
        return;
    }
    
    let sorteio = [...participantes];
    let resultado = {};

    for (let i = 0; i < participantes.length; i++) {
        let disponiveis = sorteio.filter(n => n !== participantes[i]);
        if (disponiveis.length === 0) {
            return alert('Erro ao sortear, tente novamente!');
        }
        let escolhido = disponiveis[Math.floor(Math.random() * disponiveis.length)];
        resultado[participantes[i]] = escolhido;
        sorteio.splice(sorteio.indexOf(escolhido), 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    let div = document.getElementById('resultado');
    div.innerHTML = '<h2>Resultado do Sorteio</h2>';
    for (let [amigo, sorteado] of Object.entries(resultado)) {
        div.innerHTML += `<p>${amigo} → ${sorteado}</p>`;
    }
}
