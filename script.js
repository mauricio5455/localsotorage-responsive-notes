import NoteHandler from './classes/Notas.js';

const Notas = new NoteHandler();

Notas.renderNote();




// Coisas simpes que não necessitão de classes

const add = document.querySelector('#add');
const camponota = document.querySelector('#camponota');
const addIcon = document.querySelector('#addicon');
const saveBtn = document.querySelector('#save');
const backBtn = document.querySelector('#back');
const campoTexto = document.querySelector('#nota');
const campoNome = document.querySelector('#nome');
const opView = document.querySelector('#opt')
const noOptBtn = document.querySelector('#noop')
const yesOptBtn = document.querySelector('#yesop')
const main = document.querySelector('#main');


add.addEventListener('click', (e) =>{
    e.stopImmediatePropagation();
    main.classList.add('mainexp');
    add.classList.add('exp');
    add.style.display = 'block';
    addicon.classList.add('sem');
    camponota.classList.remove('sem');
    add.style.cursor = 'default';
});

backBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if(campoNome.value.length > 5 && campoTexto.value.length > 10) {
        opt.classList.remove('sem');
    } else {
        fecharLimpando();
    }
});

yesOptBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sumir(opt, 200);
    fecharLimpando();
});

noOptBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    sumir(opt, 200);
})

saveBtn.addEventListener('click', (e) => {

   if(campoNome.value == '' && campoTexto.value == '') {
         return alert('A nota deve ter nome ou conteúdo.');
   } else if(campoNome.value.length > 50) {
         return alert('O nome da nota não pode exeder 20 caracteres!');
   } else {
        e.stopImmediatePropagation();
        let nomeNota = campoNome.value;
        let nota = campoTexto.value;
        Notas.criarNota(nomeNota, nota);
        fecharLimpando();
   }
});

// ------------- Funções -----------

function fecharLimpando () {
    add.classList.remove('exp');
    add.style.display = 'flex';
    addIcon.classList.remove('sem');
    camponota.classList.add('sem');
    add.style.cursor = 'pointer';
    campoNome.value = '';
    campoTexto.value = '';

    setTimeout(() => {
        main.classList.remove('mainexp');
    }, 300);
}

function sumir(elemento, tempo) {
    opt.classList.add('sumir');
    setTimeout(() => {
        elemento.classList.add('sem');
        elemento.classList.remove('sumir');
    }, tempo)
}