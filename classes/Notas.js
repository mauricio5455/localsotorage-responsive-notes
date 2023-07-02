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
            let ns = JSON.parse(localStorage.getItem('notas'));

            for(let n in ns){
                this.container.insertBefore(this.gerarNota(ns[n]), add.nextSibling);
            }
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
        divNota.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            this.criarNotaAberta(e.currentTarget.id);
        });

        return(divNota);
    }

    criarNotaAberta(id) {
        // Cria o elemento <div> principal
        var divPrincipal = document.createElement("div");
        divPrincipal.className = "notaberta";

        // Cria o elemento <div> interna
        var divInterna = document.createElement("div");
        divInterna.className = "notabertadiv showNote";

        // Cria o elemento <div> para o nome da nota aberta
        var divNomeNota = document.createElement("div");
        divNomeNota.className = "nomenotaberta";

        // Cria o elemento <input> para o nome da nota aberta
        var inputNomeNota = document.createElement("input");
        inputNomeNota.id = "namenotaopened";
        inputNomeNota.value = JSON.parse(this.notas)[id].nome;

        // Adiciona o elemento <input> ao elemento <div> do nome da nota aberta
        divNomeNota.appendChild(inputNomeNota);

        // Cria o elemento <div> para a nota aberta
        var divNotaAberta = document.createElement("div");
        divNotaAberta.className = "notanotaberta";

        // Cria o elemento <textarea> para a nota aberta
        var textareaNotaAberta = document.createElement("textarea");
        textareaNotaAberta.id = "notaopened";
        textareaNotaAberta.value = JSON.parse(this.notas)[id].nota;

        // Adiciona o elemento <textarea> ao elemento <div> da nota aberta
        divNotaAberta.appendChild(textareaNotaAberta);

        // Cria o elemento <div> para os botões
        var divBotoes = document.createElement("div");
        divBotoes.className = "btnota";

        // Cria o botão "Voltar"
        var btnVoltar = document.createElement("button");
        btnVoltar.id = "backnote";
        btnVoltar.className = "notebtn";
        btnVoltar.textContent = "Voltar";

        // Cria o botão "Salvar"
        var btnSalvar = document.createElement("button");
        btnSalvar.id = "sabenote";
        btnSalvar.className = "notebtn sem";
        btnSalvar.textContent = "Salvar";

        // Adiciona os botões ao elemento <div> dos botões
        divBotoes.appendChild(btnVoltar);
        divBotoes.appendChild(btnSalvar);

        // Adiciona os elementos criados à hierarquia correta
        divInterna.appendChild(divNomeNota);
        divInterna.appendChild(divNotaAberta);
        divInterna.appendChild(divBotoes);
        divPrincipal.appendChild(divInterna);

        // Funções e eventos
        divPrincipal.addEventListener('click', (e) => {
            sumirNota();
        });

        divInterna.addEventListener('click', (e)=> {
            e.stopImmediatePropagation();
        });

        btnVoltar.addEventListener('click', (e)=> {
            e.stopPropagation();
            sumirNota();
        });

       function sumirNota() {
            divInterna.classList.add('sumirCima');
            
            setTimeout(() => {
                divPrincipal.classList.add('sumir');
            }, 200);

            setTimeout(() => {
                document.body.removeChild(divPrincipal);
            }, 350);
        }

        // Adiciona o elemento principal ao documento HTML
        document.body.appendChild(divPrincipal);


    }
}