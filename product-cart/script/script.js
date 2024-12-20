let container = document.getElementById('cardContainer');
let count = document.getElementById('count');
let cartImg = document.getElementById('cart-i');
let uiP = document.getElementById('productUi')
let uiC = document.getElementById('myCartUi')
let containerCart = document.getElementById('myCartContainer');
let dp_i = document.getElementById('dp-i');
let logOutBtn = document.getElementById('logOutBtn'); 

let url = 'https://dummyjson.com/products';
let dataProm = fetchData(url);
let myCartArray = [];

updateCartCount();

async function fetchData(url){
    let prom = fetch(url);
    return await prom;
}

dataProm.then((data)=>{
    return data.json();
}).then((dataJ)=>{
    dataJ.products.forEach(element => {
        updateProductUI(element);
    });
})

function updateProductUI(obj){
    let card = document.createElement('div');
    card.setAttribute('class','card');
    card.innerHTML = `
    <div class="left-c">
                <img src="${obj.thumbnail}" alt="" class="img-c">
            </div>
            <div class="right-c">
                <div class="right-c-child">
                    <h3>
                        ${obj.title}</h3>
                        <p>$${obj.price}</p>
                </div>
                <div class="right-c-child">
                    <p>${obj.description}</p>
                </div>
                <div class="right-c-child">
                    <button class="btn" name='btn'>Add to cart</button>
                </div>
            </div>
    `;

    card.addEventListener('click',(event)=>{
        if(event.target.name == 'btn'){
            myCartArray.push(obj);
            updateCartCount();
        }
    })

    container.appendChild(card);
}

function updateCartCount(){
    let length = myCartArray.length;
    count.innerText = length;
}


cartImg.addEventListener('click',()=>{
    uiC.classList.toggle('hide');
    uiP.classList.toggle('hide');
    callCart();
})

function callCart(){
    containerCart.innerHTML = '';
    myCartArray.forEach(element => {
        updateCartUI(element);
    });
}


function updateCartUI(obj){
    let card = document.createElement('div');
    card.setAttribute('class','card');
    card.innerHTML = `
    <div class="left-c">
                <img src="${obj.thumbnail}" alt="" class="img-c">
            </div>
            <div class="right-c">
                <div class="right-c-child">
                    <h3>
                        ${obj.title}</h3>
                        <p>$${obj.price}</p>
                </div>
                <div class="right-c-child">
                    <p>${obj.description}</p>
                </div>
                <div class="right-c-child">
                    <button class="btn" name='btn'>Remove from cart</button>
                </div>
            </div>
    `;
    card.addEventListener('click',(event)=>{
        if(event.target.name == 'btn'){
            myCartArray.splice(myCartArray.indexOf(obj),1);
            callCart();
            updateCartCount();
        }
    })

    containerCart.appendChild(card);
}
isAuth();

function isAuth(){
    let cookie = sessionStorage.getItem('Cookies');
   if(cookie!=null){
    console.log(cookie);
    verifyUser(cookie);
   }else{
    location.href = 'login.html';
   }
}


function verifyUser(cookie){
    let user = 'Bearer '+cookie;
    let user_prom=getUser(user);

    user_prom.then((user)=>{
        if(user.status != 200){
            throw '500';
        }
        return user.json();
    }).then((data)=>{
        console.log(data);
    }).catch((e)=>{
        location.href = 'login.html';
    })
}


function getUser(cookie){
    let url = 'https://dummyjson.com/auth/me';
    let prom = fetch(url,{
        method : 'GET',
        headers :{
            'Authorization' : cookie
        }
    })

    return prom;
}

logOutBtn.addEventListener('click',()=>{
    sessionStorage.setItem('Cookies','logout');
    location.href = 'login.html';
})

dp_i.addEventListener('click',()=>{
    location.href = 'profile.html';
})