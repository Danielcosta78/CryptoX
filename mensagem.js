document.addEventListener("DOMContentLoaded", function () {
    let mensagem = document.createElement("div");
    mensagem.textContent = "Esta mensagem está sempre visível!";
    mensagem.style.position = "fixed";
    mensagem.style.bottom = "10px";
    mensagem.style.right = "10px";
    mensagem.style.backgroundColor = "#ffcc00";
    mensagem.style.padding = "10px 20px";
    mensagem.style.borderRadius = "5px";
    mensagem.style.fontWeight = "bold";
    mensagem.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    
    document.body.appendChild(mensagem);
});
