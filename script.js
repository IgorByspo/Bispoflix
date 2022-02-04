// Colar o link da img no input
// Transformar esse link em uma img na div listaFilmes

onload = function(){

    let listaFilmesSalva = localStorage.getItem("listaFilmes");

    console.log(listaFilmesSalva);

    let listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmesSalva;
}

function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;

    if(filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")){
        listarFilmeNaTela(filmeFavorito);
    }
    else{
        console.error("Endereço de imagem inválido");
    }

    document.getElementById("filme").value = "" // Limpar o input;

    // localStorage.clear();

}

function listarFilmeNaTela(filmeFavorito){
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoDivListaFilme = document.getElementById("listaFilmes");

    elementoDivListaFilme.innerHTML += elementoFilmeFavorito;

    salvarFilme();
}

// Função salvarFilme = pegar a div que o filme está e salvar;

// Criar variavel div
// Salvar essa variavel

function salvarFilme(){

    let listaFilmes = document.getElementById("listaFilmes");

    console.log(listaFilmes);

    localStorage.setItem("listaFilmes", listaFilmes.outerHTML);
}

