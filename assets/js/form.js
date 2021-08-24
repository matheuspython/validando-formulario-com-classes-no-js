class ValidaForm{
  constructor(){
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos(){
    this.formulario.addEventListener('submit', e =>{
      this.handleSubmit(e);
    })
  }
  handleSubmit(e) {
    e.preventDefault();//serve pra n enviar o formulario
    const camposValidos = this.CamposSaoValidos();

  }
  CamposSaoValidos(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text2')){
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;

      if(!campo.value){
        this.criaErro(campo, `campo ${label} não pode estar em branco`)
        valid = false
      }

      if(campo.classList.contains("cpf")) {
        if(!this.validaCPF(campo)) valid = false
      }

      if(campo.classList.contains("usuario")) {
        if(!this.validaUsuario(campo)) valid = false
      }

    }
  }

  validaUsuario(campo){
     const usuario = campo.value;
     let valid = true;
     if(usuario.length > 12 || usuario.length <3) {
       this.criaErro(campo, 'usuario precisa ter entre 3 e 12 digitos')
        valid = false
     }

     if(!usuario.match(/[a-zA-Z0-9]+/g)) {
      this.criaErro(campo, 'nome de usuarios precisa conter letras ou numeros')
       valid = false
    }

    return valid
  }

  validaCPF(campo) {
    console.log(campo)
    const cpf = new ValidaCPF(campo.value)

    if(!cpf.valida()){
      this.criaErro(campo, 'cpf invalido')
      return false
    }
    return true
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text2')
    campo.insertAdjacentElement('afterend', div)//dps do campo
  }

}

const valida = new ValidaForm()