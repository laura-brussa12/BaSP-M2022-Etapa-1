window.onload = function () {

    var name = document.getElementById('name');
    var lastname = document.getElementById('lastname');
    var dni = document.getElementById('dni');
    var birthday = document.getElementById('birthday');
    var tel = document.getElementById('tel');
    var adress = document.getElementById('adress');
    var location = document.getElementById('location');
    var cp = document.getElementById('cp');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmp = document.getElementById('confirmp');

    var localName = localStorage.getItem('name');
    var localLastName = localStorage.getItem('lastName');
    var localDni = localStorage.getItem('dni');
    var localDob = localStorage.getItem('dob');
    var localPhone = localStorage.getItem('phone');
    var localAddress = localStorage.getItem('address');
    var localCity = localStorage.getItem('city');
    var localZip = localStorage.getItem('zip');
    var localEmail = localStorage.getItem('email');
    var localPassword = localStorage.getItem('password');
    var localCPassword = localStorage.getItem('confirmPassword');

    if (localName && localLastName && localDni && localDob && localPhone && localAddress && localCity &&
        localZip && localEmail && localPassword && localCPassword) {
            name.value = localName;
            lastname.value = localLastName;
            dni.value = localDni;
            birthday.value = localDob;
            tel.value = localPhone;
            adress.value = localAddress;
            location.value = localCity;
            cp.value = localZip;
            email.value = localEmail;
            password.value = localPassword;
            confirmp.value = localCPassword;
    }
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z.]+$/;
    var passwordRegex = /^[a-zA-Z0-9]+$/;
    var numericRegex = /^[0-9-.]+$/;
    var adressRegex = /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/;
    var locationRegex = /[A-Za-z0-9? ,_-]/;
    var lettersRegex = /^[a-zA-Z]+$/;

    name.addEventListener('blur', nameValidator);

    function nameValidator(e) {
        e.preventDefault();

        if (e.target.value.match(lettersRegex) && e.target.value.length > 3) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    lastname.addEventListener('blur', lastnameValidator);

    function lastnameValidator(e) {
        e.preventDefault();

        if (e.target.value.match(lettersRegex) && e.target.value.length > 3) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    dni.addEventListener('blur', dniValidator);

    function dniValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length > 7) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    birthday.addEventListener('blur', birthdayValidator);

    function birthdayValidator(e) {
        e.preventDefault();

        if (e.target.value) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    tel.addEventListener('blur', telValidator);

    function telValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length == 10) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    adress.addEventListener('blur', adressValidator);

    function adressValidator(e) {
        e.preventDefault();

        if (e.target.value.match(adressRegex) && e.target.value.length >= 5) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    location.addEventListener('blur', locationValidator);

    function locationValidator(e) {
        e.preventDefault();

        if (e.target.value.match(locationRegex) && e.target.value.length > 3) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    cp.addEventListener('blur', cpValidator);

    function cpValidator(e) {
        e.preventDefault();

        if (e.target.value.match(numericRegex) && e.target.value.length >= 4 && e.target.value.length <= 5) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
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

        if (e.target.value.match(passwordRegex) && e.target.value.length >= 8) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    confirmp.addEventListener('blur', confirmpValidator);

    function confirmpValidator(e) {
        e.preventDefault();

        if (e.target.value === password.value && e.target.value.length >= 8) {
            e.target.classList.add("input-success");
        } else {
            e.target.classList.add("input-error");
        }
    }

    name.addEventListener('focus', focusEvent);
    lastname.addEventListener('focus', focusEvent);
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
        e.target.classList.remove("input-error");
        e.target.classList.remove("input-success");
        error.classList.add("hide-error");
    }

    var signup = document.getElementById('signup');
    signup.addEventListener('submit', signupsubmit);

    function signupsubmit(event) {
        event.preventDefault();
        var form = new FormData(signup);
        var formname = form.get('name');
        var formlastname = form.get('lastname');
        var formdni = form.get('dni');
        var formbirthday = form.get('birthday');
        var formtel = form.get('tel');
        var formadress = form.get('adress');
        var formlocation = form.get('location');
        var formcp = form.get('cp');
        var formEmail = form.get('email');
        var formPassword = form.get('password');
        var formconfirmp = form.get('confirmp');

        var newDateArray = formbirthday.split('-');
        var newDate = `${newDateArray[1]}/${newDateArray[2]}/${newDateArray[0]}`;

        if (formname.match(lettersRegex) && formlastname.match(lettersRegex) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formconfirmp === formPassword) {
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup?name="+formname+"&lastName="+formlastname+
                "dni="+formdni+"dob="+newDate+"phone="+formtel+"address="+formadress+"city="+formlocation+
                "zip="+formcp+"email="+formEmail+"password="+formPassword+"confirmpassword="+formconfirmp)
                .then(response => response.json())
                .then(data => {
                    alert('The form was successfully sent. Response: ' + JSON.stringify(data))
                    localStorage.setItem('name', formname);
                    localStorage.setItem('lastName', formlastname);
                    localStorage.setItem('dni', formdni);
                    localStorage.setItem('dob', formbirthday);
                    localStorage.setItem('phone', formtel);
                    localStorage.setItem('address', formadress);
                    localStorage.setItem('city', formlocation);
                    localStorage.setItem('zip', formcp);
                    localStorage.setItem('email', formEmail);
                    localStorage.setItem('password', formPassword);
                    localStorage.setItem('confirmPassword', formconfirmp);
                })
                .catch(error => alert('The form was not successfully sent. Response: ' + JSON.stringify(error)))

            alert('Name: ' + formname + '\n' + 'Last Name: ' + formlastname + '\n' + 'DNI: ' + formdni + '\n' + 'Birthday: ' + formbirthday + '\n' +
                'Tel.: ' + formtel + '\n' + 'Adress: ' + formadress + '\n' + 'Location: ' + formlocation + '\n' +
                'C.P.: ' + formcp + '\n' + 'E-mail: ' + formEmail + '\n' + 'Password' + formPassword + '\n' +
                'Confirm Password: ' + formconfirmp);
        } else {
            error.classList.remove("hide-error");
            alert('Wrong Inputs');
        }
    }
}