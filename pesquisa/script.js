const produtos = [
    {
        nome:"Grip de controle - pegada fechada",
        preco:35.00,
        avaliacao:5.0,
        vendas: 120,
        popularidade:95,
        imagem: "imagens/Rectangle 41.png"
    },
    {
        nome:"Capa para celular - diversas cores",
        preco:45.00,
        avaliacao:4.9,
        vendas: 150,
        popularidade: 98,
        imagem: "imagens/Rectangle 29.png"
    },
    {
        nome:"Vaso decorativo-decoração minimalista",
        preco:65.00,
        avaliacao:4.8,
        vendas: 80,
        popularidade:75,
        imagem:"imagens/Rectangle 31.png"
    },
    {
        nome:"Peça industrial - material reforçado",
        preco:85.00,
        avaliacao:4.7,
        vendas:155,
        popularidade:85,
        imagem:"imagens/Rectangle 42.png"
    },
    {
        nome:"Dragão miniatura - figura decorativa",
        preco:89.90,
        avaliacao:4.6,
        vendas:20,
        popularidade:45,
        imagem:"imagens/Rectangle agora.png"
    },
    {
        nome:"Arte na parede-decoração moderna",
        preco:110.00,
        avaliacao:4.9,
        vendas:110,
        popularidade:50,
        imagem:"imagens/Rectangle 40.png"
    }
];
const lista = document.getElementById('lista-produtos');
const cards = [... lista.querySelectorAll(".card")];
const cardsComProdutos = cards.map((card,indice)=>({
    elemento:card,
    produto:produtos[indice]
}));
const popular = document.getElementById("populares");
const vendidos = document.getElementById("vendidos");
const avaliados = document.getElementById("avaliados");
const ordenar = document.getElementById("ordenar");
function ordenarcards(criterio){
    cardsComProdutos.sort((a, b)=>{
        if (criterio === "nome"){
        return a.produto.nome.localeCompare(b.produto.nome);
    }
    if(criterio === "preco"){
        return a.produto.preco - b.produto.preco;
    }
    return b.produto[criterio] - a.produto[criterio];
});
    cardsComProdutos.forEach(item =>{
         lista.appendChild(item.elemento);
    });
};
popular.addEventListener("click", function(){
    ordenarcards("popularidade");
});
vendidos.addEventListener("click", function(){
    ordenarcards("vendas");
});
avaliados.addEventListener("click", function(){
    ordenarcards("avaliacao");
});
ordenar.addEventListener("change",function(){
    ordenarcards(ordenar.value);
});