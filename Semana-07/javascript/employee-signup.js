window.onload = function () {

    var fullname = document.getElementById('fullName');
    var dni = document.getElementById('dni');
    var birthday = document.getElementById('birthday');
    var tel = document.getElementById('tel');
    var adress = document.getElementById('adress');
    var location = document.getElementById('location');
    var cp = document.getElementById('cp');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmp = document.getElementById('confirmp');

    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var passwordRegex = /^[a-zA-Z0-9]+$/;
    var fullnameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
    var numericRegex = /^[0-9-.]+$/;
    var adressRegex = /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/;
    var locationRegex = /[A-Za-z0-9? ,_-]/;

    fullname.addEventListener('blur', fullnameValidator);

    function fullnameValidator(e) {
        e.preventDefault();

        if (e.target.value.match(fullnameRegex) && e.target.value.length >= 3) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    dni.addEventListener('blur', dniValidator);

    function dniValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length > 7) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    birthday.addEventListener('blur', birthdayValidator);

    function birthdayValidator(e) {
        e.preventDefault();

        if (e.target.value) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    tel.addEventListener('blur', telValidator);

    function telValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length == 10) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    adress.addEventListener('blur', adressValidator);

    function adressValidator(e) {
        e.preventDefault();

        if (e.target.value.match(adressRegex) && e.target.value.length >= 5) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    location.addEventListener('blur', locationValidator);

    function locationValidator(e) {
        e.preventDefault();

        if (e.target.value.match(locationRegex) && e.target.value.length >= 5) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    cp.addEventListener('blur', cpValidator);

    function cpValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length >= 4 && e.target.value.length <= 5) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

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

    confirmp.addEventListener('blur', confirmpValidator);

    function confirmpValidator(e) {
        e.preventDefault();

        if (e.target.value === password.value) {
            e.target.style.borderColor = '#0F0';
        } else {
            e.target.style.borderColor = '#F00';
        }
    }

    fullname.addEventListener('focus', focusEvent);
    dni.addEventListener('focus', focusEvent);
    birthday.addEventListener('focus', focusEvent);
    tel.addEventListener('focus', focusEvent);
    adress.addEventListener('focus', focusEvent);
    location.addEventListener('focus', focusEvent);
    cp.addEventListener('focus', focusEvent);
    email.addEventListener('focus', focusEvent);
    password.addEventListener('focus', focusEvent);
    confirmp.addEventListener('focus', focusEvent);

    function focusEvent(e) {
        e.preventDefault();
        e.target.style.borderColor = '#373867';
    }

    var signup = document.getElementById('signup');
    signup.addEventListener('submit', signupsubmit);

    function signupsubmit(event) {
        event.preventDefault();
        var form = new FormData(signup);
        var formFullName = form.get('fullName');
        var formdni = form.get('dni');
        var formbirthday = form.get('birthday');
        var formtel = form.get('tel');
        var formadress = form.get('adress');
        var formlocation = form.get('location');
        var formcp = form.get('cp');
        var formEmail = form.get('email');
        var formPassword = form.get('password');
        var formconfirmp = form.get('confirmp');

        if (formFullName.match(fullnameRegex) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formconfirmp === formPassword) {
            error.style.display = 'none';
            fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?fullname=${formFullName}`+
            `&dni=${formdni}&birthday=${formbirthday}&tel=${formtel}&adress=${formadress}&location=${formlocation}`+
            `&cp=${formcp}&email=${formEmail}&password=${formPassword}&confirmpassword=${formconfirmp}`)
            .then(response => { console.log(response) }).catch(error => { console.log(error) }) 
            alert('Full Name: ' + formFullName + '\n' + 'DNI: ' + formdni + '\n' + 'Birthday: ' + formbirthday + '\n' +
                'Tel.: ' + formtel + '\n' + 'Adress: ' + formadress + '\n' + 'Location: ' + formlocation + '\n' +
                'C.P.: ' + formcp + '\n' + 'E-mail: ' + formEmail + '\n' + 'Password' + formPassword + '\n' +
                'Confirm Password: ' + formconfirmp);
        } else {
            error.style.display = 'block';
            alert('Wrong Inputs');
        }
    }
}