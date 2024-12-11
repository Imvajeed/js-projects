let outputW = document.getElementById('output-w');
let outputH = document.getElementById('output-h');

let inputW = document.getElementById('input-W');
let inputH = document.getElementById('input-H');

let rstBtn = document.getElementById('rstBtn');

let weight = 40;
let height = 40;
result();

inputW.addEventListener('mousedown',(event)=>{
    updateW(event)
    inputW.addEventListener('mousemove',updateW);
})

inputW.addEventListener('mouseup',()=>{
    inputW.removeEventListener('mousemove',updateW);
})


inputH.addEventListener('mousedown',(event)=>{
    updateH(event);
    inputH.addEventListener('mousemove',updateH);
})

inputH.addEventListener('mouseup',()=>{
    inputH.removeEventListener('mousemove',updateH);
})

function updateW(event){
    let w = event.target.value;
    weight = w;
    outputW.innerText = `${weight}kg`
    result();
}

function updateH(event){
    let h = event.target.value;
    height = h;
    outputH.innerText = `${h}cm`;
    result();
}



function result(){
    let bmi = Math.floor(weight/((height/100)*(height/100)));
    rstBtn.innerText = `BMI: ${bmi}`;
}