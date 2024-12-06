let inpt = document.getElementById('input');
let btn = document.getElementById('btn');

let givenNum = 37;

btn.addEventListener('click',()=>{
    let num = inpt.value;
    compare(num);
})



function compare(num){
    if(num>givenNum){
        alert('Your number is grater then the given nubmer');

    }else if(num<givenNum){
        alert('Your number is smaller then the given nubmer');

    }else{
        alert('You won!');

    }
}