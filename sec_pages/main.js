let normal_v_button = document.querySelector('.normal_vers')
let normal_v_window = document.querySelector('.sec2');
const freeDownload = document.querySelector('.free_download')
const freeDownloadText = document.querySelector('.free_download h2')

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