// Captura o formulário
const form = document.getElementById("formContato");

// Adiciona um ouvinte de evento para capturar o envio do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que a página seja recarregada ao enviar o formulário

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const mensagem = document.getElementById("mensagem").value;

    // Exibe as informações preenchidas
    document.getElementById("resultadoNome").textContent = nome;
    document.getElementById("resultadoEmail").textContent = email;
    document.getElementById("resultadoWhatsapp").textContent = whatsapp;
    document.getElementById("resultadoMensagem").textContent = mensagem;

    // Exibe a div de resultado
    document.getElementById("resultado").style.display = "block";

    // Limpa os campos do formulário após envio
    form.reset();
});
