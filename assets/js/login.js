//login
const container = document.getElementById('container-login');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', function () {
    container.classList.add('active');
});
loginBtn.addEventListener('click', function () {
    container.classList.remove('active');
});