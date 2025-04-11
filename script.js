let altura = window.innerHeight
let largura = window.innerWidth
let posX = 0
let posY = 0
let vida = 3
let tempo = 60
let dificuldade = 2000

const timer = document.querySelector('#tempo')
timer.textContent = `Tempo: ${tempo}`

window.addEventListener('resize', () => {
    altura = window.innerHeight
    largura = window.innerWidth
})

let criaMosquito = setInterval(function(){
    determinarPosicao()
    criarMosquito()
},2000)

let crono = setInterval(function(){
    tempo--

    if(tempo <= 0){
        clearInterval(crono)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    timer.textContent = `Tempo: ${tempo}`

},1000)



function determinarPosicao(){
    posX = Math.floor(Math.random() * altura) - 90
    posY = Math.floor(Math.random() * largura) - 90

    posX = posX < 0? 0 : posX
    posY = posY > altura - 90 ? 0 : posY
}


function criarMosquito(){
    if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()
        document.querySelector(`#v${vida}`).src = "imagens/coracao_vazio.png"
        vida--
    }

    if(vida <= 0){
        window.location.href = 'game_over.html'
        return
    }
    
    const mosquito = document.createElement('img')
    mosquito.id = 'mosquito'
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoMosquito()
    mosquito.style.transform = `scaleX(${ladoImagem()})`
    mosquito.style.left = `${posX}px`
    mosquito.style.top = `${posY}px`

    document.body.appendChild(mosquito)

    mosquito.addEventListener('click', function(){
        this.remove()
    })
}

function tamanhoMosquito(){
    let tamanho = Math.floor(Math.random() * 3) + 1
    let nome = `mosquito${tamanho}`
    return nome
}

function ladoImagem(){
    let n = Math.floor(Math.random() * 2) + 1
    let lado = Math.pow(-1, n)
    return lado
}