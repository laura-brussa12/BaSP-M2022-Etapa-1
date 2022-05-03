window.onload = function () {
    var passwordRegex = /^[a-zA-Z0-9]+$/;
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z.]+$/;

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var error = document.getElementById('error');

    var localEmail = localStorage.getItem('email');
    var localPassword = localStorage.getItem('password');

    if (localEmail && localPassword) {
        email.value = localEmail;
        password.value = localPassword;
    }

    email.addEventListener('blur', emailValidator);

    function emailValidator(e) {
        e.preventDefault();

        if (e.target.value.match(emailRegex)) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    password.addEventListener('blur', passwordValidator);

    function passwordValidator(e) {
        e.preventDefault();
        if (e.target.value.match(passwordRegex)) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    email.addEventListener('focus', focusEvent);
    password.addEventListener('focus', focusEvent);

    function focusEvent(e) {
        e.preventDefault();
        e.target.classList.remove("input-error");
        e.target.classList.remove("input-success");
        error.classList.remove("show-error");
    }

    var login = document.getElementById('login');
    login.addEventListener('submit', emailsubmit);

    function emailsubmit(event) {
        event.preventDefault();
        var form = new FormData(login);
        var formEmail = form.get('email');
        var formPassword = form.get('password');

        if (formPassword.match(passwordRegex) && formEmail.match(emailRegex)) {
            password.classList.add("input-success");
            email.classList.add("input-success");
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email="+formEmail+"&password="+formPassword)
                .then(response => response.json())
                .then(data => {
                    alert('The form was successfully sent. Response: ' + JSON.stringify(data))
                    localStorage.setItem('email', formEmail);
                    localStorage.setItem('password', formPassword);
                })
                .catch(error => alert('The form was not successfully sent. Response: ' + JSON.stringify(error)))
            alert('Email: ' + formEmail + '\n' + 'Password: ' + formPassword);
        } else {
            password.classList.add("input-error");
            email.classList.add("input-error");
            error.classList.add("show-error"); 
            alert('Email or password incorrect');
        }
    }
}