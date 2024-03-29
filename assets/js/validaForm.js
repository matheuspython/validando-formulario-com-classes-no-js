const campos = [ 
  document.querySelector('.nome'),
  document.querySelector('.sobrenome'),
  document.querySelector('.cpf'),
  document.querySelector('.usuario'),
  document.querySelector('.senha'),
  document.querySelector('.repetir-senha'),
  document.querySelector('.btn')
]

class ValidaForm{
  constructor(nome, sobrenome, cpf, usuario, senha, RSsenha, button) {
    this.nome = nome;
    this.sobrenome = sobrenome,
    this.cpf = cpf;
    this.usuario = usuario;
    this.senha = senha;
    this.RSsenha = RSsenha
    this.button = button
  }
  valida(){
    this.button.addEventListener('click', () => {
      this.validaVazio()
      this.validaPorRange(this.usuario,3,12, 'usuario')
      this.validaCPF()
      this.validaPorRange(this.senha,6,12, 'senha')
    })
  }
  validaVazio(){
    if(
      this.nome.value == ''||
      this.sobrenome.value == '' ||
      this.cpf.value == '' ||
      this.usuario.value == '' ||
      this.senha == '' || 
      this.RSsenha == ''
    ) {
      const inputs = document.querySelectorAll('input')
      inputs.forEach(value => {
        if(value.value === ''){
          value.placeholder = 'prencha este campo'
        }
      })  
    
    }
  }
  validaPorRange(usuarioOuSenha, range1, range2,nome){
    let text = ' invalida'
    if(nome === 'usuario') text = ' invalido'

    if(usuarioOuSenha.value.length<range1) {
     const campo = document.querySelector(`.label-${nome}`)
     campo.classList.add('error-text')
     campo.innerHTML += text   
    }
    if(usuarioOuSenha.value.length>range2) {
      const campo = document.querySelector(`.label-${nome}`)
      campo.classList.add('error-text')
      campo.innerHTML += text
    }
  }
  validaCPF(){
    const cpf = new ValidaCPF(this.cpf.value);
    if (!cpf.valida()) {
      const cpfLabel = document.querySelector('.label-cpf')
      cpfLabel.classList.add('error-text')
      cpfLabel.innerHTML += ' invalido' 
    }
}

}

const form = new ValidaForm(campos[0],campos[1],campos[2],campos[3],campos[4],campos[5],campos[6])
form.valida()
console.log(form)
