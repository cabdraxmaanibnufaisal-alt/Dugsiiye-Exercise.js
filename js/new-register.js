const username = document.getElementById('username');
const password = document.getElementById('password');

const registerForm = document.getElementById('registerForm').addEventListener('submit',(e)=>{
e.preventDefault();
const user = {
    username:username.value,
    password:password.value,
}
const users = JSON.parse(localStorage.getItem('users')) || [];
users.push (user)
localStorage.setItem('users',JSON.stringify(user));
})
