const form = document.querySelector("#formInput");
const submit_btn = form.querySelector('#submit-btn');

// data
let InputName = document.querySelector('#username');
let InputEmail = form.querySelector('#userEmail');
let Inputpassword = form.querySelector('#userPassword');



const handleForm = (event) => {

    event.preventDefault()

    const newUser = {
        'name': InputName.value,
        'email': InputEmail.value,
        'password': Inputpassword.value
    }

    console.log(newUser)

    InputName.value = ''
    InputEmail.value = ''
    Inputpassword.value = ''
}


const validateName = ({ target }) => {

    if(target.value.length > 5){
        submit_btn.removeAttribute('disabled')
        return;
    }

    submit_btn.setAttribute('disabled', '')
}


InputName.addEventListener('input', validateName)
form.addEventListener('submit', handleForm)