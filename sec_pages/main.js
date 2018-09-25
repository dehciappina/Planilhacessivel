let normal_v_button = document.querySelector('.normal_vers')
let normal_v_window = document.querySelector('.sec2');

function goToNormalDownload() {
    normal_v_window.scrollIntoView({block: "start", behavior: "smooth"})
    normal_v_button.innerHTML = "Baixando..."
    setTimeout(function() {
        normal_v_button.innerHTML = "Download Gratuito"
    },1200)
}

normal_v_button.addEventListener('click', goToNormalDownload)