const form = document.querySelector("#form");
const btn_submit = form.querySelector('#submit-btn');

// data
let Input_Name = form.querySelector('#username');
let Input_Email = form.querySelector('#userEmail');
let Input_password = form.querySelector('#userPassword');



class User  {
    constructor(name, email, password){
        this.name = name,
        this.email = email,
        this.password = password
    }
}

const validateName = (name) => {

    if(name.length > 5){
        return true
    }
    return false;
}

const validateEmail = (email) => {

    const emailREGEX = new RegExp(

        //exm: teste@gmail.com
        /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    );

    if(emailREGEX.test(email) === true){
        return true
    }

    return false
}

const validatepassword = (password) => {

    const minLenght = 8
    if(password.length >= minLenght){
        return true;
    }

    return false;
}

const handleForm = (event) => {

    event.preventDefault()

    //validar campo de nome
    if(Input_Name.value === '' || !validateName(Input_Name.value)){
        alert('Erro: por favor preencha o campo de nome')
        return;
    }

    // validar campo de E-mail
    if(Input_Email.value === '' || !validateEmail(Input_Email.value)){
        alert('Erro: por favor preencha o campo de E-mail corretamente')
        return;
    }

    // validar campo de senha
    if(!validatepassword(Input_password.value)){
        alert('Erro: sua senha precisa ter no minimo 8 digitos')
        return;
    }

    
    const newUser = new User(Input_Name.value, Input_Email.value, Input_password.value)
    console.log(newUser)

    Input_Name.value = ''
    Input_Email.value = ''
    Input_password.value = ''

    // form.submit()
}

const listenner = () => {

    if(Input_Name.value != '' && Input_Email.value != '' && Input_password.value != ''){
        btn_submit.removeAttribute('disabled')
        return
    }

    btn_submit.setAttribute('disabled', '')
}


window.addEventListener('input', listenner)
form.addEventListener('submit', handleForm)