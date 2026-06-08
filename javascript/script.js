document.addEventListener("DOMContentLoaded", function() {
  const bicicletas = document.querySelectorAll(".bicicletas-lista a");
  const modalContainer = document.getElementById("modal-bike");
  const modalImg = document.getElementById("modal-img");
  const modalNome = document.getElementById("modal-nome");
  const modalPreco = document.getElementById("modal-preco");
  const modalDesc = document.getElementById("modal-descricao"); // LINHA NOVA
  const modalVantagens = document.getElementById("modal-vantagens"); // LINHA NOVA
  const btnFechar = document.querySelector(".fechar");

  bicicletas.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      const nome = link.querySelector("h3").innerText;
      const preco = link.querySelector("span").innerText;
      const imagem = link.querySelector("img").src;
      const altImagem = link.querySelector("img").alt;
      const descricao = link.querySelector("p") ? link.querySelector("p").innerText : ""; // LINHA NOVA
      const vantagens = link.querySelectorAll(".bicicleta-vantagens li"); // LINHA NOVA
      
      modalImg.src = imagem;
      modalImg.alt = altImagem;
      modalNome.innerText = nome;
      modalPreco.innerText = preco;
      modalDesc.innerText = descricao; // LINHA NOVA
      
      // LINHAS NOVAS - LIMPA E ADICIONA AS VANTAGENS
      modalVantagens.innerHTML = "";
      vantagens.forEach((item) => {
        modalVantagens.innerHTML += `<li>${item.innerHTML}</li>`;
      });
      
      modalContainer.classList.add("ativo");
      
      console.log("Nome:", nome);
      console.log("Preço:", preco);
      console.log("Imagem:", imagem);
      console.log("Descrição:", descricao);
    });
  });

  function fecharModal(event) {
    if (event.target === this || event.target === btnFechar) {
      modalContainer.classList.remove("ativo");
    }
  }
  modalContainer.addEventListener("click", fecharModal);
  btnFechar.addEventListener("click", fecharModal);
});