import NoteHandler from './classes/Notas.js';
import PopUps from './classes/PopUps.js';


const Notas = new NoteHandler();
const PopUp = new PopUps();

Notas.renderNote();




// Coisas simpes que não necessitão de classes

const add = document.querySelector('#add');
const camponota = document.querySelector('#camponota');
const addIcon = document.querySelector('#addicon');
const saveBtn = document.querySelector('#save');
const backBtn = document.querySelector('#back');
const campoTexto = document.querySelector('#nota');
const campoNome = document.querySelector('#nome');
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
        PopUp.duplaConfirmação({title: 'Tem certeza?', subtitle: 'A nota será perdida!', callBackYes: fecharLimpando});
    } else {
        fecharLimpando();
    }
});

saveBtn.addEventListener('click', (e) => {

   if(campoNome.value == '' && campoTexto.value == '') {
         return PopUp.aviso({text: 'A nota deve ter nome ou conteúdo.', border: 'red'});
   } else if(campoNome.value.length > 50) {
         return PopUp.aviso({text: 'O nome da nota não pode exeder 20 caracteres!', border: 'red'});
   } else {
        e.stopImmediatePropagation();
        let nomeNota = campoNome.value;
        let nota = campoTexto.value;
        Notas.criarNota(nomeNota, nota);
        PopUp.aviso({text: 'Nota Criada!', border: 'green'})
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
