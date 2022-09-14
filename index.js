



let btnBuscar = document.getElementById("buscar");



const buscaMenssagem = async () => {

    let url = "https://www.abibliadigital.com.br/api/verses/nvi/sl/random";
    let promisse = await fetch(url);
    let menssagem = await promisse.json();
    let menssagemPrincipal = document.getElementById("menssagemPrincipal").innerHTML = menssagem.text;
}

btnBuscar.addEventListener("click", buscaMenssagem);