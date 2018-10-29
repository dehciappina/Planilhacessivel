let abaPlanilhas = document.querySelector('.planilhas');
let abaSobre = document.querySelector('.sobre_o_site');
let abaContato = document.querySelector('.contato');
let abaParceiros = document.querySelector('.parceiros')

let botaoPlanilhas = document.querySelector('#botaoPlanilhas');
let botaoSobre = document.querySelector('#botaoSobre');
let botaoContato = document.querySelector('.botaoContato');
let botaoParceiros = document.querySelector('#botaoParceiros')

let botoesLaterais = [botaoPlanilhas, botaoSobre, botaoContato];

let bodyTag = document.querySelector('body');

function bodyTop() {
    Body.scrollIntoView()
}

botaoPlanilhas.addEventListener('click', function() {
    abaPlanilhas.classList.add('ativa')
    abaSobre.classList.remove('ativa')
    abaContato.classList.remove('ativa')
    abaParceiros.classList.remove('ativa')
    menuEscondido.classList.remove('descer_menu')
    bodyTag.scrollIntoView({block: "end", behavior: "smooth"})
    mudarPalitos()

})

botaoSobre.addEventListener('click', function() {
    abaSobre.classList.add('ativa')
    abaPlanilhas.classList.remove('ativa')
    abaContato.classList.remove('ativa')
    abaParceiros.classList.remove('ativa')
    menuEscondido.classList.remove('descer_menu')
    bodyTag.scrollIntoView({block: "end", behavior: "smooth"})
    mudarPalitos()
})

botaoContato.addEventListener('click', function() {
    abaContato.classList.add('ativa')
    abaSobre.classList.remove('ativa')
    abaPlanilhas.classList.remove('ativa')
    abaParceiros.classList.remove('ativa')
    menuEscondido.classList.remove('descer_menu')
    bodyTag.scrollIntoView({block: "end", behavior: "smooth"})
    mudarPalitos()
}) 

botaoParceiros.addEventListener('click', function() {
    abaParceiros.classList.add('ativa')
    abaContato.classList.remove('ativa')
    abaSobre.classList.remove('ativa')
    abaPlanilhas.classList.remove('ativa')
    menuEscondido.classList.remove('descer_menu')
    bodyTag.scrollIntoView({block: "end", behavior: "smooth"})
    mudarPalitos()
}) 


// function trocarAbas() {
//     if(botaoPlanilhas) {
//         abaPlanilhas.classList.add('ativa')
//         abaSobre.classList.remove('ativa')
//         abaContato.classList.remove('ativa')
//     }

//     else if(botaoSobre) {
//         abaSobre.classList.add('ativa')
//         abaPlanilhas.classList.remove('ativa')
//         abaContato.classList.remove('ativa')
//     }

//     else if(botaoContato) {
//         abaContato.classList.add('ativa')
//         abaSobre.classList.remove('ativa')
//         abaPlanilhas.classList.remove('ativa')
//     }
// }

let botaoMenuEscondido = document.querySelector('.mobile_top > div');
let menuEscondido = document.querySelector('.menu_lateral > div')

let palitoCima = document.querySelector('#palitoCima')
let palitoMeio = document.querySelector('#palitoMeio')
let palitoBaixo = document.querySelector('#palitoBaixo')

botaoMenuEscondido.addEventListener('click', function() {
    menuEscondido.classList.toggle('descer_menu')
    mudarPalitos()
})

function mudarPalitos() {
    palitoCima.classList.toggle('palitoCimaClicked')
    palitoMeio.classList.toggle('palitoMeioClicked')
    palitoBaixo.classList.toggle('palitoBaixoClicked')
}


// PWA //

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('/sw.js').then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }).catch(function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js', {scope: './'})
        .then(function(registration) {
            console.log('Service Worker Registered', registration)
        })
        .catch(function(err) {
            console.log('Service Worker Failed to Register', err)
        })
  }