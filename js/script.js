function validarFormulario() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    return true;
}

function enviarFormulario(event) {
    event.preventDefault();
    if (!validarFormulario()) {
        return;
    }
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const mensagem = document.getElementById('mensagem').value;
    const dadosFormulario = {
        nome: nome,
        email: email,
        whatsapp: whatsapp,
        mensagem: mensagem
    };
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
    window.location.href = 'resultado.html';
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formContato').addEventListener('submit', enviarFormulario);
});
