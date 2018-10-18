let normal_v_button = document.querySelector('.normal_vers')
let normal_v_window = document.querySelector('.sec2');

const freeDownload = document.querySelector('.free_download')
const freeDownloadText = document.querySelector('.free_download h2')
const preTitle = document.querySelector('#pre_title') 
const detailsButton = document.querySelector('#details') 
const detailsButton2 = document.querySelector('#details2')
const backToMainPage = document.querySelector('#back_main_page') 

// COMPONENTIZAÇÃO DE TEXTOS
freeDownloadText.innerHTML = "Download Gratuito";
preTitle.innerHTML = "VOCÊ ESTÁ PRESTES A BAIXAR A PLANILHA:";
detailsButton.innerHTML = "Detalhes do Programa";
detailsButton2.innerHTML = "Detalhes";
backToMainPage.innerHTML = "Página inicial";

function goToInfo() {
    normal_v_window.scrollIntoView({block: "start", behavior: "smooth"})
}

const completeVers = document.querySelector('.complete_vers')
const completeVersSection = document.querySelector('.complete_vers > section')

function gatilhoVersaoCompleta() {
    completeVers.classList.add("triggered_complete_vers");
    completeVersSection.classList.add('triggered_complete_vers_section')

    setTimeout(function() {
        completeVers.classList.remove("triggered_complete_vers");
        completeVersSection.classList.remove('triggered_complete_vers_section')
    }, 3000)
}

normal_v_button.addEventListener('click', goToInfo)

freeDownload.addEventListener('click', function() {
    freeDownloadText.innerHTML = "Baixando..."
    setTimeout(function() {
        freeDownloadText.innerHTML = "Download Gratuito"
        gatilhoVersaoCompleta()
    },1200)
})


const frontImg = document.querySelector('.front_img')

frontImg.insertAdjacentHTML(`afterend`, `<a target="_blank" href=${YtLink} class="tutorial_call"><svg enable-background="new 0 0 200 76.4" version="1.1" viewBox="0 0 200 76.4" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <style type="text/css"> .st0{opacity:0.4;} .st1{opacity:0.25;fill:#FFFFFF;} .st2{fill:#FFFFFF;} </style> <switch> <foreignObject width="1" height="1" requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/"> </foreignObject> <g> <path class="st0" d="m139.5 4.4h-94.1c-18.6 0-33.7 15.1-33.7 33.7s15.1 33.8 33.7 33.8h94.1s-6.1-14.9-6.1-33.8c0.1-18.8 6.1-33.7 6.1-33.7z"/> <path class="st1" d="m139.5 71.9h15.1c18.6 0 33.7-15.1 33.7-33.7s-15.1-33.7-33.7-33.7h-15.1s-6.1 14.9-6.1 33.8 6.1 33.6 6.1 33.6z"/> <path class="st2 play" d="m151.6 48.3v-20.2c0-1.2 1.3-2 2.3-1.4l18 10.1c1.1 0.6 1.1 2.1 0 2.7l-18 10.1c-1 0.7-2.3-0.1-2.3-1.3z"/> <path class="st2" d="m44 30.6h-5l-1 3h-2.3l4.8-12.8h2l4.9 12.8h-2.3l-1.1-3zm-4.3-1.8h3.7l-1.9-5.3-1.8 5.3z"/> <path class="st2" d="m55.6 30.3c0-0.6-0.2-1-0.6-1.3s-1.1-0.6-2.1-0.9-1.9-0.7-2.5-1c-1.2-0.7-1.8-1.7-1.8-2.9 0-1 0.4-1.9 1.3-2.6 0.8-0.7 1.9-1 3.3-1 0.9 0 1.7 0.2 2.4 0.5s1.2 0.8 1.6 1.4 0.6 1.3 0.6 2h-2.2c0-0.7-0.2-1.2-0.6-1.6s-1-0.6-1.8-0.6c-0.7 0-1.3 0.2-1.7 0.5s-0.6 0.7-0.6 1.3c0 0.5 0.2 0.9 0.7 1.2 0.4 0.3 1.2 0.6 2.1 0.9s1.8 0.6 2.4 1 1 0.8 1.3 1.3 0.4 1.1 0.4 1.7c0 1.1-0.4 1.9-1.2 2.5s-1.9 0.9-3.3 0.9c-0.9 0-1.8-0.2-2.6-0.5s-1.4-0.8-1.8-1.4-0.6-1.3-0.6-2.1h2.2c0 0.7 0.2 1.3 0.7 1.7s1.2 0.6 2.1 0.6c0.8 0 1.4-0.2 1.7-0.5s0.6-0.6 0.6-1.1z"/> <path class="st2" d="m66.5 30.3c0-0.6-0.2-1-0.6-1.3s-1.1-0.6-2.1-0.9-1.9-0.7-2.5-1c-1.2-0.7-1.8-1.7-1.8-2.9 0-1 0.4-1.9 1.3-2.6 0.8-0.7 1.9-1 3.3-1 0.9 0 1.7 0.2 2.4 0.5s1.2 0.8 1.6 1.4 0.6 1.3 0.6 2h-2.2c0-0.7-0.2-1.2-0.6-1.6s-1-0.6-1.8-0.6c-0.7 0-1.3 0.2-1.7 0.5s-0.6 0.7-0.6 1.3c0 0.5 0.2 0.9 0.7 1.2 0.4 0.3 1.2 0.6 2.1 0.9s1.8 0.6 2.4 1 1 0.8 1.3 1.3 0.4 1.1 0.4 1.7c0 1.1-0.4 1.9-1.2 2.5s-1.9 0.9-3.3 0.9c-0.9 0-1.8-0.2-2.6-0.5s-1.4-0.8-1.8-1.4-0.6-1.3-0.6-2.1h2.2c0 0.7 0.2 1.3 0.7 1.7s1.2 0.6 2.1 0.6c0.8 0 1.4-0.2 1.7-0.5s0.6-0.6 0.6-1.1z"/> <path class="st2" d="M73,33.6h-2.2V20.8H73V33.6z"/> <path class="st2" d="m82.4 30.3c0-0.6-0.2-1-0.6-1.3s-1.1-0.6-2.1-0.9-1.9-0.7-2.5-1c-1.2-0.7-1.8-1.7-1.8-2.9 0-1 0.4-1.9 1.3-2.6 0.8-0.7 1.9-1 3.3-1 0.9 0 1.7 0.2 2.4 0.5s1.2 0.8 1.6 1.4 0.6 1.3 0.6 2h-2.2c0-0.7-0.2-1.2-0.6-1.6s-1-0.6-1.8-0.6c-0.7 0-1.3 0.2-1.7 0.5s-0.6 0.7-0.6 1.3c0 0.5 0.2 0.9 0.7 1.2 0.4 0.3 1.2 0.6 2.1 0.9s1.8 0.6 2.4 1 1 0.8 1.3 1.3 0.4 1.1 0.4 1.7c0 1.1-0.4 1.9-1.2 2.5s-1.9 0.9-3.3 0.9c-0.9 0-1.8-0.2-2.6-0.5s-1.4-0.8-1.8-1.4-0.6-1.3-0.6-2.1h2.2c0 0.7 0.2 1.3 0.7 1.7s1.2 0.6 2.1 0.6c0.8 0 1.4-0.2 1.7-0.5s0.6-0.6 0.6-1.1z"/> <path class="st2" d="m95.9 22.6h-4v11h-2.2v-11h-4v-1.8h10.2v1.8z"/> <path class="st2" d="M99.9,33.6h-2.2V20.8h2.2V33.6z"/> <path class="st2" d="m107.4 28.7h-2.5v4.9h-2.2v-12.8h4.5c1.5 0 2.6 0.3 3.4 1s1.2 1.6 1.2 2.9c0 0.9-0.2 1.6-0.6 2.2s-1 1-1.7 1.3l2.9 5.3v0.1h-2.4l-2.6-4.9zm-2.5-1.8h2.3c0.8 0 1.3-0.2 1.8-0.6 0.4-0.4 0.6-0.9 0.6-1.6s-0.2-1.2-0.6-1.6-1-0.6-1.7-0.6h-2.4v4.4z"/> <path class="st2" d="m46.1 44.6h-4v11h-2.2v-11h-4v-1.8h10.2v1.8z"/> <path class="st2" d="m57.2 42.8v8.6c0 1.4-0.4 2.4-1.3 3.2s-2 1.2-3.5 1.2-2.6-0.4-3.5-1.2-1.3-1.9-1.3-3.3v-8.6h2.2v8.6c0 0.9 0.2 1.5 0.7 2s1.1 0.7 1.9 0.7c1.7 0 2.6-0.9 2.6-2.7v-8.5h2.2z"/> <path class="st2" d="m68.8 44.6h-4v11h-2.2v-11h-4v-1.8h10.2v1.8z"/> <path class="st2" d="m80.5 49.5c0 1.3-0.2 2.4-0.7 3.3s-1 1.7-1.8 2.2-1.7 0.8-2.8 0.8c-1 0-2-0.3-2.8-0.8s-1.4-1.2-1.9-2.2-0.7-2-0.7-3.3v-0.7c0-1.3 0.2-2.4 0.7-3.3s1.1-1.7 1.9-2.2 1.7-0.8 2.8-0.8c1 0 2 0.3 2.8 0.8s1.4 1.2 1.9 2.2 0.7 2 0.7 3.3v0.7zm-2.2-0.6c0-1.4-0.3-2.5-0.8-3.3s-1.3-1.1-2.3-1.1-1.7 0.4-2.3 1.1c-0.5 0.8-0.8 1.8-0.8 3.2v0.7c0 1.4 0.3 2.5 0.8 3.3s1.3 1.2 2.3 1.2 1.7-0.4 2.3-1.1c0.5-0.8 0.8-1.9 0.8-3.3v-0.7z"/> <path class="st2" d="m87.4 50.7h-2.4v4.9h-2.2v-12.8h4.5c1.5 0 2.6 0.3 3.4 1s1.2 1.6 1.2 2.9c0 0.9-0.2 1.6-0.6 2.2s-1 1-1.7 1.3l2.9 5.3v0.1h-2.5l-2.6-4.9zm-2.4-1.8h2.3c0.8 0 1.3-0.2 1.8-0.6s0.6-0.9 0.6-1.6-0.2-1.2-0.6-1.6-1-0.6-1.7-0.6h-2.4v4.4z"/> <path class="st2" d="M96.3,55.6h-2.2V42.8h2.2V55.6z"/> <path class="st2" d="m106.4 52.6h-5l-1 3h-2.3l4.8-12.8h2l4.9 12.8h-2.3l-1.1-3zm-4.3-1.8h3.7l-1.9-5.3-1.8 5.3z"/> <path class="st2" d="m113.5 53.8h5.8v1.8h-8.1v-12.8h2.2v11z"/> </g> </switch> </svg></a>`)