window.onload = function () {
    var passwordRegex = /^[a-zA-Z0-9]+$/;
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var error = document.getElementById('error');

    email.addEventListener('blur', emailValidator);

    function emailValidator(e) {
        e.preventDefault();

        if (e.target.value.match(emailRegex)) {
            e.target.style.border = '1px solid #0F0';
        } else {
            e.target.style.border = '1px solid #F00';
        }
    }

    password.addEventListener('blur', passwordValidator);

    function passwordValidator(e) {
        e.preventDefault();

        if (e.target.value.match(passwordRegex)) {
            e.target.style.border = '1px solid #0F0';
        } else {
            e.target.style.border = '1px solid #F00';
        }
    }

    email.addEventListener('focus', focusEvent);
    password.addEventListener('focus', focusEvent);

    function focusEvent(e) {
        e.preventDefault();
        e.target.style.border = '1px solid #fff';
    }

    var login = document.getElementById('login');
    login.addEventListener('submit', emailsubmit);

    function emailsubmit(event) {
        event.preventDefault();
        var form = new FormData(login);
        var formEmail = form.get('email');
        var formPassword = form.get('password');

        if (formPassword.match(passwordRegex) && formEmail.match(emailRegex)) {
            error.style.display = 'none';
            password.style.border = '1px solid #0F0';
            email.style.border = '1px solid #0F0';
            alert('Email: ' + formEmail + '\n' + 'Password: ' + formPassword);
        } else {
            password.style.border = '1px solid #f00';
            email.style.border = '1px solid #f00';
            error.style.display = 'block';
            alert('Email or password incorrect');
        }
    }
}