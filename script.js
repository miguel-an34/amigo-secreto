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

    // Embaralha a lista para evitar sorteios previsíveis
    sorteio = embaralharArray(sorteio);

    for (let i = 0; i < participantes.length; i++) {
        let amigo;
        if (i === participantes.length - 1) {
            amigo = sorteio[0]; // Último participante pega o primeiro
        } else {
            amigo = sorteio[i + 1];
        }
        resultado[participantes[i]] = amigo;
    }

    exibirResultado(resultado);
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function exibirResultado(resultado) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultado do Sorteio:</h3>";
    
    for (let chave in resultado) {
        resultadoDiv.innerHTML += `<p>${chave} → ${resultado[chave]}</p>`;
    }
    
    resultadoDiv.style.display = "block";
}