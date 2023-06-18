





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


add.addEventListener('click', (e) =>{
    e.stopImmediatePropagation();
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
    fecharLimpando();
});

noOptBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    opt.classList.add('sem');
})

// ------------- Funções -----------

function fecharLimpando () {
    opt.classList.add('sem');
    add.classList.remove('exp');
    add.style.display = 'flex';
    addIcon.classList.remove('sem');
    camponota.classList.add('sem');
    add.style.cursor = 'pointer';
    campoNome.value = '';
    campoTexto.value = '';
}