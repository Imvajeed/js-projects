let countChild = document.getElementById("countChild");

let btn = document.getElementById("clickBtn");
let btn2 = document.getElementById('clickBtnneg');
let count = 0;

btn.addEventListener('click',()=>{
    count++;
    countChild.innerHTML = `<h1>Count: ${count} </h1>`;
})

btn2.addEventListener('click',()=>{
    count--;
    countChild.innerHTML = `<h1>Count: ${count} </h1>`;
})