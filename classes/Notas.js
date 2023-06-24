export default class NoteHandler {
    constructor() {
        this.container = document.querySelector("#main");
        this.notas = localStorage.getItem('notas');
    }

    criarNota(nomeNota, nota) {
        if(localStorage.getItem('notas') == null || localStorage.getItem('notas') == undefined) localStorage.clear();

        if(this.notas){
            let notas = JSON.parse(this.notas);
            let id = Object.keys(notas).length + 1;

            notas[id] = {
                id: id,
                nome: nomeNota,
                nota: nota,
            }
            
            this.salvar(id, notas);
        } else {
            localStorage.setItem('notas', '');
            let notas = {
                1: {
                    id: 1,
                    nome: nomeNota,
                    nota: nota,
                }
            }
            this.salvar(1, notas);
        }
    }

    getSotorage() {
        this.notas = localStorage('notas');
    }

    renderNote(nota = null) {
        if(!nota) {
            
        } else {
            this.container.insertBefore(this.gerarNota(nota), add.nextSibling);
        }
    }

    teste() {
        alert('Tá pegando');
    }

    salvar(id, notas) {
        localStorage.setItem('notas', JSON.stringify(notas));
        this.atualizar();
        this.renderNote(notas[id]);
    }

    atualizar() {
        this.notas = localStorage.getItem('notas');
    }

    gerarNota(nota) {
        let divNota = document.createElement('div');
        divNota.classList.add('nota');
        divNota.id = nota.id;

        let divTitulo = document.createElement('div');
        divTitulo.classList.add('titulonota');

        let titulo = document.createElement('h1');
        titulo.textContent = nota.nome ? nota.nome : '<Sem nome 🚫>';

        divTitulo.appendChild(titulo);

        let divContent = document.createElement('div');
        divContent.classList.add('content');

        let paragrafo = document.createElement('p');
        paragrafo.textContent = nota.nota ? nota.nota : '<Sem nota 🚫>';

        divContent.appendChild(paragrafo);

        divNota.appendChild(divTitulo);
        divNota.appendChild(divContent);

        return(divNota);
    }
}