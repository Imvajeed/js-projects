let pressBox = document.getElementById("press");
let releseBoox = document.getElementById('relese');

const btnOn = document.getElementById('btnTurnOn');
const btnOff = document.getElementById('btnTurnOff');

btnOn.addEventListener('click',()=>{
    document.addEventListener('keydown',pressOutput);
    document.addEventListener('keyup',releseOutput);
})

btnOff.addEventListener('click',()=>{
    document.removeEventListener('keydown',pressOutput);
    document.removeEventListener('keyup',releseOutput);
    pressBox.innerHTML='';
    releseBoox.innerHTML ='';
})



function pressOutput(event){
    let key = event.key;
    pressBox.innerHTML = `<h3> key ${key} is pressed</h3>`;
}

function releseOutput(event){
    let key = event.key;
    releseBoox.innerHTML = `<h3> key ${key} is relesed</h3>`;
}