const myform = document.getElementById('myform');
const inputs = document.querySelectorAll('#myform input');
const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^.{4,12}$/,
    tel: /^[0-9]{7,14}$/
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "user":
            if (e.target.value === "") {
                document.getElementById("user_group").classList.remove('form_group-incorrect');
                document.getElementById("user_group").classList.remove('form_group-correct');
            } else if (expressions.user.test(e.target.value)) {
                document.getElementById("user_group").classList.remove('form_group-incorrect');
                document.getElementById("user_group").classList.add('form_group-correct');
            } else {
                document.getElementById("user_group").classList.add('form_group-incorrect');
                document.getElementById("user_group").classList.remove('form_group-correct');
            }
            break;
        case "name":
            if (e.target.value === "") {
                document.getElementById("name_group").classList.remove('form_group-incorrect');
                document.getElementById("name_group").classList.remove('form_group-correct');
            }
            else if (expressions.name.test(e.target.value)) {
                document.getElementById("name_group").classList.add('form_group-correct');
                document.getElementById("name_group").classList.remove('form_group-incorrect');
            } else {
                document.getElementById("name_group").classList.remove('form_group-correct');
                document.getElementById("name_group").classList.add('form_group-incorrect');
            }
            break;
        case "email":
            if (e.target.value === "") {
                document.getElementById("email_group").classList.remove('form_group-incorrect');
                document.getElementById("email_group").classList.remove('form_group-correct');
            } else if (expressions.email.test(e.target.value)) {
                document.getElementById("email_group").classList.remove('form_group-incorrect');
                document.getElementById("email_group").classList.add('form_group-correct');
            } else {
                document.getElementById("email_group").classList.add('form_group-incorrect');
                document.getElementById("email_group").classList.remove('form_group-correct');
            }
            break;
        case "password":
            if (expressions.password.test(e.target.value)) {
                document.getElementById("password_group").classList.remove('form_group-incorrect');
                document.getElementById("password_group").classList.add('form_group-correct');
            } else if (e.target.value === "") {
                document.getElementById("password_group").classList.remove('form_group-incorrect');
                document.getElementById("password_group").classList.remove('form_group-correct');
            } else {
                document.getElementById("password_group").classList.add('form_group-incorrect');
                document.getElementById("password_group").classList.remove('form_group-correct');
            }
            break;
        case "confirm_password":
            const password = document.getElementById("password").value;
            const confirm_password = e.target.value;
            if (confirm_password === "") {
                document.getElementById("confirm_password_group").classList.remove('form_group-incorrect');
                document.getElementById("confirm_password_group").classList.remove('form_group-correct');
            } else if (password === confirm_password) {
                document.getElementById("confirm_password_group").classList.remove('form_group-incorrect');
                document.getElementById("confirm_password_group").classList.add('form_group-correct');
            } else {
                document.getElementById("confirm_password_group").classList.add('form_group-incorrect');
                document.getElementById("confirm_password_group").classList.remove('form_group-correct');
            }
            break;
        case "tel":
            if (expressions.tel.test(e.target.value)) {
                document.getElementById("tel_group").classList.remove('form_group-incorrect');
                document.getElementById("tel_group").classList.add('form_group-correct');
            } else if (e.target.value === "") {
                document.getElementById("tel_group").classList.remove('form_group-incorrect');
                document.getElementById("tel_group").classList.remove('form_group-correct');
            } else {
                document.getElementById("tel_group").classList.add('form_group-incorrect');
                document.getElementById("tel_group").classList.remove('form_group-correct');
            }
            break;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});
