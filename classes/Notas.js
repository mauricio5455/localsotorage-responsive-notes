export default class NoteHandler {
    constructor() {
        this.container = document.querySelector("#main");
        this.notas = localStorage.getItem('notas');
    }

    criarNota(nomeNota, nota) {

        if(this.notas){
            let notas = JSON.parse(this.notas);
            let id = Object.keys(notas).length + 1;

            notas[id] = {
                id: id,
                nome: nomeNota,
                nota: nota,
            }
            
            this.salvar(notas);
        } else {
            localStorage.setItem('notas', '');
            let notas = {
                1: {
                    id: 1,
                    nome: nomeNota,
                    nota: nota,
                }
            }

            this.salvar(notas);
        }
    }

    getSotorage() {
        this.notas = localStorage('notas');
    }

    renderNote(nota = null) {

    }

    teste() {
        alert('Tá pegando');
    }

    salvar(notas) {
        localStorage.setItem('notas', JSON.stringify(notas));
        this.atualizar();
    }

    atualizar() {
        this.notas = localStorage.getItem('notas');
    }
}