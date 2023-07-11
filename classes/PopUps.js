export default class PopUps {
    constructor() {
        this.inAviso = false;
    }

    duplaConfirmação({title = '', subtitle = '', opYes = 'Sim', opNo = 'Não', callBackYes, callbackNo, titleColor = 'rgb(255, 86, 86)'}) {
      
        const divTxt = `<div class='showNote'>
            <span id="warn" style="color: ${titleColor};">${title}</span>
            <span id="warntxt">${subtitle}</span>

            <div id="buttonOp-div">
                <button id="noop" class="buttonOp">${opNo}</button>
                <button id="yesop" class="buttonOp">${opYes}</button>
            </div>`;

        let div = document.createElement('div');
        div.id = 'opt';
        div.classList.add('confbox');
        div.innerHTML = divTxt;

        document.body.appendChild(div);

        document.getElementById('noop').addEventListener('click', () => {
            if(callbackNo) {
                callbackNo();
            }

            return close();
        });

        document.getElementById('yesop').addEventListener('click', () => {
            if(callBackYes) {
                callBackYes();
            }

            return close();
        });

        function close() {
            div.classList.add('sumir');
                    setTimeout(() => {
                    document.body.removeChild(div);
                }, 190)
        }
    }

    aviso({text, color = 'white', time = 3000, border = 'rgb(98, 255, 163)'}) {
        if(this.inAviso) return;
         this.inAviso = true;

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
                this.inAviso = false;
            }, 400);

        }, time);
    }
}