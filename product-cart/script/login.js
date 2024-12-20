let u_name = document.getElementById('username');
let u_pass = document.getElementById('password');
let submitBtn = document.getElementById('submit');



submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let user = u_name.value;
    let pass = u_pass.value;
    console.log(user, pass);

    let userProm = authUser(user, pass);
    verifyUser(userProm);

})


function authUser(user, pass) {
    let url = 'https://dummyjson.com/auth/login';
    let prom = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user,
            password: pass,
            expiresInMins: 30
        })
    })
    return prom;
}

function verifyUser(obj) {
    obj.then((user) => {
        if(user.status!=200){
            throw '400';
        }
        return user.json();
    }).then((userData)=>{
        sessionStorage.setItem('Cookies',userData.accessToken);
        location.href = 'index.html';
    }).catch((e)=>{
        alert("Invalid user or password");
    })
}