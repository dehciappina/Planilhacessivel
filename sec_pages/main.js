let normal_v_button = document.querySelector('.normal_vers')
let normal_v_window = document.querySelector('.sec2');

const freeDownload = document.querySelector('.free_download')
const freeDownloadText = document.querySelector('.free_download h2')
const preTitle = document.querySelector('#pre_title') 
const detailsButton = document.querySelector('#details') 
const backToMainPage = document.querySelector('#back_main_page') 

// COMPONENTIZAÇÃO DE TEXTOS
freeDownloadText.innerHTML = "Download Gratuito";
preTitle.innerHTML = "VOCÊ ESTÁ PRESTES A BAIXAR A PLANILHA DE";
detailsButton.innerHTML = "Detalhes do Programa";
backToMainPage.innerHTML = "Página inicial";

function goToInfo() {
    normal_v_window.scrollIntoView({block: "start", behavior: "smooth"})
}

normal_v_button.addEventListener('click', goToInfo)

freeDownload.addEventListener('click', function() {
    freeDownloadText.innerHTML = "Baixando..."
    setTimeout(function() {
        freeDownloadText.innerHTML = "Download Gratuito"
    },1200)
})