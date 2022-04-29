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
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    password.addEventListener('blur', passwordValidator);

    function passwordValidator(e) {
        e.preventDefault();
        if (e.target.value.match(passwordRegex)) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    email.addEventListener('focus', focusEvent);
    password.addEventListener('focus', focusEvent);

    function focusEvent(e) {
        e.preventDefault();
        e.target.style.borderColor = '#373867';
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
            password.style.borderColor = '#0F0';
            email.style.borderColor = '#0F0';
            alert('Email: ' + formEmail + '\n' + 'Password: ' + formPassword);
        } else {
            password.style.borderColor = '#f00';
            email.style.borderColor = '#f00';
            error.style.display = 'block';
            alert('Email or password incorrect');
        }
    }
}