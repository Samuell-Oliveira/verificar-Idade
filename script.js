function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.getElementById('imagem')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 20) {
                // Criança
                img.src = 'criançaHomem.jpg'
            } else if (idade < 21) {
                // Jovem
                img.src = 'jovemHomem.jpg'
            } else if (idade < 50) {
                //Adulto
                img.src = 'adultoHomem.jpg'
            } else {
                // Idoso
                img.src = 'idosoHomem.jpg'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 20) {
                // Criança
                img.src = 'criançaMulher.jpg';
            } else if (idade < 21) {
                // Jovem
                img.src = 'jovemMulher.jpg';
            } else if (idade < 50) {
                //Adulto
                img.src = 'adultoMulher.jpg';
            } else {
                // idoso
                img.src = 'idosaMulher.jpg';
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        img.style.display = 'block';
        res.appendChild(img);
    }
}