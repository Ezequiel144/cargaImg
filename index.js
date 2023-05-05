/* const nota = document.getElementById("textNotas").value; */
const boton = document.querySelector(".formSend");
const imgFile = document.getElementById("imgNotas");
const formulario = document.querySelector(".formulario");
const sec_2 = document.querySelector(".sec2");


function iniciar(){
    /* boton.addEventListener("click",proceso) */
    imgFile.addEventListener("change",procesoImg)
}

/* function proceso(){
    imgFile.addEventListener("change",procesoImg)
} */

function procesoImg(e){
    let arch = e.target.files;
    /* console.log(arch); */
    let archList = arch[0];
    const lector = new FileReader(File);
    lector.readAsDataURL(archList);
    /* console.log(archList); */    
    lector.addEventListener("load",mostrar);
}
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    formulario.reset();

})

/* function captura(){

} */

function mostrar(e){
    const resultado = e.target.result;
    /* console.log(resultado); */
    boton.addEventListener("click",()=>{
        sec_2.innerHTML = " ";
        const article = document.createElement("article");
        article.className = "card";
        article.innerHTML = `<img class="card-img" width="100%" src="${resultado}" alt="img">`
        /* <p class="card-text2">${nota}</p> */;
        console.log(article);
        sec_2.append(article);
    })

}



window.addEventListener("load",iniciar)
