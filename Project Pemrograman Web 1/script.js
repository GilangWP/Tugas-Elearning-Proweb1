const registerForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');
const registerPopup = document.getElementById('registerPopup');

        const registerPopupClose = document.getElementById('registerPopupClose');
        const loginSuccessPopup = document.getElementById('loginSuccessPopup');
        const loginSuccessPopupOk = document.getElementById('loginSuccessPopupOk');
        const homePopup = document.getElementById('homePopup');
        const homePopupOk = document.getElementById('homePopupOk');

        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            registerPopup.style.display = 'block';
        });

      

javascript
        registerLink.addEventListener('click', function (e) {
            e.preventDefault();
            registerPopup.style.display = 'none';
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });

        registerPopupClose.addEventListener('click', function () {
            registerPopup.style.display = 'none';
        });

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            loginSuccessPopup.style.display = 'block';
        });

        loginSuccessPopupOk.addEventListener('click', function () {
            loginSuccessPopup.style.display = 'none';
            loginForm.style.display = 'none';
            homePopup.style.display = 'block';
        });

        homePopupOk.addEventListener('click', function () {
            homePopup.style.display = 'none';
            // Redirect to home.html using window.location.href
            window.location.href = 'home.html';
        });