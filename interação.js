function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.src = '/imagens/menino.png'
            }else if (idade < 21){
                //jovem
                img.src = '/imagens/rapaz.png'
            }else if (idade < 50){
                //adulto
                img.src = '/imagens/adulto.png'
            }else {
                //idoso
                img.src = '/imagens/idoso.png'
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.src = '/imagens/menina.png'
            } else if (idade < 21){
                //jovem
                img.src = '/imagens/moça.png'
            }else if (idade < 50){
                //adulta
                img.src = '/imagens/adulta.png'
            }else {
                //idosa
                img.src = '/imagens/idosa.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}