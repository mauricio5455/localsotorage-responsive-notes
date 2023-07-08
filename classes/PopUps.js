export default class PopUps {
    constructor() {
        
    }

    duplaConfirmação(texto, callback) {

    }

    aviso({text, color = 'white', time = 3000, border = 'rgb(98, 255, 163)', }) {
        let divPai = document.createElement('div');
        divPai.classList.add('textoAviso');

        let divFilha = document.createElement('div');
        divFilha.classList.add('textoAvisoFilha');

        let txt = document.createElement('span');
        txt.innerHTML = text;

        txt.style.color = color;

        divFilha.appendChild(txt);
        divPai.appendChild(divFilha);
        divFilha.style.borderColor = border;

        document.body.appendChild(divPai);

        setTimeout(()=>{
            divPai.classList.add('sumirCima');

            setTimeout(()=> {
                document.body.removeChild(divPai);
            }, 400);

        }, time);
    }
}