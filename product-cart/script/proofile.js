let f_name = document.getElementById('firstName');
let dp_i = document.getElementById('dp-img');
let email = document.getElementById('email-p');
let logOutBtn = document.getElementById('logOutBtn');

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
        dp_i.src = data.image
        f_name.innerText = data.firstName;
        email.innerText = data.email;
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