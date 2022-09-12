let menssagem = document.getElementById("menssagemPrincipal");
let btnBuscar = document.getElementById("buscar");



const buscaMenssagem = async() => {
    
    let url ='https://positive-vibes-api.herokuapp.com/quotes';
    let promisse =await fetch(url);
    // let menssagem = await promisse.json();
    console.log(promisse);
}

btnBuscar.addEventListener("click", buscaMenssagem);