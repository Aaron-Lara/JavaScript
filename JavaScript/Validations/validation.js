const myform = document.getElementById('myform');

inputs = document.querySelectorAll('#myform input');

const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/
    //name: /^[a-zA-Z0-9\_\-]{4,16}$/
    //password: /^[a-zA-Z0-9\_\-]{4,16}$/
    //email: /^[a-zA-Z0-9\_\-]{4,16}$/
    //tel: /^[a-zA-Z0-9\_\-]{4,16}$/
                //RegEX
}
const validateForm = (e) => {
    switch (e.target.name) {
        case "user":
            if (expressions.user.test(e.target.value)) {
                document.getElementById("user_group").classList.remove('form_group-incorrect');
                document.getElementById("user_group").classList.add('form_group-correct');
            }
            else{
                document.getElementById("user_group").classList.add('form_group-incorrect');
                document.getElementById("user_group").classList.remove('form_group-correct');
            }
            break;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', validateForm)
});