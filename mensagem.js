document.addEventListener("DOMContentLoaded", function () {
    let mensagem = document.createElement("div");
    mensagem.style.position = "fixed";
    mensagem.style.bottom = "10px";
    mensagem.style.right = "10px";
    mensagem.style.backgroundColor = "#ffcc00";
    mensagem.style.padding = "10px 20px";
    mensagem.style.borderRadius = "5px";
    mensagem.style.fontWeight = "bold";
    mensagem.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    mensagem.style.zIndex = "1000"; // Garante que fique sobre outros elementos

    // Criando o link dentro da mensagem
    let link = document.createElement("a");
    link.href = "https://cryptoxio.vercel.app/";
    link.textContent = "This is just the test website, visit the full site here";
    link.style.color = "#000";
    link.style.textDecoration = "none";

    // Adicionando o link ao elemento da mensagem
    mensagem.appendChild(link);

    // Adicionando a mensagem ao corpo da página
    document.body.appendChild(mensagem);
});
