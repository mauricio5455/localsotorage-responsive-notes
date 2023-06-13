





// Coisas simpes que não necessitão de classes

const add = document.querySelector('#add');
const camponota = document.querySelector('#camponota');
const addIcon = document.querySelector('#addicon');
const saveBtn = document.querySelector('#save');
const backBtn = document.querySelector('#back');
const campoTexto = document.querySelector('#nota');
const campoNome = document.querySelector('#nome');

add.addEventListener('click', (e) =>{
    add.classList.add('exp');
    add.style.display = 'block';
    addicon.classList.add('sem');
    camponota.classList.remove('sem');
});

backBtn.addEventListener('click', (e) => {
    add.classList.remove('exp');
    add.style.display = 'flex';
    addIcon.classList.remove('sem');
    camponota.classList.add('sem');
    campoNome.value = '';
    campoTexto.value = '';
    e.stopPropagation();
});

function abrirNotas() {
    
}