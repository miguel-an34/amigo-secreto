let participantes = [];

function adicionarParticipante() {
    let nome = document.getElementById("nome").value.trim();
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        document.getElementById("nome").value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista-participantes");
    lista.innerHTML = "";
    participantes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes!");
        return;
    }

    let sorteio = [...participantes];
    let resultado = {};

    for (let i = 0; i < participantes.length; i++) {
        let sorteado;
        do {
            sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (sorteado === participantes[i] || resultado[sorteado]);

        resultado[participantes[i]] = sorteado;
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultado do Sorteio:</h3>";
    for (let chave in resultado) {
        resultadoDiv.innerHTML += `<p>${chave} → ${resultado[chave]}</p>`;
    }
    resultadoDiv.style.display = "block";
}